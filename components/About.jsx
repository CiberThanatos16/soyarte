import Image from "next/image"
import { Star } from "lucide-react"
import { site } from "@/lib/site"

export function About() {
  return (
    <section id="nosotros" className="overflow-hidden bg-cream px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Texto */}
        <div className="flex flex-col">
          <span className="mb-4 flex items-center gap-3 text-xs font-normal uppercase tracking-[0.3em] text-violet-700">
            <span aria-hidden="true" className="block h-px w-8 bg-violet-600" />
            Soy Arte
          </span>

          <h2 className="mb-8 font-display text-4xl font-light leading-tight text-ink md:text-5xl">
            Tu Belleza,
            <br />
            <em className="italic text-violet-600">Nuestra Pasión</em>
          </h2>

          <p className="max-w-prose text-base leading-[1.9] text-body">
            En <span className="font-medium text-ink">Soy Arte</span>, creemos que cada persona es
            una obra de arte única. Nuestro equipo de profesionales se dedica a resaltar tu belleza
            natural con técnicas de vanguardia y los mejores productos del mercado.
          </p>

          <div aria-hidden="true" className="my-6 h-px w-10 bg-[#d4c4b0]" />

          <p className="max-w-prose text-base leading-[1.9] text-body">
            Desde manicuras artísticas hasta tratamientos faciales rejuvenecedores, cada servicio
            está diseñado para brindarte una experiencia de lujo y relajación incomparable.
          </p>

          {site.stats?.length > 0 && (
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-6 border-t border-[#e8e0d5] pt-7">
              {site.stats.map(({ num, label }) => (
                <div key={label} className="flex flex-col-reverse gap-1">
                  <dt className="text-xs uppercase tracking-[0.12em] text-muted">{label}</dt>
                  <dd className="font-display text-4xl font-light leading-none text-ink">{num}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {/* Imagen */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="absolute -bottom-4 -right-4 left-4 top-4 z-0 border border-[#d4c4b0]" />

          <div className="relative z-10 aspect-[3/4] overflow-hidden">
            <Image
              src="/images/nails-flower.jpg"
              alt="Manicura con diseño floral realizada en Soy Arte"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>

          {/* Badge: pasa de negro a violeta para encajar con la paleta */}
          <div className="absolute -bottom-5 -right-3 z-20 flex size-24 flex-col items-center justify-center bg-violet-700 text-white sm:-right-5">
            <Star aria-hidden="true" className="size-6 fill-gold-soft text-gold-soft" />
            <span className="mt-1 text-center text-[11px] uppercase leading-tight tracking-[0.12em]">
              Premium
              <br />
              Studio
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
