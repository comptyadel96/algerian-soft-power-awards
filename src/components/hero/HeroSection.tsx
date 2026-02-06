"use client";

import React, { useState } from "react";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { t } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";
import { VideoPopup } from "@/components/shared/VideoPopup";

export const HeroSection = () => {
  const lang = useLocale();
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-[url('/soft.gif')] bg-cover bg-center bg-no-repeat opacity-60 grayscale scale-110 animate-slow-zoom"></div>
        <div className="absolute inset-0 z-10 bg-linear-to-t from-[#0a0a0a] via-transparent to-black/60"></div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-6 inline-flex py-1 px-4 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase animate-fade-in items-center gap-2">
            <span className="w-2 h-2 bg-[#d4af37] rounded-full inline-block"></span>
            <span className="font-semibold letter-spacing-wider">
              {t(lang, "hero.subtitle")}
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif font-light mb-6 tracking-tight leading-tight animate-slide-up">
            <span className="text-[#d4af37]">Algerian Soft Power</span>{" "}
            <span className="italic text-[#b91c1c]">Day</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in delay-200">
            {t(lang, "hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in delay-300">
            <button className="px-10 py-5 bg-[#b91c1c] text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2">
              {t(lang, "hero.cta")} <ArrowUpRight size={20} />
            </button>
            <button
              onClick={handleVideoClick}
              className="px-10 py-5 border border-white/20 hover:border-[#b91c1c] transition-all duration-300 font-bold uppercase tracking-widest flex items-center justify-center gap-2 group"
            >
              Voir le teaser{" "}
              <PlayCircle
                size={20}
                className="group-hover:text-[#b91c1c] transition-colors"
              />
            </button>
          </div>
        </div>

        {/* Mask for Google VEO tag */}
        <div className="absolute bottom-6 right-6 z-30 hidden sm:block">
          <div className="w-36 h-20 bg-black/80 rounded-lg backdrop-blur-sm"></div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40">
          <span>{t(lang, "hero.scroll")}</span>
          <div className="w-px h-12 bg-linear-to-b from-red-600 to-transparent"></div>
        </div> */}
      </section>

      {/* Video Popup */}
      <VideoPopup
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        videoSrc="/compressed-video.mp4"
        title="Algerian Soft Power Day - Teaser"
      />
    </>
  );
};
