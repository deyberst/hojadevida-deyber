import { CardConocimientos } from "./CardConocimientos"

const Conocimientos = () => {
    return (
        <section>
            <div className=" flex flex-col bg-gray-300 w-[960px] h-[607px] justify-between items-center">
                <span className=" font-bold text-5xl pb-6  text-gray-800">Mis conocimientos</span>
                <div className=" w-[960px] h-full flex flex-col justify-center ">
                    <div className="flex flex-row justify-between">
                        <CardConocimientos Conocimiento="Web Developing" Descripcion="Programación en React JS" image='/images/webdeveloping.svg'/>
                        <CardConocimientos Conocimiento="Developer" Descripcion="Programacion en JAVA" image='/images/developer.svg'/>
                        <CardConocimientos Conocimiento="Ui Design" Descripcion="Diseño UI en Figma" image='/images/uidesign.svg'/>
                    </div>
                    <div className="flex flex-row justify-between py-4">
                        <CardConocimientos Conocimiento="Fotografía" Descripcion="Fotografía profesional" image='/images/fotografia.svg'/>
                        <CardConocimientos Conocimiento="Diseño Gráfico" Descripcion="Diseño general y fotomontaje" image='/images/disenografico.svg'/>
                        <CardConocimientos Conocimiento="Diseño de Logos" Descripcion="Creación de logos para empresa" image='/images/disenologos.svg'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

    export {Conocimientos}