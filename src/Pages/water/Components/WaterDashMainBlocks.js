//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 30 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterDashMainBlocks.js
//    DESCRIPTION -
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import regimg from '../Assets/regimg.png'
import uploadpic from '../Assets/uploadpic.png'
import progress from '../Assets/progress.png'
import paymentImg from '../Assets/credit-card.png'
import WaterApplyListBlocks from './WaterApplyListBlocks'

function WaterDashMainBlocks(props) {

    const [showApplyListBlock, setShowApplyListBlock] = useState(false)
    const [hideCurrentBlock, setHideCurrentBlock] = useState(true)

    const applyNewService = () => {
        setShowApplyListBlock(true)
        setHideCurrentBlock(false)
    }

    return (
        <>
            <div>
                {showApplyListBlock && <WaterApplyListBlocks />}
                {hideCurrentBlock &&
                    <div className='md:flex md:flex-wrap m-5'>
                        {/* <div onClick={props.handleApplyNew} className='m-3'> */}
                        <div onClick={() => applyNewService()} className='m-3'>
                            <div className='bg-fuchsia-400 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-fuchsia-500 transition duration-500 hover:scale-105'>
                                <div className='flex justify-center p-3'>
                                    <img src={regimg} className="h-14 opacity-80" alt="" />
                                </div>
                                <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Apply For New Services</p>
                            </div>
                        </div>
                        <div onClick={props.handleApplyNew} className='m-3'>
                            <div className='bg-yellow-300 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-yellow-400 transition duration-500 hover:scale-105'>
                                <div className='flex justify-center p-3'>
                                    <img src={progress} className="h-14 opacity-80" alt="" />
                                </div>
                                <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>View Application Status</p>
                            </div>
                        </div>
                        <div onClick={props.handleDocUpload} className='m-3'>
                            <div className='bg-red-200 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-red-300 transition duration-500 hover:scale-105'>
                                <div className='flex justify-center p-3'>
                                    <img src={uploadpic} className="h-14 opacity-80" alt="" />
                                </div>
                                <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Documet Upload</p>
                            </div>
                        </div>
                        <div onClick={props.handlePayment} className='m-3'>
                            <div className='bg-green-300 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-green-400 transition duration-500 hover:scale-105'>
                                <div className='flex justify-center p-3'>
                                    <img src={paymentImg} className="h-14 opacity-80" alt="" />
                                </div>
                                <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Make Payment</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default WaterDashMainBlocks

/*
Exported to -
1. WaterIndex.js
*/