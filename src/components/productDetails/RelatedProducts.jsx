
import React from 'react'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { products } from '../../data/data';
import { RelatedComponent } from './RelatedComponent';

export const RelatedProducts = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <div >
            <h2 className='text-2xl font-600 mt-8  md:text-start px-2  text-center'>Quienes vieron este producto también compraron</h2>

            <div className='relative flex justify-center items-center w-full group mt-8 '>
                <MdChevronLeft
                    size={40}
                    className='text-blue cursor-pointer rounded-full  relative opacity-50  left-0 cursor-ponter z-10   group-hover:block'
                    onClick={slideLeft} />
                <div id='slider'
                    className=" w-[450px]  md:w-[750px]  overflow-hidden  whitespace-nowrap scroll-smooth scrollbar-hide  relative flex flex-row gap-6">
                    {
                        products.map((product, id) => (
                            <RelatedComponent id={id} key={id} product={product} />
                        ))
                    }
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='text-blue cursor-pointer rounded-full  relative opacity-50 hover:opacity-100 left-0 cursor-ponter z-10  group-hover:block '
                    size={40} />


            </div>
        </div>
    )
}
