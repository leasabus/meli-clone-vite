import React from 'react'
import { ProductComponent } from './ProductComponent'
import image1 from '../assets/hp1.jpg';
import image2 from '../assets/hp2.png';
import image3 from '../assets/hp3.jpg';
import image4 from '../assets/hp4.jpg'
import { ProductInformation } from './ProductInformation';
import { SimilarProducts } from './SimilarProducts';



export const ProductContainer = () => {
    return (
        <div className='h-full max-w-[1200px] flex-col  gap-10 shadow-md bg-white  m-auto px-8 py-4 flex '>
            <div className='flex flex-col md:flex-row'>
                <ProductComponent images={[image1, image2, image3, image4]} />
                <ProductInformation />
            </div>

            <SimilarProducts />


        </div>
    )
}
