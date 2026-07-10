import React from "react";
import { StarfieldBackground } from "./components/StarfieldBackground";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#00FF00] focus:text-black focus:px-4 focus:py-2 focus:font-['Press_Start_2P'] focus:text-xs">
        Skip to content
      </a>
      <StarfieldBackground />
      
      {/* 
        The top-level container doesn't have a background because the 
        StarfieldBackground handles the fixed scrolling stars + scanlines.
      */}
      <div id="main-content" className="relative z-10 space-y-24 pb-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
      
      <div className="relative z-10">
        <Contact />
      </div>
    </main>
  );
}
