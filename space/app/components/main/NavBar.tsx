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

  // Filtrer pour exclure LinkedIn (en minuscule ou majuscule pour être sûr)
  const filteredSocials = Socials.filter(
    (social) => social.name.toLowerCase() !== "linkedin"
  );

  return (
    <header className="w-full fixed top-0 z-50 shadow-lg shadow-black/10 bg-[#03001417] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-[65px] flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 font-bold text-sm hover:text-white transition-colors"
        >
          <span className="font-mono text-blue-400">&lt;</span>
         
          <span className="font-mono text-blue-400">/&gt;</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1 border border-white/10 bg-[#0300145e] px-5 py-2 rounded-full">
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

        {/* Socials desktop (Utilise maintenant le tableau filtré) */}
        <div className="hidden md:flex items-center gap-4">
          {filteredSocials.map((social) => (
            <a
              key={social.name}
              href={social.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image src={social.src} alt={social.name} width={22} height={22} />
            </a>
          ))}
        </div>

        {/* Bouton hamburger mobile */}
        <button
          className="md:hidden text-blue-500 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-[#030014]/95 opacity-30 backdrop-blur-md border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4">
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

          {/* Socials mobile (Utilise aussi le tableau filtré) */}
          <div className="flex gap-4 pt-2 border-t border-white/10">
            {filteredSocials.map((social) => (
              <a
                key={social.name}
                href={social.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image src={social.src} alt={social.name} width={22} height={22} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;