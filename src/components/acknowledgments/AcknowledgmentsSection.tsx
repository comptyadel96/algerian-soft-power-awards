"use client";

import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/i18n";

export const AcknowledgmentsSection = () => {
  const lang = useLocale();

  return (
    <section className="py-24 bg-gradient-to-br from-[#0a0a0a] to-[#111] border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-4">
            {t(lang, "acknowledgments.title")}
          </h2>
          <div className="w-12 h-1 bg-[#b91c1c] mx-auto"></div>
        </div>

        <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
          <p className="text-center text-xl font-light">
            {t(lang, "acknowledgments.text")}
          </p>

          <p className="text-center text-xl font-serif italic text-white">
            {t(lang, "acknowledgments.closing")}
          </p>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#b91c1c]"></div>
          <div className="w-2 h-2 rounded-full bg-[#b91c1c]"></div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#b91c1c]"></div>
        </div>
      </div>
    </section>
  );
};
