"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Projets", href: "/project" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Filtrer pour supprimer LinkedIn
  const filteredSocials = Socials.filter(
    (social) => social.name.toLowerCase() !== "linkedin"
  );

  return (
    <header className="w-full fixed top-0 z-50 shadow-lg shadow-black/10 bg-[#03001417] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-[65px] flex items-center justify-between relative">

        {/* Logo (Reste calé à gauche) */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 font-bold text-sm hover:text-white transition-colors z-10"
        >
          <span className="font-mono text-blue-400">&lt;</span>
          <span className="font-mono text-blue-400">/&gt;</span>
        </Link>

        {/* Nav desktop (Parfaitement centrée grâce à mx-auto et absolute sur grand écran) */}
        <nav className="hidden md:flex items-center gap-1 border border-white/10 bg-[#0300145e] px-5 py-2 rounded-full absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? "bg-white/10 text-white font-medium"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bloc invisible à droite sur desktop pour équilibrer le flex justify-between si besoin */}
        <div className="hidden md:block w-[32px] h-[22px]" />

        {/* Bouton hamburger mobile (Reste calé à droite sur mobile) */}
        <button
          className="md:hidden text-blue-500 hover:text-white transition-colors z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-[#030014]/95 opacity-50 backdrop-blur-md border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
                  pathname === link.href
                    ? "bg-white/10 text-white font-medium"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;