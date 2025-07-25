

"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navigation() {
  const [isAtTop, setIsAtTop] = useState(true)

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        bg-white
        ${isAtTop ? "shadow-none" : "shadow-md"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="text-xl font-black text-black tracking-wide">
            <span className="hover:text-indigo-600">A</span>
            <span className="hover:text-orange-600">C</span>
            <span className="hover:text-green-600">E</span>
        </div>

        {/* Center: Nav links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-10">
          {["Home", "Materials", "Portfolio", "About", "Partners", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors duration-200"
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  )
}

