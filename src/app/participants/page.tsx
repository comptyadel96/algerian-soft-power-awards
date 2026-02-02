"use client";

import React from "react";

export default function ParticipantsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif mb-6 text-[#b91c1c]">Participants</h1>
        <p className="text-gray-400 mb-6">
          Liste factice des participants. Cet espace présentera les intervenants,
          artistes et partenaires.
        </p>

        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/5">
              <div className="w-full h-40 bg-white/3 rounded-md mb-4 flex items-center justify-center text-gray-600">Image #{i + 1}</div>
              <div className="font-bold">Participant #{i + 1}</div>
              <div className="text-gray-400 text-sm mt-2">Role / Description factice</div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
