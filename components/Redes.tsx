import { IconType } from 'react-icons/lib/esm/iconBase';
import {BsInstagram} from 'react-icons/bs'
import { url } from 'inspector';
import { Url } from 'next/dist/shared/lib/router/router';

interface RedesProps{
    Icono:IconType,
    Link?: String,
}
const Redes =( {Icono,Link}:RedesProps)=>{

    const handleClick = ()=>{
        window.open('https://www.tiktok.com/@deyber_blister')
        }
        
    return(
        <div className=" bg-yellow-500 rounded-full w-14 h-14 hover:scale-110 items-center hover:bg-orange-500 flex justify-center" onClick={handleClick}>
            <span className='text-2xl  text-gray-800' ><Icono/></span>
        </div>
    )
}
export {Redes}