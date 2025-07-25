


"use client";

import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "Collections",
      links: ["Streetwear Magic", "Formal Elegance", "Casual Comfort", "Limited Treasures"],
    },
    {
      title: "Services",
      links: ["Bespoke Creation", "Style Consultation", "Creative Direction", "Fashion Therapy"],
    },
    {
      title: "Connect",
      links: ["Our Story", "Press Kit", "Collaborations", "Join Our Universe"],
    },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="text-4xl font-black text-white">
              <span className="hover:text-indigo-600">A</span>
              <span className="hover:text-orange-600">C</span>
              <span className="hover:text-green-600">E</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Where fashion dreams become reality. Creating extraordinary pieces that speak to the soul and dress the future.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .594 23.406 0 22.675 0z" />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-4.73-4.73 4 4 0 0 1 4.73 4.73z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </Link>

              <Link
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.98-2.48 9.12 9.12 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.12A12.81 12.81 0 0 1 1.64 2.15a4.52 4.52 0 0 0 1.4 6.05 4.49 4.49 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.62 4.43 4.53 4.53 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.15 9.06 9.06 0 0 1-5.6 1.95A9.35 9.35 0 0 1 0 19.54a12.78 12.78 0 0 0 6.92 2.03c8.3 0 12.85-6.87 12.85-12.83 0-.2 0-.42-.02-.63A9.25 9.25 0 0 0 23 3z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-bold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-indigo-600 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ACE Fashion Design Studio. Crafted with Love and endless creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}
