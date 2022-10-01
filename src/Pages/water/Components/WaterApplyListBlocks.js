//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 30 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterApplyListBlocks.js
//    DESCRIPTION -
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import regimg from '../Assets/regimg.png'
import uploadpic from '../Assets/uploadpic.png'
import progress from '../Assets/progress.png'
import waterTruck from '../Assets/waterTruck.png'
import seaways from '../Assets/seaways.png'
import file from '../Assets/file.png'
import wellDrill from '../Assets/wellDrill.png'
import handPump from '../Assets/handPump.png'
// import WaterApplicant from '../Form/WaterApplicant'
import WaterFormIndex from '../Form/WaterFormIndex'

function WaterApplyListBlocks(props) {

    const [hideServiceBlocks, setServiceBlocks] = useState(true)
    const [showNewConnWaterForm, setShowNewConnWaterForm] = useState(false)

    const handleApplyNewWaterConnection = () => {
        setServiceBlocks(false)
        setShowNewConnWaterForm(true)
    }

    const showWaterApplyListBlocks = () => {
        setServiceBlocks(true)
        setShowNewConnWaterForm(false)
    }

    return (
        <>
            <div className=''>
                {showNewConnWaterForm && <WaterFormIndex back={showWaterApplyListBlocks} />}
                {hideServiceBlocks &&
                    <div>
                        <div className='md:flex md:flex-wrap m-5'>
                            <div className='m-3'>
                                <div onClick={handleApplyNewWaterConnection} className='bg-red-300 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-red-400 transition duration-500 hover:scale-105'>
                                    <div className='flex justify-center p-3'>
                                        <img src={file} className="h-14 opacity-80" alt="" />
                                    </div>
                                    <p className='font-bold text-gray-800 text-center md:text-lg -mt-3 text-2xl'>Apply New Water Connection</p>
                                </div>
                            </div>
                            <div className='m-3'>
                                <div className='bg-green-300 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-green-400 transition duration-500 hover:scale-105'>
                                    <div className='flex justify-center p-3'>
                                        <img src={waterTruck} className="h-14 opacity-80" alt="" />
                                    </div>
                                    <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Book Water Tanker</p>
                                </div>
                            </div>
                            <div className='m-3'>
                                <div className='bg-yellow-300 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-yellow-400 transition duration-500 hover:scale-105'>
                                    <div className='flex justify-center p-3'>
                                        <img src={seaways} className="h-14 opacity-80" alt="" />
                                    </div>
                                    <p className='font-bold text-gray-800 text-center md:text-lg -mt-3 text-2xl'>Apply New Seawys Connection</p>
                                </div>
                            </div>
                            <div className='m-3'>
                                <div className='bg-sky-200 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-sky-300 transition duration-500 hover:scale-105'>
                                    <div className='flex justify-center p-3'>
                                        <img src={handPump} className="h-14 opacity-80" alt="" />
                                    </div>
                                    <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Shallow Water Tube</p>
                                </div>
                            </div>
                            <div className='m-3'>
                                <div className='bg-fuchsia-400 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-fuchsia-500 transition duration-500 hover:scale-105'>
                                    <div className='flex justify-center p-3'>
                                        <img src={wellDrill} className="h-16 opacity-80" alt="" />
                                    </div>
                                    <p className='font-bold text-gray-800 -mt-2 text-center md:text-lg text-2xl'>Apply For Deep Boaring</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={()=>props.showDash()} className='px-4 py-1 bg-blue-300 font-semibold rounded-sm shadow-lg text-lg'>Back To Dashboard</button>
                        </div>
                    </div>
                }
            </div>

        </>
    )

}

export default WaterApplyListBlocks;