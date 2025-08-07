"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import RevealCard from "@/app/components/util/Revealcard";

const materials = [
  {
    title: "Organic Cotton",
    description: "Eco-friendly and soft for daily wear.",
    image: "/material.jpg",
  },
  {
    title: "Recycled Polyester",
    description: "Made from recycled bottles.",
    image: "/material1.jpg",
  },
  {
    title: "Organic Cotton",
    description: "Eco-friendly and soft for daily wear.",
    image: "/material2.jpg",
  },
  {
    title: "Recycled Polyester",
    description: "Made from recycled bottles.",
    image: "/material3.jpg",
  },
  {
    title: "Organic Cotton",
    description: "Eco-friendly and soft for daily wear.",
    image: "/material4.jpg",
  },
  {
    title: "Recycled Polyester",
    description: "Made from recycled bottles.",
    image: "/material5.jpg",
  },
];

export default function MaterialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsMedium(width >= 768 && width < 1024);
      setIsLoaded(true);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const materialsPerView = isMobile ? 1 : isMedium ? 2 : 3;
  const totalPages = Math.ceil(materials.length / materialsPerView);
  const visibleMaterials = materials.slice(
    currentIndex * materialsPerView,
    (currentIndex + 1) * materialsPerView
  );

  const paginate = (newDirection: number) => {
    if (isExpanded) {
      setIsExpanded(false);
      setTimeout(() => {
        setExpandedCardIndex(null);
        setDirection(newDirection);
        setCurrentIndex(
          (prev) => (prev + newDirection + totalPages) % totalPages
        );
      }, 100);
    } else {
      setDirection(newDirection);
      setCurrentIndex(
        (prev) => (prev + newDirection + totalPages) % totalPages
      );
    }
  };

  const handleCardClick = (index: number) => {
    if (isMobile) return;

    if (expandedCardIndex === index) {
      setIsExpanded(false);
      setTimeout(() => setExpandedCardIndex(null), 300);
    } else {
      if (isExpanded) {
        setExpandedCardIndex(index);
      } else {
        setExpandedCardIndex(index);
        setIsExpanded(true);
      }
    }
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 960, damping: 50 },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
      transition: { type: "spring", stiffness: 960, damping: 50 },
    }),
  };

  const detailVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: [0.55, 0.055, 0.675, 0.19],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    initial: { scale: 1 },
    expanded: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    collapsed: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;
  const swipeConfidenceThreshold = 10000;

  if (!isLoaded) {
    return (
      <section id="materials" className="py-20 bg-white overflow-hidden">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Materials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover sustainable fabrics that combine comfort, purpose, and
            timeless design.
          </p>
        </div>
        <div className="flex justify-center items-center h-[480px]">
          <div className="animate-pulse w-full max-w-6xl h-full rounded-lg"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="materials" className="py-20 bg-white overflow-x-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Materials</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover sustainable fabrics that combine comfort, purpose, and
          timeless design.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative h-[480px] flex items-center justify-center">
          {isMobile ? (
            <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4 w-full">
              {materials.map((material, i) => (
                <div key={i} className="h-[373px] w-[280px] flex-shrink-0">
                  <RevealCard {...material} />
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full"
                drag={isExpanded ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(1);
                  else if (swipe > swipeConfidenceThreshold) paginate(-1);
                }}
              >
                <motion.div
                  className="flex h-full w-full"
                  style={{ gap: isMedium ? 24 : 32 }}
                >
                  {visibleMaterials.map((material, i) => {
                    const isCardExpanded =
                      expandedCardIndex === i && isExpanded;

                    return (
                      <motion.div
                        key={i}
                        layout
                        transition={{
                          layout: {
                            type: "spring",
                            stiffness: 200,
                            damping: 25,
                          },
                        }}
                        variants={cardVariants}
                        initial="initial"
                        animate={isCardExpanded ? "expanded" : "collapsed"}
                        onClick={() => handleCardClick(i)}
                        /* MODIFIED: Added 'group' class for hover effect */
                        className="relative bg-white border border-gray-200 shadow-md cursor-pointer overflow-hidden flex flex-col group"
                        style={{
                          flexGrow: isCardExpanded ? 2 : 0.5,
                          flexBasis: isCardExpanded ? "auto" : "0",
                          flexShrink: 1,
                          minWidth: isCardExpanded ? "0" : "150px",
                        }}
                        whileHover={{
                          y: isExpanded ? 0 : -8,
                          transition: {
                            duration: 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          },
                        }}
                      >
                        <div className="w-full h-full relative z-0">
                          <Image
                            src={material.image}
                            alt={material.title}
                            layout="fill"
                            objectFit="cover"
                            unoptimized
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center p-6">
                            <h3 className="text-lg font-semibold text-white">
                              {material.title}
                            </h3>
                          </div>
                          {/* ADDED: "See More" overlay on hover for md+ screens */}
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                            <div className="text-white text-center">
                              <div className="flex items-center justify-center mb-2">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              </div>
                              <p className="text-sm font-medium text-white">
                                See More
                              </p>
                            </div>
                          </div>
                        </div>
                        <AnimatePresence>
                          {isCardExpanded && (
                            <motion.div
                              className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 bg-white"
                              variants={detailVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                            >
                              <motion.h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {material.title}
                              </motion.h3>
                              <motion.p className="text-gray-600 leading-relaxed text-lg mb-6">
                                {material.description}
                              </motion.p>
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCardClick(i);
                                }}
                                className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                                whileHover={{ scale: 1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Close
                              </motion.button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {!isMobile && totalPages > 1 && (
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              onClick={() => paginate(-1)}
              className="bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50"
              aria-label="Previous materials"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <div className="flex space-x-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    if (isExpanded) {
                      setIsExpanded(false);
                      setTimeout(() => {
                        setExpandedCardIndex(null);
                        setCurrentIndex(i);
                      }, 300);
                    } else {
                      setCurrentIndex(i);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentIndex
                      ? "bg-gray-800"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                  animate={{ scale: i === currentIndex ? 1.25 : 1 }}
                  whileHover={{ scale: 1.02 }}
                />
              ))}
            </div>

            <motion.button
              onClick={() => paginate(1)}
              className="bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50"
              aria-label="Next materials"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
