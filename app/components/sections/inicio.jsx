import Image from 'next/image'
import logo from '../../../public/logo_monkey.png'

export const Inicio = () => {
  return (
    <section id='Wrapper' className='bg-demo bg-no-repeat bg-cover w-screen h-[600px] mt-14'>
      <div className='flex flex-col items-center justify-center h-full my-auto bg-slate-900/60'>
        <Image src={logo} alt='logo_monkey' className='w-[400px]' />
        <h2 className='text-2xl font-bold underline text-yellow-400/60 tablet:text-4xl'>
          Bienvenidos a <strong className='font-extrabold'>MONKEY RECORDS</strong>
        </h2>
      </div>
    </section>
  )
}
