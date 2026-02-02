"use client";

import React from "react";
import { ArrowUpRight, PlayCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/soft.gif')] bg-cover bg-center bg-no-repeat opacity-60 grayscale scale-110 animate-slow-zoom"></div>
      <div className="absolute inset-0 z-10 bg-linear-to-t from-[#0a0a0a] via-transparent to-black/60"></div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 inline-flex py-1 px-4 border border-[#b91c1c]/30 rounded-full bg-[#b91c1c]/10 text-[#b91c1c] text-xs font-bold tracking-[0.3em] uppercase animate-fade-in items-center gap-2">
          <span className="w-2 h-2 bg-red-600 rounded-full inline-block"></span>
          <span>L&apos;excellence du rayonnement</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-light mb-6 tracking-tight leading-tight animate-slide-up">
          Algerian <span className="italic text-[#b91c1c]">Soft Power</span>{" "}
          Awards
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in delay-200">
          Reconnaître et structurer l&apos;influence de l&apos;Algérie à travers
          le monde. Une célébration de notre patrimoine, de notre créativité et
          de notre futur.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in delay-300">
          <button className="px-10 py-5 bg-[#b91c1c] text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2">
            Découvrir les Trophées <ArrowUpRight size={20} />
          </button>
          <button className="px-10 py-5 border border-white/20 hover:border-[#b91c1c] transition-all duration-300 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            Voir le teaser <PlayCircle size={20} />
          </button>
        </div>
      </div>

      {/* Mask for Google VEO tag */}
      <div className="absolute bottom-6 right-6 z-30 hidden sm:block">
        <div className="w-36 h-20 bg-black/80 rounded-lg backdrop-blur-sm"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40">
        <span>Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-red-600 to-transparent"></div>
      </div>
    </section>
  );
};
