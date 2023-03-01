import React from 'react'
import card1 from '../../public/assets/payments/american.svg'
import card2 from '../../public/assets/payments/naranja.svg'
import card3 from '../../public/assets/payments/master-card.svg'
import card4 from '../../public/assets/payments/visa-debito.svg'
import card5 from '../../public/assets/payments/master-debito.svg'
import card6 from '../../public/assets/payments/cabal-debito.svg'
import card7 from '../../public/assets/payments/provencred.svg'
import card8 from '../../public/assets/payments/macro.svg'
import card9 from '../../public/assets/payments/hsbc.svg'
import card10 from '../../public/assets/payments/bco-provincia.svg'

export const CardImages = () => {
    return (
        <div className='grid grid-cols-5 gap-4 md:gap-6 scroll-m-1  mt-6'>

            <div>
                <img src={card1} alt="" />
                <span className='text-green text-sm font-semibold'>6 cuotas</span>
            </div>
            <div>
                <img src={card2} alt="" />
                <span className='text-green text-sm font-semibold'>3 cuotas</span>
            </div>
            <div>
                <img src={card3} alt="" />
                <span className='text-green text-sm font-semibold'>6 cuotas</span>
            </div>
            <div>
                <img src={card4} alt="" />
                <span className='text-green text-sm font-semibold'>3 cuotas</span>
            </div>
            <div>
                <img src={card5} alt="" />
                <span className='text-green text-sm font-semibold'>6 cuotas</span>
            </div>

            <div>
                <img src={card6} alt="" />
                <span className='text-green text-sm font-semibold'>6 cuotas</span>
            </div>
            <div>
                <img src={card7} alt="" />
                <span className='text-green text-sm font-semibold'>3 cuotas</span>
            </div>
            <div>
                <img src={card8} alt="" />
                <span className='text-green text-sm font-semibold'>6 cuotas</span>
            </div>
            <div>
                <img src={card9} alt="" />
                <span className='text-green text-sm font-semibold'>3 cuotas</span>
            </div>
            <div>
                <img src={card10} alt="" />
                <span className='text-green text-sm font-semibold'>3 cuotas</span>
            </div>

        </div>
    )
}
