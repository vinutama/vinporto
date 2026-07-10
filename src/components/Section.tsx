import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 max-w-6xl mx-auto ${className}`}>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">{title}</h2>
        {subtitle && <p className="mt-2 text-zinc-400 text-lg">{subtitle}</p>}
        <div className="mt-4 h-1 w-16 bg-emerald-500 rounded-full" />
      </div>
      {children}
    </section>
  );
}
