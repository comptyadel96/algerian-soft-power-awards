"use client";

import { t } from "@/lib/i18n";
import { useLocale } from "@/lib/useLocale";

export const AboutSection = () => {
  const lang = useLocale();
  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm shadow-2xl">
              <img
                src="/Gallerie/Alger.jpeg"
                alt="Algerian Heritage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border-[15px] border-[#b91c1c] -z-10"></div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-[#d4af37]">
              {t(lang, "about.title")}{" "}
              {/* <span className="italic text-[#d4af37]">L'Inspiration</span> */}
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>{t(lang, "about.heritage")}</p>
              <p className="font-semibold text-black italic">
                {t(lang, "about.description")}
              </p>
              <p>{t(lang, "about.mission")}</p>
            </div>

            {/* <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-4xl font-serif text-[#b91c1c]">08</div>
                <div className="text-xs uppercase tracking-widest font-bold mt-2">
                  {t(lang, "about.categories")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif text-[#b91c1c]">01</div>
                <div className="text-xs uppercase tracking-widest font-bold mt-2">
                  {t(lang, "about.grandPrix")}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
