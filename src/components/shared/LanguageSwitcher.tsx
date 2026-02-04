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

    // Build base path without trailing slash
    const base = segments.length ? `/${segments.join("/")}` : "";

    // New path: /ar + base for Arabic, otherwise base or '/'
    const newPath = lang === "ar" ? `/ar${base}` : base || "/";

    try {
      router.push(newPath);
    } catch (err) {
      console.error("Error navigating to language path:", err);
    }
  };

  return (
    <div className="flex items-center gap-2 bg-gray-900 rounded-full p-1 border border-gray-700">
      <button
        onClick={() => handleLanguageChange("fr")}
        className={`px-3 py-2 rounded-full transition-all ${
          !pathname.startsWith("/ar")
            ? "bg-[#d4af37] text-black font-semibold"
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
            ? "bg-[#d4af37] text-black font-semibold"
            : "text-gray-400 hover:text-white"
        }`}
      >
        AR
      </button>
    </div>
  );
}
