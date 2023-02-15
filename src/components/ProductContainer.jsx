import React from 'react'
import { ProductComponent } from './ProductComponent'
import image1 from '../assets/hp1.jpg';
import image2 from '../assets/hp2.jpg';
import image3 from '../assets/hp3.jpg';



export const ProductContainer = () => {
    return (
        <div className='h-full max-w-[1200px] shadow-md bg-white  m-auto px-8 py-4 flex items-center justify-center'>
            <ProductComponent images={[image1, image2, image3]} />

        </div>
    )
}
