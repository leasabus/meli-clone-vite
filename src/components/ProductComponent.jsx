import React, { useState } from 'react'

import { AiOutlineHeart, AiFillStar } from 'react-icons/ai';
import { Characteristics } from './productDetails/Characteristics';

import { ProductDescription } from './productDetails/ProductDescription';
import { RelatedProducts } from './productDetails/RelatedProducts';


export const ProductComponent = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images);


    return (
        <>
            <div className='flex flex-col'>
                <div className='bg-white flex flex-col md:flex-row gap-10'>
                    <div className='flex flex-row items-center justify-center md:items-start md:justify-start  md:flex-col  top-30 left-12 gap-6 cursor-pointer p-2 '>
                        {
                            images.map((image) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt={image}
                                    width={60}
                                    className="border  border-borderColor rounded hover:border-blue hover:border-1"
                                    onClick={() => setSelectedImage(image)}
                                    onLoad={() => setSelectedImage(image)}

                                />
                            ))
                        }
                    </div>

                    <div className='w-[300px] md:w-[350px] md:h-[350px] mt-20 md:mt-32  ' >
                        <img src={selectedImage}
                            alt="image" />
                    </div>

                    <div className=' w-[250px] md:w-[370px] flex flex-col p-4 ml-10 items-center md:items-start text-center '>
                        <div className='flex flex-row justify-between gap-4 '>
                            <div className='text-textGray'>
                                <span>Nuevo</span>
                                <span>|</span>
                                <span>+100 vendidos</span>
                            </div>
                            <AiOutlineHeart size={26} className="text-blue opacity-70 md:ml-20" />
                        </div>
                        <h1 className='font-bold text-xl mt-2 text-start'>Notebook HP 250 15.6" Core I5 1135G7 8GB 256GB SSD NVMe W11 Home</h1>

                        <div className='flex flex-row items-center gap-1 mt-4 text-blue'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <span className='text-blue text-sm'>(11)</span>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-2 mt-2'>
                            <button className='bg-orange text-white rounded text-sm px-1 py-0.5  '>MÁS VENDIDO</button>
                            <span className='text-blue text-sm'>16º en notebooks</span>
                        </div>
                        <span className='line-through mt-4'>229.999$</span>

                        <span className='text-4xl font-normal'>240.000$</span>

                        <span>Pagá en cuotas</span>

                        <span className='text-blue text-sm'>Ver los medios de pago</span>

                        <div className='flex flex-col items-center justify-center text-start text-sm gap-2'>
                            <span className='mt-6 font-semibold text-sm'>Lo que tenes que saber de este producto</span>
                            <ul className='flex flex-col gap-2 list-disc ml-5'>
                                <li>Procesador Intel Core i7</li>
                                <li>Memoria RAM de 8GB</li>
                                <li>Resolución de 1366x768 PX</li>
                                <li>Es antirreflejo</li>
                                <li>Placa de video Intel Iris Plus Graphics G7</li>
                                <li>Cuenta con 3 puertos USB y puerto HDMI</li>
                                <li>Incluye lector de tarjeta de memoria</li>
                            </ul>
                        </div>

                        <span className='text-blue mt-4 text-sm'>Ver características</span>
                        <div className='flex flex-col mt-8 text-sm items-start'>
                            <span>Opciones de compra:</span>

                            <span className='text-blue '>4 productos nuevos desde 215.000$</span>
                        </div>

                    </div>

                </div>
                <RelatedProducts />
                <Characteristics />
                <ProductDescription />
            </div>
        </>
    )
}
