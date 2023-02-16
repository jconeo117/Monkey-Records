import facebook from '../../../public/facebook.svg'
import youtube from '../../../public/youtube.svg'
import instagram from '../../../public/instagram.svg'
import tiktok from '../../../public/tik_tok.svg'
import Image from 'next/image'

const Redes = [
  { label: 'Instagram', href: 'https://www.instagram.com/monkeyrecordsoficial/', icon: instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/MonkeyRecordsOficial', icon: facebook },
  { label: 'Youtube', href: 'https://www.youtube.com/@MonkeyRecordsoficial', icon: youtube },
  { label: 'TikTok', href: '#', icon: tiktok }
]

export const Contacto = async () => {
  return (
    <section id='Contacto' className='w-full py-16 h-fit'>
      <div className='py-24 bg-red-900/60 h-fit'>
        <h2 className='my-10 text-4xl font-extrabold text-center text-gray-200 underline md:text-6xl'>
          Redes Sociales
        </h2>
        <div className='flex flex-col items-center justify-center mb-10 md:flex-row pb-14'>
          {Redes.map(({ label, href, icon }) => (
            <a href={href} key={label} className='flex flex-col items-center justify-center gap-5 p-10 mx-10 mt-8 transition-all duration-200 ease-in border-2 border-gray-200 rounded-md hover:border-yellow-400/60 md:mt-4 h-fit w-44'>
              <Image src={icon} alt={label} className='w-10' />
              <p className='text-lg font-semibold text-gray-200'>{label}</p>
            </a>
          ))}
        </div>
      </div>
      <div className='py-5 my-5 bg-black h-fit'>
        <h2 className='my-10 text-4xl text-center text-gray-200 underline font-abold md:text-6xl'>
          Contacto
        </h2>
        <div>
          <p className='my-10 text-2xl font-bold text-center text-gray-200 md:text-6xl'>Whatsapp: <span className='text-yellow-400/60'>+57 304 4128512</span> </p>
          <p className='my-5 text-2xl font-bold text-center text-gray-200 md:text-4xl'>Correo: <span className='text-yellow-400/60'>monkeyrecordsoficial@gmail.com</span> </p>
        </div>
        <p className='w-full mx-auto my-24 text-xl text-center text-gray-200 md:text-3xl md:max-w-2xl'>¿Quieres llevar tu carrera musical al siguiente nivel o hacer de tu evento una experiencia inolvidable? ¡Monkey Records es tu mejor opción! Como sello discográfico independiente y expertos en producción musical y logística de eventos en vivo, te ayudamos a crear momentos memorables que harán historia. ¡Elige Monkey Records como tu socio en el camino hacia el éxito!</p>
      </div>
    </section>
  )
}
