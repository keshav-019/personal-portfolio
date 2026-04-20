'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#approach', label: 'Approach' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-2 sm:px-4 sm:py-3">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-teal-900/10 bg-white/90 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-md md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="display-font flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-700 text-white">KK</span>
            <span className="hidden sm:block">Keshav Kumar Jha</span>
          </Link>

          <div className="hidden items-center gap-5 text-sm font-semibold text-slate-700 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-teal-700">
                {item.label}
              </a>
            ))}
          </div>

          <a href="/resume.pdf" download className="secondary-button hidden text-sm md:inline-flex">
            Resume
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-teal-900/15 text-slate-700 md:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaXmark className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-3 border-t border-teal-900/10 pt-3 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="secondary-button mt-1 w-full text-sm"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
