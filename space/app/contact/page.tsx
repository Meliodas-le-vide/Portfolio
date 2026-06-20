"use client"

import { useState } from "react"
import { motion, Variants } from "framer-motion" // 1. On importe le type Variants
import { Send, CheckCircle, AlertCircle, Mail, Phone, Calendar } from "lucide-react"
import Footer from "../components/main/Footer"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  // 2. On type explicitement les variants pour que Framer Motion accepte les chaînes de transition
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Soumission asynchrone pour éviter la redirection Formspree
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xjgddjej", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.",
        })
        form.reset()
      } else {
        throw new Error()
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Oups ! Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <motion.div 
        initial="hidden" 
        animate="visible" 
        exit={{ opacity: 0 }} 
        variants={containerVariants} 
        className="py-16 px-4 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 mt-5">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Me Contacter
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Une idée ? Un projet ? N&apos;hésitez pas à m&apos;envoyer un message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Colonne Infos de contact */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <div className="backdrop-blur-lg bg-slate-950/40 border border-slate-800 p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-white tracking-tight">
                Discutons de votre projet
              </h2>

              <p className="text-slate-400 mb-8 leading-relaxed">
                Vous avez un projet en tête ou une question ? N&apos;hésitez pas à me contacter. 
                Je vous répondrai dans les plus brefs délais.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-400">Email</h3>
                    <a href="mailto:ezechiel.akesse@epitech.eu" className="text-white hover:text-blue-400 transition-colors font-medium">
                      ezechiel.akesse@epitech.eu
                    </a>
                  </div>
                </div>

                {/* Disponibilité */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-400">Disponibilité</h3>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Disponible pour du freelance
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-purple-500/10 p-3 rounded-xl text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-slate-400">Téléphone</h3>
                    <a href="tel:+2250758974943" className="text-white hover:text-purple-400 transition-colors font-medium">
                      +2250758974943
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne Formulaire */}
          <motion.div variants={itemVariants} className="lg:col-span-7 relative z-99 pointer-events-auto">
            <div className="backdrop-blur-lg bg-slate-950/40 border border-slate-800 p-8 rounded-2xl shadow-xl relative overflow-hidden opacity-70">
              
              {formStatus.submitted && formStatus.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/10">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-slate-400 max-w-sm mx-auto">
                    {formStatus.message}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formStatus.submitted && !formStatus.success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p>{formStatus.message}</p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/60 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                        placeholder="Votre nom"
                        required
                    />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/60 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                        placeholder="votre@pkangor.dev"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/60 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none"
                      placeholder="Votre message..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default Contact