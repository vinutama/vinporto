import { portfolio } from "../data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="A brief introduction">
      <div className="prose prose-invert max-w-none">
        <p className="text-zinc-300 text-lg leading-relaxed">{portfolio.summary}</p>
      </div>
    </Section>
  );
}
