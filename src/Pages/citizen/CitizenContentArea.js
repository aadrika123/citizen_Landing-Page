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
function CitizenContentArea() {
    return (
        <>

            {/* containg contain  on dashboard */}



            <div class=" flex flex-wrap  bg-white itrem-center justify-center -mt-8">

                <Link to = "/citizenDashboard/citizenAccountSetting">
                <div class="flex-shrink-0 m-3 h-32 w-68 relative overflow-hidden bg-orange-400 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className=' mt-4'>
                    <div class="relative text-white px-3 h-8 ">
                        <button class="text-gray-600 font-normal text-lg  mb-8 ">
                          VIEW & UPDATE PROFILE
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <img src={dashImg} className='h-16 ml-36 mt-1'/>
                        </button>
                    </div>
                    {/* <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src={dashImg} className='h-12 w-12' />
                    </span> */}
                    </div>

                </div>
                </Link>
                <div class="flex-shrink-0 m-3 h-32 w-68 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className=' mt-4'>
                    <div class="relative text-white px-3 h-8 ">
                        <button class="text-gray-600 font-normal text-lg  mb-8 ">
                          VIEW & UPDATE PROFILE
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <img src={dashImg} className='h-16 ml-36 mt-1'/>
                        </button>
                    </div>
                    {/* <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src={dashImg} className='h-12 w-12' />
                    </span> */}
                    </div>
                </div>
                <div class="flex-shrink-0 m-3 h-32 w-68 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className=' mt-4'>
                    <div class="relative text-white px-3 h-8 ">
                        <button class="text-gray-600 font-normal text-lg  mb-8 ">
                          VIEW & UPDATE PROFILE
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <img src={dashImg} className='h-16 ml-36 mt-1'/>
                        </button>
                    </div>
                    {/* <span className="text-center inline-block animate-pulse drop-shadow-lg  rounded-lg text-black text-sm">
                        <img src={dashImg} className='h-12 w-12' />
                    </span> */}
                    </div>
                </div>
                <div class="flex-shrink-0 m-3 h-32 w-68 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                    <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className=' mt-4'>
                    <div class="relative text-white px-3 h-8 ">
                        <button class="text-gray-600 font-normal text-lg  mb-8 ">
                          VIEW & UPDATE PROFILE
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <img src={dashImg} className='h-16 ml-36 mt-1'/>
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