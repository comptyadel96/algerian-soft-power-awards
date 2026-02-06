"use client";

import React from "react";
import Image from "next/image";
import { t } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";
import { ExternalLink } from "lucide-react";

// Sponsors
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

export const SponsorsSection = () => {
  const lang = useLocale();

  // Separate Air Algérie from other sponsors
  const airAlgerie = SPONSORS.find((s) => s.name === "Air Algérie");
  const otherSponsors = SPONSORS.filter((s) => s.name !== "Air Algérie");

  const SponsorCard = ({
    sponsor,
    size = "normal",
  }: {
    sponsor: (typeof SPONSORS)[0];
    size?: "large" | "normal" | "small";
  }) => {
    const sizeClasses = {
      large: "w-full h-96 md:h-[500px]",
      normal: "w-80 h-48",
      small: "w-72 h-40",
    };

    const logoSizes = {
      large: "w-[80rem] h-[40rem]",
      normal: "w-32 h-20",
      small: "w-24 h-16",
    };

    const textSize = {
      large: "text-3xl md:text-4xl",
      normal: "text-2xl",
      small: "text-lg",
    };

    const bgColor =
      sponsor.name === "Venus"
        ? "bg-white"
        : "bg-gradient-to-br from-white/5 to-transparent";
    const textColor = sponsor.name === "Venus" ? "text-black" : "text-white";
    const hoverBg =
      sponsor.name === "Venus"
        ? "hover:from-white/30"
        : "hover:from-[#d4af37]/20";
    const animationClass =
      size === "large" ? "animate-pulse hover:animate-none" : "";

    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative overflow-hidden rounded-lg border border-[#d4af37]/30 ${bgColor} p-8 transition-all duration-500 ${hoverBg} hover:to-white/5 flex flex-col items-center justify-center ${sizeClasses[size]} ${animationClass}`}
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
                className={`font-bold ${textSize[size]} ${textColor} transition-colors duration-300`}
              >
                {sponsor.name}
              </h4>
              <div
                className={`flex items-center justify-center gap-2 ${textColor === "text-black" ? "text-gray-600" : "text-gray-400"} group-hover:text-[#d4af37] transition-colors`}
              >
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

        {/* Air Algérie - Featured Large */}
        {airAlgerie && (
          <div className="mb-24 flex justify-center">
            <SponsorCard sponsor={airAlgerie} size="large" />
          </div>
        )}

        {/* Other Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {otherSponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} size="normal" />
          ))}
        </div>
      </div>
    </section>
  );
};
