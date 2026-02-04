"use client";

import React from "react";
import Image from "next/image";
import { t } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";
import { ExternalLink } from "lucide-react";

// Sponsors organized by importance
const SPONSORS = [
  {
    name: "Air Algérie",
    url: "https://www.airalgerie.dz",
    importance: "gold",
    logo: "/air-algerie.png",
  },
  {
    name: "Venus",
    url: "https://www.venus.dz",
    importance: "silver",
    logo: "/venus.png",
  },
  {
    name: "Madar",
    url: "https://www.madar.dz",
    importance: "silver",
    logo: "/madar.png",
  },
  {
    name: "Damac Plus",
    url: "https://www.damacplus.dz",
    importance: "bronze",
    logo: "/damac-plus.png",
  },
  {
    name: "Iris",
    url: "https://www.iris.dz",
    importance: "bronze",
    logo: "/IRIS LOGO 10-2025.png",
  },
  {
    name: "TMV",
    url: "https://www.tmv.dz",
    importance: "bronze",
    logo: "/tmv-cinema.png",
  },
];

// Separate sponsors by importance
const goldSponsors = SPONSORS.filter((s) => s.importance === "gold");
const silverSponsors = SPONSORS.filter((s) => s.importance === "silver");
const bronzeSponsors = SPONSORS.filter((s) => s.importance === "bronze");

export const SponsorsSection = () => {
  const lang = useLocale();

  const SponsorCard = ({
    sponsor,
    size = "normal",
  }: {
    sponsor: (typeof SPONSORS)[0];
    size?: "large" | "normal" | "small";
  }) => {
    const sizeClasses = {
      large: "w-full md:w-full h-72 md:h-96",
      normal: "w-80 h-48",
      small: "w-72 h-40",
    };

    const logoSizes = {
      large: "w-[76rem] h-96",
      normal: "w-32 h-20",
      small: "w-24 h-16",
    };

    const textSize = {
      large: "text-3xl md:text-4xl",
      normal: "text-2xl",
      small: "text-lg",
    };

    const borderColor = {
      gold: "border-[#d4af37]",
      silver: "border-[#c0c0c0]",
      bronze: "border-[#cd7f32]",
    };

    const hoverColor = {
      gold: "hover:from-[#d4af37]/20 group-hover:text-[#d4af37]",
      silver: "hover:from-[#c0c0c0]/20 group-hover:text-[#c0c0c0]",
      bronze: "hover:from-[#cd7f32]/20 group-hover:text-[#cd7f32]",
    };

    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative overflow-hidden rounded-lg border ${borderColor[sponsor.importance]} bg-gradient-to-br from-white/5 to-transparent p-8 transition-all duration-500 ${hoverColor[sponsor.importance]} hover:to-white/5 flex flex-col items-center justify-center ${sizeClasses[size]}`}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[#b91c1c]/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300"></div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-3 flex flex-col items-center justify-center">
          <div className={`relative ${logoSizes[size]} mb-2`}>
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              className="object-contain"
            />
          </div>
          {size !== "large" && (
            <>
              <h4
                className={`font-bold ${textSize[size]} transition-colors duration-300`}
              >
                {sponsor.name}
              </h4>
              <div className="flex items-center justify-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                <span className="text-xs uppercase tracking-wider">
                  Sponsor
                </span>
                <ExternalLink size={size === "large" ? 20 : 16} />
              </div>
            </>
          )}
        </div>
      </a>
    );
  };

  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-serif font-light mb-4 text-white">
            Sponsors <span className="italic text-[#b91c1c]">Officiels</span>
          </h3>
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Partenaires qui soutiennent l'excellence algérienne
          </p>
        </div>

        {/* Gold Sponsors - Featured */}
        {goldSponsors.length > 0 && (
          <div className="mb-20">
            <h4 className="text-center text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-12">
              Sponsor Principal
            </h4>
            <div className="flex justify-center">
              {goldSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  size="large"
                />
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div className="mb-20">
            <h4 className="text-center text-[#c0c0c0] text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Sponsors Argent
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {silverSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  size="normal"
                />
              ))}
            </div>
          </div>
        )}

        {/* Bronze Sponsors */}
        {bronzeSponsors.length > 0 && (
          <div>
            <h4 className="text-center text-[#cd7f32] text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Sponsors Bronze
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {bronzeSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  size="small"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
