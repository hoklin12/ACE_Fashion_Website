"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // ✅ Import Image

const slides = [
  { id: 1, image: "/banner1.jpg" },
  { id: 2, image: "/banner2.jpg" },
  { id: 3, image: "/banner3.jpg" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(slides.map(() => false));

  // Preload images
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new window.Image(); // browser image preloading
      img.src = slide.image;
      img.onload = () => {
        setLoaded((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      };
    });
  }, []);

  // Auto switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full bg-white pt-10">
      {/* Slides with 16:9 ratio */}
      <div className="relative w-full aspect-video overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {!loaded[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse z-30" />
            )}
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              priority // ✅ forces eager loading
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full border border-white cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "bg-white/90 scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
