"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBook, FaLightbulb, FaCheckSquare } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import Footer from "../components/main/Footer";

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
          À propos de moi
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bloc de Gauche : Photo + Bio */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 text-cyan-400 blur-2xl opacity-80 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 p-[3px] z-10">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/images/profile_.jpeg"
                    alt="Photo de profil"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="w-full bg-slate-950/40 backdrop-blur-lg rounded-2xl p-6 border border-slate-800/60 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-white border-b border-slate-800 pb-2">
                Présentation
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Développeur full-stack passionné par l’innovation,
                j’accompagne les entreprises dans la création de solutions web
                robustes et intuitives. Maîtrisant <span className="text-emerald-400 font-semibold">PHP</span> et{" "}
                <span className="text-blue-400 font-semibold">JavaScript</span>, j’utilise les frameworks <span className="text-rose-500 font-semibold">Laravel</span> et{" "}
                <span className="text-cyan-400 font-semibold">ReactJS</span> pour concevoir des applications performantes,
                évolutives et orientées utilisateur.
              </p>
            </div>
          </motion.div>

          {/* Bloc de Droite : Compétences */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Mes compétences
            </h2>

            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category.id} className="bg-slate-900/20 p-4 rounded-xl border border-slate-800/40">
                  <h3 className="text-base font-semibold mb-3 text-blue-400 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {category.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter((skill) => skill.category === category.id)
                      .map((skill, index) => (
                        <motion.span
                          key={index}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full font-medium text-xs border backdrop-blur-sm shadow-sm"
                          style={{
                            background: skill.color + "10",
                            color: skill.color,
                            borderColor: skill.color + "30",
                          }}
                          whileHover={{ scale: 1.05, borderColor: skill.color, background: skill.color + "20" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill.icon}
                          <span>{skill.name}</span>
                        </motion.span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Informations personnelles */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="my-12"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold mb-8 text-center text-white border-b border-slate-800 pb-3 max-w-4xl mx-auto"
        >
          Informations personnelles
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Parcours Académique */}
            <div className="bg-slate-950/40 rounded-xl p-5 border border-slate-800/60 hover:border-emerald-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                Parcours académique
              </h3>
              <ul className="text-slate-300 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-500/10 text-blue-400 font-bold px-2 py-0.5 rounded text-xs mt-0.5">2024</span>
                  <div>
                    <p className="font-medium text-white">YouCode Safi</p>
                    <p className="text-xs text-slate-400">Développeur Full Stack</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-emerald-500/10 text-blue-400 font-bold px-2 py-0.5 rounded text-xs mt-0.5">2021</span>
                  <div>
                    <p className="font-medium text-white">Acharif Al Idrissi</p>
                    <p className="text-xs text-slate-400">BAC Pro en maintenance industrielle</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Centres d'intérêt */}
            <div className="bg-slate-950/40 rounded-xl p-5 border border-slate-800/60 hover:border-emerald-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center gap-2">
                <GiMuscleUp className="w-5 h-5" />
                Centres d&apos;intérêt
              </h3>
              <ul className="text-slate-300 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <GiMuscleUp className="text-blue-400 w-4 h-4" />
                  <span>Sport & fitness</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckSquare className="text-blue-400 w-4 h-4" />
                  <span>Suivi d&apos;habitudes (discipline & productivité)</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaBook className="text-blue-400 w-4 h-4" />
                  <span>Lecture (Développement personnel)</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaLightbulb className="text-blue-400 w-4 h-4" />
                  <span>Résolution de problèmes</span>
                </li>
              </ul>
            </div>

            {/* Langues */}
            <div className="bg-slate-950/40 rounded-xl p-5 border border-slate-800/60 hover:border-emerald-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center gap-2">
                <MdLanguage className="w-5 h-5" />
                Langues
              </h3>
              <ul className="text-slate-300 space-y-4 text-sm">
                <li className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Arabe <b className="text-white">(Natif)</b></span>
                    <span className="text-slate-400">100%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-full" />
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Français <b className="text-white">(A2)</b></span>
                    <span className="text-slate-400">40%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-2/5" />
                  </div>
                </li>
                <li className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Anglais <b className="text-white">(A2)</b></span>
                    <span className="text-slate-400">40%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-2/5" />
                  </div>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            {/* <div className="bg-slate-950/40 rounded-xl p-5 border border-slate-800/60 hover:border-emerald-500/30 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-blue-400 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certifications
              </h3>
              <ul className="text-slate-300 space-y-3 text-xs">
                <li className="flex items-center gap-2">
                  <Image src="/js.png" alt="JS" width={14} height={14} className="object-contain" />
                  <span>JavaScript Algorithms and Data Structures</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/git.png" alt="Git" width={14} height={14} className="object-contain" />
                  <span>Git and GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/file.svg" alt="Agile" width={14} height={14} className="object-contain" />
                  <span>Agile Scrum Foundation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src="/js.png" alt="CodinGame" width={14} height={14} className="object-contain" />
                  <span>CodinGame Certification – JavaScript</span>
                </li>
              </ul>
            </div> */}

          </div>
        </motion.div>
      </motion.div>
      <Footer/>
    </>
  );
};

export default About;