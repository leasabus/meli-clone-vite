import React from 'react'
import image1 from '../../assets/products/0.jpg'
import image2 from '../../assets/products/1.jpg'
import image3 from '../../assets/products/2.jpg'
import image4 from '../../assets/products/3.jpg'

export const PromotedProducts = () => {
    return (
        <div className='mt-10 border border-black rounded border-opacity-10'>
            <h2 className='text-lg'>Productos promocionados</h2>
            <span className='text-blue'>Aununcia acá</span>

            <div className='w-full h-auto flex flex-row gap-8 mt-6'>
                <img src={image1} alt="" width={80} />
                <div className='flex flex-col'>
                    <span className='text-lg'>$256.666</span>
                    <span className='text-green2 font-bold text-sm'>Envío gratis</span>
                    <span className='text-sm text-gray'>Notebook Lenovo</span>
                </div>

            </div>

            <div className='w-full h-auto flex flex-row gap-8 mt-6'>
                <img src={image2} alt="" width={80} height={80} />
                <div className='flex flex-col'>
                    <span className='text-lg'>$289.666</span>
                    <span className='text-green2 font-bold text-sm'>Envío gratis</span>
                    <span className='text-sm text-gray'>Notebook Acer</span>
                </div>

            </div>

            <div className='w-full h-auto flex flex-row gap-8 mt-6'>
                <img src={image3} alt="" width={80} />
                <div className='flex flex-col'>
                    <span className='text-lg'>$295.666</span>
                    <span className='text-green2 font-bold text-sm'>Envío gratis</span>
                    <span className='text-sm text-gray'>Notebook HP</span>
                </div>

            </div>

            <div className='w-full h-auto flex flex-row gap-8 mt-6'>
                <img src={image4} alt="" width={80} />
                <div className='flex flex-col'>
                    <span>$300.666</span>
                    <span className='text-green2 font-bold text-sm'>Envío gratis</span>
                    <span className='text-sm text-gray'>Notebook Lenovo</span>
                </div>

            </div>
        </div>
    )
}
