import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

export const CoutesModal = ({ open, close }) => {
    if (!open) {
        return null;
    }

    const handleCloseModal = () => {
        close(false)
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center'>
            <div className='w-[300px] h-[450px] md:w-[800px] md:h-[400px] bg-white rounded flex flex-col p-4 md:p-12'>
                <div className='flex flex-row justify-between items-start mt-6'>
                    <h1 className='text-2xl font-semibold'>Comprá con Mercado Crédito ¡Tenés hasta 12 cuotas sin tarjeta!</h1>
                    <button className='text-blue' onClick={handleCloseModal}><AiOutlineClose size={20} /></button>
                </div>

                <div className='flex flex-col gap-2 mt-8'>
                    <span className='font-semibold'>1.Elegí lo que quieras comprar dentro de tu <span className='text-blue'>límite disponible.</span></span>
                    <span className='font-semibold'>2.Seleccioná Mercado Crédito como medio de pago <span className='font-normal'>y la cantidad de cuotas.</span></span>
                    <span><span className='font-semibold'>3.Pagá las cuotas mes a mes</span> con débito, efectivo o dinero en cuenta desde la sección Mercado Crédito.</span>
                </div>
            </div>
        </div>
    )
}
