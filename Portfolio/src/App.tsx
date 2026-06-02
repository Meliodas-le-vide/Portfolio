"use client"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useState, useEffect, Suspense } from "react"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import About from "./views/About"
import Project from "./views/Project"
import Contact from "./views/Contact"
import Footer from "./components/Footer"
import { useTheme } from "./context/ThemeContext"


function App() {
  const location = useLocation()
  const { theme } = useTheme()
  const [loading, setLoading] = useState(true)
  
  // Simuler un chargement initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Gérer le chargement lors des changements de page
  const [pageLoading, setPageLoading] = useState(false)
  
  useEffect(() => {
    // Reset scroll position to top when route changes
    window.scrollTo(0, 0)
    
    // Handle page loading state
    setPageLoading(true)
    const timer = setTimeout(() => {
      setPageLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      {/* Loaders */}
      {/* <AnimatePresence>
        {(loading || pageLoading) && <Loader loading={loading || pageLoading} />}
      </AnimatePresence> */}
      
      {/* Starfield/Galaxy 3D Animation */}
      <Suspense fallback={null}>
        {/* <Particule /> */}
      </Suspense>
      
      <div className="fixed inset-0 -z-10 bg-background opacity-80">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <Navbar />
      <main className="container mx-auto max-w-5xl px-4 sm:px-8 pt-20 pb-16 relative z-10">
        <AnimatePresence mode="wait">
          {!loading && (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </AnimatePresence>
      </main>
      {/* <SidebarSocialLinks /> */}
      <Footer />
    </div>
  )
}

export default App
