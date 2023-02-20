
import axios from 'axios'
import { IgCard } from '../igCard'
const token = process.env.ACCESS_TOKEN

const igPosts = () => {
  return axios.get(`https://graph.instagram.com/v16.0/9262190197187018/media?fields=id&access_token=${token}`, { headers: { 'cache-control': 'public, max-age=3600' } })
}

export const Novedades = async () => {
  const Posts = await igPosts()
  return (
    <section id='Novedades'>
      <h2 className='py-4 mb-10 text-6xl font-bold text-center underline text-yellow-400/40'>Novedades</h2>
      <div className='flex flex-col md:justify-around md:flex-row w-full h-fit md:h-[700px] items-center'>
        {Posts.data.data.slice(0, 3).map(el => (
          <IgCard key={el.id} idcard={el.id} />
        ))}
      </div>
    </section>
  )
}
