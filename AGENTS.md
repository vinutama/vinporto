# AGENTS.md

## /goal workflow

This project uses **Goal Architecture Loop Engineering** — a persistent
workflow where AI agents drive a task from plan to merged PR, looping until
zero unresolved review threads remain.

### Setup
Run `/init-goal` once after `init.sh` to configure goal source, target branch,
git platform, concurrency, and optional Figma design lookup. Settings are stored in
`.opencode/goal-config.json` (project-level, gitignored). Figma PAT is stored in
`.opencode/figma.env` (gitignored).

Optionally run `/init-skills` to inject curated skills from
[agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills)
into `.opencode/skills/` (project-level, filtered by category and risk).
Use the **recommended** preset to install skills that goal-loop agents look for.
Each agent loads related skills via OpenCode's native `skill` tool
(`skill({ name: "<skill-name>" })`) when they appear in `available_skills`.
Do not use `@mentions` or manually read `.opencode/skills/*/SKILL.md`.
If a skill is absent, the agent proceeds normally. Re-run `/init-skills` with
**recommended** (includes `development`) to install skills like `api-endpoint-builder`.

| Agent | Related skills (when installed) |
|---|---|
| `orchestrator` | `parallel-agents`, `multi-agent-patterns`, `verification-before-completion` |
| `planner` | `brainstorming`, `concise-planning`, `writing-plans`, `architecture` |
| `builder` | `test-driven-development`, `lint-and-validate`, `error-handling-patterns`, `api-endpoint-builder` |
| `builder-expert` | `systematic-debugging`, `test-driven-development`, `lint-and-validate`, `architecture`, `error-handling-patterns`, `api-endpoint-builder` |
| `reviewer` | `code-review-excellence`, `verification-before-completion`, `api-security-best-practices`, `systematic-debugging` |
| `visual-reviewer` | `wcag-audit-patterns`, `frontend-design`, `webapp-testing` |

### How to use
```
/init-goal                              # one-time project setup
/init-skills                            # optional: inject domain skills
/goal <your objective>                  # start a new goal
/goal --list                            # list all goals
/goal --continue [id] [new instruction]  # resume a goal; optional new instruction
```

Continue parsing (no quotes): first token is checked against existing goals via
`goal-git.sh list` — if it matches, that token is the goal id and the rest is
the new instruction; if not, the whole remainder is the instruction for the
active goal.

Goal source (configured via `/init-goal`):
- `prompt` — free-text objective (e.g. `/goal Add health check endpoint`)
- `markdown` — path to a `.md` file (e.g. `/goal docs/feature.md`)
- `jira` — Jira ticket key (e.g. `/goal PROJ-123`) — requires Atlassian MCP

### Agent roles
| Agent | Role | Model |
|---|---|---|
| `orchestrator` | Manages the full loop | opencode-go/deepseek-v4-flash |
| `planner` | Architecture & plans — tags tasks @builder or @builder-expert | opencode-go/qwen3.7-max |
| `builder` | Routine execution (CRUD, UI, refactors, config, tests) | opencode-go/deepseek-v4-flash |
| `builder-expert` | Complex execution (algorithms, concurrency, security, perf) | opencode-go/kimi-k2.7-code |
| `reviewer` | Code review + inline PR comments | opencode-go/deepseek-v4-pro |
| `visual-reviewer` | UI/multimodal review + inline PR comments | opencode-go/mimo-v2.5-pro |

`goal-models.json` is the single source of truth for models and capabilities.
`init.sh` syncs `model` into each agent `.md` and generates `opencode.json`.

| Agent | Multimodal | Input modalities |
|---|---|---|
| `orchestrator` | no | text |
| `planner` | no | text |
| `builder` | no | text |
| `builder-expert` | no | text |
| `reviewer` | no | text |
| `visual-reviewer` | **yes** | text, image |

Only `visual-reviewer` handles screenshots and image attachments. The
orchestrator routes UI/visual review exclusively to that agent.

Model fallbacks are configured in project-level `opencode.json` (plugin +
per-agent `fallback_models`, generated from `.opencode/goal-models.json` by
`init.sh`) and `.opencode/opencode-model-fallback.json`. On rate limit or API
error, the `@razroo/opencode-model-fallback` plugin tries `fallback_models`
in order.

### Delegation
The planner tags every task:
- `@builder` — routine frontend/backend tasks.
- `@builder-expert` — novel algorithms, concurrency, auth/security,
  performance hot paths, complex state machines, distributed coordination.

The orchestrator delegates tasks to the tagged agent automatically.

When `concurrency` > 1 (set via `/init-goal`), the planner groups independent
tasks into concurrency batches. The orchestrator spawns parallel builders in
isolated git worktrees, then merges back into the goal branch.

### All agents operate in /ponytail full mode
- YAGNI first: question whether code needs to exist at all.
- Reuse existing code → stdlib/native → installed deps → then write.
- Shortest working diff; deletion over addition.
- No speculative abstractions, no future-proofing.
- Mark deliberate simplifications with `ponytail:` comments.
- Non-trivial logic leaves one runnable check behind.

### Platform detection
Platform is read from `.opencode/goal-config.json` (set via `/init-goal`).
Fallback: auto-detect from origin remote URL. Override with
`GOAL_PLATFORM=github|gitlab`.

### State and config (project-level only)
- `state.json` — goal history, branch, PR number (gitignored, project root only).
- `.opencode/goal-config.json` — goal source, target branch, platform, concurrency, auto_merge, figma design link (gitignored).
- `.opencode/figma.env` — Figma PAT for MCP (gitignored).
- `opencode.json` — model fallback config + Figma MCP block (project-level, generated by init.sh / init-goal).
- `.worktrees/` — isolated git worktrees for concurrent tasks (gitignored).

Both state and config files are pinned to the project root. Agents read state via
`.opencode/scripts/goal-git.sh state` — never from a global or cwd-relative path.

### Git workflow
NEVER invoke `git`, `gh`, or `glab` directly. ALL git and state operations
MUST go through `.opencode/scripts/goal-git.sh`:
```bash
.opencode/scripts/goal-git.sh start <goal>     # create branch
.opencode/scripts/goal-git.sh continue [id]     # resume goal by branch/text
.opencode/scripts/goal-git.sh list              # list all goals
.opencode/scripts/goal-git.sh state            # print active goal JSON
.opencode/scripts/goal-git.sh stage <file>...  # stage specific files
.opencode/scripts/goal-git.sh commit [msg]       # commit staged changes
.opencode/scripts/goal-git.sh push               # push to origin
.opencode/scripts/goal-git.sh pr                 # create/update PR
.opencode/scripts/goal-git.sh pending            # check unresolved PR threads
.opencode/scripts/goal-git.sh threads            # list review threads as JSON
.opencode/scripts/goal-git.sh comment <path> <line> <body>  # post inline comment
.opencode/scripts/goal-git.sh resolve <thread-id>  # resolve a thread
.opencode/scripts/goal-git.sh merge              # merge PR/MR (when auto_merge enabled)
.opencode/scripts/goal-git.sh state complete     # mark goal completed
.opencode/scripts/goal-git.sh analyze            # npx gitnexus analyze && rtk gain
.opencode/scripts/goal-git.sh status             # working tree status
.opencode/scripts/goal-git.sh restore <file>...  # restore files to HEAD
.opencode/scripts/goal-git.sh diff               # diff against base branch
.opencode/scripts/goal-git.sh config get         # print goal config
.opencode/scripts/goal-git.sh worktree add <slug>    # create isolated worktree
.opencode/scripts/goal-git.sh worktree merge <slug>  # merge worktree into goal branch
.opencode/scripts/goal-git.sh worktree list          # list worktrees
.opencode/scripts/goal-git.sh worktree remove <slug> # discard worktree
.opencode/scripts/goal-git.sh figma setup <token>   # store PAT + enable Figma MCP
.opencode/scripts/goal-git.sh figma design set <url>  # set default design link
.opencode/scripts/goal-git.sh figma status          # show Figma integration status
.opencode/scripts/goal-git.sh figma disable         # disable Figma integration
```

Launch OpenCode with Figma secrets loaded:
```bash
.opencode/scripts/run-opencode.sh
```

### Review loop
- The **orchestrator never edits application source** — it only delegates `@builder` /
  `@builder-expert` to fix review findings.
- Builders must finish with a structured **Handoff** (`status`, `files_staged`, `analyze`, `notes`)
  after staging changes and passing `goal-git.sh analyze`. They do not commit or push.
- After a builder returns `FIXES_COMPLETE`, the orchestrator **immediately** resumes —
  no user input — with ANALYZE → commit → push → **mandatory re-delegate reviewers**.
  Never idle in REVIEW LOOP. Never skip re-review because `pending` is already 0.
- **Only reviewers resolve threads** — the orchestrator must never run
  `goal-git.sh resolve` or `goal-git.sh comment`. Reviewers resolve after confirming fixes.
- After code changes, run `.opencode/scripts/goal-git.sh analyze` (gitnexus + rtk gain).
  If it fails, STOP.
- Reviewers post inline comments on the PR/MR and **must** resolve fixed threads via
  `goal-git.sh resolve <thread-id>` (GraphQL id from `threads`, e.g. `PRRT_...`) with
  **exit 0** before claiming LGTM. **`outdated: true` is not resolved** — only `resolved: true`
  after a successful `resolve` call counts as clean. `goal-git.sh resolve` fails loudly on GraphQL/API errors.
  Each pass ends with a structured **Review report** (`threads_resolved`, `comments_posted`, `remaining_unresolved`, `verdict`).
- For UI/visual goals, the planner requires `@visual-reviewer`; the orchestrator always
  delegates visual review when the plan says so, Figma is enabled, or UI files changed.
- Run `.opencode/scripts/goal-git.sh pending` to check PR threads.
- Loop until exit 0 (zero unresolved threads).
- When `auto_merge` is `false` (default), report "Ready for manual merge" — never claim merged.
- When `auto_merge` is `true`, orchestrator runs `.opencode/scripts/goal-git.sh merge` after
  `pending` exit 0; on conflict, stop and report (do not auto-resolve conflicts).

### Jira goal source
When `goal_source` is `jira`, the Atlassian MCP must be connected in `opencode.json`.
`/init-goal` verifies connectivity before saving. `/goal` re-checks before fetching tickets.

### Figma design lookup (optional)
When enabled via `/init-goal`, agents use Figma MCP (`figma-developer-mcp`) with a PAT in
`.opencode/figma.env` and a default design link in `goal-config.json`:
`figma_design_url`, `figma_file_key`, `figma_node_id`. Planner, builder, and
visual-reviewer consult Figma for UI work. Use `run-opencode.sh` to load secrets.

## Available skills

- `agenttrace-session-audit` — "Audit local AI coding-agent sessions with agenttrace for cost, tool failures, latency, anomalies, health, diffs, and CI gates."
- `ai-loop` — Runs a bounded spec-build-review development loop with explicit scope, stop conditions, and human approval gates for risky or ambiguous work.
- `api-endpoint-builder` — "Builds production-ready REST API endpoints with validation, error handling, authentication, and documentation. Follows best practices for security and scalability."
- `audit-skills` — "Expert security auditor for AI Skills and Bundles. Performs non-intrusive static analysis to identify malicious patterns, data leaks, system stability risks, and obfuscated payloads across Windows, macOS, Linux/Unix, and Mobile (Android/iOS)."
- `ax-extract-workflow` — "Reconstruct workflow behind a past coding-agent artifact using local ax sessions/commits/skills/tool traces. Use when asked how X was built."
- `brooks-lint` — "AI code reviewer grounded in classic software engineering books for catching design smells, coupling issues, and architectural risks."
- `bug-hunter` — "Systematically finds and fixes bugs using proven debugging techniques. Traces from symptoms to root cause, implements fixes, and prevents regression."
- `bumblebee` — "Run Bumblebee supply-chain inventory and exposure scans on macOS/Linux to detect compromised packages, extensions, and MCP host configs."
- `codebase-audit-pre-push` — "Deep audit before GitHub push: removes junk files, dead code, security holes, and optimization issues. Checks every file line-by-line for production readiness."
- `codebase-design` — Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary.
- `container-security-hardening` — Harden Docker/container images and runtime deployments with secure base images,
- `crossframe-public` — "Use when CrossFrame Suite routes explicit Chinese analysis of public issues, platform governance, policy, institutional responsibility, appeals, or compliance evidence."
- `crossframe-review` — "Use when explicit CrossFrame output needs review for reasoning fidelity, evidence boundaries, source anchors, concept drift, article collapse, or repair steps."
- `crossframe-suite` — "Use when the user explicitly invokes CrossFrame Suite for Chinese structural diagnosis workflows across relationships, organizations, public issues, philosophy, research, or essay output."
- `crossframe` — "Use when the user explicitly invokes CrossFrame or 跨尺度结构诊断 for Chinese-canonical structural diagnosis of complex relationships, organizations, institutions, public disputes, or long-term evolution."
- `cyber-audit` — "Run read-only exposure checks for security advisories and write a structured local audit report."
- `diagnosing-bugs` — Diagnosis loop for hard bugs and performance regressions. Use when the user says "diagnose"/"debug this", or reports something broken/throwing/failing/slow.
- `domain-modeling` — Build and sharpen a project's domain model. Use when the user wants to pin down domain terminology or a ubiquitous language, record an architectural decision, or when another skill needs to maintain the domain model.
- `ecl-harness-engineer` — "Create or audit ECL Agent Harness infrastructure: AGENTS.md, change tracking, repository guidance, lint checks, CI gates, and agent handoff docs."
- `effective-agent-skills` — "Author and review high-quality agent skills with triggers, progressive disclosure, and safety notes."
- `fsi-compliance-checker` — "Maps code, architecture, and infrastructure changes to specific control IDs in PCI-DSS v4.0 and MAS TRM (Singapore financial regulator), producing an audit-traceable findings report with per-control remediation."
- `global-chat-agent-discovery` — "Discover and search 18K+ MCP servers and AI agents across 6+ registries using Global Chat's cross-protocol directory and MCP server."
- `goal-loop` — Goal Architecture Loop Engineering — a persistent workflow pattern where an
- `improve-codebase-architecture` — Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.
- `jq` — "Expert jq usage for JSON querying, filtering, transformation, and pipeline integration. Practical patterns for real shell workflows."
- `k6-load-testing` — "Comprehensive k6 load testing skill for API, browser, and scalability testing. Write realistic load scenarios, analyze results, and integrate with CI/CD."
- `lambdatest-agent-skills` — "Production-grade test automation skills for 46 frameworks across E2E, unit, mobile, BDD, visual, and cloud testing in 15+ languages."
- `logic-lens` — "AI-powered Claude Code skill that performs deep code review using formal logic and reasoning frameworks to detect bugs, anti-patterns, and security risks beyond what linters catch."
- `performance-optimizer` — "Identifies and fixes performance bottlenecks in code, databases, and APIs. Measures before and after to prove improvements."
- `pr-merge-champion` — "Optimize pull requests for quick approval and merging by ensuring clean diffs, comprehensive self-reviews, and structured documentation."
- `prototype` — Build a throwaway prototype to flesh out a design — a runnable terminal app for state/business-logic questions, or several radically different UI variations toggleable from one route.
- `python-pptx-generator` — "Generate complete Python scripts that build polished PowerPoint decks with python-pptx and real slide content."
- `rayden-code` — Generate React code with Rayden UI components using correct props, tokens, and premium layout patterns
- `setup-matt-pocock-skills` — Configure this repo for the engineering skills — set up its issue tracker, triage label vocabulary, and domain doc layout. Run once before first use of the other engineering skills.
- `skill-audit` — "Pre-install security scanner for AI agent skills. 7.5% of 14,706 skills are malicious. Audit before you trust."
- `skill-check` — "Validate Claude Code skills against the agentskills specification. Catches structural, semantic, and naming issues before users do."
- `squirrel` — "Full-cycle AI coding skill: plans, builds, tests, lints, fixes bugs, and writes production-grade docs. Auto-detects project state and adapts its 8-phase pipeline."
- `tdd` — Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests.
- `technical-change-tracker` — "Track code changes with structured JSON records, state machine enforcement, and AI session handoff for bot continuity"
- `tmux` — "Expert tmux session, window, and pane management for terminal multiplexing, persistent remote workflows, and shell scripting automation."
- `tree-ring-memory` — "Use Tree Ring Memory for local-first AI-agent memory lifecycle work: recall, evidence, audit, forgetting, and consolidation without transcript dumping."
- `triage` — Move issues and external PRs through a state machine of triage roles — categorise, verify, grill if needed, and write agent-ready briefs.

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **vinporto** (121 symbols, 148 relationships, 4 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> Index stale? Run `node .gitnexus/run.cjs analyze` from the project root — it auto-selects an available runner. No `.gitnexus/run.cjs` yet? `npx gitnexus analyze` (npm 11 crash → `npm i -g gitnexus`; #1939).

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows. For regression review, compare against the default branch: `detect_changes({scope: "compare", base_ref: "main"})`.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `query({search_query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `context({name: "symbolName"})`.
- For security review, `explain({target: "fileOrSymbol"})` lists taint findings (source→sink flows; needs `analyze --pdg`).

## Never Do

- NEVER edit a function, class, or method without first running `impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `rename` which understands the call graph.
- NEVER commit changes without running `detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/vinporto/context` | Codebase overview, check index freshness |
| `gitnexus://repo/vinporto/clusters` | All functional areas |
| `gitnexus://repo/vinporto/processes` | All execution flows |
| `gitnexus://repo/vinporto/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
