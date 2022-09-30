//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SideNav
//    DESCRIPTION - SideNav Component is for citizen dashboard side
//////////////////////////////////////////////////////////////////////////////////////

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 import MenuIcon from '@mui/icons-material/Menu';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function SideNav(props) {
    const [navWidth, setNavWidth] = useState('w-0')
    const [menuIcon, setmenuIcon] = useState(false)
    // this function is for opening drawer

    const toggleNav = () => {
        navWidth == 'w-0' ? setNavWidth('w-40') : setNavWidth('w-0')
        menuIcon == false ? setmenuIcon(true) : setmenuIcon(false)
    }

    const [citizenNameEmail, setcitizenNameEmail] = useState();
    useEffect(() => {
        setcitizenNameEmail(props.citizenNameEmail)

    }, [props.citizenNameEmail])

    return (
        <>

            <button className='opacity-75  bg-gray-800 float-right shadow-xl px-2 py-1 mt-12 inline  text-white' onClick={toggleNav}>
           { menuIcon ? <KeyboardDoubleArrowLeftIcon className='text-white' /> :  <KeyboardDoubleArrowRightIcon className='text-white ml-2' />}
                click
            </button>

            <div className={`${navWidth} h-screen mt-12 transition-all duration-500 bg-gray-700 z-20 opacity-80 relative overflow-hidden`} >


                <div>
                    {/* <img src='https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?w=740&t=st=1659601881~exp=1659602481~hmac=77f10daa31bd0f42967b6e11dbcaa256bdb8c64cb92e7476654701bdedba6eac' className='w-full h-40' /> */}

                    <div className={` h-screen  transition-all duration-700 p-3`} >
                        <ul class="relative">
                            <li class="relative">
                                <img src='https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png' className='h-20 ml-6 mt-6 ' />
                            </li>
                            <li class="relative">
                                <h1 className=' mt-3 text-gray-100 text-center w-35 '>{citizenNameEmail?.name}</h1>
                            </li>
                            <li class="relative">
                                <h1 className=' text-gray-100 text-xs text-center w-35 '>{citizenNameEmail?.email}</h1>
                            </li>
                            <li class="relative ">
                                <Link to = "/citizenDashboard/citizenAccountSetting">
                                <button className=' mx-auto mt-6 w-32 h-7 shadow-md shadow-gray-900 border border-black  ' >
                                    <div class="rounded-full flex items-center  " >
                                        <div className='text-left'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 ml-2 text-white ">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                                            </svg>

                                        </div>
                                        <div className='ml-1 text-white'>Setting</div>
                                    </div>

                                </button>
                                </Link>
                            </li>
                            <li class="relative">
                            <Link to = "/apply">
                                <button className=' mx-auto mt-3 w-32 h-7 shadow-md shadow-gray-900 border border-black  ' >
                                    <div class="rounded-full flex items-center  " >
                                        <div className='text-left'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 ml-2 text-white ">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                                            </svg>


                                        </div>
                                        <div className='ml-1 text-white'>Apply</div>
                                    </div>

                                </button>
                                </Link>
                            </li>
                            <li class="relative">
                                <button className=' mx-auto mt-3 w-32 h-7 shadow-md shadow-gray-900 border border-black  ' >
                                    <div class="rounded-full flex items-center  " >
                                        <div className='text-left'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 ml-2 text-white ">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                                            </svg>

                                        </div>
                                        <div className='ml-1 text-white'>Grivance</div>
                                    </div>

                                </button>
                            </li>
                            <li class="relative">
                                <button className=' mx-auto mt-3 w-32 h-7 shadow-md shadow-gray-900 border border-black  ' >
                                    <div class="rounded-full flex items-center  " >
                                        <div className='text-left'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 ml-2 text-white ">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                                            </svg>

                                        </div>
                                        <div className='ml-1 text-white'>Links</div>
                                    </div>

                                </button>
                            </li>
                            {/* <li class="relative">
                                <button className=' mx-auto mt-3 w-32 h-7 shadow-md shadow-gray-900 border border-black  ' >
                                    <div class="rounded-full flex items-center  " >
                                        <div className='text-left'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 ml-2 text-white ">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                                            </svg>

                                        </div>
                                        <div className=' text-white'>Menu</div>
                                    </div>

                                </button>
                            </li>
                            <li class="relative">
                                <button className=' mx-auto mt-3 w-32 h-7 shadow-md shadow-gray-900 border border-black  ' >
                                    <div class="rounded-full flex items-center  " >
                                        <div className='text-left'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 ml-2 text-white ">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                                            </svg>

                                        </div>
                                        <div className=' text-white'>Menu</div>
                                    </div>

                                </button>
                            </li> */}
                        </ul>
                    </div>
                </div>



            </div>
        </>
    )
}

export default SideNav