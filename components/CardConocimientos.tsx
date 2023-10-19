import Image from "next/image";

interface CardProps{
Conocimiento:string,
Descripcion: string,
image: string;

}

const CardConocimientos =( {Conocimiento,Descripcion,image}:CardProps)=>{
    return(
        <div className="w-[310px] h-[250px] bg-white flex flex-col items-center justify-center hover:scale-105 hover:text-yellow-500">
            <div className="pb-2">
            <Image src= {image} height={100} width={100} alt="presentacion" />
            </div>
            <span className="py-2 font-semibold text-lg  text-gray-800 ">{Conocimiento}</span>
            <span className=" text-gray-400">{Descripcion}</span>

        </div>
    )
    }
    
    export {CardConocimientos}