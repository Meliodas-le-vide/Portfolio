"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

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
      url: "mailto:ezechiel.akesse@epitech.eu",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "Accueil", url: "/" },
    { label: "À propos", url: "/about" },
    { label: "Projets", url: "/projects" },
    { label: "Contact", url: "/contact" },
  ];

  const contactLinks = [
    {
      icon: <Mail className="w-3.5 h-3.5" />,
      label: "contact@ezechiel.dev",
      url: "mailto:ezechiel.akesse@epitech.eu",
    },
    {
      icon: <FaGithub className="w-3.5 h-3.5" />,
      label: "github.com/",
      url: "https://github.com/",
    },
    {
      icon: <FaLinkedin className="w-3.5 h-3.5" />,
      label: "linkedin/",
      url: "https://www.linkedin.com/",
    },
  ];

  const stack = ["Nextjs", "Tailwind", "Framer Motion"];

  return (
    <footer className="relative w-full z-30 mt-20 text-zinc-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      <div className="container mx-auto max-w-5xl px-6 py-12 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="font-mono text-base font-medium text-zinc-100">
              <span className="text-blue-400">&lt;</span>
              EzechielAkesse
              <span className="text-blue-400">/&gt;</span>
            </span>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Développeur Full Stack passionné par la création
              d&apos;expériences web modernes et performantes.
            </p>

            <div className="flex gap-2 mt-1">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">
              Contact
            </h3>
            <ul className="flex flex-col gap-2.5">
              {contactLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-zinc-800/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} Ezechiel Akesse — Tous droits réservés
          </p>

          <div className="flex gap-2 flex-wrap justify-center">
            {stack.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] text-zinc-500 bg-zinc-900/60 border border-zinc-800 rounded px-2 py-0.5"
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
