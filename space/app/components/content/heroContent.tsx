"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-between container mx-auto max-w-6xl px-6 md:px-12 mt-20 md:mt-32 w-full z-[20] gap-12"
    >
      <div className="flex-1 flex flex-col justify-center text-center md:text-left w-full">
        <motion.div variants={slideInFromTop} className="mb-6">
          <div className="bg-slate-900/80 p-4 md:p-6 rounded-lg border border-slate-700/50 shadow-lg relative overflow-hidden">
            <div className="flex gap-2 absolute top-3 left-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="mt-6">
              <span className="text-slate-400 font-mono text-sm">
                Bienvenue sur mon portfolio
              </span>

              <h1 className="text-xl md:text-2xl font-bold text-slate-100 font-mono mt-3 break-words">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-green-400">developer</span>{" "}
                <span className="text-blue-400">=</span>{" "}
                <span className="text-yellow-400">&apos;</span>
                <TypeAnimation
                  sequence={[
                    "Ezechiel Akesse",
                    2500,
                    "Développeur Full Stack",
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-cyan-400"
                />
                <span className="text-yellow-400">&apos;</span>
                <span className="text-slate-100">;</span>
              </h1>

              <p className="text-slate-300 font-mono mt-4 text-sm">
                <span className="text-blue-400">console</span>.
                <span className="text-green-400">log</span>
                <span className="text-slate-100">(</span>
                <span className="text-green-400">developer</span>
                <span className="text-slate-100">);</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-3xl md:text-5xl font-bold mb-4 text-cyan-400"
        >
          Développeur Full Stack
        </motion.h2>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed"
        >
          Je conçois des applications web robustes, performantes et modernes,
          en mettant l&apos;accent sur l&apos;expérience utilisateur, la qualité du code
          et l&apos;innovation.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap justify-center md:justify-start gap-4"
        >
          <Link href="/project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              Voir mes projets
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>

          {/* <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Me contacter
            </motion.button>
          </Link> */}
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex-1 flex justify-center items-center w-full"
      >
        <div className="relative w-full max-w-[550px] aspect-square flex justify-center items-center">
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            width={550}
            height={550}
            priority
            className="w-full h-auto object-contain max-h-[500px]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;