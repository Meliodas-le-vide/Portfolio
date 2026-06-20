"use client";

import { motion } from "framer-motion";
import Footer from "../components/main/Footer";
import Project from "../components/main/Project";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={containerVariants}
        className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Titre nettoyé avec un dégradé de couleur élégant */}
        <motion.h1 
          variants={itemVariants} 
          className="mt-10 text-center text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-purple-400 mb-12"
        >
          Mes Projets
        </motion.h1>

        {/* Conteneur principal de la section projets */}
        <div className="w-full">
          <Project />
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default About;