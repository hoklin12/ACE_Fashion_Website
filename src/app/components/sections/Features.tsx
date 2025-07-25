"use client";

import Image from "next/image";
import { features } from "@/data/features";
import { useEffect, useRef } from "react";

const groupedByCategory = features.reduce<Record<string, typeof features>>((acc, product) => {
  acc[product.category] = acc[product.category] || [];
  acc[product.category].push(product);
  return acc;
}, {});

export default function Feature() {
  const scrollContainersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Don't run the animation on mobile devices (screen width less than 768px)
    if (window.innerWidth < 768) return;

    // Auto-scroll slightly and bounce back to indicate scrollability
    const containers = scrollContainersRef.current.filter(Boolean) as HTMLDivElement[];
    
    containers.forEach(container => {
      // Only animate if container is scrollable
      if (container.scrollWidth > container.clientWidth) {
        const scrollAmount = 100; // Adjust this value as needed
        const animation = container.animate(
          [
            { scrollLeft: 0 },
            { scrollLeft: -scrollAmount }, // Scroll left first
            { scrollLeft: scrollAmount }, // Then scroll right
            { scrollLeft: 0 } // Then back to center
          ],
          {
            duration: 1500, // Slightly longer duration for the additional step
            easing: 'ease-in-out',
            delay: 1000
          }
        );
        
        // Clean up animation when component unmounts
        return () => animation.cancel();
      }
    });
  }, []);

  const setScrollContainerRef = (el: HTMLDivElement | null, index: number) => {
    scrollContainersRef.current[index] = el;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">Featured Clothing</h2>

        {Object.entries(groupedByCategory).map(([category, items], index) => (
          <div key={category} className="mb-12">
            <h3 className="mb-10">
              <span className="inline-block bg-gray-200 backdrop-blur-sm px-4 py-2 text-2xl font-semibold text-gray-800">
                {category}
              </span>
            </h3>
            
            {/* Horizontal Product Scroll */}
            <div className="relative">
              {/* Fade-out effect on both sides - hidden on mobile */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
              
              <div 
                ref={el => setScrollContainerRef(el, index)}
                className="overflow-x-auto pb-4 scrollbar-hide"
              >
                <div className="flex gap-6 md:gap-10 w-max px-4 md:px-0">
                  {items.map((product) => (
                    <div
                      key={product.id}
                      className="w-[260px] sm:w-[280px] md:w-[360px] h-[420px] md:h-[480px] flex-shrink-0 bg-white overflow-hidden flex flex-col shadow-sm"
                    >
                      {/* Image Container */}
                      <div className="relative w-full h-[340px] md:h-[400px] overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={768}
                          height={1024}
                          className="object-contain w-full h-full transition-opacity duration-300"
                        />
                        <Image
                          src={product.hoverImage}
                          alt={`${product.title} hover`}
                          width={768}
                          height={1024}
                          className="object-contain w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      {/* Title + Description */}
                      <div className="p-4 flex-1 flex flex-col justify-start text-center">
                        <h4 className="text-base font-semibold text-gray-800">{product.title}</h4>
                        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}