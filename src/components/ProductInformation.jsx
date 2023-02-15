import React from 'react'
import { BsTruck } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { SlTrophy } from 'react-icons/sl';
import { IoBagCheckOutline } from 'react-icons/io5';

export const ProductInformation = () => {
    return (
        <div className=' w-[300px] flex flex-col h-auto items-start justify-start border-solid border-[0.5px] border-borderColor border-opacity-40 rounded p-4'>
            <div className='flex flex-col text-sm items-start justify-start'>
                <div className='flex flex-row items-center gap-2 text-green2'>
                    <BsTruck size={20} />
                    <span className=' font-bold'>Llega gratis el viernes</span>
                </div>

                <div className='flex flex-col items-start ml-6'>
                    <span className='text-textGray'>Comprando dentro de las próximas</span>
                    <span>4 h 9min</span>
                    <div className='flex flex-row text-blue gap-1'>
                        <CiLocationOn size={18} />
                        <span className=' font-semibold'>Enviar a Sadi Carnot 373</span>
                    </div>
                </div>

            </div>

            <div className='mt-4 text-sm'>
                <span>Vendido por <span className='text-blue font-semibold'>INSUMOS_ACUARIO</span></span>
                <div className='flex flex-row gap-1'>
                    <span>MercadoLíder </span>
                    <span className='text-textGray'> | </span>
                    <span>+5mil ventas</span>
                </div>
                <span className='text-textGray'>Hace factura A</span>
            </div>

            <span className='font-semibold mt-4'>Stock disponible</span>
            <div className='flex flex-row mt-4 text-sm items-center'>
                <span>Cantidad: <span className='font-semibold'>1 unidad </span></span>
                <MdOutlineKeyboardArrowDown size={18} className="text-blue" />
                <span className='text-textGray'>(6 disponibles)</span>
            </div>

            <div className='mt-6 flex flex-col gap-2 items-center justify-center'>
                <button className='bg-blue text-white w-[250px] p-3 rounded font-bold opacity-95 '>Comprar ahora</button>
                <button className='text-blue w-[250px] p-3 rounded font-bold '>Agregar al carrito</button>
            </div>

            <div className='flex flex-col mt-4 text-sm gap-4 w-[260px] '>
                <div className='flex flex-row gap-2 '>
                    <BsArrowReturnLeft size={20} />
                    <span className='text-textGray'> <span className='text-blue font-semibold'>Devolución gratis.</span>
                        Tenés 30 días desde que lo recibís.</span>
                </div>
                <div className='flex flex-row gap-2 '>
                    <HiOutlineShieldCheck size={32} />
                    <span className='text-textGray'><span className='text-blue font-semibold'>Compra Protegida.</span>Recibí el producta que esperabas o te devolvemos tu diner</span>
                </div>
                <div className='flex flex-row gap-2 '>
                    <SlTrophy size={16} />
                    <span className='text-textGray'><span className='text-blue font-semibold'>Mercado Puntos.</span>Sumas 2768 puntos.</span>
                </div>
                <div className='flex flex-row gap-2 mt-2 '>
                    <IoBagCheckOutline size={18} />
                    <span className='text-textGray'>12 meses de garantía de fábrica</span>
                </div>
            </div>


        </div>
    )
}
