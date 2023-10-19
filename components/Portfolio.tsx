import { CardPortfolio } from "./CardPortfolio"
import Image from "next/image";

const Portfolio = () => {
    const IntegradorClick = () => {
        window.open('https://github.com/1214741/ProyectoIntegrador1')
      }
    
      const PastillappClick = () => {
        window.open('https://github.com/deyberst/Pastillap')
      }
    
      const LabCMClick = () => {
        window.open('https://github.com/deyberst/LabsCM20231-Gr08')
      }
    


    return (
        <section className="flex flex-col w-[960px] h-[480px] items-center">
            <span className="  font-bold text-5xl pb-6 text-gray-800">Portfolio</span>
            <div className="flex flex-row gap-4 items-start w-full overflow-x-auto overflow-hidden overscroll-x-none">
                <li className="flex flex-row gap-4">            

                    <div className="  w-[310px] h-[400px] bg-white flex flex-col items-center">
                        <Image className=" pt-9" src='/images/newton.jpg' height={250} width={310} alt="presentacion" />
                        <div className="flex flex-col pt-3">
                            <span className="font-medium text-gray-800">
                                Newton App
                            </span>
                            <span className="text-gray-400 text-sm">
                                Aplicación para desarrollo del<br></br>cálculo mental y aprendizaje.
                            </span>
                            <span className="text-yellow-500 font-bold hover:text-lg hover:text-orange-500 hover:cursor-pointer" onClick={IntegradorClick}>Ver más</span>
                        </div>

                    </div>

                    <div className=" w-[310px] h-[400px] bg-white flex flex-col items-center">
                        <Image className=" pt-9" src='/images/pastillapp.jpg' height={250} width={310} alt="presentacion" />
                        <div className="flex flex-col pt-3">
                            <span className="font-medium text-gray-800">
                                Pastillap
                            </span>
                            <span className="text-gray-400 text-sm">
                                Aplicación para manejo de medicamento<br></br>dosificación y tiempos de ingesta.
                            </span>
                            <span className="text-yellow-500 font-bold hover:text-lg hover:text-orange-500 hover:cursor-pointer" onClick={PastillappClick}>Ver más</span>
                        </div>

                    </div>

                    <div className="  w-[310px] h-[400px] bg-white flex flex-col items-center">
                        <Image className=" pt-9" src='/images/android.jpg' height={250} width={310} alt="presentacion" />
                        <div className="flex flex-col pt-3">
                            <span className="font-medium text-gray-800">
                                Practica Android
                            </span>
                            <span className="text-gray-400 text-sm">
                                Aplicación para aprendizaje de manejo<br></br>de interfaz en Android Studio.
                            </span>
                            <span className="text-yellow-500 font-bold hover:text-lg hover:text-orange-500 hover:cursor-pointer">Ver más</span>
                        </div>

                    </div>
                    
                    </li>

            </div>
        </section>
    )
}
export { Portfolio }