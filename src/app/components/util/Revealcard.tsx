"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface RevealCardProps {
  title: string;
  description: string;
  image: string;
  width?: number;
  height?: number;
}

export default function RevealCard({ title, description, image, width = 768, height = 1024 }: RevealCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative w-full h-full cursor-pointer focus:outline-none" 
      style={{ perspective: "1000px" }}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div 
          className="absolute w-full h-full"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          <div className="bg-white border border-gray-200 shadow-md p-4 h-full w-full flex flex-col">
            <div className="relative w-full h-[340px] md:h-[400px] overflow-hidden group cursor-pointer flex-shrink-0">
              <Image
                src={image}
                alt={title}
                width={width}
                height={height}
                className="object-cover w-full h-full pointer-events-none"
                unoptimized
                priority
              />
              {/* Hover Overlay */}
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
            </div>
            <h3 className="text-sm font-semibold text-gray-800 text-center mt-4 flex-shrink-0">{title}</h3>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute w-full h-full"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="bg-white border border-gray-200 shadow-md p-4 h-full w-full flex flex-col justify-center items-center">
            <div className="text-center px-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
