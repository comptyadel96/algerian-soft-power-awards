"use client";

import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/i18n";

const GALLERY_IMAGES = [
  "/Gallerie/Algerian desert ________________.jpeg",
  "/Gallerie/Constantine Algérie algeria photos enregistré par adel Hafsi.jpeg",
  "/Gallerie/Casbah d'Alger_.jpeg",
  "/Gallerie/Ghardaia - Algérie_.jpeg",
  "/Gallerie/Notre Dame d'Afrique.jpeg",
  "/Gallerie/Setif, algeria _. سطيف",
  "/Gallerie/La grande Mosquée de tlemcen.jpeg",
  "/Gallerie/Tadrart, Djanet, Algerian desert.jpeg",
  "/Gallerie/Algerian couscous ________✨.jpeg",
  "/Gallerie/emir Abdelkader Statue ________.jpeg",
];

export const GallerySection = () => {
  const lang = useLocale();

  return (
    <section id="galerie" className="py-32 bg-black overflow-hidden">
      <div className="px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-serif italic mb-4">
          {t(lang, "gallery.title")}{" "}
          <span className="text-[#b91c1c]">Visuel</span>
        </h2>
        <p className="text-gray-400 text-sm">
          {t(lang, "gallery.description")}
        </p>
      </div>

      <div className="flex gap-4 animate-scroll-horizontal">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            className="min-w-[400px] h-[500px] bg-gray-900 group relative overflow-hidden"
          >
            <img
              src={img}
              alt="Event"
              className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[#b91c1c] text-xs font-bold tracking-widest uppercase mb-2 block">
                Edition 2024
              </span>
              <h4 className="text-xl font-bold">Moments d'exception</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
