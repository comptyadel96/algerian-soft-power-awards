"use client";

import { useRouter, usePathname } from "next/navigation";
import { Language } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang: Language) => {
    const segments = pathname.split("/").filter(Boolean);

    // Remove current language prefix if exists
    if (segments[0] === "ar" || segments[0] === "fr") {
      segments.shift();
    }

    // Add new language prefix
    const newPath =
      lang === "fr" ? `/${segments.join("/")}` : `/ar/${segments.join("/")}`;

    router.push(newPath === "/" ? `${lang === "ar" ? "/ar" : "/"}` : newPath);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-900 rounded-full p-1 border border-gray-700">
      <button
        onClick={() => handleLanguageChange("fr")}
        className={`px-3 py-2 rounded-full transition-all ${
          !pathname.startsWith("/ar")
            ? "bg-gold text-black font-semibold"
            : "text-gray-400 hover:text-white"
        }`}
      >
        FR
      </button>
      <div className="w-px h-6 bg-gray-700" />
      <button
        onClick={() => handleLanguageChange("ar")}
        className={`px-3 py-2 rounded-full transition-all ${
          pathname.startsWith("/ar")
            ? "bg-gold text-black font-semibold"
            : "text-gray-400 hover:text-white"
        }`}
      >
        AR
      </button>
    </div>
  );
}
