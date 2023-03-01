import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { CardImages } from './CardImages';


export const PaymentsModal = ({ open, close }) => {
    if (!open) {
        return null
    }

    const handleCloseModal = () => {
        close(false)
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center'>
            <div className='w-[300px] h-[450px] md:w-[800px] md:h-[500px] bg-white rounded flex flex-col p-4 md:p-12'>
                <div className='flex flex-row items-center justify-between'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Medios de pago para este producto</h1>
                    <button className='text-blue' onClick={handleCloseModal}><AiOutlineClose size={20} /></button>
                </div>

                <span className='mt-4 md:mt-8 hidden md:flex'>Podés pagar tu compra con cualquiera de estos medios, es seguro y simple</span>

                <h3 className='font-semibold text-lg mt-4 md:mt-8'>Tarjetas de crédito</h3>
                <span className='text-gray text-sm'>Acreditacion instantánea</span>

                <span className='text-green mt-4 md:mt-8'>Mismo precio en hasta 6 cuotas <span className='text-black'>con estos bancos</span></span>

                <CardImages />

            </div>
        </div>
    )
}
