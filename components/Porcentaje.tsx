
interface PorcentajeProps{
    idioma: string,
    porcentaje: string,
}

const Porcentaje =({idioma, porcentaje}:PorcentajeProps)=>{
return(
    <div className=" w-52 py-[2px]">
         <div className=" flex flex-row justify-between text-gray-400">
          <span>
          {idioma}
          </span>
          <span>{porcentaje}</span>
          </div>
        <div className={` px-1 py-[2px] border border-yellow-500 rounded-lg hover:scale-105 hover:border-orange-500`}>
            <div className=" px-1 h-[3px] bg-yellow-500 w-[197] rounded-md"></div>
        </div>
    </div>
)

}

export {Porcentaje}