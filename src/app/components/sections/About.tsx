'use client'

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          {/* Text Side */}
          <div className="w-full lg:w-1/2 ">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About ACE
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Enjoy all your favorite wellness content in one convenient place.
              ACE seamlessly integrates the four pillars of wellness,
              transforming everyday living into a health-centered experience and
              increasing your longevity.
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
