"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const factoryImages = ["/Factory/factory_1.png", "/Factory/factory_2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % factoryImages.length);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [factoryImages.length]);

  return (
    <section id="about" className="h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">
          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About Us
            </h2>
            <div className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                At ACE UNIFORM, we specialize in providing high-quality,
                comfortable, and professional uniforms for schools, businesses,
                healthcare institutions, and organizations of all sizes.
              </p>
              <p>
                With a commitment to durability, style, and functionality, our
                mission is to help teams look unified and feel confident every
                day. We understand that uniforms are more than just
                clothing—they represent identity, discipline, and pride.
              </p>
              <p>
                We&apos;ve worked with clients across various industries to
                deliver uniforms that meet their unique needs and reflect their
                values. Whether it&apos;s custom designs, branded apparel, or
                standard sets, we combine quality materials with exceptional
                service to ensure satisfaction from order to delivery.
              </p>
              <p className="font-semibold text-gray-800">
                We&apos;re proud to be your trusted partner in uniform
                solutions.
              </p>
            </div>
          </div>

          {/* Image Side with auto-swapping */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {factoryImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`ACE Fashion Manufacturing Facility ${index + 1}`}
                  width={800}
                  height={600}
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              ))}

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {factoryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`View factory image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
