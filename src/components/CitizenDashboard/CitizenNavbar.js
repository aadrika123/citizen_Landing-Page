//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 20 oct 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenNavbar
//    DESCRIPTION - CitizenNavbar Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CitizenNavbar() {
    const navigate = useNavigate();



    const handleLogout = () => {
alert ("logout")
localStorage.removeItem("token");
navigate("/")

    }
    return (
        <>
            {/************CITIZEN NAVBAR****************/}
            <div class=''>
                <div class="flex items-center justify-between border-b bg-[#37517e] opacity-75 p-1">
                    <div class="flex items-center ">
                        <span class="flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png" class="mr-1 h-6 sm:h-10" alt="" />
                            <span class="self-center text-md lg:text-md md:text-md   whitespace-nowrap dark:text-white text-gray-100 font-normal font-sans">Government of Jharkhand</span>
                        </span>
                    </div>

                    <div class="flex items-center lg:space-x-3 space-x-1 text-gray-100">
                        <Link to="/">
                            <span class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" h-3 sm:h-5 text-white">
                                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                                <span class="text-xs lg:text-md md:text-md ml-1">Home</span>
                            </span>
                        </Link>
                        <Link to="/citizenDashboard">
                            <span class="flex items-center">
                                {/* <img src='https://cdn-icons-png.flaticon.com/512/3388/3388614.png' className=" h-3 sm:h-5 text-white" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 sm:h-5 text-white">
                                    <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clip-rule="evenodd" />
                                </svg>

                                <span className='text-xs lg:text-md md:text-md ml-1'>Dashboard</span>
                            </span>
                        </Link>
                        <Link to="/citizenDashboard/citizenAccountSetting">
                            <span class="flex items-center">
                                {/* <img src='https://cdn-icons-png.flaticon.com/512/3633/3633354.png' className=" h-3 sm:h-5 text-white" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 sm:h-5 text-white">
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                </svg>

                                <span className='text-xs lg:text-md md:text-md ml-1'>Setting</span>
                            </span>
                        </Link>
                        <span className='cursor-pointer' onClick={handleLogout}>
                            <span class="flex items-center">
                                {/* <img src='https://cdn-icons-png.flaticon.com/512/1828/1828427.png' className=" h-3 sm:h-5 text-white" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-3 sm:h-5 text-white">
                                    <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                </svg>

                                <span  className='text-xs lg:text-md md:text-md ml-1'>Logout</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CitizenNavbar