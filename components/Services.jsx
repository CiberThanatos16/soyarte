import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { gallery } from "@/lib/data"
import { bookingLink } from "@/lib/site"

// Grilla de 6 columnas en desktop: fila 1 = 2 + 4, fila 2 = 2 + 2 + 2 (sin huecos).
const spans = {
  large: "lg:col-span-2",
  wide: "lg:col-span-4",
  small: "lg:col-span-2",
  "small-last": "sm:col-span-2 lg:col-span-2",
}

export function Services() {
  return (
    <section id="servicios" className="px-6 py-20 md:px-8">
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs font-normal uppercase tracking-[0.25em] text-gold-ink">
          Nuestros servicios
        </p>
        <h2 className="font-display text-4xl font-light leading-snug text-stone-900 md:text-[42px]">
          Realza tu estilo con <em className="text-violet-600">elegancia</em>
          <br />y <em className="text-violet-600">perfección</em>
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-[480px_320px]">
        {gallery.map((s) => (
          <a
            key={s.id}
            href={bookingLink(`Hola, quiero reservar: ${s.title}`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block aspect-[4/3] overflow-hidden bg-stone-900 lg:aspect-auto ${spans[s.span]}`}
          >
            <Image
              src={s.img}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-colors duration-300 group-hover:from-black/95 group-hover:via-black/55"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <span aria-hidden="true" className="font-display text-[13px] font-light tracking-widest text-gold-soft">
                {s.id}
              </span>

              <div className="flex flex-col gap-2">
                <div aria-hidden="true" className="h-px w-7 bg-gold transition-all duration-300 group-hover:w-14" />
                <h3
                  className={`font-display font-light leading-snug text-[#f5f0ea] ${
                    s.span === "large" || s.span === "wide" ? "text-[26px]" : "text-[22px]"
                  }`}
                >
                  {s.title}
                </h3>
                {/* Siempre visible en pantallas táctiles; en desktop aparece con hover o foco */}
                <span className="flex items-center gap-1.5 text-[11px] font-normal uppercase tracking-[0.2em] text-gold-soft transition-all duration-300 lg:translate-y-1.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                  Reservar <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#precios"
          className="inline-block border border-violet-600 px-10 py-4 text-[11px] font-normal uppercase tracking-[0.2em] text-violet-700 transition-colors duration-300 hover:bg-violet-600 hover:text-white"
        >
          Ver precios de todos los servicios
        </a>
      </div>
    </section>
  )
}
