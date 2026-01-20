"use client";

import React, { useState } from "react";
import {
  Film,
  Utensils,
  MapPin,
  Radio,
  Palette,
  Trophy,
  Zap,
  Star,
} from "lucide-react";

const CATEGORIES = [
  {
    id: 1,
    title: "Cinéma & Image internationale",
    icon: <Film size={32} />,
    desc: "Célébrer le 7ème art qui porte nos récits au-delà des frontières.",
  },
  {
    id: 2,
    title: "Gastronomie & Art de vivre",
    icon: <Utensils size={32} />,
    desc: "Honorer les saveurs et traditions qui font la fierté de notre table.",
  },
  {
    id: 3,
    title: "Tourisme & Destination Branding",
    icon: <MapPin size={32} />,
    desc: "Valoriser l'attractivité et l'hospitalité de la terre algérienne.",
  },
  {
    id: 4,
    title: "Médias, Contenus & Narration",
    icon: <Radio size={32} />,
    desc: "Récompenser ceux qui racontent l'Algérie avec audace et vérité.",
  },
  {
    id: 5,
    title: "Création artistique & Industries Culturelles",
    icon: <Palette size={32} />,
    desc: "L'excellence créative sous toutes ses formes d'expression.",
  },
  {
    id: 6,
    title: "Sport & Image du pays",
    icon: <Trophy size={32} />,
    desc: "Quand la performance athlétique devient un vecteur d'influence mondiale.",
  },
  {
    id: 7,
    title: "Jeunesse, Innovation & Influence digitale",
    icon: <Zap size={32} />,
    desc: "La nouvelle garde qui redéfinit l'influence à l'ère du numérique.",
  },
  {
    id: 8,
    title: "Grand SP Award – Influence de l'année",
    icon: <Star size={32} />,
    desc: "La plus haute distinction pour un rayonnement exceptionnel.",
    gold: true,
  },
];

export const CategoriesGrid = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="awards" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">
          Les Catégories <span className="text-[#d4af37]">D'Excellence</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
          Chaque trophée célèbre un pilier de notre rayonnement.
        </p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className={`group relative p-8 border border-white/5 h-80 flex flex-col justify-between transition-all duration-500 hover:border-[#d4af37] overflow-hidden ${
              cat.gold
                ? "bg-[#d4af37]/5 md:col-span-2 lg:col-span-1 border-[#d4af37]/30"
                : "bg-white/5"
            }`}
            onMouseEnter={() => setActiveCategory(cat.id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {/* Background Glow */}
            <div
              className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[100px] transition-opacity duration-500 ${
                activeCategory === cat.id ? "opacity-40" : "opacity-0"
              } ${cat.gold ? "bg-yellow-400" : "bg-white"}`}
            ></div>

            <div
              className={`transition-transform duration-500 ${
                activeCategory === cat.id
                  ? "text-[#d4af37] -translate-y-2"
                  : "text-white/60"
              }`}
            >
              {cat.icon}
            </div>

            <div>
              <h3
                className={`text-xl font-bold mb-3 tracking-tight ${
                  cat.gold ? "text-[#d4af37]" : "text-white"
                }`}
              >
                {cat.title}
              </h3>
              <p
                className={`text-sm text-gray-400 leading-relaxed transition-opacity duration-500 ${
                  activeCategory === cat.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {cat.desc}
              </p>
            </div>

            <div className="absolute top-0 right-0 p-4 font-serif italic text-4xl text-white/5">
              0{cat.id}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
