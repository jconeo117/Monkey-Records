import Image from 'next/image'
import demo from '../../../public/studio.jpg'

export const About = () => {
  return (
    <section id='Nosotros' className='w-screen my-10 h-fit'>
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <div className='w-full max-w-md p-4'>
          <h2 className='my-4 text-2xl font-extrabold text-yellow-400/60 md:text-3xl'>
            Acerca de monkey records
          </h2>
          <p className='text-xl text-yellow-400/60'>
            Monkey Records es una empresa dedicada a la producción musical y
            audiovisual en Montería, Córdoba, Colombia. Con un equipo altamente
            capacitado y una amplia experiencia en el campo, Monkey Records
            brinda soluciones integrales para artistas y músicos en una empresa
            en crecimiento. Desde la producción de contenido hasta la
            organización de shows en vivo y la gestión de redes sociales, Monkey
            Records asegura que cada proyecto tenga el impacto que se merece.
            Con un enfoque en la calidad y la satisfacción del cliente, Monkey
            Records es el compañero perfecto para llevar su carrera musical al
            siguiente nivel.
          </p>
        </div>
        <div className='w-full max-w-2xl md:ml-10'>
          <Image src={demo} alt='demo' />
        </div>
      </div>
    </section>
  )
}
