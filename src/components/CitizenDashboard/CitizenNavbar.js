import React from 'react'
import { Link } from 'react-router-dom'

function CitizenNavbar() {
    return (
        <>
            {/************TO BE DELETED****************/}
         {/* <div>
        //     <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between  px-6 shadow sm:items-baseline w-full bg-gray-800 opacity-75">
        //         <div class="mb-2 p-1  sm:mb-0 ">
        //             <span class="flex items-center">
        //                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png" class="mr-3 h-6 sm:h-10" alt="" />
        //                     <span class="self-center  text-sm  whitespace-nowrap dark:text-white text-gray-100 font-normal font-sans">Government of Jharkhand</span>
        //                 </span>
        //         </div>
        //         <div className=' '>
        //             <span href="/one" class="text-sm no-underline text-grey-darkest hover:text-blue-dark ml-2  text-white">One</span>
        //             <span href="/two" class="text-sm no-underline text-grey-darkest hover:text-blue-dark ml-2 text-white">Two</span>
        //             <span href="/three" class="text-sm no-underline text-grey-darkest hover:text-blue-dark ml-2 text-white">Three</span>
        //         </div>
        //     </nav>
         </div> */}


            {/************CITIZEN NAVBAR****************/}
            <div class=''>
                <div class="flex items-center justify-between border-b bg-gray-800 opacity-75 p-1">
                    <div class="flex items-center ">
                        <span class="flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png" class="mr-1 h-6 sm:h-10" alt="" />
                            <span class="self-center text-xs lg:text-lg md:text-md   whitespace-nowrap dark:text-white text-gray-100 font-normal font-sans">Government of Jharkhand</span>
                        </span>
                    </div>

                    <div class="flex items-center lg:space-x-3 space-x-1 text-gray-100">
                        <Link to="/">
                            <span class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" h-3 sm:h-5 text-white">
                                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                                <span class="text-xs lg:text-md md:text-md ">Home</span>
                            </span>
                        </Link>
                        <Link to="/citizenDashboard">
                            <span class="flex items-center">
                                <img src='https://cdn-icons-png.flaticon.com/512/3388/3388614.png' className=" h-3 sm:h-5 text-white" />
                                <span className='text-xs lg:text-md md:text-md '>Dashboard</span>
                            </span>
                        </Link>
                        <Link to="/citizenDashboard/citizenAccountSetting">
                            <span class="flex items-center">
                                <img src='https://cdn-icons-png.flaticon.com/512/3633/3633354.png' className=" h-3 sm:h-5 text-white" />
                                <span className='text-xs lg:text-md md:text-md '>Setting</span>
                            </span>
                        </Link>
                        <Link to="/logout">
                            <span class="flex items-center">
                                <img src='https://cdn-icons-png.flaticon.com/512/1828/1828427.png' className=" h-3 sm:h-5 text-white" />
                                <span className='text-xs lg:text-md md:text-md'>Logout</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CitizenNavbar