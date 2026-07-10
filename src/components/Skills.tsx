import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies" subtitle="Technologies I work with">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.skills.map((cat) => (
          <div
            key={cat.category}
            className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
          >
            <h3 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wider">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
