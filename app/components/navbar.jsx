'use client'

import Image from 'next/image'
import btn from '../../public/menu.svg'
import close from '../../public/close.svg'
import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '#Wrapper' },
  { label: 'Nuestro sello', href: '#Nosotros' },
  { label: 'Servicios', href: '#Servicios' },
  { label: 'Contacto', href: '#Contacto' }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    setIsOpen(false)
    const targetId = event.target.getAttribute('href').substr(1)
    const target = document.getElementById(targetId)
    target.scrollIntoView({
      behavior: 'smooth',
      duration: 2000
    })
  }

  return (
    <nav className='fixed top-0 left-0 w-full shadow-md'>
      <div className='items-center justify-between px-5 py-4 bg-red-900 md:flex md:px-8'>
        <div>
          <a href='#Wrapper' onClick={handleClick}>
            <span className='font-extrabold text-gray-300'>MONKEY RECORDS</span>
          </a>
        </div>
        <div
          className='absolute cursor-pointer right-7 top-3 md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={isOpen ? close : btn} alt='boton' className='w-8 p-0' />
        </div>
        <ul
          className={`absolute pb-2 md:flex md:items-center md:pb-0 md:static bg-red-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
            isOpen ? 'opacity-100 top-14' : 'top-[-490px]'
          } md:opacity-100`}
        >
          {links.map(({ label, href }) => (
            <li
              key={label}
              className='my-4 text-xl text-gray-300 transition-all duration-200 ease-in md:ml-5 md:my-0 hover:text-yellow-400/60'
            >
              <a href={href} onClick={handleClick}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
