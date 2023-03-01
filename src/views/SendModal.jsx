import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5'

export const SendModal = ({ open, close }) => {
    if (!open) {
        return null
    }
    const handleCloseModal = () => {
        close(false)
        {/* <button className='bg-blue' onClick={handleCloseModal}>Cerrar</button> */ }

    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center'>
            <div className='w-[300px] md:w-[650px] h-[450px] md:h-[500px] bg-white rounded flex flex-col p-4 md:p-8'>
                <div className='flex flex-row items-center justify-between mt-4'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Opciones de envío y retiro</h1>
                    <button className='text-blue' onClick={handleCloseModal}><AiOutlineClose size={20} /></button>
                </div>
                <p className='font-semibold mt-2 md:mt-6 hidden md:flex'>Calculamos los costos y tiempos para esta dirección:</p>
                <div className='flex flex-row items-center gap-4 mt-4'>
                    <div className='text-blue'>
                        <IoLocationOutline size={24} />
                    </div>
                    <div className='flex flex-col text-sm'>
                        <span className='font-semibold'>Sadi Carnot 373</span>
                        <span className='text-textGray'>CP:6000</span>
                        <span className='text-blue font-semibold'>Elegir otra dirección</span>
                    </div>
                </div>

                <h3 className='mt-8 font-semibold'>Recibir compra</h3>
                <div className='flex flex-row items-center justify-between '>
                    <div className='flex flex-col mt-2  md:mt-4'>
                        <span >LLega mañana a tu dirección</span>
                        <span className='text-gray opacity-70'>Comprando dentro de las próximas <span className='text-black'>4h 5min</span></span>
                    </div>
                    <div>
                        <span className='text-green2 font-semibold'>Gratis</span>
                    </div>
                </div>

                <h3 className='mt-4 md:mt-8 font-semibold'>Retirar compra</h3>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-col mt-2 md:mt-4'>
                        <span>Retira entre el martes y jueves 7 de marzo en correo y otros puntos</span>
                        <span className='text-blue font-semibold text-sm mt-4'>Ver en el mapa</span>
                    </div>

                    <div className='text-green2 font-semibold'>Gratis</div>
                </div>

            </div>


        </div>

    )
}
