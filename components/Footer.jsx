import { MapPin, MessageCircle } from "lucide-react"
import { InstagramIcon } from "@/components/icons"
import { bookingLink, instagramUrl, mapsUrl, site } from "@/lib/site"

const linkClass =
  "flex items-center gap-2 underline-offset-4 transition-colors hover:text-violet-900 hover:underline"

export function Footer() {
  return (
    <footer id="contacto" className="bg-violet-200 px-6 py-16 text-stone-900">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-2 font-display text-3xl font-light">{site.name}</p>
          <p className="text-sm text-stone-700">{site.tagline}</p>
        </div>

        <ul className="mb-10 flex flex-col items-center justify-center gap-6 text-sm md:flex-row md:gap-8">
          <li>
            <a href={bookingLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <MessageCircle size={18} aria-hidden="true" /> WhatsApp {site.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <InstagramIcon className="size-[18px]" /> @{site.instagramUser}
            </a>
          </li>
          <li>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <MapPin size={18} aria-hidden="true" /> {site.city}
            </a>
          </li>
        </ul>

        <p className="text-center text-xs text-stone-700">
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
