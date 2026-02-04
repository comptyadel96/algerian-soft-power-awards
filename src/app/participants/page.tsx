"use client";

import React from "react";
import Image from "next/image";

const GUESTS = [
  { id: 1, name: "Tony Kitous", image: "/invités/7213-TonyKitous.jpg.jpeg" },
  { id: 2, name: "Bendouda", image: "/invités/bendouda-1.jpg.jpeg" },
  {
    id: 3,
    name: "Guedioura",
    image: "/invités/guedioura-civil-costume-watford.jpeg",
  },
  { id: 4, name: "Mehdi Benaissa", image: "/invités/mehdi benaissa.jpg.jpeg" },
  {
    id: 5,
    name: "Mohamed Bendjebbour",
    image: "/invités/Mohamed-Bendjebbour.jpg.jpeg",
  },
  {
    id: 6,
    name: "Sofiane Zermani",
    image: "/invités/Sofiane_Zermani_at_2025_Cannes_Photocall_1.jpg.jpeg",
  },
  { id: 7, name: "Yacine Medkour", image: "/invités/yacine medkour.jpeg" },
  {
    id: 8,
    name: "Zoheir Bouamama",
    image: "/invités/Zoheir-Bouamama-800x502.jpg.jpeg",
  },
  {
    id: 9,
    name: "Participant Premium",
    image: "/invités/573339384_1152428580340203_311716325976914959_n.jpg.jpeg",
  },
  { id: 10, name: "Guest VIP", image: "/invités/C6d62ofWAAARQAN.jpg.jpeg" },
  {
    id: 11,
    name: "Artiste Algérien",
    image: "/invités/gFJLmG4C_400x400.jpg.jpeg",
  },
];

export default function ParticipantsPage() {
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
              className="group relative overflow-hidden rounded-lg border border-[#d4af37]/30 bg-gradient-to-br from-white/5 to-transparent hover:border-[#b91c1c] transition-all duration-300"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={guest.image}
                  alt={guest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-black/80 group-hover:bg-black/60 transition-colors">
                <h3 className="font-bold text-lg text-[#d4af37] group-hover:text-[#b91c1c] transition-colors">
                  {guest.name}
                </h3>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
