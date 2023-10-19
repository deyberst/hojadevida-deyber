import Image from "next/image";
const CardPortfolio =()=>{

    return (
        <div className=" debug w-[310px] h-[400px] bg-white flex flex-col items-center">
            <Image className=" pt-9" src='/images/newton.jpg' height={250} width={310} alt="presentacion" />
            <div className="flex flex-col pt-3">
                <span className="font-medium text-gray-800">
                    Newton App
                </span>
                <span className="text-gray-400 text-sm">
                    Aplicación para desarrollo del<br></br>cálculo mental y aprendizaje.
                </span>
                <span className="text-yellow-500 font-bold hover:text-lg hover:text-orange-500">Ver más</span>
            </div>

        </div>
    )
}

export {CardPortfolio}