"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowRight, Download } from "lucide-react"

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
}
const itemVariants = {
  hidden:  { y: 28, opacity: 0 },
  visible: { y: 0,  opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      style={{ minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center", paddingTop: "2rem", paddingBottom: "4rem" }}
    >
      <div style={{ width: "100%" }}>
        <div className="grid-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "5rem" }}>
          <div>
            <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "0.35rem 1rem", borderRadius: "100px",
                border: "1px solid rgba(255,94,26,0.35)", background: "rgba(255,94,26,0.08)",
                fontSize: "12px", color: "#FF9A3C", letterSpacing: "0.06em",
                fontFamily: "monospace", textTransform: "uppercase",
              }}>
                <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                Disponible · Open to work
              </span>
            </motion.div>

            {/* Titre */}
            <motion.div variants={itemVariants}>
              <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.4rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.01em", marginBottom: "0.6rem", fontFamily: "'Syne','Trebuchet MS',sans-serif" }}>
                <span style={{ color: "#F0EDE8", display: "block" }}>Bonjour, je suis</span>
                <span style={{ display: "block", background: "linear-gradient(95deg,#FF5E1A 0%,#FFD166 60%,#FF9A3C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Ezechiel Akesse
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "0.5rem 1rem", background: "#111", border: "1px solid #1e1e1e", borderRadius: "8px", fontFamily: "'Fira Code',monospace", fontSize: "clamp(0.85rem,2vw,1rem)" }}>
                <span style={{ color: "#FF5E1A" }}>$</span>
                <TypeAnimation
                  sequence={["Développeur Full Stack",2200,"Passionné par le Web",2200,"Créateur d'expériences",2200,"Ingénieur logiciel",2200]}
                  wrapper="span" speed={55} repeat={Infinity}
                  style={{ color: "#F0EDE8" }}
                />
                <motion.span animate={{ opacity:[1,0,1] }} transition={{ duration:0.9, repeat:Infinity }}
                  style={{ color:"#FF5E1A", fontWeight:700 }}>▋</motion.span>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} style={{ fontSize:"clamp(0.95rem,1.8vw,1.05rem)", color:"#666", lineHeight:1.8, marginBottom:"2.2rem", maxWidth:"440px" }}>
              Je conçois des applications web robustes et modernes — du design à l'infrastructure — avec un soin particulier pour{" "}
              <span style={{ color:"#FF9A3C" }}>l'expérience utilisateur</span> et la qualité du code.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display:"flex", flexWrap:"wrap", gap:"12px" }}>
              <Link to="/projects" style={{ textDecoration:"none" }}>
                <motion.button whileHover={{ scale:1.05, boxShadow:"0 8px 32px rgba(255,94,26,0.45)" }} whileTap={{ scale:0.96 }}
                  style={{ display:"flex", alignItems:"center", gap:"8px", padding:"0.75rem 1.6rem", background:"linear-gradient(135deg,#FF5E1A 0%,#FF9A3C 100%)", color:"#fff", border:"none", borderRadius:"10px", fontWeight:700, fontSize:"14px", cursor:"pointer", letterSpacing:"0.02em", boxShadow:"0 4px 20px rgba(255,94,26,0.35)" }}>
                  Voir mes projets <ArrowRight size={16} />
                </motion.button>
              </Link>
              <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.96 }}
                style={{ display:"flex", alignItems:"center", gap:"8px", padding:"0.75rem 1.4rem", background:"transparent", color:"#FF9A3C", border:"1.5px solid rgba(255,154,60,0.35)", borderRadius:"10px", fontWeight:600, fontSize:"14px", cursor:"pointer" }}>
                <Download size={15} /> CV
              </motion.button>
            </motion.div>

          </div>

          <motion.div variants={itemVariants} className="hidden lg:block" style={{ position:"relative" }}>

            <motion.div
              animate={{ scale:[1,1.12,1], opacity:[0.18,0.32,0.18] }}
              transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
              style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:340, height:340, borderRadius:"50%", background:"radial-gradient(circle,#FF5E1A 0%,transparent 70%)", filter:"blur(48px)", pointerEvents:"none", zIndex:0 }}
            />

            {/* Terminal */}
            <motion.div whileHover={{ y:-4 }}
              style={{ position:"relative", zIndex:1, background:"rgba(14,14,14,0.97)", border:"1px solid #1e1e1e", borderRadius:"16px", overflow:"hidden", boxShadow:"0 0 0 1px rgba(255,94,26,0.08), 0 32px 64px rgba(0,0,0,0.6)" }}>

              {/* Barre titre */}
              <div style={{ display:"flex", alignItems:"center", gap:"6px", padding:"12px 16px", background:"#0d0d0d", borderBottom:"1px solid #1a1a1a" }}>
                <div style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f56" }} />
                <div style={{ width:10, height:10, borderRadius:"50%", background:"#ffbd2e" }} />
                <div style={{ width:10, height:10, borderRadius:"50%", background:"#27c93f" }} />
                <span style={{ marginLeft:"auto", fontFamily:"monospace", fontSize:"11px", color:"#333" }}>ezechiel.js</span>
              </div>

              {/* Code */}
              <div style={{ padding:"1.5rem", fontFamily:"'Fira Code',monospace", fontSize:"13px", lineHeight:1.9 }}>
                <CL n="01" i={0}><Kw>const</Kw> <Va>profil</Va> <Kw>=</Kw> {"{"}</CL>
                <CL n="02" i={1}><Prop>name</Prop><Dim>:</Dim>      <Str>"Ezechiel Akesse"</Str><Dim>,</Dim></CL>
                <CL n="03" i={1}><Prop>role</Prop><Dim>:</Dim>      <Str>"Full Stack Developer"</Str><Dim>,</Dim></CL>
                <CL n="04" i={1}><Prop>stack</Prop><Dim>: [</Dim></CL>
                <CL n="05" i={2}><Str>"React"</Str><Dim>,</Dim> <Str>"Laravel"</Str><Dim>,</Dim> <Str>"MySQL"</Str></CL>
                <CL n="06" i={1}><Dim>],</Dim></CL>
                <CL n="07" i={1}><Prop>passion</Prop><Dim>:</Dim>   <Str>"Créer des choses belles"</Str><Dim>,</Dim></CL>
                <CL n="08" i={1}><Prop>available</Prop><Dim>:</Dim> <Kw style={{ color:"#4ade80" }}>true</Kw></CL>
                <CL n="09" i={0}><Dim>{"}"}</Dim><Dim>;</Dim></CL>
                <CL n="10" i={0}>&nbsp;</CL>
                <CL n="11" i={0}>
                  <Va>console</Va><Dim>.</Dim><Fn>log</Fn><Dim>(</Dim><Va>profil</Va><Dim>.</Dim><Va>available</Va><Dim>);</Dim>
                  <span style={{ color:"#2e2e2e", marginLeft:8 }}>// true 🔥</span>
                </CL>
              </div>

              {/* Status bar */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 16px", background:"#FF5E1A", fontSize:"11px", fontFamily:"monospace" }}>
                <span style={{ color:"rgba(255,255,255,0.8)" }}>JS</span>
                <span style={{ color:"rgba(255,255,255,0.95)", fontWeight:700 }}>Ezechiel Akesse</span>
                <span style={{ color:"rgba(255,255,255,0.8)" }}>UTF-8</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Fira+Code:wght@400;500&display=swap');
        @media (max-width:1024px) { .grid-hero { grid-template-columns: 1fr !important; } }
      `}</style>
    </motion.div>
  )
}

/* ── Helpers coloration syntaxique ── */
const Kw   = ({ children, style }) => <span style={{ color:"#FF5E1A", ...style }}>{children}</span>
const Va   = ({ children }) => <span style={{ color:"#FF9A3C" }}>{children}</span>
const Fn   = ({ children }) => <span style={{ color:"#FFD166" }}>{children}</span>
const Prop = ({ children }) => <span style={{ color:"#aaa" }}>{children}</span>
const Str  = ({ children }) => <span style={{ color:"#c8c2ba" }}>{children}</span>
const Dim  = ({ children }) => <span style={{ color:"#3a3a3a" }}>{children}</span>
const CL   = ({ n, i, children }) => (
  <div style={{ display:"flex", gap:"16px" }}>
    <span style={{ color:"#222", minWidth:"18px", userSelect:"none", fontSize:"11px", paddingTop:"2px" }}>{n}</span>
    <span style={{ paddingLeft: i*16 }}>{children}</span>
  </div>
)