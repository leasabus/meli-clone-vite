import React from 'react'
import { AiOutlineClose, AiOutlineCalendar, AiOutlineDollar } from 'react-icons/ai';
import { BsArrowReturnLeft } from 'react-icons/bs';


export const DevolutionModal = ({ open, close }) => {


    if (!open) {
        return null
    }
    const handleCloseModal = () => {
        close(false)
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center'>
            <div className='w-[300px] h-[450px] md:w-[800px] md:h-[350px] bg-white rounded flex flex-col p-4 md:p-12'>
                <div className='flex flex-row items-center justify-between '>
                    <h1 className='text-xl md:text-3xl font-semibold mt-4'>Devoluciones gratis</h1>
                    <button className='text-blue' onClick={handleCloseModal}><AiOutlineClose size={20} /></button>
                </div>

                <div className='flex flex-col gap-6 mt-12'>
                    <div className='flex flex-row gap-2'>
                        <AiOutlineCalendar size={24} />
                        <span>Tenés 30 días desde que te llega</span>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <BsArrowReturnLeft size={24} />
                        <span>Podés enviarlo desde un correo o despacho cercano</span>
                    </div>

                    <div className='flex flex-row gap-2'>
                        <AiOutlineDollar size={24} />
                        <span>Es importante que revises las <span className='text-blue'>políticas de devolución</span></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
