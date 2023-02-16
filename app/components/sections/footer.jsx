export const Footer = () => {
  return (
    <footer className='py-6 text-white bg-gray-800'>
      <div className='container mx-auto text-center'>
        <p className='text-gray-400'>
          &copy; Monkey Records {new Date().getFullYear()}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}
