'use client';

import { Navbar } from '@/components/navbar/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/about/AboutSection';
import { CategoriesGrid } from '@/components/categories/CategoriesGrid';
import { ProgrammeSection } from '@/components/programme/ProgrammeSection';
import { GallerySection } from '@/components/gallery/GallerySection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/footer/Footer';
import { Animations } from '@/components/shared/Animations';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoriesGrid />
      <ProgrammeSection />
      
      {/* Partners Section */}
      <section className="py-24 border-y border-white/10 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold tracking-[0.5em] text-gray-500 uppercase mb-16">
            Ils soutiennent l'influence algérienne
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center justify-center h-20 text-2xl font-serif italic border border-white/10">
              Partner I
            </div>
            <div className="flex items-center justify-center h-20 text-2xl font-serif italic border border-white/10">
              Partner II
            </div>
            <div className="flex items-center justify-center h-20 text-2xl font-serif italic border border-white/10">
              Partner III
            </div>
            <div className="flex items-center justify-center h-20 text-2xl font-serif italic border border-white/10">
              Partner IV
            </div>
          </div>
        </div>
      </section>

      <GallerySection />
      <ContactSection />
      <Footer />
      <Animations />
    </div>
  );
}
