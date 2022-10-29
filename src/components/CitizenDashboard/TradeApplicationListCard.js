//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterApplicationListCard
//    DESCRIPTION - WaterApplicationListCard Component for displaying list of application for water
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react';
import { Link } from 'react-router-dom';

function TradeApplicationListCard() {

    let titleStyle = "text-xs p-1 text-[#37517e]";
    let inputStyle = "text-sm font-semibold text-[#37517e]";
    const [tabNum, settabNum] = useState(1);

    let ApplicationList = [1, 2, 3];

    const handleTabs = () => {

    }

    return (
        <>
            <div className='flex mb-8  px-4'>
                <div className='flex-1 '>
                    <h1 className='font-bold text-2xl text-gray-600 float-left'>MY TRADE  LIST</h1>
                </div>

                <div className=' '>

                    {/* <button className='float-left bg-[#37517e] py-1 px-2 ml-2 text-sm font-semibold rounded-md shadow-lg text-white hover:bg-[#ff583d]'>
                        APPLY NEW APPLICATION
                    </button> */}

                </div>
            </div>
            <div className='mx-auto w-full flex justify-evenly m-4 font-mono text-xl'>
                <div className='h-[4rem] w-[16rem]  bg-blue-100 hover:bg-blue-200 rounded-xl flex justify-evenly' onClick={handleTabs}>
                    <img src="https://cdn-icons-png.flaticon.com/512/3554/3554009.png" alt="" className='h-8 h-8 mt-3' />
                    <span className='mt-3'> Application List </span>
                </div>

                <div className='h-[4rem] w-[16rem]  bg-blue-100 hover:bg-blue-200  rounded-xl flex justify-evenly' onClick={handleTabs} >
                <img src="https://cdn-icons-png.flaticon.com/512/3554/3554009.png" alt="" className='h-8 h-8 mt-3' />
                    <Link to='/citizenTrade'>
                        
                        <span className='mt-3'> Services </span>
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 '>
                {/*  card listing */}
                {
                    ApplicationList.map((item) => (
                        <>
                            <div className='col-span-4 '>
                                <div className='border  w-80  p-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500 mx-auto'>
                                    <div className='flex px-4'>
                                        <div className='flex-1 '>
                                            <img src='https://cdn-icons-png.flaticon.com/512/3554/3554009.png' className='h-6' />
                                        </div>
                                        <div className='flex-1 '>
                                            <h1 className='font-bold text-md text-amber-400 float-right'>APPROVED</h1>
                                        </div>
                                    </div>

                                    <div className='bg-white rounded-lg p-1  mt-2'>
                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}> HOLDING NO :
                                                <span className={`${inputStyle}`}> 123456789012345678901234</span></div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}>SAF NO :
                                                <span className={`${inputStyle}`}> SAF34567898904567890</span></div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}>WARD NO :
                                                <span className={`${inputStyle}`}> 2</span></div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}>ASSESSMENT TYPE :
                                                <span className={`${inputStyle}`}> New-Assessment</span></div>
                                        </div>

                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}>APPLY DATE :
                                                <span className={`${inputStyle}`}>12/10/2022</span></div>
                                        </div>

                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle} `}>PROPERTY TYPE:
                                                <span className={`${inputStyle} `}> Flats/unit in multi stored building</span></div>
                                        </div>



                                    </div>

                                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-6'>
                                        {/* <div className=''>
                                        <div className='bg-green-400 rounded-full text-center text-xs py-2'>
                                            APPROVED
                                        </div>
                                    </div> */}
                                        <div className=''>
                                            <div className='bg-[#37517e] hover:bg-[#ff583d] text-white rounded-md text-center text-xs py-2 shadow-lg'>
                                                PAYMENT
                                            </div>
                                        </div>
                                        <Link to='/viewApplicationDetail'>
                                            <div className=''>
                                                <div className='bg-[#37517e] hover:bg-[#ff583d] text-white rounded-md text-center text-xs py-2 shadow-lg'>

                                                    VIEW
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default TradeApplicationListCard