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
    return (
        <>

            {/* <div className='p-20'>
                <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6  container mx-auto'>
                    <div className='col-span-5 '>
                        <h3 class=" text-gray-600 font-sans md:text-lg sm:text-sm  lg:text-4xl mt-6 ">Welcome, {citizenName?.name}!</h3>
                        <p class="text-left  text-gray-500 md:text-xs sm:text-xs  lg:text-sm mt-8 ">This is your dashboard,Find all your information here.<br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem architecto nobis nihil assumenda hic corporis aliquid nisi rerum magni, a fuga excepturi ipsum molestiae ducimus odit necessitatibus fugiat culpa numquam.
                        </p>
                    </div>

                    <div className=' '>
                        <div className='bg-blue-400 w-9 h-9 rounded-full p-1 mt-2 ml-8  border border-slate-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-0.5 mt-0.5 text-white ">
                                <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className='bg-yellow-400 w-9 h-9 rounded-full p-1 ml-24 -mt-14  text-white  border border-slate-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mt-1 ml-0.5">
                                <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd" />
                            </svg>

                        </div>
                        <div className='bg-green-400 w-9 h-9 rounded-full p-1 ml-36  text-white border border-slate-200'>
                            <WhatsAppIcon className='ml-0.5 h-4 -mt-0.5' />


                        </div>
                        <img src={citizenLog} className='h-36' />

                    </div>
                </div>
            </div> */}

            <div className='container mx-auto  '>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                    <h1 className='text-3xl text-center font-bold mt-12 text-gray-700'>WELCOME USER TO YOUR DASHBOARD</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 -mt-4'>
                    <div className='col-span-9 p-6'>
                        <Processguide />
                    </div>
                    <div className=' col-span-3 bg-blue-00'>
                        <h1 className='text-3xl font-bold p-12 text-gray-600'> HOW TO APPLY FOR ANY SERVICE ?</h1>
                        <img src='https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1665668008~exp=1665668608~hmac=11bf70324869ece22bc34dcdb9cbd5e8dafd4abba76054822143d0f1d8e7951e' className='-mt-12' />
                    </div>
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
                                <Link to="/citizenPropertyApply">
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
                                           <p>How to apply</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className=' mx-auto'>
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
                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-2 -mt-3'>
                            <div className=' mx-auto'>
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
                            </div>
                            <div className=' mx-auto'>
                                <Link to="/citizenselfdetailform">
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
                            {/* <div className=' mx-auto'>
                        <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-teal-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <div class="flex flex-col items-center justify-center">
                                <div class="w-20 h-20   relative ">
                                    <img src='https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg?w=740&t=st=1664274233~exp=1664274833~hmac=522e5bcf3834f2bc492b270610878ccef08f7fa09de3f086006b8055760a1833' className=' h-16  opacity-85' />
                                </div>
                                <p class="text-gray-800 text-md font-medium mb-1">
                                    TRADE
                                </p>
                                <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                You Can Get License To Advertise Your Business Name On Your Shop
                                </p>
                            </div>
                        </div>
                    </div> */}
                        </div>

                    </div>
                    <div className='col-span-4 mt-12'>
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