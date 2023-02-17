import axios from 'axios'
// import Image from 'next/image'
const token = process.env.ACCESS_TOKEN

const Details = (idcard) => {
  return axios.get(`https://graph.instagram.com/${idcard}?fields=caption,id,is_shared_to_feed,media_type,media_url,thumbnail_url,timestamp,permalink&access_token=${token}`)
}

export const IgCard = async ({ idcard }) => {
  const { data } = await Details(idcard)
  return (
    <div className='flex flex-col md:w-[400px] md:h-[510px] w-80 justify-center items-center mb-10 mx-auto'>
      <img width={400} height={400} className='rounded-lg' src={data.thumbnail_url} alt={data.caption} />
      <div className='flex flex-col justify-center'>
        <p className='text-center text-gray-200'>{data.caption}</p>
        <a href={data.permalink} target='_blank' rel='noreferrer' className='flex justify-center text-xl text-yellow-400/40 hover:underline'> ver mas</a>
      </div>
    </div>
  )
}
