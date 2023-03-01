import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';

export const WarrantyModal = ({ open, close }) => {

    if (!open) {
        return null;
    }

    const handleCloseModal = () => {
        close(false)
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center'>
            <div className='w-[300px] h-[450px] md:w-[800px] md:h-[500px] bg-white rounded flex flex-col p-4 md:p-12'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-2xl font-semibold'>Garantía</h1>
                    <button className='text-blue' onClick={handleCloseModal}><AiOutlineClose size={20} /></button>
                </div>

                <div className='flex flex-row  items-center gap-0 md:gap-8 mt-6'>
                    <div>
                        <span className='text-blue hidden md:flex' ><BsShieldCheck size={24} /></span>
                    </div>
                    <div >
                        <span className='font-semibold'>Tu compra está protegida.</span><span className='text-gray'> Si hay algun problema o no recibís
                            el producto tal como lo compraste, te devolvemos el dinero que pagaste.
                        </span>
                    </div>
                </div>

                <div className='hidden md:flex flex-col'>
                    <h2 className='text-xl font-semibold mt-2 md:mt-8'>Estamos para ayudarte, siempre.</h2>
                    <span className='text-gray mt-4'>Te acompañamos hasta que recibas lo que compraste y nos avises que estás conforme. Si surge algún problema, solo tenés que avisarnos.</span>
                    <span className='text-blue'>Conocer más sobre la compra protegida</span>
                </div>
                <h2 className='text-xl font-semibold mt-6'>Garantía de la tienda</h2>
                <span className='mt-4'>Garantía de fábrica: 12 meses</span>
            </div>
        </div>
    )
}
