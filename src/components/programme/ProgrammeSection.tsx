"use client";

import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/i18n";

export const ProgrammeSection = () => {
  const lang = useLocale();

  const dayProgram = t(lang, "programme.dayProgram");
  if (!Array.isArray(dayProgram)) {
    return <div>Error loading program</div>;
  }

  return (
    <section id="programme" className="py-24 bg-[#111]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#d4af37] italic">
            {t(lang, "programme.title")}
          </h2>
        </div>

        <div className="space-y-6">
          {dayProgram.map((item: any, idx: number) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row gap-6 p-8 border border-[#d4af37]/30 bg-[#d4af37]/5 transition-all duration-300 hover:bg-[#d4af37]/10 hover:border-[#d4af37]/50"
            >
              <div className="min-w-max">
                <div className="text-2xl font-serif font-bold text-[#d4af37]">
                  {item.time}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold uppercase tracking-wide text-white mb-2">
                  {item.title}
                </div>
                {item.desc && item.desc !== item.title && (
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
