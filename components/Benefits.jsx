import { Gem, HeartHandshake, Sparkles } from "lucide-react"
import { benefits } from "@/lib/data"

const icons = { sparkles: Sparkles, heart: HeartHandshake, gem: Gem }

export function Benefits() {
  return (
    <section className="bg-violet-100 px-6 py-20 md:px-12">
      <div className="mb-14 text-center">
        <p className="mb-4 flex items-center justify-center gap-3 text-xs font-normal uppercase tracking-[0.3em] text-stone-700">
          <span aria-hidden="true" className="block h-px w-7 bg-stone-600" />
          Por qué elegirnos
          <span aria-hidden="true" className="block h-px w-7 bg-stone-600" />
        </p>
        <h2 className="font-display text-4xl font-light leading-tight text-stone-900">
          Una experiencia diseñada
          <br />
          para <em className="italic text-violet-700">tu bienestar</em>
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px border border-violet-300 bg-violet-300 md:grid-cols-3">
        {benefits.map((b) => {
          const Icon = icons[b.icon]
          return (
            <article
              key={b.title}
              className="group relative flex flex-col overflow-hidden bg-white p-10 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-500 hover:bg-stone-900 hover:after:w-full motion-reduce:transition-none"
            >
              <span className="mb-7 flex size-14 items-center justify-center rounded-full bg-violet-100 text-violet-700 transition-colors duration-300 group-hover:bg-violet-500 group-hover:text-white">
                <Icon size={26} aria-hidden="true" />
              </span>

              <h3 className="mb-4 font-display text-[26px] font-light leading-tight text-stone-900 transition-colors duration-300 group-hover:text-white">
                {b.title}
              </h3>

              <div
                aria-hidden="true"
                className="mb-4 h-px w-6 bg-gold transition-all duration-300 group-hover:w-11"
              />

              <p className="text-base leading-[1.85] text-stone-700 transition-colors duration-300 group-hover:text-stone-200">
                {b.body}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
