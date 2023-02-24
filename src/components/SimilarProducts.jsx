import React from 'react'
import image1 from '../assets/products/1.jpg';
import image2 from '../assets/products/2.jpg';
import image3 from '../assets/products/3.jpg';
import image4 from '../assets/products/4.jpg';
import { BsStarFill, BsStarHalf } from 'react-icons/bs'


export const SimilarProducts = () => {
    return (
        <div className='hidden md:grid'>
            <h1 className='text-2xl font-600'>Compará con otros productos similares</h1>
            <div className='mt-6 grid grid-cols-2'>
                <button className='hover:text-blue hover:border-b-4  font-semibold p-2'>Productos similares</button>
                <button className='hover:text-blue hover:border-b-4 font-semibold border-blue'>Visitados recientemente</button>
            </div>

            <div className='flex flex-row items-end justify-end gap-6 mr-8 mt-6 p-4'>
                <div className='flex flex-col items-center font-semibold'>
                    <img src={image1} alt="" className='w-[200px]' />
                    <span className='text-sm'>Notebook Asus X515EA </span>
                    <span className='text-sm'>15.6 FHD Core I5 1135G7</span>
                    <span className='text-sm'> 8GB 256GB SSD N...</span>
                    <span className='text-sm text-blue'>Ver producto</span>
                </div>
                <div className='flex flex-col items-center font-semibold'>
                    <img src={image2} alt="" className='w-[200px]' />
                    <span className='text-sm'>Notebook Acer Aspire</span>
                    <span className='text-sm'>5 15.6 FH D Ryzen 5</span>
                    <span className='text-sm'>  5500U 8GB 1TB HDD RA...</span>
                    <span className='text-sm text-blue'>Ver producto</span>
                </div>
                <div className='flex flex-col items-center font-semibold'>
                    <img src={image3} alt="" className='w-[200px]' />
                    <span className='text-sm'>Notebook Acer Aspire 5 15.6</span>
                    <span className='text-sm'>  Core I3 10110U</span>
                    <span className='text-sm'> 4GB 256GB SSD NVM...</span>
                    <span className='text-sm text-blue'>Ver producto</span>
                </div>
                <div className='flex flex-col items-center font-semibold'>
                    <img src={image4} alt="" className='w-[200px]' />

                    <span className='text-sm'>Notebook Lenovo V15-IGL</span>
                    <span className='text-sm'> 15.6 PENTIUM N5030</span>
                    <span className='text-sm'> 4GB 1TB HDD Freed...</span>
                    <span className='text-sm text-blue'>Ver producto</span>

                </div>
            </div>

            <div className='grid grid-cols-5  p-4 h-[800px] w-full m-auto'>
                <div className='flex flex-col items-start gap-8  '>
                    <span>Opiniones</span>
                    <span>Precio</span>
                    <span>Color</span>
                    <span>Memoria RAM</span>
                    <span>Tipo de memoria RAM</span>
                    <span>Capacidad del SSD</span>
                    <span>Frecuencia de pantalla </span>
                    <span>Resolución de pantalla</span>
                    <span>Con pantalla táctil</span>
                    <span>Modelo detallado</span>
                </div>

                <div className='flex flex-col items-start  gap-8  '>
                    <div className='flex flex-row items-center text-blue gap-1'>
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarHalf size={14} />
                        <span className='text-sm text-textGray'>(15)</span>
                    </div>
                    <span>$219.999</span>
                    <span>Plateado</span>
                    <span>12 GB</span>
                    <span>DDR4</span>
                    <span>256GB</span>
                    <span>60 Hz</span>
                    <span>1920px x 1080px</span>
                    <span>No</span>
                    <span>-</span>
                </div>

                <div className='flex flex-col gap-8 '>
                    <div className='flex flex-row items-center text-blue gap-1'>
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <span className='text-sm text-textGray'>(578)</span>

                    </div>
                    <span>$230.300</span>
                    <span>Plateado</span>
                    <span>8GB</span>
                    <span>DDR4</span>
                    <span>256 GB</span>
                    <span>-</span>
                    <span>1366 px x 768 px</span>
                    <span>No</span>
                    <span>I3515_R58256SWNXHS_522</span>


                </div>

                <div className='flex flex-col gap-8 '>
                    <div className='flex flex-row items-center text-blue gap-1'>
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <span className='text-sm text-textGray'>(1152)</span>
                    </div>
                    <span>$203.990</span>
                    <span>Slate gray</span>
                    <span>8 GB</span>
                    <span>DDR4</span>
                    <span>256 GB</span>
                    <span>-</span>
                    <span>1920 px x 1080 px</span>
                    <span>-</span>
                    <span>X515EA-EJ710</span>
                </div>

                <div className='flex flex-col gap-8'>
                    <div className='flex flex-row items-center text-blue gap-1'>
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarFill size={14} />
                        <BsStarHalf size={14} />
                        <span className='text-sm text-textGray'>(67)</span>
                    </div>
                    <span>$213.299</span>
                    <span>Azul</span>
                    <span>8 GB</span>
                    <span>DDR4</span>
                    <span>256 GB</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>X1502ZA-EJ294W</span>
                </div>
            </div>


        </div>
    )
}
