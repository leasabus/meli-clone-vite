import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

export const ListComponent = () => {
    return (
        <div className='px-8 py-4'>
            <div className='hidden md:flex'>
                <span className='font-semibold text-sm'>También puede interesarte: </span><span className='text-sm'>dell alienware - notebook i3 - hpspectre x360 - macbook pro 13 - notebook huawei - notebook touch</span>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between mt-4 text-sm cursor-pointer'>
                <div className='flex flex-row gap-4 '>
                    <span className='hover:text-blue'>Volver al listado</span>
                    <span className='hidden md:flex'>|</span>
                    <span className='text-blue '> Computación</span>
                    <MdKeyboardArrowRight size={20} className="opacity-70 hidden md:flex" />
                    <span className='text-blue'>Laptops y accesorios</span>
                    <MdKeyboardArrowRight size={20} className="opacity-70 hidden md:flex" />
                    <span className='text-blue'>Notebooks</span>
                </div>

                <div className='flex flex-row gap-4 mt-4 md:mt-0'>
                    <span className='text-blue'>Compartir  </span>
                    <span> | </span>
                    <span className='text-blue'>  Vender uno igual</span>
                </div>
            </div>
        </div>
    )
}