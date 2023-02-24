import React from 'react'

export const BuyOptions = () => {
    return (
        <>
            <div className='mt-8 w-full'>
                <span className='text-sm text-semibold  mt-6'>Otras opciones de compra</span>
                <div className='border border-black rounded border-opacity-10 mt-4 '>

                    <div className='flex flex-row justify-between '>
                        <span className='font-semibold text-lg'>$199.499</span>
                        <span className='text-sm text-gray opacity-70'>Mejor precio</span>
                    </div>

                    <div className='flex flex-col text-sm '>
                        <span>Pagá en 1 cuota</span>
                        <span className='text text-green2'>Llega gratis entre el <span className='font-bold'>viernes y el lunes</span></span>
                    </div>

                    <div className='flex flex-col text-sm mt-4'>
                        <span className='opacity-80'> Vendido por <span className='text-blue'>ELECTRONIC_MARKET</span></span>
                        <span className='opacity-80'>+5mil ventas</span>
                        <span className='text-gray opacity-70'>Hace factura A</span>
                    </div>

                    <div className='text-sm flex flex-row mt-4 '>
                        <button className='bg-blue  text-white rounded py-1 px-3'>Comprar ahora</button>
                        <button className='text-blue  py-1 px-3'>Agregar al carrito</button>
                    </div>
                </div>

                <div className='mt-6 border border-black rounded border-opacity-10 '>

                    <div className='flex flex-row justify-between '>
                        <span className='font-semibold text-lg'>$256.499</span>
                        <span className='text-sm text-gray opacity-70'>Mejor opción en cuotas</span>
                    </div>

                    <div className='flex flex-col text-sm'>
                        <span>Pagá en 1 cuota</span>
                        <span className='text text-green2'>Llega gratis entre el <span className='font-bold'>viernes y el lunes</span></span>
                    </div>

                    <div className='flex flex-col text-sm mt-4'>
                        <span>Vendido por <span className='text-blue'>HTVS</span></span>
                        <span>+1000 ventas</span>
                        <span className='text-gray opacity-70'>Hace factura A</span>
                    </div>

                    <div className='text-sm flex flex-row mt-4 '>
                        <button className='bg-blue  text-white rounded py-1 px-3'>Comprar ahora</button>
                        <button className='text-blue  py-1 px-3'>Agregar al carrito</button>
                    </div>
                </div>


            </div>
            <span className='text-sm font-bold text-blue opacity-80 mt-6'>Ver más opciones desde $199.999</span>
        </>
    )
}
