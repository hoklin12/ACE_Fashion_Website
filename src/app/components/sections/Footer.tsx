"use client";

import Link from "next/link";

export default function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        "Uniforms",
        "Blouses & Dresses",
        "T-Shirts & Polo",
        "Lab Coats",
        "Work Wear",
        "Long Sleeve",
        "Jackets",
      ],
    },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Brand Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
            <div className="text-center lg:text-left">
              <div className="text-white">
                <span className="text-2xl font-black">ACE UNIFORM</span>
              </div>
              <p className="text-gray-400 text-sm mt-2 max-w-xs">
                Professional uniform solutions for schools, businesses,
                healthcare institutions, and organizations.
              </p>
            </div>

            <div className="text-gray-400 text-xs space-y-2 text-center lg:text-left">
              <p>Email: sales@aceuniform.co</p>
              <p>Phone: (65) 80683786</p>
              <p>
                51 Bukit Batok Crescent #06-07, Unity Centre, Singapore 658077
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4 justify-center lg:justify-start pt-2">
                <Link
                  href="https://www.facebook.com/aceuniform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .594 23.406 0 22.675 0z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.instagram.com/aceuniform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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
                  href="https://twitter.com/aceuniform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.98-2.48 9.12 9.12 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.12A12.81 12.81 0 0 1 1.64 2.15a4.52 4.52 0 0 0 1.4 6.05 4.49 4.49 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.62 4.43 4.53 4.53 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.15 9.06 9.06 0 0 1-5.6 1.95A9.35 9.35 0 0 1 0 19.54a12.78 12.78 0 0 0 6.92 2.03c8.3 0 12.85-6.87 12.85-12.83 0-.2 0-.42-.02-.63A9.25 9.25 0 0 0 23 3z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Products Section - Horizontal */}
          <div className="flex flex-col items-center lg:items-end">
            <h3 className="text-sm font-bold text-white mb-3">Products</h3>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {footerSections[0].links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href="#"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-300 text-xs bg-gray-800 px-2 py-1 rounded"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-4 mt-6 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} ACE UNIFORM. Your trusted partner
            in uniform solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
