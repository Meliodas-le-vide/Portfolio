"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/about" },
  { name: "Projets", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-orange-500/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          <NavLink to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30"
            >
              <span className="text-white font-bold text-sm">E</span>
            </motion.div>

            <div className="leading-tight">
              <h1 className="text-white font-bold text-sm">
                Ezechiel
              </h1>

              <p className="text-orange-500 text-[11px] uppercase tracking-widest">
                Dev Full Stack
              </p>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path}>
                {({ isActive }) => (
                  <div className="relative group">
                    <span
                      className={`text-sm transition-colors duration-200 ${
                        isActive
                          ? "text-orange-500 font-semibold"
                          : "text-zinc-400 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-orange-500 rounded-full"
                      />
                    )}
                  </div>
                )}
              </NavLink>
            ))}

            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300 hover:border-orange-500 transition"
            >
              {theme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>

            <NavLink to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium shadow-lg shadow-orange-500/20"
              >
                Me contacter
              </motion.button>
            </NavLink>
          </div>

          <div className="flex items-center gap-2 md:hidden">

            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300"
            >
              {theme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-300"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-black/95 border-t border-zinc-900"
          >
            <div className="px-6 py-5 flex flex-col gap-5">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <span
                      className={`block text-sm ${
                        isActive
                          ? "text-orange-500 font-semibold"
                          : "text-zinc-400"
                      }`}
                    >
                      {link.name}
                    </span>
                  )}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                <button className="w-full py-3 rounded-lg bg-orange-500 text-white text-sm font-medium">
                  Me contacter
                </button>
              </NavLink>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;