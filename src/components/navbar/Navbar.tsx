"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/lib/i18n";

export const Navbar = () => {
  const lang = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", labelKey: "about" },
    { href: "#awards", labelKey: "categories" },
    { href: "#programme", labelKey: "programme" },
    { href: "#galerie", labelKey: "gallery" },
    { href: "/presse", labelKey: "presse" },
    { href: "/participants", labelKey: "participants" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Algerian Soft Power Day Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold tracking-[0.2em] uppercase hidden md:block">
            <span className="text-[#d4af37]">Algerian Soft Power</span>{" "}
            <span className="italic text-[#b91c1c]">Day</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#d4af37] hover:text-[#b91c1c] hover:underline decoration-red-600 underline-offset-4 transition-all"
            >
              {t(lang, `nav.${link.labelKey}`)}
            </Link>
          ))}

          <LanguageSwitcher />

          <Link
            href="/auth/login"
            className="px-6 py-2 border border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c] hover:text-white transition-all duration-300"
          >
            {t(lang, "nav.login")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#b91c1c]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center gap-8 text-2xl font-bold uppercase tracking-widest top-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#b91c1c] hover:underline decoration-red-600 transition-all"
            >
              {t(lang, `nav.${link.labelKey}`)}
            </Link>
          ))}
          <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
            {t(lang, "nav.login")}
          </Link>
        </div>
      )}
    </nav>
  );
};
