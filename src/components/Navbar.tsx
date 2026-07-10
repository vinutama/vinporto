import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-emerald-400">
          Khevin
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors ${
                  active === item.id
                    ? "text-emerald-400"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-100 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-sm font-medium ${
                  active === item.id ? "text-emerald-400" : "text-zinc-400"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
