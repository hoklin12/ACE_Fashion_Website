"use client";

import Navigation from "@/app/components/sections/Navigation";
import Hero from "@/app/components/sections/Hero";
import Portfolio from "@/app/components/sections/Features";
import About from "@/app/components/sections/About";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/sections/Footer";
import MaterialsCarousel from "./components/sections/materials";

export default function HomePage() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <MaterialsCarousel />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
