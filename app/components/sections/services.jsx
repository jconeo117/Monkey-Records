const servicios = [
  {
    label: 'Produccion musical',
    content:
      'Producciones musicales completas (Composiciones, Masterización, Mezclas, Arreglos)'
  },
  {
    label: 'Produccion de video',
    content: 'Producciones visuales completas (pre y postproduccion)'
  },
  {
    label: 'Show en vivo',
    content: 'Organizacion y logistica de shows en vivo'
  },
  {
    label: 'Redes sociales',
    content:
      'Optimización de campañas en Instagram, Facebook, Twitter, YouTube y Google.'
  }
]

export const Services = () => {
  return (
    <section id='Servicios' className='w-full my-10 h-fit'>
      <div className='flex items-center justify-center my-10'>
        <h2 className='text-2xl font-extrabold text-gray-300 underline md:text-4xl'>
          Servicios Monkey Records
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-10 md:gap-4 justify-items-center md:grid-cols-3'>
        {servicios.map(({ label, content }, index) => (
          <div
            key={label}
            className={`block max-w-sm my-6 md:my-4 rounded-lg shadow-lg bg-red-900 shadow-white/30 ${
              index === servicios.length - 1 ? 'md:col-start-2' : ''
            }`}
          >
            <span className='p-5 my-5 text-2xl font-semibold text-gray-200'>{label}</span>
            <p className='p-5 my-5 text-lg text-gray-200'>{content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
