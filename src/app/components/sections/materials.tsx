"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import RevealCard from "@/app/components/util/Revealcard";

const materials = [
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material1.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material2.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material3.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material4.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material5.jpg" },
];

export default function MaterialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Check if screen is mobile or medium on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsMedium(width >= 768 && width < 1024);
      setIsLoaded(true);
    };
    
    // Set initial state immediately if window is available
    if (typeof window !== 'undefined') {
      checkScreenSize();
    }
    
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const materialsPerView = isMobile ? 1 : isMedium ? 2 : 3;
  const totalPages = Math.ceil(materials.length / materialsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.scrollWidth / materials.length;
    const scrollPosition = index * materialsPerView * cardWidth;
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, [materialsPerView]);

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex, scrollToIndex]);

  const visibleMaterials = materials.slice(
    currentIndex * materialsPerView,
    (currentIndex + 1) * materialsPerView
  );

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "tween" as const, ease: "easeInOut", duration: 0.5 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "tween" as const, ease: "easeInOut", duration: 0.5 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };
  
  

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
    setPage([page + newDirection, newDirection]);
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  const dotVariants = {
    active: { scale: 1.25 },
    inactive: { scale: 1 }
  };

  // Don't render until we've detected the screen size
  if (!isLoaded) {
    return (
      <section id="materials" className="py-20 bg-white overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Materials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover sustainable fabrics that combine comfort, purpose, and timeless design.
          </p>
        </div>
        <div className="flex justify-center items-center h-96">
          <div className="animate-pulse  w-full max-w-4xl h-96"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="materials" className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Materials</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover sustainable fabrics that combine comfort, purpose, and timeless design.
        </p>
      </div>

      <div className="relative mx-auto px-6">
        {/* Materials Container */}
        <div
          ref={scrollRef}
          className={`flex items-start justify-center gap-4 overflow-hidden py-4 ${
            isMobile ? 'px-4' : isMedium ? 'px-8' : 'px-12'
          }`}
        >
          {isMobile ? (
            // Mobile: Show all materials in scrollable container
            <div className="flex gap-4 overflow-x-auto scrollbar-hide w-full">
              {materials.map((material, i) => (
                <div
                  key={i}
                  className="h-[420px] w-[260px] sm:w-[280px] flex-shrink-0"
                >
                  <RevealCard
                    title={material.title}
                    description={material.description}
                    image={material.image}
                  />
                </div>
              ))}
            </div>
          ) : (
            // Desktop/Tablet: Show paginated materials
            totalPages <= 1 ? (
              // Show all materials with flip cards when no navigation needed
              <div className="flex gap-4 justify-center">
                {materials.map((material, i) => (
                  <div
                    key={i}
                    className={`h-[420px] md:h-[480px] ${
                      isMobile ? 'w-full max-w-[320px]' : isMedium ? 'flex-1 w-full max-w-[380px]' : 'flex-1 w-full max-w-[350px]'
                    }`}
                  >
                    <RevealCard
                      title={material.title}
                      description={material.description}
                      image={material.image}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <AnimatePresence initial={false} custom={direction} mode="sync">
                {visibleMaterials.map((material, i) => (
                  <motion.div
                    key={`${currentIndex}-${i}`}
                    className={`bg-white border border-gray-200 shadow-md p-4 h-[420px] md:h-[480px] focus:outline-none ${
                      isMobile ? 'w-full max-w-[320px]' : isMedium ? 'flex-1 w-full max-w-[380px]' : 'flex-1 w-full max-w-[350px]'
                    }`}
                    custom={direction}
                    variants={slideVariants as Variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative w-full h-[340px] md:h-[400px] overflow-hidden group cursor-pointer">
                      <Image
                        src={material.image}
                        alt={material.title}
                        width={768}
                        height={1024}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                        priority={i < 3}
                      />
                      {/* Hover Overlay */}
                      {(!isMobile && totalPages > 1) && (
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="flex items-center justify-center mb-2">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                            <p className="text-sm font-medium text-white">See More</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 text-center mt-4">{material.title}</h3>
                  </motion.div>
                ))}
              </AnimatePresence>
            )
          )}
        </div>

        {/* Navigation and Dots Container - Only show on desktop/tablet */}
        {!isMobile && totalPages > 1 && (
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Previous Button */}
            <motion.button
              onClick={() => paginate(-1)}
              className="bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50"
              aria-label="Previous materials"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === currentIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                  variants={dotVariants}
                  animate={i === currentIndex ? "active" : "inactive"}
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={() => paginate(1)}
              className="bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50"
              aria-label="Next materials"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}



