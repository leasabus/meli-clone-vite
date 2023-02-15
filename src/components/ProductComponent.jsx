import React, { useState } from 'react'
import { ProductInformation } from './ProductInformation';
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';


export const ProductComponent = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images);


    return (
        <div className='bg-white flex flex-row gap-4'>
            <div className='flex flex-col absolute top-30 left-12 gap-6 cursor-pointer p-2 '>
                {
                    images.map((image) => (
                        <img
                            key={image}
                            src={image}
                            alt={image}
                            width={60}
                            className="border  border-borderColor rounded hover:border-blue hover:border-2"
                            onClick={() => setSelectedImage(image)}
                            onLoad={() => setSelectedImage(image)}

                        />
                    ))
                }
            </div>

            <div className='w-[350px] h-[350px] mt-20' >
                <img src={selectedImage}
                    alt="image" />
            </div>

            <div className='w-[300px] '>
                <div className='flex flex-row justify-between gap-2 '>
                    <div className='text-textGray'>
                        <span>Nuevo</span>
                        <span>|</span>
                        <span>+100 vendidos</span>
                    </div>
                    <AiOutlineHeart size={30} className="text-blue opacity-70" />
                </div>
                <h1 className='font-bold text-xl'>Notebook HP 250 15.6" Core I5 1135G7 8GB 256GB SSD NVMe W11 Home</h1>

                <div className='flex flex-row items-center gap-1 mt-4 text-blue'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span className='text-blue text-sm'>(11)</span>
                </div>

                <div className='flex flex-row items-center'>
                    <button className='bg-orange text-white rounded text-sm '>MÁS VENDIDO</button>
                    <span className='text-blue text-sm'>16º en notebooks</span>
                </div>

                <span className='line-through'>229.999</span>

            </div>

            <ProductInformation />

        </div>
    )
}
