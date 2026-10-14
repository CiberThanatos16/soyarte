import Image from "next/image"
import { Star } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { bookingLink, site } from "@/lib/site"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-68px)] items-center overflow-hidden bg-violet-50"
    >
      {/* Video de fondo (se oculta si la persona prefiere menos movimiento) */}
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/video/art-hero.mp4" type="video/mp4" />
      </video>

      {/* Velo suave para garantizar la legibilidad del texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 pt-12 lg:grid-cols-2 lg:gap-0 lg:py-0">
        {/* Texto */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
            Centro especialista en quiropodia y <span className="text-violet-600">Nail Art</span>
          </h1>

          <p className="mx-auto max-w-xl text-lg text-stone-600 lg:mx-0">
            Donde cada detalle es una obra maestra. Descubre el arte de cuidar tus manos y tu
            belleza.
          </p>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={bookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-white shadow-md transition hover:bg-violet-700"
            >
              <FaWhatsapp />Agendar cita
            </a>
            <a
              href="#precios"
              className="inline-block rounded-full border border-violet-600 bg-white/70 px-6 py-3 text-violet-700 transition hover:bg-violet-100"
            >
              Arma tu servicio
            </a>
          </div>

          <div
            role="img"
            aria-label={`${site.rating.note}: ${site.rating.value} de 5 estrellas`}
            className="flex items-center justify-center gap-2 lg:justify-start"
          >
            <span className="text-stone-900">{site.rating.value}</span>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} aria-hidden="true" className="size-6 fill-amber-500 text-amber-500" />
            ))}
          </div>
        </div>

        {/* Círculos concéntricos + foto (proporciones del diseño original: 600 / 500 / 400) */}
        <div className="relative mx-auto aspect-square w-full max-w-[min(600px,92vw)]">
          <div aria-hidden="true" className="absolute inset-0 rounded-full bg-violet-100" />
          <div aria-hidden="true" className="absolute inset-[8.333%] rounded-full bg-violet-200" />
          <div className="absolute inset-[16.667%] rounded-full bg-violet-400">
            {/* La foto sobresale del círculo, como en el original (300×550 sobre 400) */}
            <div className="absolute left-1/2 top-0 h-[137.5%] w-[75%] -translate-x-1/2">
              <Image
                src="/images/Cap.PNG"
                alt="Profesional de Soy Arte sosteniendo sus herramientas de manicura"
                fill
                priority
                sizes="(min-width: 1024px) 300px, 70vw"
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
