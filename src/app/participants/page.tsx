"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const GUESTS = [
  {
    id: 1,
    name: "Zoheir Bouamama",
    image: "/invités/Zoheir-Bouamama-800x502.jpg.jpeg",
    bio: "Acteur clé dans la promotion de la culture et du patrimoine algériens.",
  },

  {
    id: 2,
    name: "Bendouda",
    image: "/invités/bendouda-1.jpg.jpeg",
    bio: "Figure importante du paysage culturel algérien, reconnu pour son engagement.",
  },

  {
    id: 12,
    name: "Fayçal Sahbi",
    image: "/invités/Fayçal Sahbi.jpg",
    bio: "Individu influent et respecté, symbole de l'influence culturelle algérienne.",
  },
  {
    id: 3,
    name: "Hakim Baha",
    image: "/invités/HAKIM_BAHA.jpeg",
    bio: "Figure importante du panorama culturel et social algérien.",
  },

  {
    id: 5,
    name: "Mohamed Bendjebbour",
    image: "/invités/Mohamed-Bendjebbour.jpeg",
    bio: "Expert reconnu dans son domaine, contributeur majeur au rayonnement algérien.",
  },
  {
    id: 6,
    name: "Sofiane Zermani",
    image: "/invités/Sofiane_Zermani_at_2025_Cannes_Photocall_1.jpg.jpeg",
    bio: "Producteur et réalisateur de renom international, porteur de la création algérienne.",
  },
  {
    id: 7,
    name: "Yacine Medkour",
    image: "/invités/yacine medkour.jpeg",
    bio: "Professionnel accomplished dans les secteurs culturels et créatifs.",
  },
  {
    id: 8,
    name: "Tony Kitous",
    image: "/invités/7213-TonyKitous.jpg.jpeg",
    bio: "Entrepreneur et homme d'affaires algérien influent, pionnier dans le secteur technologique.",
  },
  {
    id: 9,
    name: "Beihdja Rahal",
    image: "/invités/573339384_1152428580340203_311716325976914959_n.jpg.jpeg",
    bio: "Personnalité d'exception contribuant au prestige de l'Algerian Soft Power Day.",
  },
  {
    id: 10,
    name: "Guedioura",
    image: "/invités/guedioura-civil-costume-watford.jpeg",
    bio: "Personnalité de renommée internationale représentant les valeurs algériennes.",
  },

  {
    id: 11,
    name: "Sofiane lesage",
    image: "/invités/gFJLmG4C_400x400.jpg.jpeg",
    bio: "Créateur talentueux représentant l'excellence artistique algérienne.",
  },
  {
    id: 4,
    name: "Mehdi Benaissa",
    image: "/invités/mehdi benaissa.jpg.jpeg",
    bio: "Artiste et créateur algérien de talent, ambassadeur de la culture locale.",
  },
];

export default function ParticipantsPage() {
  const [selectedGuest, setSelectedGuest] = useState(null);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 text-[#d4af37]">
            Nos Invités
          </h1>
          <p className="text-gray-400 text-lg">
            Découvrez les personnalités qui enrichiront cette édition de
            l'Algerian Soft Power Day
          </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {GUESTS.map((guest) => (
            <div
              key={guest.id}
              onClick={() => setSelectedGuest(guest)}
              className="group relative overflow-hidden rounded-lg border border-[#d4af37]/30 bg-gradient-to-br from-white/5 to-transparent hover:border-[#d4af37] transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-72 overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src={guest.image}
                  alt={guest.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-black/80 group-hover:bg-black/60 transition-colors">
                <h3 className="font-bold text-lg text-[#d4af37] group-hover:text-white transition-colors">
                  {guest.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Cliquez pour plus d'infos
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Modal/Popup */}
      {selectedGuest && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#d4af37]/50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-[#d4af37]/30 bg-[#0a0a0a]">
              <h2 className="text-3xl font-serif text-[#d4af37]">
                {selectedGuest.name}
              </h2>
              <button
                onClick={() => setSelectedGuest(null)}
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-6">
              <div className="relative w-full h-96 overflow-hidden rounded-lg mb-6 bg-black flex items-center justify-center">
                <Image
                  src={selectedGuest.image}
                  alt={selectedGuest.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#d4af37] mb-3">
                    Biographie
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedGuest.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
