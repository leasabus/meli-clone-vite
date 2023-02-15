import React from 'react'
import { ProductComponent } from './ProductComponent'
import image1 from '../assets/hp1.jpg';
import image2 from '../assets/hp2.jpg';
import image3 from '../assets/hp3.jpg';
import { ProductInformation } from './ProductInformation';



export const ProductContainer = () => {
    return (
        <div className='h-full max-w-[1200px] flex-row gap-10 shadow-md bg-white  m-auto px-8 py-4 flex '>
            <ProductComponent images={[image1, image2, image3]} />
            <ProductInformation />

        </div>
    )
}
