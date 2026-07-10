import React from "react";
import { Mail, Github, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black to-[#0099FF]/20 border-t-4 border-[#0099FF]">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        
        <div className="inline-block animate-bounce">
          <div className="w-24 h-24 mx-auto border-4 border-white bg-black flex items-center justify-center relative">
            {/* Simple pixelated mailbox representation */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white" />
            <div className="absolute top-1/4 right-2 w-4 h-8 bg-[#00FF00]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-[#0099FF]" />
            <p className="font-['Press_Start_2P'] text-[8px] text-white absolute bottom-[-20px] w-max left-1/2 -translate-x-1/2">
              M-BOX v1.0
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-['Press_Start_2P'] text-3xl md:text-5xl text-[#00FF00] drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
            FINAL LEVEL
          </h2>
          <p className="font-['VT323'] text-2xl md:text-4xl text-white max-w-2xl mx-auto">
            READY TO TEAM UP? CONNECT YOUR COMMS MODULE AND LET'S BUILD SOMETHING EPIC.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a href="mailto:muhammadkhevin@gmail.com" className="inline-block font-['Press_Start_2P'] text-sm md:text-base uppercase tracking-widest px-8 py-4 bg-black text-[#00FF00] border-4 border-[#00FF00] hover:bg-[#00FF00] hover:text-black transition-all active:translate-y-1">
            SEND COMMS
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <a href="https://linkedin.com/in/muhammad-khevin-utama-987562162" target="_blank" rel="noopener noreferrer" className="text-[#0099FF] hover:text-[#00FF00] transition-colors flex items-center gap-2 font-['VT323'] text-2xl">
            <Mail className="w-6 h-6" /> LinkedIn
          </a>
          <a href="https://github.com/vinutama" target="_blank" rel="noopener noreferrer" className="text-[#0099FF] hover:text-[#00FF00] transition-colors flex items-center gap-2 font-['VT323'] text-2xl">
            <Github className="w-6 h-6" /> GitHub
          </a>
          <a href="tel:+6289508174287" className="text-[#0099FF] hover:text-[#00FF00] transition-colors flex items-center gap-2 font-['VT323'] text-2xl">
            <Phone className="w-6 h-6" /> +62 895-0817-4287
          </a>
        </div>
        
      </div>
    </section>
  );
}
