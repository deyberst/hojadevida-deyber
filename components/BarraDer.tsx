import { BsGithub, BsInstagram } from "react-icons/bs"
import { FaBehance, FaTiktok } from "react-icons/fa"
import { Redes } from "./Redes"

const BarraDer = () => {
  const TiktokClick = () => {
    window.open('https://www.tiktok.com/@deyber_blister')
  }

  const InstagramClick = () => {
    window.open('https://www.instagram.com/deyber_blister/')
  }

  const GithubClick = () => {
    window.open('https://github.com/deyberst')
  }

  const BehanceClick = () => {
    window.open('https://www.behance.net/deyber')
  }
  return (



    <aside className=" w-24 bg-white flex flex-col items-center gap-4 py-10 text-md font-bold overflow-hidden">
      Links

      <div className=" bg-yellow-500 rounded-full w-14 h-14 hover:scale-110 items-center hover:bg-orange-500 flex justify-center hover:cursor-pointer" onClick={InstagramClick}>
        <span className='text-2xl  text-gray-800' > <BsInstagram /></span>
      </div>

      <div className=" bg-yellow-500 rounded-full w-14 h-14 hover:scale-110 items-center hover:bg-orange-500 flex justify-center hover:cursor-pointer" onClick={BehanceClick}>
        <span className='text-2xl  text-gray-800' > <FaBehance /></span>
      </div>

      <div className=" bg-yellow-500 rounded-full w-14 h-14 hover:scale-110 items-center hover:bg-orange-500 flex justify-center hover:cursor-pointer" onClick={TiktokClick}>
        <span className='text-2xl  text-gray-800' > <FaTiktok /></span>
      </div>

      <div className=" bg-yellow-500 rounded-full w-14 h-14 hover:scale-110 items-center hover:bg-orange-500 flex justify-center hover:cursor-pointer" onClick={GithubClick}>
        <span className='text-2xl  text-gray-800' > <BsGithub /></span>
      </div>

    </aside>
  )
}

export { BarraDer }