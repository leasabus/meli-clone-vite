import React from 'react'

export const ProductDescription = () => {
    return (
        <>
            <div className='border border-black rounded border-opacity-10 mt-6'>
                <h2 className='px-4 text-2xl font-600 font-semibold'>Descripción</h2>
                <div className='flex flex-col items-center justify-center p-4 text-gray text-lg'>

                    <span className='mt-4'>
                        La notebook HP Laptops 15-DY2061MS es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina
                    </span>

                    <span className='mt-4 flex flex-col'>
                        <span>Eficiencia a tu alcance</span>
                        Su procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.
                    </span>

                    <span className='mt-4 flex flex-col'>
                        <span> Potente disco sólido</span>
                        El disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.
                    </span>

                    <span className='mt-4 flex flex-col'>
                        <span>Un procesador exclusivo para los gráficos</span>
                        Su placa de video Intel UHD Graphics convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.
                    </span>


                </div>
            </div>
        </>
    )
}
