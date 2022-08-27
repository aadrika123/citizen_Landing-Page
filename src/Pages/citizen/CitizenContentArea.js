//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenContentArea
//    DESCRIPTION - CitizenContentArea Component is for conating content on dashboard
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { Link } from 'react-router-dom'
import dashImg from '../../assets/dashImg.svg'
import cardbg from '../../assets/cardbg.svg'

function CitizenContentArea() {
    return (
        <>

            {/* containg contain  on dashboard */}


            {/* <div class="bg-white  overflow-hidden shadow rounded-lg w-56 h-28 md:w-56 relative border border-orange-500 hover:bg-orange-50">
                <img src={cardbg} alt="btc logo" class="h-24 w-24 rounded-full absolute -top-6 -right-6 md:-right-4" />
                <div class="px-4 py-5 sm:p-6">
                    <dl>
                        <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                        VIEW <br /> & <br /> UPDATE PROFILE
                        </dt>
                       
                    </dl>
                </div>
            </div> */}

            <div class=" flex flex-wrap  bg-white itrem-center justify-center -mt-8">

                <Link to="/citizenDashboard/citizenAccountSetting">
                    <div class="flex-shrink-0 m-3 h-28 w-56 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-md shadow-gray-300 border border-orange-500 hover:bg-orange-50">
                        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className=' mt-4'>
                            <div class="relative text-white text-center px-3 h-8 ">
                                <button class="text-gray-500  text-md font-bold  mb-8 ">
                                    VIEW <br /> & <br /> UPDATE PROFILE
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg> */}
                                    {/* <img src={dashImg} className='h-14 ml-36 mt-1'/> */}
                                </button>
                            </div>
                            {/* <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src={dashImg} className='h-12 w-12' />
                    </span> */}
                        </div>

                    </div>
                </Link>
                <div class="flex-shrink-0 m-3 h-28 w-56 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-md border border-teal-500 hover:bg-teal-50">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className=' mt-4'>
                        <div class="relative text-white text-center px-3 h-8 ">
                            <button class="text-gray-500  text-md font-bold  mb-8 ">
                                VIEW <br /> APPLIED <br />  APPLICATIONS
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <img src={dashImg} className='h-14 ml-36 mt-1'/> */}
                            </button>
                        </div>
                        {/* <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src={dashImg} className='h-12 w-12' />
                    </span> */}
                    </div>
                </div>
                <div class="flex-shrink-0 m-3 h-28 w-56 relative overflow-hidden bg-white  rounded-lg max-w-xs shadow-md border border-purple-500 hover:bg-purple-50">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className=' mt-4'>
                        <div class="relative text-white text-center px-3 h-8 ">
                            <button class="text-gray-500  text-md font-bold mb-8 ">
                                VIEW <br /> & <br /> UPDATE PROFILE
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <img src={dashImg} className='h-14 ml-36 mt-1'/> */}
                            </button>
                        </div>
                        {/* <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src={dashImg} className='h-12 w-12' />
                    </span> */}
                    </div>
                </div>
                <div class="flex-shrink-0 m-3 h-28 w-56 relative overflow-hidden   rounded-lg max-w-xs shadow-lg border border-teal-500 hover:bg-teal-50 "  >
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className=' mt-4'>
                        <div class="relative text-white text-center px-3 h-8 ">
                            <button class="text-gray-500  text-md font-bold  mb-8 ">
                                VIEW <br /> & <br /> UPDATE PROFILE
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>*/}
                                {/* <img src={cardbg} className='h-14 ml-32 -mt-16'/>  */}
                            </button>
                        </div>
                        {/* <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src={dashImg} className='h-12 w-12' />
                    </span> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default CitizenContentArea