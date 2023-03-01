import React, { useState } from 'react'
import { CoutesModal } from '../views/CoutesModal';
import { DevolutionModal } from '../views/DevolutionModal';
import { PaymentsModal } from '../views/PaymentsModal';
import { SendModal } from '../views/SendModal'
import { WarrantyModal } from '../views/WarrantyModal';



export const QuestionsSection = () => {

    const [modal, setModal] = useState(false);
    const handleOpenModal = () => {
        setModal(true)
    }

    const [modal2, setModal2] = useState(false);
    const handleOpenModal2 = () => {
        setModal2(true)
    }

    const [modalPayments, setModalPayments] = useState(false);
    const openPaymentsModal = () => {
        setModalPayments(true)
    }

    const [warrantyModal, setWarrantyModal] = useState(false);
    const openWarrantyModal = () => {
        setWarrantyModal(true)
    }

    const [cuotesModal, setCuotesModal] = useState(false);
    const openCuotesModal = () => {
        setCuotesModal(true)
    }


    return (

        <div className='bg-white h-auto max-w-[1200px] m-auto px-8 py-4 mt-6 flex flex-col items-center md:items-start border-solid  border-[0.5] border-borderColor '>
            <h1 className=' text-2xl font-600'>Preguntas y respuestas</h1>
            <h3 className='text-md font-semibold mt-6'>¿Que querés saber?</h3>
            <div className='flex flex-col md:flex-row gap-6 mt-6'>
                <button
                    onClick={handleOpenModal}
                    className='text-blue bg-blueLight bg-opacity-40 text-sm font-bold p-1  '>Opciones de envío y retiro</button>
                <button
                    onClick={handleOpenModal2}
                    className='text-blue bg-blueLight bg-opacity-40 text-sm font-bold p-1 '>Devoluciones gratis</button>
                <button
                    onClick={openPaymentsModal}
                    className='text-blue bg-blueLight bg-opacity-40 text-sm font-bold p-1 '>Medios de pago y promociones</button>
                <button
                    onClick={openWarrantyModal}
                    className='text-blue bg-blueLight bg-opacity-40 text-sm font-bold p-1 '>Garantía</button>
            </div>
            <button
                onClick={openCuotesModal}
                className='mt-6 text-blue bg-blueLight bg-opacity-40 text-sm font-bold p-1 '>Coutas sin tarjeta</button>

            <SendModal open={modal} close={setModal} />
            <DevolutionModal open={modal2} close={setModal2} />
            <PaymentsModal open={modalPayments} close={setModalPayments} />
            <WarrantyModal open={warrantyModal} close={setWarrantyModal} />
            <CoutesModal open={cuotesModal} close={setCuotesModal} />
        </div>
    )
}
