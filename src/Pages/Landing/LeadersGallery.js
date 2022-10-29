//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LeadersGallery
//    DESCRIPTION - LeadersGallery Component which include leader section in landingPage
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'

function LeadersGallery() {
    return (
        <>
            <section className='bg-[#f3f5fa]'>
                <div className="">
                    <h1 className='font-semibold text-center text-3xl text-[#37517e] '>LEADERS</h1>
              
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4  container mx-auto ">
                    <div class="container px-2 py-1 mx-auto ">
                        <div class="flex items-center mx-auto  pb-2 mb-2 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl bg-white p-2">
                            <div className=' w-28 md:h-auto md:w-28 mt-2'>
                                <img src='https://pbs.twimg.com/profile_images/1198584535752953856/em_2OFnB_400x400.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0 ml-2">
                                <h2 class="text-[#37517e] text-lg title-font font-medium mb-2">Sri Hemant Soren</h2>
                                <p class="leading-relaxed text-sm opacity-75 text-[#7580a7]">Hemant Soren (born 10 August 1975) is an Indian politician from Jharkhand, who has taken oath as a Chief Minister of Jharkhand on 29 December 2019.</p>

                            </div>
                        </div>
                        <div class="flex items-center mx-auto pb-2 mb-2 px-4 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl bg-white p-2">
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 class="text-[#37517e] text-lg title-font font-medium mb-2">Shri Ramesh Bais</h2>
                                <p class="leading-relaxed text-sm opacity-75 text-[#7580a7]">Ramesh Bais (born 2 August 1947) is an Indian politician from Raipur, Chhattisgarh. He is serving as the 10th and current Governor of Jharkhand..</p>

                            </div>
                            <div className=' w-28 md:h-auto md:w-28 mt-2'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Governor_of_Tripura%2C_Shri_Ramesh_Bais.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                            </div>
                        </div>

                    </div>
                    <div>
                        <div class="container px-2 py-1 mx-auto ">
                            <div class="flex items-center mx-auto pb-2 mb-2 px-4 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl  bg-white p-2 ">
                                <div className=' w-28 md:h-auto md:w-28 mt-2'>
                                    <img src='https://i0.wp.com/www.indianbureaucracy.com/wp-content/uploads/2020/04/Sukhdeo-Singh-IAS-Jharkhand.jpg?fit=348%2C404&ssl=1' class="sm:w-28 sm:h-28 w-32 h-32" />
                                </div>
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-[#37517e] text-lg title-font font-medium mb-2">Shri Sukhdeo Singh</h2>
                                    <p class="leading-relaxed text-sm opacity-75 text-[#7580a7]">Sukhdeo Singh a 1987-batch IAS officer has been appointed as the chief secretary of Jharkhand.</p>

                                </div>
                            </div>
                            <div class="flex items-center mx-auto pb-2 mb-2 px-4 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl bg-white p-2">
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-[#37517e] text-lg title-font font-medium mb-2">Shri Ramesh Bais</h2>
                                    <p class="leading-relaxed text-sm opacity-75 text-[#7580a7]">Ramesh Bais (born 2 August 1947) is an Indian politician from Raipur, Chhattisgarh. He is serving as the 10th and current Governor of Jharkhand..</p>

                                </div>
                                <div className=' w-28 md:h-auto md:w-28 mt-2'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Governor_of_Tripura%2C_Shri_Ramesh_Bais.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LeadersGallery