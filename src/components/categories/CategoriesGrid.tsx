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
import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/i18n";

const ICONS = [
  <Film size={32} key="film" />,
  <Utensils size={32} key="utensils" />,
  <MapPin size={32} key="mappin" />,
  <Radio size={32} key="radio" />,
  <Palette size={32} key="palette" />,
  <Trophy size={32} key="trophy" />,
  <Zap size={32} key="zap" />,
  <Star size={32} key="star" />,
];

const CATEGORIES = [
  { id: 1, titleKey: 0, descKey: 0, isGold: false },
  { id: 2, titleKey: 1, descKey: 1, isGold: false },
  { id: 3, titleKey: 2, descKey: 2, isGold: false },
  { id: 4, titleKey: 3, descKey: 3, isGold: false },
  { id: 5, titleKey: 4, descKey: 4, isGold: false },
  { id: 6, titleKey: 5, descKey: 5, isGold: false },
  { id: 7, titleKey: 6, descKey: 6, isGold: false },
  { id: 8, titleKey: 7, descKey: 7, isGold: true },
];

export const CategoriesGrid = () => {
  const lang = useLocale();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // Get categories from i18n
  const categories = t(lang, "categories.items");
  if (!Array.isArray(categories)) {
    return <div>Error loading categories</div>;
  }

  return (
    <section id="awards" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">
          {t(lang, "categories.title")}{" "}
          {/* <span className="text-[#b91c1c]">
            {t(lang, "categories.excellence")}
          </span> */}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
          {t(lang, "categories.tagline")}
        </p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className={`group relative p-8 border border-white/5 h-80 flex flex-col justify-between transition-all duration-500 hover:border-[#b91c1c] overflow-hidden ${
              cat.isGold
                ? "bg-[#b91c1c]/5 md:col-span-2 lg:col-span-1 border-[#b91c1c]/30"
                : "bg-white/5"
            }`}
            onMouseEnter={() => setActiveCategory(cat.id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {/* Background Glow */}
            <div
              className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[100px] transition-opacity duration-500 ${
                activeCategory === cat.id ? "opacity-40" : "opacity-0"
              } ${cat.isGold ? "bg-yellow-400" : "bg-white"}`}
            ></div>

            <div
              className={`transition-transform duration-500 ${
                activeCategory === cat.id
                  ? "text-[#b91c1c] -translate-y-2"
                  : "text-white/60"
              }`}
            >
              {ICONS[cat.id - 1]}
            </div>

            <div>
              <h3
                className={`text-xl font-bold mb-3 tracking-tight ${
                  cat.isGold ? "text-[#b91c1c]" : "text-white"
                }`}
              >
                {categories[cat.titleKey]?.title}
              </h3>
              <p
                className={`text-sm text-gray-400 leading-relaxed transition-opacity duration-500 ${
                  activeCategory === cat.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {categories[cat.titleKey]?.desc}
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
