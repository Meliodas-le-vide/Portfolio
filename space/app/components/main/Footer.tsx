"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="w-4 h-4" />,
      url: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-4 h-4" />,
      url: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      url: "mailto:contact@ezechiel.dev",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "Accueil", url: "/" },
    { label: "À propos", url: "/about" },
    { label: "Projets", url: "/project" },
    { label: "Contact", url: "/contact" },
  ];

  const stack = ["Next.js", "Tailwind CSS", "Framer Motion", "Ts Particule"];

  return (
    <footer className="relative w-full z-99 mt-28 border-t border-slate-900/50 backdrop-blur-md bg-slate-950/30 text-slate-400 pointer-events-auto opacity-70">
      {/* Ligne de séparation lumineuse */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto max-w-5xl px-6 py-14 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Section Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-6 flex flex-col gap-4"
          >
            <span className="font-mono text-lg font-bold text-white tracking-tight">
              <span className="text-blue-500">&lt;</span>
              
              <span className="text-blue-500">/&gt;</span>
            </span>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Développeur Full Stack spécialisé dans l&apos;ingénierie d&apos;applications web et mobiles modernes, performantes et animées.
            </p>

            {/* Réseaux Sociaux */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 shadow-lg shadow-black/20 transition-colors duration-200"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Section Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3 flex flex-col gap-4"
          >
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 text-blue-500" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section Disponibilité / Contact rapide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3 flex flex-col gap-4"
          >
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Statut
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                </span>
                <span className="text-xs text-slate-300 font-medium">Disponible</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Basé en Côte d&apos;Ivoire, ouvert aux opportunités de projets à distance à l&apos;international.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Barre inférieure des droits */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {currentYear} Ezechiel Akesse — Réalisé avec passion.
          </p>

          <div className="flex gap-2 flex-wrap justify-center">
            {stack.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] tracking-wide font-medium text-slate-400 bg-slate-950 border border-slate-900 rounded-lg px-2.5 py-1 shadow-inner"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;