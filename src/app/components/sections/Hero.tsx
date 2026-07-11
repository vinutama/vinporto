import React from "react";
import { PixelButton } from "../PixelButton";
import heroImg from "../../../assets/hero.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-4 md:px-8 max-w-6xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col space-y-8 z-10">
          <div className="inline-block bg-[#00FF00] text-black font-['Press_Start_2P'] text-[10px] uppercase px-3 py-1 border-2 border-black w-max mb-4 motion-safe:animate-pulse">
            PLAYER 1 READY
          </div>
          
          <div className="space-y-4">
            <h1 className="font-['Press_Start_2P'] text-white leading-tight">
              <span className="block text-xs sm:text-sm md:text-base text-white">PLAYER 1:</span>
              <span className="text-xl sm:text-4xl md:text-6xl text-[#0099FF]">KHEVIN</span>
            </h1>
            <h2 className="font-['Press_Start_2P'] text-[#00FF00] text-xl md:text-2xl">
              SENIOR SOFTWARE ENGINEER
            </h2>
          </div>

          <p className="font-['VT323'] text-2xl md:text-3xl text-[#C0C0C0] max-w-lg leading-relaxed">
            7+ YEARS ARCHITECTING BACKEND SYSTEMS, REAL-TIME DATA PLATFORMS & AI-NATIVE WORKFLOWS. GO · PYTHON · NODE.JS
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <PixelButton variant="primary" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>START QUEST</PixelButton>
            <PixelButton variant="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>INVENTORY</PixelButton>
          </div>
        </div>

        <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-[#0099FF]/20 border-4 border-[#0099FF] shadow-[0_0_30px_rgba(0,153,255,0.3)] overflow-hidden">
            <img src={heroImg} alt="Muhammad Khevin Utama" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
