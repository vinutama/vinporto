import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
          <h3 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wider">
            Education
          </h3>
          <h4 className="text-lg font-bold text-zinc-100">{portfolio.education.institution}</h4>
          <p className="text-zinc-400 text-sm mb-1">{portfolio.education.degree}</p>
          <p className="text-zinc-500 text-sm">{portfolio.education.period}</p>
        </div>

        {/* Certifications */}
        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
          <h3 className="text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wider">
            Certifications
          </h3>
          <ul className="space-y-3">
            {portfolio.certifications.map((cert, i) => (
              <li key={i}>
                <p className="text-zinc-100 font-medium">{cert.name}</p>
                <p className="text-zinc-500 text-sm">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
