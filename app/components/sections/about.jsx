import Image from 'next/image'
import demo from '../../../public/demo.jpg'

export const About = () => {
  return (
    <section id='Nosotros' className='w-screen my-10 h-fit'>
      <div className='flex flex-col items-center justify-center md:flex-row'>
        <div className='w-full max-w-xs p-4'>
          <h2 className='my-4 text-2xl font-extrabold text-gray-300 md:text-3xl'>Acerca de monkey records</h2>
          <p className='text-xl text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            iusto excepturi, odit, doloribus sint repudiandae molestiae
            reiciendis, quisquam ut asperiores sunt voluptate eaque quo voluptas
            architecto hic? Inventore, totam ipsum!
          </p>
        </div>
        <div className='w-full max-w-2xl md:ml-10'>
          <Image src={demo} alt='demo' />
        </div>
      </div>
    </section>
  )
}
