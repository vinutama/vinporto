import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

function ProjectCard({
  title,
  subtitle,
  period,
  highlights,
}: {
  title: string;
  subtitle: string;
  period: string;
  highlights: string[];
}) {
  return (
    <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-zinc-100">{title}</h3>
          <p className="text-emerald-400 text-sm">{subtitle}</p>
        </div>
        <span className="text-zinc-500 text-sm shrink-0">{period}</span>
      </div>
      <ul className="space-y-2">
        {highlights.map((h, i) => (
          <li key={i} className="text-zinc-300 text-sm leading-relaxed flex gap-2">
            <span className="text-emerald-500 mt-1 shrink-0">▹</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built">
      {portfolio.professionalProjects.length > 0 && (
        <div className="mb-10">
          <h3 className="text-zinc-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Professional Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.professionalProjects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      )}

      {portfolio.personalProjects.length > 0 && (
        <div>
          <h3 className="text-zinc-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Personal Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.personalProjects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
