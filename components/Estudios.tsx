
const Estudios = () => {
    return (
        <section className="">
            <div className="  flex flex-col bg-gray-300 w-[960px] h-[674px] items-center">
                <span className="  font-bold text-5xl pb-6 text-gray-800">Educación</span>

                <div className="bg-white w-[960px] h-full px-8">
                    <div className="flex flex-row w-full h-[200px] border-b-2 items-center">

                        <div className=" pl-4 pt-4 flex flex-col w-[300px]">
                            <span className="font-semibold text-gray-800">Universidad de Antioquia </span>
                            <span className="pt-5">
                                <span className="text-sm font-medium text-gray-800">Estudiando</span>
                                <span className="ml-2 px-1 text-sm font-medium text-white bg-yellow-500">Oct 2023 - Actualidad</span>
                            </span>
                        </div>

                        <div className=" pt-4 flex flex-col">
                            <span className="font-semibold text-gray-800">Ingenieria de Sistemas</span>
                            <span className="pt-5 text-gray-400">Aprendizaje sobre lógica de programación, manejo de lenguajes,
                                <br></br> análisis y resolución de problemas orientados a la programación.
                            </span>

                        </div>
                    </div>

                    <div className="flex flex-row w-full h-[200px] border-b-2 items-center">

                        <div className=" pl-4 pt-4 flex flex-col w-[300px]">
                            <span className="font-semibold text-gray-800">CASD </span>
                            <span className="pt-5">
                                <span className="text-sm font-medium text-gray-800">Terminado</span>
                                <span className="ml-2 px-1 text-sm font-medium text-white bg-yellow-500">Enero 2011 - Dic 2012</span>
                            </span>
                        </div>

                        <div className=" pt-4 flex flex-col">
                            <span className="font-semibold text-gray-800">Técnico en Sistemas</span>
                            <span className="pt-5 text-gray-400">Aprendizaje sobre arquitectura de computador y hardware,
                                <br></br> reparación y mantenimiento de estos, e inicios a la programación.
                            </span>

                        </div>
                    </div>

                    <div className="flex flex-row w-full h-[200px] items-center">

                        <div className=" pl-4 pt-4 flex flex-col w-[300px]">
                            <span className="font-semibold text-gray-800">CENSA</span>
                            <span className="pt-5">
                                <span className="text-sm font-medium text-gray-800">Terminado</span>
                                <span className="ml-2 px-1 text-sm font-medium text-white bg-yellow-500">Enero 2013 - Dic 2015</span>
                            </span>
                        </div>

                        <div className=" pt-4 flex flex-col">
                            <span className="font-semibold text-gray-800">Técnico en Diseño Gráfico</span>
                            <span className="pt-5 text-gray-400">Manejo básico de diseño gráfico, creación de piezas publicitarias,
                                <br></br> creación de logos, fotomontaje e ilustración.
                            </span>

                        </div>
                    </div>
                </div>



            </div>
        </section>
    )

}

export { Estudios }