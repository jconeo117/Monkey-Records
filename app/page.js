import { About } from './components/sections/about'
import { Inicio } from './components/sections/inicio'
import Navbar from './components/navbar'
import { Services } from './components/sections/services'
import { Contacto } from './components/sections/contacto'
import { Footer } from './components/sections/footer'
import { Novedades } from './components/sections/novedades'

export default function Home () {
  return (
    <>
      <Navbar />
      <Inicio />
      <About />
      <Services />
      <Novedades />
      <Contacto />
      <Footer />
    </>
  )
}
