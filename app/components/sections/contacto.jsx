import facebook from '../../../public/facebook.svg'
import youtube from '../../../public/youtube.svg'
import instagram from '../../../public/instagram.svg'
import tiktok from '../../../public/tik_tok.svg'
import Image from 'next/image'

const Redes = [
  { label: 'Instagram', href: '#', icon: instagram },
  { label: 'Facebook', href: '#', icon: facebook },
  { label: 'Youtube', href: '#', icon: youtube },
  { label: 'TikTok', href: '#', icon: tiktok }
]

export const Contacto = () => {
  return (
    <section id='Contacto' className='w-full py-16 h-fit bg-red-900/30'>
      <div className=''>
        <h2 className='my-10 text-4xl font-extrabold text-center text-gray-200 underline md:text-6xl'>
          Redes Sociales
        </h2>
        <div className='flex flex-col items-center justify-center md:flex-row'>
          {Redes.map(({ label, href, icon }) => (
            <a href={href} key={label} className='flex flex-col items-center justify-center gap-5 p-10 mx-10 mt-8 transition-all duration-200 ease-in border-2 border-gray-200 rounded-md hover:border-yellow-400/60 md:mt-4 h-fit w-44'>
              <Image src={icon} alt={label} className='w-10' />
              <p className='text-lg font-semibold text-gray-200'>{label}</p>
            </a>
          ))}
        </div>
        <div className='py-10 my-5'>
          <h2 className='my-10 text-4xl text-center text-gray-200 underline font-abold md:text-6xl'>
            Contacto
          </h2>
          <div>
            <p className='my-10 text-2xl font-bold text-center text-gray-200 md:text-6xl'>Whatsapp: <span className='text-yellow-400/60'>+57 304 4128512</span> </p>
            <p className='my-5 text-2xl font-bold text-center text-gray-200 md:text-4xl'>Correo: <span className='text-yellow-400/60'>Monkeyrecords@gmail.com</span> </p>
          </div>
          <p className='w-full mx-auto my-24 text-xl text-center md:text-3xl md:max-w-2xl'>Sé parte de la magia musical de Monkey Records, ¡no esperes más y escríbenos para conocer cómo podemos hacer crecer tu carrera juntos!</p>
        </div>
      </div>
    </section>
  )
}
