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


            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  container mx-auto'>
                <div className=''>
                    <Link to="/citizenDashboard/citizenAccountSetting">
                        <div class="flex-shrink-0 m-3 h-28 w-56 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-md shadow-gray-300 border border-orange-500 hover:bg-orange-50 mx-auto">
                            <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                            </svg>
                            <div className=' mt-4'>
                                <div class="relative text-white text-center px-3 h-8 ">
                                    <button class="text-gray-500  text-md font-bold  mb-8 ">
                                        VIEW <br /> & <br /> UPDATE PROFILE


                                    </button>
                                </div>

                            </div>

                        </div>
                    </Link>
                </div>
                <div className=''>
                    <div class="flex-shrink-0 m-3 h-28 w-56 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-md border border-teal-500 hover:bg-teal-50 mx-auto">
                        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className=' mt-4'>
                            <div class="relative text-white text-center px-3 h-8 ">
                                <button class="text-gray-500  text-md font-bold  mb-8 ">
                                    VIEW <br /> APPLIED <br />  APPLICATIONS

                                    {/* <img src={dashImg} className='h-14 ml-36 mt-1' /> */}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=''>
                    <div class="flex-shrink-0 m-3 h-28 w-56 relative overflow-hidden bg-white  rounded-lg max-w-xs shadow-md border border-purple-500 hover:bg-purple-50 mx-auto">
                        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className=' mt-4'>
                            <div class="relative text-white text-center px-3 h-8 ">
                                <button class="text-gray-500  text-md font-bold mb-8 ">
                                    VIEW <br /> & <br /> UPDATE PROFILE

                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=''>
                    <div class="flex-shrink-0 m-3 h-28 w-56 relative overflow-hidden   rounded-lg max-w-xs shadow-lg border border-teal-500 hover:bg-teal-50 mx-auto"  >
                        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ 'transform': 'scale(1.5)', 'opacity': 0.1 }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className=' mt-4'>
                            <div class="relative text-white text-center px-3 h-8 ">
                                <button class="text-gray-500  text-md font-bold  mb-8 ">
                                    VIEW <br /> & <br /> UPDATE PROFILE

                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CitizenContentArea