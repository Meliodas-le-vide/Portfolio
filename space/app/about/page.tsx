// "use client";

// import { motion } from "framer-motion";
// import { User } from "lucide-react";

// // Import des icônes officielles
// import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaPhp, FaLaravel, FaDatabase, FaGitAlt, FaGithub, FaChrome, FaJs, FaJsSquare, FaTasks, FaProjectDiagram, FaDumbbell, FaBook, FaLightbulb, FaCheckSquare, FaCertificate, FaLanguage, FaCode, FaRegCheckCircle } from "react-icons/fa";
// import { SiTailwindcss, SiJquery, SiMysql, SiPostgresql, SiLaravel, SiJavascript, SiReact, SiGit, SiCodewars } from "react-icons/si";
// import { TbBrandVscode } from "react-icons/tb";
// import { BsKanban, BsClipboardData, BsTranslate } from "react-icons/bs";
// import { GiMuscleUp } from "react-icons/gi";
// import { MdSportsHandball, MdLanguage } from "react-icons/md";

// const About = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };



//   return (
//     <>
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         exit={{ opacity: 0 }}
//         variants={containerVariants}
//         className="py-12"
//       >
//         <motion.h1 variants={itemVariants} className="section-title">
//           À propos de moi
//         </motion.h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <motion.div variants={itemVariants}>
//             {/* Photo personnelle avec effets avancés */}
//             <div className="relative w-80 h-80 mx-auto mb-4 overflow-hidden">
//               {/* Bordure simple */}
//               <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-[3px] z-10">
//                 <div className="absolute inset-0 rounded-full bg-card p-[2px] z-10">
//                   {/* Image de profil */}
//                   <div className="w-full h-full rounded-full overflow-hidden">
//                     <img
//                       src="/images/profile_.jpeg"
//                       alt="Photo de profil"
//                       className="w-full h-full object-cover object-top"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="max-w-3xl mx-auto bg-card/80 backdrop-blur-lg rounded-2xl shadow-2xl px-6 py-4 md:px-8 md:py-6 border border-border/40 animate-in fade-in-50 duration-700">
//               <h2 className="text-3xl font-extrabold mb-4 text-primary section-title hover:text-accent transition-colors duration-300">
//                 Présentation
//               </h2>
//               <div className="space-y-6 text-foreground/90 leading-relaxed">
//                 <p className="text-base md:text-lg">
//                   Développeur full-stack passionné par l’innovation,
//                   j’accompagne les entreprises dans la création de solutions web
//                   robustes et intuitives. Maîtrisant <b>PHP</b> et{" "}
//                   <b>JavaScript</b>, j’utilise les frameworks <b>Laravel</b> et{" "}
//                   <b>ReactJS</b> pour concevoir des applications performantes,
//                   évolutives et orientées utilisateur. Mon objectif :
//                   transformer des idées en expériences digitales impactantes, en
//                   combinant rigueur technique, créativité et esprit d’équipe.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div variants={itemVariants}>
//             <h2 className="text-2xl font-bold mb-4 text-foreground">
//               Mes compétences
//             </h2>

//             <div className="space-y-6">
//               {categories.map((category) => (
//                 <div key={category.id}>
//                   <h3 className="text-lg font-semibold mb-2 text-primary">
//                     {category.name}
//                   </h3>

//                   <div className="flex flex-wrap">
//                     {skills
//                       .filter((skill) => skill.category === category.id)
//                       .map((skill, index) => (
//                         <motion.span
//                           key={index}
//                           className="skill-badge flex items-center gap-1 px-3 py-1 rounded-full font-medium text-xs mb-2 mr-2 shadow-sm border"
//                           style={{
//                             background: skill.color + "22",
//                             color: skill.color,
//                             borderColor: skill.color,
//                           }}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           {skill.icon}
//                           <span>{skill.name}</span>
//                         </motion.span>
//                       ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="my-8"
//       >
//         <motion.h2
//           variants={itemVariants}
//           className="text-3xl font-bold mb-6 text-center text-accent border-b border-border/30 pb-2 max-w-4xl mx-auto"
//         >
//           Informations personnelles
//         </motion.h2>

//         {/* Conteneur principal avec fond et effets */}
//         <motion.div
//           variants={itemVariants}
//           className="max-w-5xl mx-auto rounded-2xl shadow-xl p-0 sm:p-8 border border-border/40 animate-in fade-in-50 duration-700"
//         >
//           {/* Sections en grille à deux colonnes */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
//             {/* Section Éducation */}
//             <div className="bg-background/50 rounded-xl p-5 shadow-lg shadow-primary/10 border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-primary/20">
//               <h3 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
//                 <svg
//                   className="w-5 h-5 text-primary"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//                   <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
//                 </svg>
//                 Parcours académique
//               </h3>
//               <ul className="text-foreground/80 space-y-3">
//                 <li className="flex items-start gap-2">
//                   <span className="bg-primary/10 text-primary font-bold px-2 py-1 rounded text-xs mt-0.5">
//                     2024
//                   </span>
//                   <span>YouCode Safi : Développeur Full Stack</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="bg-primary/10 text-primary font-bold px-2 py-1 rounded text-xs mt-0.5">
//                     2021
//                   </span>
//                   <span>
//                     Acharif Al Idrissi : BAC Pro en maintenance industrielle
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             {/* Section Centres d'intérêt */}
//             <div className="bg-background/50 rounded-xl p-5 shadow-lg shadow-primary/10 border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-primary/20">
//               <h3 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
//                 <svg
//                   className="w-5 h-5 text-primary"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//                 </svg>
//                 Centres d'intérêt
//               </h3>
//               <ul className="text-foreground/80 space-y-3">
//                 <li className="flex items-center gap-3">
//                   <GiMuscleUp className="text-primary w-5 h-5" />
//                   <span>Sport & fitness</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <FaCheckSquare className="text-primary w-5 h-5" />
//                   <span>
//                     Suivi d'habitudes pour la discipline et la productivité
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <FaBook className="text-primary w-5 h-5" />
//                   <span>Lecture sur le développement personnel</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <FaLightbulb className="text-primary w-5 h-5" />
//                   <span>Résolution de problèmes</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Section Langues */}
//             <div className="bg-background/50 rounded-xl p-5 shadow-lg shadow-primary/10 border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-primary/20">
//               <h3 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
//                 <svg
//                   className="w-5 h-5 text-primary"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
//                 </svg>
//                 Langues
//               </h3>
//               <ul className="text-foreground/80 space-y-3">
//                 <li className="flex items-center gap-3">
//                   <MdLanguage className="text-primary w-5 h-5" />
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span>
//                         <b>Arabe</b> (natif)
//                       </span>
//                       <div className="w-24 bg-border/30 h-2 rounded-full overflow-hidden">
//                         <div className="bg-primary h-full w-full"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <MdLanguage className="text-primary w-5 h-5" />
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span>
//                         <b>Français</b> (A2)
//                       </span>
//                       <div className="w-24 bg-border/30 h-2 rounded-full overflow-hidden">
//                         <div className="bg-primary h-full w-2/5"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <MdLanguage className="text-primary w-5 h-5" />
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span>
//                         <b>Anglais</b> (A2)
//                       </span>
//                       <div className="w-24 bg-border/30 h-2 rounded-full overflow-hidden">
//                         <div className="bg-primary h-full w-2/5"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             {/* Section Certifications */}
//             <div className="bg-background/50 rounded-xl p-5 shadow-lg shadow-primary/10 border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-primary/20">
//               <h3 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
//                 <svg
//                   className="w-5 h-5 text-primary"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 15l-2 5l9-9l-9-9l2 5l-9 1l9 1"></path>
//                 </svg>
//                 Certifications
//               </h3>
//               <ul className="text-foreground/80 space-y-3">
//                 <li className="flex items-center gap-3">
//                   <SiJavascript className="text-primary w-5 h-5" />
//                   <span>JavaScript Algorithms and Data Structures</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <SiGit className="text-primary w-5 h-5" />
//                   <span>Git and GitHub</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <FaProjectDiagram className="text-primary w-5 h-5" />
//                   <span>Agile Scrum Foundation</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <SiCodewars className="text-primary w-5 h-5" />
//                   <span>CodinGame Certification – JavaScript</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <SiReact className="text-primary w-5 h-5" />
//                   <span>ReactJS Core Concepts</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="w-full col-span-full flex flex-col gap-4 sm:flex-row items-center">
//               {/* <h3 className="text-2xl font-bold text-accent flex items-center gap-2 hover:text-primary transition-colors duration-300">
//                 <User className="w-6 h-6" /> Contact:
//               </h3> */}
//               <ul className="w-full text-foreground/90 text-base justify-center flex flex-col items-center gap-4 sm:flex-row">
//                 <li className="flex items-center gap-2">
//                   <svg
//                     className="w-5 h-5 text-primary"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.06.72 3a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 7.07 7.07l.27-.27a2 2 0 0 1 2.11-.45c.94.35 1.95.59 3 .72A2 2 0 0 1 22 16.92z"></path>
//                   </svg>
//                   <span>+212 713-061858</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <svg
//                     className="w-5 h-5 text-primary"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M4 4h16v16H4z" fill="none" />
//                     <path d="M22 6l-10 7L2 6" />
//                   </svg>
//                   <span>
//                     <a
//                       href="mailto:contact@akraou.dev"
//                       className="underline hover:text-accent transition-colors"
//                     >
//                       contact@akraou.dev
//                     </a>
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <svg
//                     className="w-5 h-5 text-primary"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
//                     <circle cx="12" cy="9" r="3" />
//                   </svg>
//                   <span>Maroc / Safi</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// export default About;
