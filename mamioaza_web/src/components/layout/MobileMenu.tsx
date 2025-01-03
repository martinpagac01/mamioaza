'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary p-2"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-yellow-main shadow-lg">
          <div className="py-2">
            <Link
              href="#aktivity"
              className="block px-4 py-2 text-primary hover:bg-yellow-200"
              onClick={() => setIsOpen(false)}
            >
              Aktivity
            </Link>
            <Link
              href="#kontakt"
              className="block px-4 py-2 text-primary hover:bg-yellow-200"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <Link
              href="#otvaracie-hodiny"
              className="block px-4 py-2 text-primary hover:bg-yellow-200"
              onClick={() => setIsOpen(false)}
            >
              Otváracie Hodiny
            </Link>
            <Link
              href="#podpora"
              className="block px-4 py-2 text-primary hover:bg-yellow-200"
              onClick={() => setIsOpen(false)}
            >
              2% z dane
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
