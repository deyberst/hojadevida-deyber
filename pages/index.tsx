import { Porcentaje } from "@/components/Porcentaje";
import { Redes } from "@/components/Redes";
import Image from "next/image";
import { PiIntersectSquareDuotone } from 'react-icons/pi'
import { BsInstagram } from 'react-icons/bs'
import { FaBehance } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { Presentacion } from "@/components/Presentacion";
import { Conocimientos } from "@/components/Conocimientos";
import { BarraIzq } from "@/components/BarraIzq";
import { BarraDer } from "@/components/BarraDer";
import { Estudios } from "@/components/Estudios";
import { DialogPre } from "@/components/DialogPresentacion";
import { useState } from "react";

const Home = () => {


  return (
    <div className="flex ">
      
      <BarraIzq/>

      <main className=" w-[1020px]  bg-gray-300 flex flex-col items-center max-h-full ">

        <Presentacion />

        <div className="h-[42px]"></div>

        <Conocimientos />


        <div className="  h-[42px]"></div>

        <Estudios/>

        <div className=" h-[42px]">
        </div>

        <section className="debug flex flex-col w-[960px] h-[480px]">


        </section>
        <div className=" h-[42px]">
        </div>

        <footer className="w-[960px] h-[50px] bg-white text-center flex flex-col">
          <span className="py-3 text-gray-800">2023 Creación de Deyber Sepulveda</span>
        </footer>
      </main>
      
      <BarraDer/>

      
    </div>
  );
};

export default Home;