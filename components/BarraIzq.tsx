import Image from "next/image";
import { Porcentaje } from "@/components/Porcentaje";
import { PiIntersectSquareDuotone } from 'react-icons/pi'

const BarraIzq =()=> {
    return(
        <aside className=" w-72 bg-white flex flex-col gap-4 items-center h-screen ">

        <div className="flex w-72 flex-col items-center gap-2 py-6">
          <div className=" hover:scale-110">
            <Image className=" w-28 h-28 rounded-full object-cover " src='/images/perfil.jpg' height={150} width={150} alt="perfil" />
          </div>
          <div className="flex flex-col">
            <span className="text-md font-bold  text-gray-800">Deyber Sepulveda</span>
            <span className=" text-sm  text-gray-400">Front-End Developer</span>
          </div>

        </div>

        <div className=" w-52 flex flex-col border-t-2 border-b-2 py-4">
          <div className=" flex flex-row justify-between">
            <span className="font-medium text-gray-800">
              Age:
            </span>
            <span className="font-medium text-gray-800">28</span>
          </div>

          <div className=" flex flex-row justify-between">
            <span className="font-medium text-gray-800">
              Residencia:
            </span>
            <span className="font-medium text-gray-800">Medellín</span>
          </div>

          <div className=" flex flex-row justify-between">
            <span className="font-medium text-gray-800">
              Freelance:
            </span>
            <span className=" text-green-500">Disponible</span>
          </div>

          <div className=" flex flex-row justify-between">
            <span className="font-medium text-gray-800">
              Dirección:
            </span>
            <span className="font-medium text-gray-800">Cr 73#97-95</span>
          </div>

        </div>

        <div className="border-b-2  pb-6">
          <span className="font-semibold text-lg  text-gray-800">Idiomas</span>
          <Porcentaje idioma="Inglés" porcentaje="100%" />
          <Porcentaje idioma="Español" porcentaje="100%" />

          <div className=" w-52 py-[2px]">
            <div className=" flex flex-row justify-between  text-gray-400">
              <span>
                Japonés
              </span>
              <span>25%</span>
            </div>
            <div className={` px-1 py-[2px] border border-yellow-500 rounded-lg hover:scale-105 hover:border-orange-500`}>
              <div className=" px-1 h-[3px] bg-yellow-500 w-11 rounded-md"></div>
            </div>
          </div>

        </div>

        <div className="border-b-2 pb-6">
          <span className="font-semibold text-md text-gray-800">Lenguajes de programación</span>
          <Porcentaje idioma="Java" porcentaje="100%" />
          <Porcentaje idioma="Dart" porcentaje="100%" />
          <div className=" w-52 py-[2px]">
            <div className=" flex flex-row justify-between  text-gray-400">
              <span>
                React JS
              </span>
              <span>50%</span>
            </div>
            <div className={` px-1 py-[2px] border border-yellow-500 rounded-lg hover:scale-105 hover:border-orange-500`}>
              <div className=" px-1 h-[3px] bg-yellow-500 w-24 rounded-md"></div>
            </div>
          </div>

          <div className=" w-52 py-[2px]">
            <div className=" flex flex-row justify-between  text-gray-400">
              <span>
                Python
              </span>
              <span>30%</span>
            </div>
            <div className={` px-1 py-[2px] border border-yellow-500 rounded-lg hover:scale-105 hover:border-orange-500`}>
              <div className=" px-1 h-[3px] bg-yellow-500  w-14 rounded-md"></div>
            </div>
          </div>




        </div>

        <div className="border-b-2 pb-6 w-52">
          <span className="font-semibold text-lg  text-gray-800 ">Habilidades Extras</span>

          <span className="flex flex-row">
            <span className="text-yellow-500 text-2xl pr-2 hover:scale-110 hover:text-orange-500 ">
              <PiIntersectSquareDuotone />
            </span>
            <span className=" text-gray-400">Bootstrap, Materialize</span>
          </span>

          <span className="flex flex-row">
            <span className="text-yellow-500 text-2xl pr-2 hover:scale-110 hover:text-orange-500">
              <PiIntersectSquareDuotone />
            </span>
            <span className=" text-gray-400">Ui Design, Ux Design</span>
          </span>

          <span className="flex flex-row">
            <span className="text-yellow-500 text-2xl pr-2 hover:scale-110 hover:text-orange-500">
              <PiIntersectSquareDuotone />
            </span>
            <span className=" text-gray-400">Graphic Design</span>
          </span>
        </div>

      </aside>
    )


}

export {BarraIzq}