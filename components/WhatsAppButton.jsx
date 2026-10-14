import { MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

import { bookingLink } from "@/lib/site"

export function WhatsAppButton() {
  return (
    <a
      href={bookingLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar cita por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg transition hover:scale-105 hover:bg-violet-700 motion-reduce:transition-none"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <FaWhatsapp size={26} aria-hidden="true" />
    </a>
  )
}
