
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const materialsDataFirstLine = [
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material1.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material2.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material3.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material4.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material5.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material6.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material7.jpg" },
];

const materialsDataSecondLine = [
  { title: "Hemp Fiber", description: "Durable and breathable natural fiber.", image: "/material8.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material1.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material2.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material3.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material4.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material5.jpg" },
  { title: "Organic Cotton", description: "Eco-friendly and soft for daily wear.", image: "/material6.jpg" },
  { title: "Recycled Polyester", description: "Made from recycled bottles.", image: "/material7.jpg" },
];

function ScrollableRow({ materials }: { materials: typeof materialsDataFirstLine }) {
  return (
    <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4">
      {materials.map((material, i) => (
        <motion.div
          key={i}
          className="w-[320px] flex-shrink-0 bg-white border border-gray-200 shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="relative w-full pb-[133.33%] mb-6 overflow-hidden group">
            <Image
              src={material.image}
              alt={material.title}
              fill
              sizes="(max-width: 768px) 90vw, 320px"
              className="object-cover"
              priority={i < 2} // preload first 2 images for speed
              unoptimized={false}
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{material.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{material.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function MaterialSection() {
  return (
    <section className="py-20 overflow-hidden bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 blur-3xl pointer-events-none" />

        <div className="text-center mb-20 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-7xl font-bold text-gray-800 mb-8"
          >
            Our Materials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We craft with <span className="text-indigo-600 font-semibold">purpose</span>, selecting fabrics that blend
            sustainability, comfort, and timeless style.
          </motion.p>
        </div>

        <div className="space-y-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ScrollableRow materials={materialsDataFirstLine} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ScrollableRow materials={materialsDataSecondLine} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


