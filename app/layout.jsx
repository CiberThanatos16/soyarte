import { Cormorant_Garamond, Jost } from "next/font/google"
import "./globals.css"
import { instagramUrl, site } from "@/lib/site"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
})

export const metadata = {
  title: "Soy Arte | Quiropodia, nail art y belleza en Ciudad de México",
  description: site.description,
  openGraph: {
    title: "Soy Arte | Quiropodia y nail art",
    description: site.description,
    locale: "es_MX",
    type: "website",
    siteName: site.name,
  },
}

// Datos estructurados para buscadores. TODO: agregar telephone/openingHours cuando sean reales.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: site.name,
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "MX" },
  sameAs: [instagramUrl],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-white font-body text-ink antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-violet-700"
        >
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
