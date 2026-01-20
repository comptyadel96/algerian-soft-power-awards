"use client";

import React from "react";
import { ArrowUpRight, PlayCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale scale-110 animate-slow-zoom"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60"></div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 inline-block py-1 px-4 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase animate-fade-in">
          L'excellence du rayonnement
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-light mb-6 tracking-tight leading-tight animate-slide-up">
          Algerian <span className="italic text-[#d4af37]">Soft Power</span>{" "}
          Awards
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in delay-200">
          Reconnaître et structurer l'influence de l'Algérie à travers le monde.
          Une célébration de notre patrimoine, de notre créativité et de notre
          futur.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in delay-300">
          <button className="px-10 py-5 bg-[#d4af37] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
            Découvrir les Trophées <ArrowUpRight size={20} />
          </button>
          <button className="px-10 py-5 border border-white/20 hover:border-[#d4af37] transition-all duration-300 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            Voir le teaser <PlayCircle size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
      </div>
    </section>
  );
};
