"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromURL, Language } from "./i18n";

export function useLocale(): Language {
  const pathname = usePathname() || "/";
  return getLocaleFromURL(pathname);
}
