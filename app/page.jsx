import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { About } from "@/components/About"
import { Benefits } from "@/components/Benefits"
import { MenuServices } from "@/components/MenuServices"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="pt-[68px]">
        <Hero />
        <Services />
        <About />
        <Benefits />
        <MenuServices />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
