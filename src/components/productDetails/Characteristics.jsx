import React from 'react'
import icon1 from '../../assets/con_pantalla_tactil_note.svg'
import icon2 from '../../assets/battery.svg'
import icon3 from '../../assets/pantalla.svg'
import icon4 from '../../assets/ram.svg'
import icon5 from '../../assets/resolucion.svg'
import icon6 from '../../assets/huella.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'

export const Characteristics = () => {
    return (
        <>
            <h2 className='text-2xl font-600 p-4 mt-6'>Características de HP Laptops 15-DY2061MS</h2>
            <div className='grid grid-cols-2 p-4 '>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon1} alt="" />
                        <span className='text-gray'>Pantalla táctil: <span className='font-semibold'> No</span></span>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon2} alt="" />
                        <span className='text-gray'>Duración de batería: <span className='font-semibold'> 9hs</span></span>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon3} alt="" />
                        <span className='text-gray'>Tamaño de la pantalla: <span className='font-semibold'>13.3"</span></span>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon4} alt="" />
                        <span className='text-gray'>Memoria RAM: <span className='font-semibold'>8GB</span></span>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon5} alt="" />
                        <span className='text-gray'>Tipo de resolución: <span className='font-semibold'>Full HD</span></span>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <img src={icon6} alt="" />
                        <span className='text-gray'>Lector de huella: <span className='font-semibold'>Si</span></span>

                    </div>

                </div>

                <span className='mt-6 p-4 text-blue flex flex-row items-center'>Ver más características <MdKeyboardArrowDown size={24} /></span>
            </div>
        </>
    )
}
