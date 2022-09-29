import React, { useState } from 'react'
import WaterFormIndex from './Form/WaterFormIndex'
import LandingNav from '../Landing/LandingNav'
import WaterApplySidebar from './WaterApplySidebar'
import regimg from './Assets/regimg.png'
import uploadpic from './Assets/uploadpic.png'
import paymentImg from './Assets/credit-card.png'
import DocUploadFormIndex from './DocUploadForm/DocUploadFormIndex'
import PaymentFormIndex from './PaymentForm/PaymentFormIndex'

function WaterIndex() {
    const [blocks, setBlocks] = useState(true)
    const [applyWater, setApplyWater] = useState(false)
    const [docUpload, setDocUpload] = useState(false)
    const [makePayment, setMakePayment] = useState(false)

    const waterDashboard = () => {
        setBlocks(true)
        setApplyWater(false)
        setDocUpload(false)
        setMakePayment(false)
    }

    const handleApplyNew = () => {
        setBlocks(false)
        setApplyWater(true)
    }

    const handleDocUpload = () => {
        setBlocks(false)
        setDocUpload(true)
    }

    const handlePayment = () => {
        setBlocks(false)
        setMakePayment(true)
    }


    return (
        <>
            <LandingNav />
            <div className='grid md:grid-cols-10 rid-cols-12'>
                <div className='col-span-2 bg-white md:block hidden'>
                    <WaterApplySidebar dash={waterDashboard} />
                </div>
                <div className='md:col-span-8 col-span-12 '>
                    {blocks &&
                        <div className='md:flex m-5'>
                            <div onClick={handleApplyNew} className='m-3'>
                                <div className='bg-indigo-300 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-green-400 transition duration-500 hover:scale-105'>
                                    <div className='flex justify-center p-3'>
                                        <img src={regimg} className="h-14 opacity-60" alt="" />
                                    </div>
                                    <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Apply New Connection</p>
                                </div>
                            </div>
                            <div onClick={handleDocUpload} className='m-3'>
                                <div className='bg-red-200 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-red-300 transition duration-500 hover:scale-105'>
                                    <div className='flex justify-center p-3'>
                                        <img src={uploadpic} className="h-14 opacity-60" alt="" />
                                    </div>
                                    <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Documet Upload</p>
                                </div>
                            </div>
                            <div onClick={handlePayment} className='m-3'>
                                <div className='bg-green-300 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-green-400 transition duration-500 hover:scale-105'>
                                    <div className='flex justify-center p-3'>
                                        <img src={paymentImg} className="h-14 opacity-60" alt="" />
                                    </div>
                                    <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Make Payment</p>
                                </div>
                            </div>
                        </div>
                    }
                    {applyWater && <WaterFormIndex back={waterDashboard}/>}
                    {docUpload && <DocUploadFormIndex back={waterDashboard} />}
                    {makePayment && <PaymentFormIndex back={waterDashboard} />}
                </div>
            </div>
        </>
    )
}

export default WaterIndex

/*
Exported to -
1. App.js
*/
