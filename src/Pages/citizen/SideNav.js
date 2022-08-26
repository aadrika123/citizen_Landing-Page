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


function SideNav(props) {
    const [navWidth, setNavWidth] = useState('w-0')

    // this function is for opening drawer

    const toggleNav = () => {
        navWidth == 'w-0' ? setNavWidth('w-56') : setNavWidth('w-0')
    }

    const [citizenNameEmail, setcitizenNameEmail] = useState();
    useEffect(() => {
        setcitizenNameEmail(props.citizenNameEmail)

    }, [props.citizenNameEmail])

    return (
        <>

            <button className='bg-red-400 shadow-lg px-2 py-1 mt-12 inline' onClick={toggleNav}><MenuIcon /></button>

            <div className={`${navWidth} h-screen  transition-all duration-700 bg-gray-700 z-20 opacity-80 relative overflow-hidden`} >


                <div>
                    {/* <img src='https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?w=740&t=st=1659601881~exp=1659602481~hmac=77f10daa31bd0f42967b6e11dbcaa256bdb8c64cb92e7476654701bdedba6eac' className='w-full h-40' /> */}

                    <div className={` h-screen  transition-all duration-700 p-4`} >
                        <ul class="relative">
                            <li class="relative">
                                <img src='https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png' className='h-24 ml-6 mt-6 ' />
                            </li>
                            <li class="relative">
                                <h1 className='ml-9 mt-4 text-gray-100'>{citizenNameEmail?.name}</h1>
                            </li>
                            <li class="relative">
                                <h1 className=' text-gray-100 text-sm'>{citizenNameEmail?.email}</h1>
                            </li>
                            <li class="relative ">
                                <button className='bg-gray-400 ml-5 mt-6 w-24 h-8 shadow-md shadow-gray-900 border-2 border-black  ' >
                                    <div class="rounded-full flex items-center  " >
                                        <div className='flex-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-white " viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className='flex-1 mr-4 text-white'>Menu</div>
                                    </div>

                                </button>
                            </li>
                            <li class="relative">
                                <Link to="/download">
                                    <button className='bg-gray-400 ml-5 mt-6 w-24 h-8 shadow-md shadow-gray-900  '>
                                        <div class="rounded-full  flex  items-center">
                                            <div className='flex-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 text-white " viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className='flex-1 mr-4 text-white'>Links</div>
                                        </div>
                                    </button>
                                </Link>
                            </li>
                            <li class="relative">
                                <Link to="/grivancePage">
                                    <button className='bg-gray-400 ml-5 mt-6 w-24 h-8 shadow-md shadow-gray-900 '>
                                        <div class="rounded-full flex items-center  " >
                                            <div className='flex-1'>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2  text-white " viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className='flex-1 mr-1  text-white'>Grivance</div>
                                        </div>

                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>



            </div> 
        </>
    )
}

export default SideNav