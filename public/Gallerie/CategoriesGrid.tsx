"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/i18n";

const CATEGORY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop",
    alt: "Cinéma & Image",
  },
  {
    src: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop",
    alt: "Gastronomie",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    alt: "Tourisme",
  },
  {
    src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=300&fit=crop",
    alt: "Médias & Contenus",
  },
  { src: "/Création.jpeg", alt: "Arts Créatifs" },
  {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    alt: "Sport",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    alt: "Innovation Digitale",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    alt: "Grand Prix",
  },
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

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className={`group relative p-0 border border-white/5 h-80 flex flex-col justify-between transition-all duration-500 hover:border-[#b91c1c] overflow-hidden rounded-lg ${
              cat.isGold
                ? "bg-[#b91c1c]/5 md:col-span-2 lg:col-span-1 border-[#b91c1c]/30"
                : "bg-white/5"
            }`}
            onMouseEnter={() => setActiveCategory(cat.id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={CATEGORY_IMAGES[cat.id - 1].src}
                alt={CATEGORY_IMAGES[cat.id - 1].alt}
                fill
                className={`object-cover group-hover:scale-110 transition-all duration-500 ${
                  activeCategory === cat.id ? "grayscale-0" : "grayscale"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
            </div>

            {/* Background Glow */}
            <div
              className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[100px] transition-opacity duration-500 ${
                activeCategory === cat.id ? "opacity-40" : "opacity-0"
              } ${cat.isGold ? "bg-yellow-400" : "bg-white"}`}
            ></div>

            {/* Content */}
            <div className="flex items-center gap-4 absolute bottom-6 left-6 z-10">
              <div className=" font-serif italic text-3xl text-red-700/50  z-20">
                0{cat.id}
              </div>
              <h3
                className={`text-lg font-bold  tracking-tight transition-colors duration-300 ${
                  cat.isGold ? "text-yellow-400" : "text-white"
                } `}
              >
                {categories[cat.titleKey]?.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
