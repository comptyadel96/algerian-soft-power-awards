"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromURL } from "@/lib/i18n";

export function DirectionManager() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    const lang = getLocaleFromURL(pathname);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "ar" ? "ar" : "fr";
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [pathname]);

  return null;
}
