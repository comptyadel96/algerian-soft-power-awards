"use client";

import React from "react";

export default function PressePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-6 text-[#b91c1c]">Presse</h1>
        <p className="text-gray-400 mb-6">
          Contenu factice pour la page presse. Communiqués, dossiers de presse
          et informations de contact seront disponibles ici.
        </p>

        <section className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <article
              key={i}
              className="p-6 bg-white/5 rounded-lg border border-white/5"
            >
              <h3 className="font-bold text-lg mb-2">
                Communiqué de presse #{i + 1}
              </h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ceci
                est un contenu factice pour mise en page.
              </p>
              <div className="mt-4">
                <a href="#" className="text-[#b91c1c] hover:underline">
                  Télécharger
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
