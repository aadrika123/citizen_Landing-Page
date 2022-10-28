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
import FeaturedVideoOutlinedIcon from '@mui/icons-material/FeaturedVideoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
// import "animate.css";
import { BsLink45Deg, BsQuestionLg, BsFillPersonFill, BsArrowBarRight, BsArrowClockwise } from 'react-icons/bs'
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { BiBell } from 'react-icons/bi'
import { IoIosBook } from 'react-icons/io'
import { GrServices } from 'react-icons/gr'
import { FaAmazonPay } from 'react-icons/fa'
import { MdOutlinePending, MdMiscellaneousServices } from 'react-icons/md'
import { TbHandClick } from 'react-icons/tb'
import { AiOutlineNotification, AiOutlineTransaction } from 'react-icons/ai'

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

    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)

    const funToggle = () => {
        setToggle(!toggle)
    }

    const funToggle2 = () => {
        setToggle2(!toggle2)
    }

    const funToggle3 = () => {
        setToggle3(!toggle3)
    }

    const funToggle4 = () => {
        setToggle4(!toggle4)
    }

    // Custom Styles
    let quickLinksStyle = 'px-4 py-1 rounded-md hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer border-l-2 border-[#37517e] text-[#37517e] border-r-2 shadow-md flex space-x-2 items-center'

    let faqsStyle = ' flex space-x-2 items-center transition-all duration-450 ease-in-out  px-4 py-1   cursor-pointer border-[#37517e] text-[#37517e] shadow-md'

    let notificationStyle = 'shadow-md px-4 py-1 rounded-md hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer border-l-2 border-[#37517e] border-r-2 text-[#37517e] flex space-x-2 items-center'

    let boxStyle = ' bg-white p-4 w-64 shadow-lg rounded-lg animate__animated animate__delay-1s'

    let headerStyle = ' w-full bg-[#37517e] text-white py-1.3 px-4 rounded-md shadow-md flex space-x-2 items-center mb-3'

    return (
        <>

            {/* <div className='container mx-auto  '>
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
            </div> */}
            <section className='bg-[#f3f5fa]'>
                <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto'>

                    {/************CITIZEN NAVBAR****************/}

                    <div className='col-span-3  py-2 space-y-3 px-4'>
                        {/* Left First */}
                        <div className={`${boxStyle}` + ` animate__fadeInLeft`}>
                            <div className='w-full bg-[#37517e] text-white py-1.3 px-4 rounded-md shadow-md flex space-x-2 items-center'>
                                <span className="font-bold text-xl"><BsFillPersonFill /></span>
                                <span>Edit Your Profile</span>
                            </div>

                        </div>

                        {/* Left Second */}
                        <div className={`${boxStyle}` + ` animate__fadeInLeft`}>
                            <div className={`${headerStyle}`}>
                                <span className="font-bold text-xl text-white"><MdMiscellaneousServices /></span>
                                <span>Active Services</span>
                            </div>

                            <div className="text-sm flex flex-col space-y-2">
                                <div className={`${notificationStyle}`}><span><BsArrowBarRight /></span> <span>Active Services 1</span>  </div>
                                <div className={`${notificationStyle}`}><span><BsArrowBarRight /></span> <span>Active Services 2</span>  </div>
                                <div className={`${notificationStyle}`}><span><BsArrowBarRight /></span> <span>Active Services 3</span>  </div>
                                <div className={`${notificationStyle}`}><span><BsArrowBarRight /></span> <span>Active Services 4</span>  </div>
                            </div>

                        </div>

                        {/* Left Third */}
                        <div className={`${boxStyle}` + ` animate__fadeInLeft`}>
                            <div className={`${headerStyle}`}>
                                <span className="font-bold text-xl"><FaAmazonPay /></span>
                                <span> Payment Transaction</span>
                            </div>

                            <div className="text-sm flex flex-col space-y-2">
                                <div className={`${notificationStyle}`}><span><AiOutlineTransaction /></span> <span>Payment Transaction 1</span>  </div>
                                <div className={`${notificationStyle}`}><span><AiOutlineTransaction /></span> <span>Payment Transaction 2</span>  </div>
                                <div className={`${notificationStyle}`}><span><AiOutlineTransaction /></span> <span>Payment Transaction 3</span>  </div>
                                <div className={`${notificationStyle}`}><span><AiOutlineTransaction /></span> <span>Payment Transaction 4</span>  </div>
                            </div>

                        </div>

                        {/* Left Fourth */}
                        <div className={`${boxStyle}` + ` animate__fadeInLeft`}>
                            <div className={`${headerStyle}`}>
                                <span className="font-bold text-xl"><MdOutlinePending /></span>
                                <span>Form Pending</span>
                            </div>

                            <div className="text-sm flex flex-col space-y-2">
                                <div className={`${notificationStyle}`}><span><BsArrowClockwise /></span> <span>Pending Form 1</span>  </div>
                                <div className={`${notificationStyle}`}><span><BsArrowClockwise /></span> <span>Pending Form 2</span>  </div>
                                <div className={`${notificationStyle}`}><span><BsArrowClockwise /></span> <span>Pending Form 3</span>  </div>
                                <div className={`${notificationStyle}`}><span><BsArrowClockwise /></span> <span>Pending Form 4</span>  </div>
                            </div>

                        </div>
                    </div>

                    {/************APPLY FOR SERVICES****************/}

                    <div className='col-span-6 loading '>
                        <h1 className='text-center font-bold font-sans text-2xl text-[#37517e] p-2 '>APPLY FOR THE SERVICES</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  container mx-auto'>
                            <div className=''>
                                <div className=' mx-auto'>
                                    <Link to="/citizenselfdetailform">
                                        <div class="rounded-b-3xl rounded-l-3xl lg:w-64 w-64 lg:h-56 h-72   mx-auto  p-2 py-2 mb-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:shadow-lg shadow-lg duration-300 opacity-95">
                                            <div class="flex flex-col items-center justify-center">
                                                <div class="w-20 h-20 relative ">
                                                    <FeaturedVideoOutlinedIcon sx={{ fontSize: 70, color: "#ff583d", }} />
                                                </div>
                                                <p class="text-[#37517e] text-center text-md font-medium mb-1 ">
                                                    ADVERTISEMENT
                                                </p>
                                                <p class="text-[#37517e] text-center text-xs px-1 mb-2">
                                                    The Advertisement Tax is collected from the Advertiser/ Agency for the display of Advertisements within the ULB limits.
                                                </p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className=''>
                                <div className=' mx-auto'>
                                    <Link to="/citizenApplication/property">
                                        <div class="rounded-t-3xl rounded-r-3xl lg:w-64 w-64 lg:h-56 h-72   mx-auto  p-2 py-2 mb-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:shadow-lg shadow-lg duration-300 opacity-95">
                                            <div class="flex flex-col items-center justify-center">
                                                <div class="w-20 h-20 relative ">
                                                    <HomeOutlinedIcon sx={{ fontSize: 70, color: "#ff583d", }} />
                                                </div>
                                                <p class="text-[#37517e] text-center text-md font-medium mb-1 ">
                                                    PROPERTY
                                                </p>
                                                <p class="text-[#37517e] text-center text-xs px-1 mb-2">
                                                    Property Tax also stores the information associated with each of your properties.
                                                </p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  container mx-auto'>

                            <div className=''>
                                <div className=' mx-auto'>
                                    <Link to="/citizenApplication/trade">
                                        <div class="rounded-t-3xl rounded-r-3xl lg:w-64 w-64 lg:h-56 h-72   mx-auto  p-2 py-2 mb-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:shadow-lg shadow-lg duration-300 opacity-95">
                                            <div class="flex flex-col items-center justify-center">
                                                <div class="w-20 h-20 relative ">
                                                    <BusinessCenterOutlinedIcon sx={{ fontSize: 70, color: "#ff583d", }} />
                                                </div>
                                                <p class="text-[#37517e] text-center text-md font-medium mb-1 ">
                                                    TRADE
                                                </p>
                                                <p class="text-[#37517e] text-center text-xs px-1 mb-2">
                                                    You Can Get License To Advertise Your Business Name On Your Shop
                                                </p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className=''>
                                <div className=' mx-auto'>
                                    <Link to="/citizenApplication/water">
                                        <div class="rounded-b-3xl rounded-l-3xl lg:w-64 w-64 lg:h-56 h-72   mx-auto  p-2 py-2 mb-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:shadow-lg shadow-lg duration-300 opacity-95">
                                            <div class="flex flex-col items-center justify-center">
                                                <div class="w-20 h-20 relative ">
                                                    <OpacityOutlinedIcon sx={{ fontSize: 70, color: "#ff583d", }} />
                                                </div>
                                                <p class="text-[#37517e] text-center text-md font-medium mb-1 ">
                                                    WATER
                                                </p>
                                                <p class="text-[#37517e] text-center text-xs px-1 mb-2">
                                                    You Can Get License To Advertise Your Business Name On Your Shop
                                                </p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>


                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  container mx-auto'>
                            <div className=''>
                                <div className=' mx-auto'>
                                    <Link to="/citizenTrade">
                                        <div class="rounded-b-3xl rounded-l-3xl lg:w-64 w-64 lg:h-56 h-72   mx-auto  p-2 py-2 mb-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:shadow-lg shadow-lg duration-300 opacity-95">
                                            <div class="flex flex-col items-center justify-center">
                                                <div class="w-20 h-20 relative ">
                                                    <CleaningServicesOutlinedIcon sx={{ fontSize: 70, color: "#ff583d", }} />
                                                </div>
                                                <p class="text-[#37517e] text-center text-md font-medium mb-1 ">
                                                    SOLID WASTE MANAGEMENT
                                                </p>
                                                <p class="text-[#37517e] text-center text-xs px-1 mb-2">
                                                    You Can Get License To Advertise Your Business Name On Your Shop
                                                </p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className=''>
                                <div className=' mx-auto'>
                                    <Link to="/citizenApplication/property">
                                        <div class="rounded-t-3xl rounded-r-3xl lg:w-64 w-64 lg:h-56 h-72   mx-auto  p-2 py-2 mb-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:shadow-lg shadow-lg duration-300 opacity-95">
                                            <div class="flex flex-col items-center justify-center">
                                                <div class="w-20 h-20 relative ">
                                                    <CorporateFareOutlinedIcon sx={{ fontSize: 70, color: "#ff583d", }} />
                                                </div>
                                                <p class="text-[#37517e] text-center text-md font-medium mb-1 ">
                                                    BUILDING PLAN
                                                </p>
                                                <p class="text-[#37517e] text-center text-xs px-1 mb-2">
                                                    You Can Get License To Advertise Your Business Name On Your Shop
                                                </p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>



                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  container mx-auto'>
                            <div className=''>
                                <div className=' mx-auto'>
                                    <Link to="/citizenTrade">
                                        <div class="rounded-b-3xl rounded-l-3xl lg:w-64 w-64 lg:h-56 h-72   mx-auto  p-2 py-2 mb-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:shadow-lg shadow-lg duration-300 opacity-95">
                                            <div class="flex flex-col items-center justify-center">
                                                <div class="w-20 h-20 relative ">
                                                    <CardMembershipOutlinedIcon sx={{ fontSize: 70, color: "#ff583d", }} />
                                                </div>
                                                <p class="text-[#37517e] text-center text-md font-medium mb-1 ">
                                                    BIRTH & DEATH CERTIFICATE
                                                </p>
                                                <p class="text-[#37517e] text-center text-xs px-1 mb-2">
                                                    You Can Get License To Advertise Your Business Name On Your Shop
                                                </p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className=''>
                                <div className=' mx-auto'>
                                    <Link to="/citizenApplication/property">
                                        <div class="rounded-t-3xl rounded-r-3xl lg:w-64 w-64 lg:h-56 h-72   mx-auto  p-2 py-2 mb-2 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:shadow-lg shadow-lg duration-300 opacity-95">
                                            <div class="flex flex-col items-center justify-center">
                                                <div class="w-20 h-20 relative ">
                                                    <HomeOutlinedIcon sx={{ fontSize: 70, color: "#ff583d", }} />
                                                </div>
                                                <p class="text-[#37517e] text-center text-md font-medium mb-1 ">
                                                    BUILDING PLAN
                                                </p>
                                                <p class="text-[#37517e] text-center text-xs px-1 mb-2">
                                                    You Can Get License To Advertise Your Business Name On Your Shop
                                                </p>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}



                        </div>
                    </div>
 

                    {/************CITIZEN NAVBAR****************/}

                    <div className='col-span-3  border'>
                        {/* Right */}
                        <div className=" col-span-3 py-2 space-y-3 flex flex-col items-end pr-4">

                            {/* Right First */}
                            <div className={`${boxStyle}` + ` animate__fadeInRight`}>
                                <div className='w-full bg-[#37517e] text-white py-1.3 px-4 rounded-md shadow-md flex space-x-2 items-center'>
                                    <span className="font-bold text-xl"><IoIosBook /></span>
                                    <spar>Guide How To Apply</spar>

                                </div>
                            </div>

                            {/* Right Second */}
                            <div className={`${boxStyle}` + ` animate__fadeInRight`}>

                                <div className={`${headerStyle}`}>
                                    <span className="font-bold text-xl"><BiBell /></span>
                                    <span>Notification</span>

                                </div>

                                <div className="text-sm flex flex-col space-y-2">
                                    <div className={`${notificationStyle}`}><span><AiOutlineNotification /></span> <span>Notification 1</span>  </div>
                                    <div className={`${notificationStyle}`}><span><AiOutlineNotification /></span> <span>Notification 2</span>  </div>
                                    <div className={`${notificationStyle}`}><span><AiOutlineNotification /></span> <span>Notification 3</span>  </div>
                                    <div className={`${notificationStyle}`}><span><AiOutlineNotification /></span> <span>Notification 4</span>  </div>
                                </div>
                            </div>

                            {/* Right Third */}
                            <div className={`${boxStyle}` + ` animate__fadeInRight`}>
                                <div className={`${headerStyle}`}>
                                    <span className="font-bold"><BsQuestionLg /></span>
                                    <span>FAQs</span>
                                </div>

                                <div className="text-sm flex flex-col space-y-2">

                                    {/* FAQ 1 */}
                                    <div className="cursor-pointer" onClick={funToggle}>
                                        <div className={(!toggle ? `border-l-2 rounded-md border-r-2 hover:shadow-md hover:scale-105` : `border-t-4 rounded-t-md`) + ` ${faqsStyle}`}><span>{(toggle == true) ? <FaArrowDown /> : <FaArrowRight />}</span> <span>How to apply ?</span> </div>

                                        <div className={`${toggle == true ? `visible` : `hidden`}` + ` anitmate__animated animate__fadeInDown animate__delay-2s pb-2 px-2 transition-all duration-700 text-sm ease-in-out mb-4 border-b-2 border-l-2 border-r-2 shadow-md text-[#37517e] rounded-b-md`}>
                                            <p className=""> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolorem reprehenderit non? Amet eveniet dolor nemo.</p>
                                        </div>
                                    </div>

                                    {/* FAQ 2 */}
                                    <div className="cursor-pointer" onClick={funToggle2}>
                                        <div className={(!toggle2 ? `border-l-2 rounded-md border-r-2 hover:shadow-md hover:scale-105` : `border-t-4 rounded-t-md`) + ` ${faqsStyle}`}><span>{(toggle2 == true) ? <FaArrowDown /> : <FaArrowRight />}</span> <span>How to apply ?</span> </div>

                                        <div className={`${toggle2 == true ? `visible` : `hidden`}` + ` anitmate__animated animate__fadeInDown animate__delay-2s pb-2 px-2 transition-all duration-700 text-sm ease-in-out mb-4 border-b-2 border-l-2 border-r-2 shadow-md text-[#37517e] rounded-b-md`}>
                                            <p className=""> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolorem reprehenderit non? Amet eveniet dolor nemo.</p>
                                        </div>
                                    </div>

                                    {/* FAQ 3 */}
                                    <div className="cursor-pointer" onClick={funToggle3}>
                                        <div className={(!toggle3 ? `border-l-2 rounded-md border-r-2 hover:shadow-md hover:scale-105` : `border-t-4 rounded-t-md`) + ` ${faqsStyle}`}><span>{(toggle3 == true) ? <FaArrowDown /> : <FaArrowRight />}</span> <span>How to apply ?</span> </div>

                                        <div className={`${toggle3 == true ? `visible` : `hidden`}` + ` anitmate__animated animate__fadeInDown animate__delay-2s pb-2 px-2 transition-all duration-700 text-sm ease-in-out mb-4 border-b-2 border-l-2 border-r-2 shadow-md text-[#37517e] rounded-b-md`}>
                                            <p className=""> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolorem reprehenderit non? Amet eveniet dolor nemo.</p>
                                        </div>
                                    </div>

                                    {/* FAQ 4 */}
                                    <div className="cursor-pointer" onClick={funToggle4}>
                                        <div className={(!toggle4 ? `border-l-2 rounded-md border-r-2 hover:shadow-md hover:scale-105` : `border-t-4 rounded-t-md`) + ` ${faqsStyle}`}><span>{(toggle4 == true) ? <FaArrowDown /> : <FaArrowRight />}</span> <span>How to apply ?</span> </div>

                                        <div className={`${toggle4 == true ? `visible` : `hidden`}` + ` anitmate__animated animate__fadeInDown animate__delay-2s pb-2 px-2 transition-all duration-700 text-sm ease-in-out mb-4 border-b-2 border-l-2 border-r-2 shadow-md text-[#37517e] rounded-b-md`}>
                                            <p className=""> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit dolorem reprehenderit non? Amet eveniet dolor nemo.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* Right Fourth */}
                            <div className={`${boxStyle}` + ` animate__fadeInRight`}>
                                <div className={`${headerStyle}`}>
                                    <span className="font-bold text-xl"><BsLink45Deg /></span>
                                    <span>  Quick Links</span>
                                </div>

                                <div className="text-sm flex flex-col space-y-2">
                                    <div className={`${quickLinksStyle}`}> <span><TbHandClick /></span> <span>  Issue of Something</span> </div>
                                    <div className={`${quickLinksStyle}`}> <span><TbHandClick /></span> <span>  Issue of Something</span> </div>
                                    <div className={`${quickLinksStyle}`}> <span><TbHandClick /></span> <span>  Issue of Something</span> </div>
                                    <div className={`${quickLinksStyle}`}> <span><TbHandClick /></span> <span>  Issue of Something</span> </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CitizenDashboard