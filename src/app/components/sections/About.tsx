'use client'

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 ">
              About Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              At ACE, we believe clothing is more than just fabric and
              it&apos;s a reflection of your identity. Our curated collections blend timeless 
              design with modern trends to help you express your true self. Whether you&apos;re 
              dressing for comfort, confidence, or creativity, we&apos;re here to bring your 
              wardrobe to life with quality, style, and heart.
            </p>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/about.jpg"
                alt="Wellness Practice"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
