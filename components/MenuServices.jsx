"use client"

import { useState } from "react"
import { ChevronDown, Droplets, Flower2, Gem, Hand, Scissors, Sparkles } from "lucide-react"
import { menu } from "@/lib/data"
import { bookingLink, site } from "@/lib/site"

const icons = {
  hand: Hand,
  droplets: Droplets,
  flower: Flower2,
  sparkles: Sparkles,
  scissors: Scissors,
  gem: Gem,
}

export function MenuServices() {
  // La primera categoría arranca abierta: se ven precios sin hacer clic.
  const [openCategory, setOpenCategory] = useState(menu[0].category)

  return (
    <section id="precios" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-center text-sm font-normal uppercase tracking-[0.4em] text-gold-ink">
          Nuestros Servicios
        </p>
        <h2 className="mb-4 text-center font-display text-4xl font-light text-ink md:text-5xl">
          Menú de Belleza
        </h2>
        <p className="mx-auto mb-2 max-w-md text-center text-base text-body">
          Selecciona una categoría para ver todos los servicios disponibles y agendar tu cita.
        </p>
        <p className="mb-14 text-center text-sm text-muted">
          Precios en pesos mexicanos ({site.currency}).
        </p>

        <div className="space-y-3">
          {menu.map((cat, index) => {
            const isOpen = openCategory === cat.category
            const Icon = icons[cat.icon]
            const panelId = `panel-${index}`
            const buttonId = `acc-${index}`

            return (
              <div key={cat.category} className="overflow-hidden rounded-sm border border-[#e3dbd0] bg-white">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenCategory(isOpen ? null : cat.category)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-violet-50"
                  >
                    <span className="flex items-center gap-4">
                      <Icon className="size-5 text-violet-700" aria-hidden="true" />
                      <span className="font-display text-xl font-medium text-ink">{cat.category}</span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 text-muted transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="animate-fade-in border-t border-[#e3dbd0] motion-reduce:animate-none"
                  >
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-[#efe9e0] px-6 py-4 last:border-b-0 hover:bg-violet-50/60"
                      >
                        <div>
                          <p className="text-base font-medium text-ink">{item.name}</p>
                          <p className="mt-0.5 text-sm text-muted">{item.duration}</p>
                        </div>
                        <div className="flex items-center gap-5">
                          <span className="font-display text-xl font-semibold text-gold-ink">
                            {item.price}
                          </span>
                          {/* Siempre visible: antes dependía del hover y no funcionaba en móvil */}
                          <a
                            href={bookingLink(`Hola, quiero reservar: ${item.name}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Reservar ${item.name} por WhatsApp`}
                            className="text-xs font-medium uppercase tracking-widest text-violet-700 underline-offset-4 hover:underline"
                          >
                            Reservar
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
