"use client";

import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/i18n";

export const Footer = () => {
  const lang = useLocale();

  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">
          © 2024 Algerian Soft Power Day. {t(lang, "footer.rights")}
        </div>
        <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-gray-400">
          <a href="/presse" className="hover:text-[#b91c1c]">
            {t(lang, "nav.presse")}
          </a>
          <a href="#" className="hover:text-[#b91c1c]">
            Mentions Légales
          </a>
          <a href="#" className="hover:text-[#b91c1c]">
            Confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
};
