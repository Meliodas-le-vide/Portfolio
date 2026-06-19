"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBook, FaLightbulb, FaCheckSquare } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import Footer from "../components/main/Footer";
import Project from "../components/main/Project";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Liste des compétences avec le composant <Image> optimisé de Next.js
  const skills = [
    // Frontend
    { name: "HTML5", category: "frontend", color: '#e34f26', icon: <Image src="/html.png" alt="HTML5" width={16} height={16} className="object-contain" /> },
    { name: "CSS3", category: "frontend", color: '#1572b6', icon: <Image src="/css.png" alt="CSS3" width={16} height={16} className="object-contain" /> },
    { name: "Tailwind CSS", category: "frontend", color: '#06b6d4', icon: <Image src="/NavLogo.png" alt="Tailwind" width={16} height={16} className="object-contain" /> }, 
    { name: "JavaScript (ES6+)", category: "frontend", color: '#f7df1e', icon: <Image src="/js.png" alt="JavaScript" width={16} height={16} className="object-contain" /> },
    { name: "ReactJS", category: "frontend", color: '#61dafb', icon: <Image src="/react.png" alt="ReactJS" width={16} height={16} className="object-contain" /> },
    { name: "React Native", category: "frontend", color: '#29d1ff', icon: <Image src="/reactnative.png" alt="React Native" width={16} height={16} className="object-contain" /> },
    { name: "Flutter", category: "frontend", color: '#cc6699', icon: <Image src="/flutter.png" alt="Flutter" width={16} height={16} className="object-contain" /> },
    { name: "Vue Js", category: "frontend", color: '#54b154', icon: <Image src="/vuejs.png" alt="Vue Js" width={16} height={16} className="object-contain" /> },
    { name: "Figma", category: "frontend", color: '#1b78cf', icon: <Image src="/figma.png" alt="Figma" width={16} height={16} className="object-contain" /> },
    { name: "Next Js", category: "frontend", color: '#1b8d7e', icon: <Image src="/nextjs.png" alt="Next Js" width={16} height={16} className="object-contain" /> },

    // Backend
    { name: "PHP", category: "backend", color: '#777bb4', icon: <Image src="/php.png" alt="PHP" width={16} height={16} className="object-contain" /> },
    { name: "Laravel", category: "backend", color: '#ff2d20', icon: <Image src="/laravel.png" alt="Laravel" width={16} height={16} className="object-contain" /> },
    { name: "MySQL", category: "backend", color: '#4479a1', icon: <Image src="/mysql.png" alt="MySQL" width={16} height={16} className="object-contain" /> },
    { name: "Blade", category: "backend", color: '#f55247', icon: <Image src="/laravel.png" alt="Blade" width={16} height={16} className="object-contain" /> },
    { name: "Nest Js", category: "backend", color: '#336791', icon: <Image src="/nestjs.png" alt="Nest Js" width={16} height={16} className="object-contain" /> },
    { name: "MongoDB", category: "backend", color: '#54b154', icon: <Image src="/mongodb.png" alt="MongoDB" width={16} height={16} className="object-contain" /> },
    { name: "Firebase", category: "backend", color: '#f1df3b', icon: <Image src="/Firebase.png" alt="Firebase" width={16} height={16} className="object-contain" /> },
    { name: "Node Js", category: "backend", color: '#f1df3b', icon: <Image src="/node.png" alt="Node JS" width={16} height={16} className="object-contain" /> },


    // Outils & Environnements
    { name: "Git & GitHub", category: "outils", color: '#f05032', icon: <Image src="/git.png" alt="Git" width={16} height={16} className="object-contain" /> },
    { name: "Vs Code", category: "outils", color: '#ffc107', icon: <Image src="/vscode.png" alt="DevTools" width={16} height={16} className="object-contain" /> },

    //Gaminig
    { name: "Unity", category: "game", color: '#27a5ae', icon: <Image src="/unity.png" alt="Unity" width={16} height={16} className="object-contain" /> },
    { name: "C#", category: "game", color: '#5f28c5', icon: <Image src="/c.png" alt="C#" width={16} height={16} className="object-contain" /> },
  ];

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "outils", name: "Outils & Environnements" },
    { id: "game", name: "Gaming" },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={containerVariants}
        className="py-12"
      >
        <motion.h1 variants={itemVariants} className="mt-10 text-4xl font-extrabold tracking-tight text-center text-white mb-12 text-4xl font-extrabold tracking-tight text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          Mes Projets
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <Project/>
        </div>
      </motion.div>

      <Footer/>
    </>
  );
};

export default About;