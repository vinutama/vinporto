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
      <StarfieldBackground />
      
      {/* 
        The top-level container doesn't have a background because the 
        StarfieldBackground handles the fixed scrolling stars + scanlines.
      */}
      <div className="relative z-10 space-y-24 pb-24">
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
