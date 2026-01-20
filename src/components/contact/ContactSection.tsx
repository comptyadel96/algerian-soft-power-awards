"use client";

import React, { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-serif mb-8 italic">
                Travaillons <br />
                <span className="text-[#d4af37]">Ensemble</span>
              </h2>
              <p className="text-gray-600 mb-12">
                Devenez partenaire ou contactez-nous pour toute information
                relative aux candidatures.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                    <Instagram size={20} />
                  </div>
                  <span className="font-bold tracking-widest uppercase text-xs">
                    @AlgerianSoftPower
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-bold tracking-widest uppercase text-xs">
                    Algerian Soft Power Awards
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="PRÉNOM"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:border-[#d4af37] outline-none transition-all uppercase text-xs font-bold tracking-widest"
                />
                <input
                  type="text"
                  placeholder="NOM"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:border-[#d4af37] outline-none transition-all uppercase text-xs font-bold tracking-widest"
                />
              </div>
              <input
                type="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:border-[#d4af37] outline-none transition-all uppercase text-xs font-bold tracking-widest"
              />
              <textarea
                placeholder="VOTRE MESSAGE"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:border-[#d4af37] outline-none transition-all uppercase text-xs font-bold tracking-widest resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-6 bg-black text-white font-bold uppercase tracking-[0.3em] hover:bg-[#d4af37] transition-all duration-500"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
