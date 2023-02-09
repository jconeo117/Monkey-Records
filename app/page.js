import { About } from './components/sections/about'
import { Inicio } from './components/sections/inicio'
import Navbar from './components/navbar'
import { Services } from './components/sections/services'

export default function Home () {
  return (
    <>
      <Navbar />
      <Inicio />
      <About />
      <Services />
    </>
  )
}
