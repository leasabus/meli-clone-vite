import React from 'react'
import { CiMedal } from 'react-icons/ci';
import { BiMessageCheck } from 'react-icons/bi';
import { BsStopwatch } from 'react-icons/bs';
import icon1 from '../../assets/seller/message-positive.svg';
import icon2 from '../../assets/seller/time-positive.svg';

export const SellerInformation = () => {
    return (
        <div className='mt-10 flex flex-col items-start justify-center'>
            <h2 className='text-lg'>Información sobre el vendedor</h2>

            <div className='flex flex-col items-center text-green2 mt-6'>
                <div className='flex flex-row '>
                    <CiMedal size={24} />
                    <div className='flex flex-col items-center'>
                        <span className='font-semibold' > MercadoLíder platinium</span>
                        <span className='text-sm text-textGray ml-4'>Es uno de los mejores del sitio!</span>
                    </div>
                </div>

            </div>
            <span className='bg-green2 w-12 h-3 mt-6 ml-48 '></span>


            <div className='flex flex-row items-center justify-center mt-6'>
                <div className='flex flex-col w-34 items-center '>
                    <span className='text-xl font-semibold'>+1000</span>
                    <span className='text-sm text-center text-gray  mt-2'>Ventas en los últimos 60 días</span>
                </div>

                <div className='flex flex-col w-34 items-center'>
                    <img src={icon1} alt="" width={32} />
                    <span className='text-sm text-center text-gray mt-2'>Brinda buena atención</span>
                </div>

                <div className='flex flex-col w-34 items-center'>
                    <img src={icon2} alt="" width={32} />
                    <span className='text-sm text-center text-gray mt-2'>Despacha sus productos a tiempo</span>
                </div>
            </div>

            <span className='text-start text-sm font-semibold text-blue mt-4'>Ver más datos del vendedor</span>
        </div>
    )
}
