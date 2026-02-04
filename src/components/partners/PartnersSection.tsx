"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/lib/useLocale";

const PARTNER = {
  name: "CREA",
  fullName: "Conseil du Renouveau Économique Algérien",
  url: "https://www.crea.dz",
  description: "Partenaire stratégique officiel",
};

export const PartnersSection = () => {
  const lang = useLocale();

  return (
    <section className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <p className="text-xs font-bold tracking-[0.5em] text-gray-500 uppercase mb-8">
            Partenaire Officiel
          </p>
          <h2 className="text-5xl md:text-7xl font-serif font-light text-center mb-8">
            <span className="text-[#d4af37]">{PARTNER.name}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {PARTNER.fullName}
          </p>
        </div>

        {/* Main Partner Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <a
            href={PARTNER.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 to-transparent p-12 transition-all duration-500 hover:border-[#b91c1c] hover:from-[#b91c1c]/20 block"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#b91c1c] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="relative w-96  mx-auto mb-8">
                <Image
                  src="/CREA.png"
                  alt="CREA Logo"
                  width={484}
                  height={196}
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center gap-3 text-[#d4af37] group-hover:text-[#b91c1c] transition-colors">
                <span className="text-sm font-bold uppercase tracking-wider">
                  Visiter le site
                </span>
                <ExternalLink size={20} />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-1 h-12 bg-gradient-to-t from-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 my-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
          <div className="w-3 h-3 rounded-full bg-[#b91c1c]"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
        </div>

        {/* Supporting text */}
        <p className="text-center text-gray-400 italic max-w-3xl mx-auto">
          En tant que partenaire stratégique officiel, le CREA soutient
          l'initiative Algerian Soft Power Day dans sa mission de mettre en
          avant l'excellence culturelle et l'influence positive de l'Algérie sur
          la scène mondiale.
        </p>
      </div>
    </section>
  );
};
