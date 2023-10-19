import Image from "next/image";
import { DialogPre } from "./DialogPresentacion";
import { useState } from "react";



const Presentacion =()=>{

    const[dialogOpen,setDialogOpen]=useState<boolean>(false);

    const handleDialogClick =()=>{
            setDialogOpen(true)
    };
    
   
    return(
        <section>
            <div className=" flex flex-row bg-white w-[960px] h-[467px] justify-between">

                <div className="w-full flex flex-col items-start">
                    <span className="font-bold text-5xl pl-8 pt-24  text-gray-800">Soy Deyber Sepulveda</span>
                    <span className="font-bold text-5xl pl-8 pt-3">
                        <span className="font-bold text-5xl text-yellow-500" >Front-End</span>
                        <span className="font-bold text-5xl pl-4  text-gray-800 ">Developer</span>
                    </span>

                    <span></span>

                    <button className=" ml-8 mt-8 bg-yellow-500 px-4 py-4 rounded-md hover:scale-105" onClick={handleDialogClick}>
                        
                        <span className=" text-lg font-semibold  text-gray-800">Contrátame</span>
                    </button>

                </div>

          <div className="">
            </div>
            <Image className="" src='/images/presentacion3.png' height={467} width={367} alt="presentacion" />
          </div>
          
        <DialogPre open={dialogOpen} setDialogOpen={setDialogOpen}></DialogPre>
        </section>    
        
    )
    
    }
    
    export {Presentacion}