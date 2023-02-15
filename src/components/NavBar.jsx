import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { BsCart2 } from 'react-icons/bs'


export const NavBar = () => {
    return (
        <>


            <div className='flex bg-yellow flex-row items-center justify-between px-8 py-2 ' >
                <div className='flex flex-col items-start gap-6'>
                    <img src="./src/assets/mercadolibre.png" width={48} alt="#" className='' />
                    <div className='flex flex-row gap-2 items-center'>
                        <CiLocationOn size={28} className="opacity-60 " />
                        <div className='flex flex-col items-start '>
                            <span className=' text-black '>Ingresa tu domicilio</span>

                        </div>
                    </div>

                </div>
                <div className='hidden md:flex flex-col items-start gap-6'>
                    <div className='flex flex-row items-center'>
                        <input className='hidden shadow-md md:flex w-[600px]  p-2' type="text" placeholder='Buscar productos, marcas y más' />
                        <button >
                            <IoSearchOutline size={22} className='bg-yellow md:bg-white text-slate-400 h-[40px] ' />
                        </button>
                    </div>

                    <div className='flex flex-row  text-gray opacity-70  gap-4 text-sm  '>
                        <span>Categorías</span>
                        <span>Ofertas</span>
                        <span>Historial</span>
                        <span>Supermercado</span>
                        <span>Moda</span>
                        <span>Vender</span>
                        <span>Ayuda</span>
                    </div>

                </div>
                <div className='flex flex-col items-end md:items-start gap-6'>
                    <div className='flex flex-row items-center justify-center'>
                        <img src="./src/assets/disney.png" alt="#" width={56} />
                        <img src="./src/assets/star.png" alt="#" width={68} />
                    </div>
                    <div className='flex flex-row gap-2 text-sm items-center justify-center text-black  '>
                        <HiOutlineUserCircle size={28} className="opacity-60 " />
                        <span className='hidden md:flex'>Leandro</span>
                        <span className='hidden md:flex' >Mis compras</span>
                        <span className='hidden md:flex' >Favoritos</span>
                        <IoIosNotificationsOutline size={24} className='opacity-60 hidden md:flex ' />
                        <IoSearchOutline size={18} className="flex md:hidden" />
                        <BsCart2 size={20} className="opacity-60" />
                    </div>
                </div>
            </div>



        </>
    )
}