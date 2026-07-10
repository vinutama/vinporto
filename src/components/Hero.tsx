import { portfolio } from "../data/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-4 pt-16 text-center"
    >
      <div className="max-w-3xl">
        <p className="text-emerald-400 font-medium mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-100 mb-2">
          {portfolio.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-500 mb-6">
          {portfolio.role}
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {portfolio.location}. {portfolio.summary.split(".")[0]}.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${portfolio.email}`}
            className="px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href={`https://${portfolio.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-600 text-zinc-200 font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`https://${portfolio.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-600 text-zinc-200 font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-16 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
