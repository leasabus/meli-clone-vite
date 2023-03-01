import React from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchComponent = () => {
    return (
        <div className='bg-white h-auto max-w-[1200px] m-auto px-8 py-4 mt-6 flex flex-col items-center md:items-start border-solid  border-[0.5] border-borderColor '>
            <h2 className='font-semibold '>Busca lo que querés saber</h2>
            <div className='flex flex-row  border-[1px] border-black border-opacity-40 rounded'>
                <input
                    className='w-[700px] p-3'
                    type="text"
                    placeholder="Escribí una pregunta o palabra clave"
                />
                <button
                    className=' bg-blue text-white rounded p-3 '
                    type="submit">
                    <AiOutlineSearch size={20} />
                </button>
            </div>

            <h2>Últimas realizadas</h2>
            <div>
                <span>Tiene excel?</span>
                <div className='flex flex-row items-center'>
                    <BsArrowReturnRight />
                    <span>Hola! Gracias por contactarte. Si! trae la versión de prueba de un mes.</span>
                </div>

            </div>
        </div>
    )
}
