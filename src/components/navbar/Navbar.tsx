"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
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
    { href: "#about", label: "L'Initiative" },
    { href: "#awards", label: "Les Trophées" },
    { href: "#programme", label: "Programme" },
    { href: "#galerie", label: "Galerie" },
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
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-[#d4af37] rounded-full flex items-center justify-center font-serif text-[#d4af37] font-bold text-xl italic">
            A
          </div>
          <span className="text-xl font-bold tracking-[0.2em] uppercase hidden md:block">
            Algerian Soft Power <span className="text-[#d4af37]">Awards</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#d4af37] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/auth/login"
            className="px-6 py-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
          >
            Connexion
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#d4af37]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center gap-8 text-2xl font-bold uppercase tracking-widest top-[80px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
            Connexion
          </Link>
        </div>
      )}
    </nav>
  );
};
