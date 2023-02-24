import React from 'react'
import { products } from '../../data/data';


export const RelatedComponent = ({ product, id }) => {
    const imageUrl = `./src/assets/products/${id}.jpg`;
    return (

        <>
            <div className='flex flex-row h-[400px] w-[300px] items-center justify-center '>

                <ul >
                    <img src={imageUrl} className="w-[200px]" alt="#" />
                    <div className='mt-6'>
                        <li className='text-2xl '>{product?.price}</li>
                        <span className='text-green2 text-sm font-semibold'>6 cuotas sin interés</span>
                        <li className='text-green2 font-semibold text-sm'>Envío Gratis</li>
                        <li className='text-gray text-sm'>{product?.name.slice(0, 30)}</li>
                        <li className='text-gray text-sm' >{product?.name.slice(30, 60)}...</li>
                    </div>
                </ul>


            </div>
        </>
    )
}
