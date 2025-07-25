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

  return (
    <div className="relative">
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