"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { bookingLink, navLinks } from "@/lib/site"

export function Navbar() {
  const [open, setOpen] = useState(false)

  // Cierra el menú móvil con Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-violet-100 bg-violet-100/85 backdrop-blur-lg">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 lg:px-12"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="font-display text-[26px] font-light tracking-[0.06em] text-stone-900 no-underline"
        >
          Soy <span className="text-violet-600">Arte</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs font-normal uppercase tracking-[0.2em] text-stone-900 no-underline transition-colors duration-200 hover:text-violet-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={bookingLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-violet-600 px-6 py-3 text-xs uppercase tracking-[0.2em] text-violet-700 transition-colors duration-300 hover:bg-violet-600 hover:text-white md:inline-block"
        >
          Agendar cita
        </a>

        {/* Botón móvil */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="-mr-2 p-2.5 text-stone-900 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div
          id="menu-movil"
          className="animate-fade-in border-t border-violet-200 bg-violet-50 px-6 pb-6 pt-2 motion-reduce:animate-none md:hidden"
        >
          <ul>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={close}
                  className="block border-b border-violet-100 py-4 text-sm uppercase tracking-[0.2em] text-stone-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={bookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-6 block rounded-full bg-violet-600 py-4 text-center text-sm uppercase tracking-[0.2em] text-white hover:bg-violet-700"
          >
            <FaWhatsapp /> Agendar cita
          </a>
        </div>
      )}
    </header>
  )
}
