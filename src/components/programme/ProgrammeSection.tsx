"use client";

import { ChevronRight } from "lucide-react";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/i18n";

export const ProgrammeSection = () => {
  const lang = useLocale();

  const events = t(lang, "programme.events");
  if (!Array.isArray(events)) {
    return <div>Error loading events</div>;
  }

  return (
    <section id="programme" className="py-24 bg-[#111]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif mb-4 italic text-[#b91c1c]">
              {t(lang, "programme.title")}
            </h2>
            <p className="text-gray-400">{t(lang, "programme.description")}</p>
          </div>
          <button className="text-[#b91c1c] flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:underline decoration-2 underline-offset-8">
            {t(lang, "programme.download")} <ChevronRight size={16} />
          </button>
        </div>

        <div className="space-y-4">
          {events.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`group flex flex-col md:flex-row justify-between items-center p-8 border border-white/10 transition-all duration-300 hover:bg-[#b91c1c] hover:text-white ${
                idx === 2 ? "bg-white/5 border-[#b91c1c]/50" : ""
              }`}
            >
              <div className="text-2xl font-serif italic mb-4 md:mb-0">
                {item.date}
              </div>
              <div className="text-xl font-bold uppercase tracking-tighter text-center md:text-left">
                {item.event}
              </div>
              <div
                className={`text-[10px] px-3 py-1 rounded-full border ${
                  idx === 2
                    ? "border-[#b91c1c] text-[#b91c1c] group-hover:text-white group-hover:border-black"
                    : "border-white/20 text-white/40"
                }`}
              >
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
