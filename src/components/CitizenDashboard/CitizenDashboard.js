//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 20 oct 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenDashboard
//    DESCRIPTION - CitizenDashboard Component
//////////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import citizenLog from '../../assets/citizenLog.svg'
import { Link } from 'react-router-dom'
import CitizenNotification from '../../Pages/citizen/CitizenNotification';
import Processguide from './Processguide';

function CitizenDashboard(props) {

    console.log("citizenName in dashboard", props.citizenName)

    const [citizenName, setcitizenName] = useState();
    useEffect(() => {
        setcitizenName(props.citizenName)

    }, [props.citizenName])

    const [showProcessGuide, setshowProcessGuide] = useState(false)
    const handleHelp = () => {
        showProcessGuide ? setshowProcessGuide(false) : setshowProcessGuide(true)
    }

    return (
        <>

            <div className='container mx-auto  '>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                    <h1 className='text-3xl text-center font-bold mt-12 text-gray-700'>WELCOME USER TO YOUR DASHBOARD</h1>
                </div>


                <div>
                    {showProcessGuide ? <Processguide fun={setshowProcessGuide} /> : ''}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12'>

                    <div className='col-span-8 mt-12'>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  p-2  container mt-2'>

                            <div className=''>
                                <h1 className=' text-2xl font-semibold text-gray-600 font-sans text-center '>
                                    SERVICES WE OFFER
                                </h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  p-2'>
                            <div className=' mx-auto'>
                                <Link to="/citizenselfdetailform">
                                    <div class="shadow-lg rounded-2xl lg:w-64 w-96   p-2 py-2 mb-2 bg-purple-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <div class="flex flex-col items-center justify-center">
                                            <div class="w-20 h-20 relative ">
                                                <img src='https://cdn-icons-png.flaticon.com/512/1055/1055664.png' className=' h-16  opacity-85' />
                                            </div>

                                            <p class="text-gray-800 text-center text-md font-medium mb-1 ">
                                                ADVERTISEMENT
                                            </p>
                                            <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                                You Can Get License To Advertise Your Business Name On Your Shop
                                            </p>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className=' mx-auto'>
                                <Link to="/citizenApplication/property">
                                    <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <div class="flex flex-col items-center justify-center">
                                            <div class="w-20 h-20  mx-auto relative">
                                                <img src='https://cdn-icons-png.flaticon.com/512/609/609803.png' className=' h-16  opacity-85' />
                                            </div>
                                            <p class="text-gray-800 text-md font-medium mb-1 ">
                                                PROPERTY
                                            </p>
                                            <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                                You Can Get License To Advertise Your Business Name On Your Shop
                                            </p>

                                        </div>
                                    </div>
                                </Link>


                            </div>
                            <div className=' mx-auto'>
                                <Link to="/citizenApplication/water">
                                    <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-cyan-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <div class="flex flex-col items-center justify-center">
                                            <div class="w-20 h-20   relative ">
                                                <img src='https://cdn-icons-png.flaticon.com/512/3105/3105807.png' className=' h-16  opacity-85' />
                                            </div>
                                            <p class="text-gray-800 text-md font-medium mb-1">
                                                WATER
                                            </p>
                                            <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                                You Can Get License To Advertise Your Business Name On Your Shop
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-2 -mt-3'>
                            <div className=' mx-auto'>
                                <Link to="/citizenTrade">
                                    <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <div class="flex flex-col items-center justify-center">
                                            <div class="w-20 h-20   relative  ">
                                                <img src='https://cdn-icons-png.flaticon.com/512/3309/3309991.png' className=' h-16  opacity-85' />
                                            </div>
                                            <p class="text-gray-800 text-md font-medium mb-1">
                                                TRADE
                                            </p>
                                            <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                                You Can Get License To Advertise Your Business Name On Your Shop
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className=' mx-auto'>
                                <Link to="">
                                    <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-teal-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                        <div class="flex flex-col items-center justify-center">
                                            <div class="w-20 h-20   relative  ">
                                                <img src='https://cdn-icons-png.flaticon.com/512/602/602182.png' className=' h-16  opacity-85' />
                                            </div>
                                            <p class="text-gray-800 text-md font-medium mb-1">
                                                BUILDING PLAN
                                            </p>
                                            <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                                You Can Get License To Advertise Your Business Name On Your Shop
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className=' mx-auto'>
                                <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-orange-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <div class="flex flex-col items-center justify-center">
                                        <div class="w-20 h-20  relative ">
                                            <img src='https://cdn-icons-png.flaticon.com/512/2587/2587883.png' className=' h-16  opacity-85' />
                                        </div>
                                        <p class="text-gray-800 text-md font-medium mb-1">
                                            SOLID WASTE MANAGEMENT
                                        </p>
                                        <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                            You Can Get License To Advertise Your Business Name On Your Shop
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-2-mt-7'>

                            <div className=' mx-auto'>
                                <div class="shadow-lg rounded-2xl lg:w-64 w-96 p-2 py-2 mb-2 bg-yellow-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                    <div class="flex flex-col items-center justify-center">
                                        <div class="w-20 h-20   relative">
                                            <img src='https://cdn-icons-png.flaticon.com/512/3617/3617064.png' className=' h-16  opacity-85' />
                                        </div>
                                        <p class="text-gray-800 text-md font-medium mb-1">
                                            BIRTH & DEATH CERTIFICATE
                                        </p>
                                        <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                            You Can Get License To Advertise Your Business Name On Your Shop
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-4 mt-12'>
                        <button type='button' onClick={handleHelp}>
                            <p className='text-blue-500 font-bold text-lg ml-6'>How to apply?</p>
                        </button>
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  container mt-2'>
                            <div className='text-center'>
                                <h1 className='ml-2 text-2xl font-semibold text-gray-600 font-sans  '>
                                    NOTIFICATION
                                </h1>
                            </div>
                        </div>
                        <CitizenNotification />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CitizenDashboard