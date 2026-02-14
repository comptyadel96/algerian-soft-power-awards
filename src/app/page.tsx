import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AcknowledgmentsSection } from "@/components/acknowledgments/AcknowledgmentsSection";
import { AboutSection } from "@/components/about/AboutSection";
import { CategoriesGrid } from "../../public/Gallerie/CategoriesGrid";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { ContactSection } from "@/components/contact/ContactSection";
import { PartnersSection } from "@/components/partners/PartnersSection";
import { SponsorsSection } from "@/components/sponsors/SponsorsSection";
import { Footer } from "@/components/footer/Footer";
import { Animations } from "@/components/shared/Animations";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8b0d0d] to-[#3f0a0a] text-white font-sans selection:bg-[#b91c1c] selection:text-white">
      <Navbar />
      <HeroSection />
      <AcknowledgmentsSection />
      <AboutSection />
      <CategoriesGrid />
      <ProgrammeSection />

      <PartnersSection />

      <SponsorsSection />

      <GallerySection />
      <ContactSection />
      <Footer />
      <Animations />
    </div>
  );
}
