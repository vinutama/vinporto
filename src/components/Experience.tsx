import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-800" />

        <div className="space-y-12">
          {portfolio.professionalExperience.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-[-4px] md:left-[28px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950" />

              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                    <p className="text-emerald-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-zinc-500 text-sm mt-1 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-zinc-500 text-sm mb-3">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-zinc-300 text-sm leading-relaxed flex gap-2">
                      <span className="text-emerald-500 mt-1 shrink-0">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
