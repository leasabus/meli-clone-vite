import React from 'react'
import logo from '../../assets/payments/mercado-credito.svg'
import card1 from '../../assets/payments/visa.svg'
import card2 from '../../assets/payments/american.svg'
import card3 from '../../assets/payments/naranja.svg'
import card4 from '../../assets/payments/master-card.svg'

import debito1 from '../../assets/payments/visa-debito.svg'
import debito2 from '../../assets/payments/master-debito.svg'
import debito3 from '../../assets/payments/cabal-debito.svg'
import debito4 from '../../assets/payments/debito2.svg'

import efectivo1 from '../../assets/payments/rapipago.svg'
import efectivo2 from '../../assets/payments/pago-facil.svg'


export const Payments = () => {
    return (
        <div className='border border-black rounded border-opacity-10 mt-8 w-full'>
            <h2 className='text-lg'>Medios de pago</h2>

            <div className='mt-6 '>
                <span>Hasta 12 coutas sin tarjeta</span>
                <img src={logo} alt="" className='mt-2' />
            </div>

            <div className='mt-4'>
                <span >Tarjetas de crédito</span>
                <div className='flex flex-row gap-6 mt-2'>
                    <img src={card1} alt="visa" />
                    <img src={card2} alt="american" />
                    <img src={card3} alt="naranja" />
                    <img src={card4} alt="masterd" />
                </div>
            </div>

            <div className='mt-4'>
                <span>Tarjetas de débito</span>
                <div className='flex flex-row gap-6 mt-2'>
                    <img src={debito1} alt="" />
                    <img src={debito2} alt="" />
                    <img src={debito3} alt="" />
                </div>
            </div>
            <div>
                <img src={debito4} alt="" />

            </div>

            <div className='mt-4'>
                <span>Efectivo</span>
                <div className='flex flex-row gap-6 mt-2'>
                    <img src={efectivo1} alt="" />
                    <img src={efectivo2} alt="" />
                </div>
            </div>

            <div className='mt-4'>
                <span className='text-blue text-sm '>Conocé otros medios de pago</span>
            </div>
        </div>
    )
}
