"use client";

import Image from "next/image";

const partnersData = [
  { id: 1, name: "Company A", logo: "/file_001.png" },
  { id: 2, name: "Company B", logo: "/file_002.png" },
  { id: 3, name: "Company C", logo: "/file_003.png" },
  { id: 4, name: "Company D", logo: "/file_004.png" },
  { id: 5, name: "Company E", logo: "/file_005.png" },
  { id: 6, name: "Company F", logo: "/file_008.png" },
];

const ROWS = 3;
const logoWidth = 160;
const spacing = 32;
const totalLogoWidth = logoWidth + spacing;

export default function OurPartners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Partners
        </h2>

        <div className="space-y-12">
          {Array.from({ length: ROWS }).map((_, rowIndex) => {
            const duration = 30 + rowIndex * 10;
            const direction = rowIndex % 2 === 0 ? "normal" : "reverse";

            return (
              <div
                key={rowIndex}
                className="overflow-hidden"
                style={{ height: 100 }}
              >
                <div
                  className="flex whitespace-nowrap animate-scroll"
                  style={{
                    animationDuration: `${duration}s`,
                    animationDirection: direction,
                  }}
                >
                  {[...partnersData, ...partnersData].map((partner, idx) => (
                    <div
                      key={`${partner.id}-${idx}`}
                      className="flex-shrink-0 mx-4"
                      style={{ width: logoWidth }}
                    >
                      <div className="relative mx-auto h-20 w-full">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                          sizes={`${logoWidth}px`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${totalLogoWidth * partnersData.length}px));
          }
        }

        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-play-state: running;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
