// Datos del negocio en un solo lugar: todos los CTAs usan el mismo enlace.
export const site = {
  name: "Soy Arte",
  tagline: "Estudio de Belleza & Manicura",
  description:
    "Centro especialista en quiropodia y nail art. Manicura, pedicura, tratamientos faciales, cejas y pestañas en Ciudad de México.",
  city: "Ciudad de México",

  // TODO: reemplazar por los datos reales del negocio.
  whatsapp: "529934014856", // formato internacional, sin "+" ni espacios
  phoneDisplay: "+52 993 401 4856",
  instagramUser: "soyarte.studio",

  // Los precios del menú se muestran con esta moneda.
  currency: "MXN",

  // TODO: confirmar origen de la calificación (Google, Instagram…) y número de reseñas.
  rating: { value: "5.0", note: "Calificación de nuestras clientas" },

  // TODO: confirmar que son datos reales; si no, borrar este arreglo.
  stats: [
    { num: "8+", label: "Años de experiencia" },
    { num: "500+", label: "Clientas satisfechas" },
    { num: "15+", label: "Servicios premium" },
  ],
}

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
]

export const instagramUrl = `https://instagram.com/${site.instagramUser}`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name} ${site.city}`
)}`

export function bookingLink(message = "Hola, quiero agendar una cita en Soy Arte.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}
