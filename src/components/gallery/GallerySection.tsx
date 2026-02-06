"use client";

import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/i18n";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const GALLERY_IMAGES = [
  "/Gallerie/Algerian desert ________________.jpeg",
  "/Gallerie/Constantine Algérie algeria photos enregistré par adel Hafsi.jpeg",
  "/Gallerie/Casbah d'Alger_.jpeg",
  "/Gallerie/Ghardaia - Algérie_.jpeg",
  "/Gallerie/Notre Dame d’Afrique.jpeg",
  "/Gallerie/La grande Mosquée de tlemcen.jpeg",
  "/Gallerie/Tadrart, Djanet, Algerian desert.jpeg",
  "/Gallerie/Algerian couscous ________✨.jpeg",
  "/Gallerie/emir Abdelkader Statue ________.jpeg",
  "/Gallerie/Alger.jpeg",
  "/Gallerie/Constantine Algérie.jpeg",
  "/Gallerie/Tlemcen_ The Pearl Of Algeria And A Must Visit Destination In The North Of Africa.jpeg",
  "/Gallerie/Casbah Algiers ________.jpeg",
  "/Gallerie/Bijoux kabyle Algérie algeria.jpeg",
  "/Gallerie/Algiers by night ________.jpeg",
  "/Gallerie/Ali la pointe, Algeria________.jpeg",
  "/Gallerie/Bejaïa - Algeria ________.jpeg",
  "/Gallerie/cap carbon,bejaia, Algeria ________.jpeg",
  "/Gallerie/Cap-carbon Bedjaia  Algérie ________.jpeg",
  "/Gallerie/Couscous Algerien ________.jpeg",
  "/Gallerie/Constantine, Algeria.jpeg",
  "/Gallerie/Constantine, Algérie  source_  prenez ma main et laissez moi vous guider à travers mon Algérie on Facebook_com.jpeg",
  "/Gallerie/emir.jpeg",
  "/Gallerie/Fennec Fox in the Sands.jpeg",
  "/Gallerie/Mahrez.jpeg",
  "/Gallerie/Mosquée Sidi Abderrahmane.jpeg",
  "/Gallerie/Mosquée Sidi Boumediene, Tlemcen.jpeg",
  "/Gallerie/kachawa.jpeg",
  "/Gallerie/Ouargla ________.jpeg",
  "/Gallerie/Sahraa algérien ________.jpeg",
  "/Gallerie/Santa Cruz Oran , Algeria ________✨.jpeg",
  "/Gallerie/Tassili n'Ajjer (2026) - Algeria's Tassili_ Desert Canvas (2026 Expert Guide).jpeg",
  "/Gallerie/Tamanrasset.jpeg",
  "/Gallerie/Tradition chaoui ⵣ________.jpeg",
];

export const GallerySection = () => {
  const lang = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(GALLERY_IMAGES[index]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(GALLERY_IMAGES[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(GALLERY_IMAGES[prevIndex]);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

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

      {/* Gallery Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              onClick={() => handleImageClick(i)}
              className="relative h-64 bg-gray-900 group cursor-pointer overflow-hidden rounded-lg border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold text-[#d4af37]">+</div>
                  <p className="text-xs mt-2 uppercase tracking-wider">
                    Agrandir
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white hover:text-[#d4af37] transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] transition-colors z-50 bg-black/50 rounded-full p-3 hover:bg-black/80"
          >
            ←
          </button>

          <div
            className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery full"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#d4af37] transition-colors z-50 bg-black/50 rounded-full p-3 hover:bg-black/80"
          >
            →
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded">
            {currentIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
};
