"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const materials = [
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material1.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material2.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material3.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material4.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material5.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material6.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material7.jpg" },
];

const repeatCount = 3;
const scrollSpeed = 1.5;
const autoScrollSpeed = 1;

export default function MaterialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const tripledMaterials = [...Array(repeatCount)].flatMap(() => materials);

  const checkScrollBoundaries = () => {
    const container = scrollRef.current;
    if (!container) return;
    const third = container.scrollWidth / 3;
    if (container.scrollLeft <= 1) {
      container.scrollLeft = third + 1;
    } else if (container.scrollLeft >= third * 2 - 1) {
      container.scrollLeft = third - 1;
    }
  };

  const autoScroll = useCallback(() => {
    if (!scrollRef.current || isHovered || isDragging) {
      animationRef.current = requestAnimationFrame(autoScroll);
      return;
    }
    scrollRef.current.scrollLeft += autoScrollSpeed;
    checkScrollBoundaries();
    animationRef.current = requestAnimationFrame(autoScroll);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * scrollSpeed;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
    animationRef.current = requestAnimationFrame(autoScroll);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollLeft = container.scrollWidth / 3;
    container.addEventListener("scroll", checkScrollBoundaries, { passive: true });
    return () => {
      container.removeEventListener("scroll", checkScrollBoundaries);
    };
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoScroll]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Materials</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover sustainable fabrics that combine comfort, purpose, and timeless design.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex items-start gap-6 overflow-x-auto whitespace-nowrap px-6 py-4 scrollbar-hide cursor-grab"
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        {tripledMaterials.map((material, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 shadow-md p-4 flex-shrink-0 w-[280px]"
            style={{ minWidth: "280px" }}
          >
            <div className="relative w-full pb-[133.33%] mb-4 overflow-hidden">
              <Image
                src={material.image}
                alt={material.title}
                fill
                sizes="(max-width: 768px) 80vw, 280px"
                className="object-cover"
                unoptimized
                priority={i < 6}
              />
            </div>
            <h3 className="text-md font-semibold text-gray-800 mb-1">{material.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{material.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



