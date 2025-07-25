"use client"

import Navigation from "@/app/components/sections/Navigation"
import Hero from "@/app/components/sections/Hero"
import Portfolio from "@/app/components/sections/Features"
import Testimonials from "@/app/components/sections/OurPartners"
import About from "@/app/components/sections/About"
import Contact from "@/app/components/sections/Contact"
import Footer from "@/app/components/sections/Footer"
import Services from "./components/sections/material"

export default function HomePage() {
  // const [mousePosition] = useState({ x: 0, y: 0 })

  return (
    <div className="relative">
      {/* Cursor Glow Effect */}
      {/* <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20 blur-3xl transition-all duration-300"
        style={{
          background: "radial-gradient(circle, rgba(139,69,255,0.4) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      /> */}
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}