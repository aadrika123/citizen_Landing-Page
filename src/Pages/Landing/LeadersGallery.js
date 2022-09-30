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
            {/* <section className='bg-white'>
                <div>
                    <h2 className='text-3xl font font-semibold font-serif text-gray-600 text-center p-2'>LEADERS</h2>
                </div>
                <div class="grid grid-cols-2 gap-4 p-4 mx-auto  w-11/12">
                    <div>
                        <div class="container px-2 py-1 mx-auto ">
                            <div class="flex items-center mx-auto  pb-2 mb-2 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl ">
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0   ">
                                    <img src='https://pbs.twimg.com/profile_images/1198584535752953856/em_2OFnB_400x400.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                                </div>
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Sri Hemant Soren</h2>
                                    <p class="leading-relaxed text-sm opacity-75">Hemant Soren (born 10 August 1975) is an Indian politician from Jharkhand, who has taken oath as a Chief Minister of Jharkhand on 29 December 2019.</p>

                                </div>
                            </div>
                            <div class="flex items-center mx-auto pb-2 mb-2 px-4 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl ">
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shri Ramesh Bais</h2>
                                    <p class="leading-relaxed text-sm opacity-75">Ramesh Bais (born 2 August 1947) is an Indian politician from Raipur, Chhattisgarh. He is serving as the 10th and current Governor of Jharkhand..</p>

                                </div>
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0  ">
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Governor_of_Tripura%2C_Shri_Ramesh_Bais.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div class="container px-2 py-1 mx-auto ">
                            <div class="flex items-center mx-auto pb-2 mb-2 px-4 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl   ">
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10  inline-flex items-center justify-center text-indigo-500 flex-shrink-0  ">
                                    <img src='https://i0.wp.com/www.indianbureaucracy.com/wp-content/uploads/2020/04/Sukhdeo-Singh-IAS-Jharkhand.jpg?fit=348%2C404&ssl=1' class="sm:w-28 sm:h-28 w-32 h-32" />
                                </div>
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shri Sukhdeo Singh</h2>
                                    <p class="leading-relaxed text-sm opacity-75">Sukhdeo Singh a 1987-batch IAS officer has been appointed as the chief secretary of Jharkhand.</p>

                                </div>
                            </div>
                            <div class="flex items-center mx-auto pb-2 mb-2 px-4 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl ">
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shri Ramesh Bais</h2>
                                    <p class="leading-relaxed text-sm opacity-75">Ramesh Bais (born 2 August 1947) is an Indian politician from Raipur, Chhattisgarh. He is serving as the 10th and current Governor of Jharkhand..</p>

                                </div>
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0 ">
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Governor_of_Tripura%2C_Shri_Ramesh_Bais.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-8  shadow-lg container mx-auto">
                <div class="container px-2 py-1 mx-auto ">
                    <div class="flex items-center mx-auto  pb-2 mb-2 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl ">
                        <div className=' w-28 md:h-auto md:w-28 mt-2'>
                            <img src='https://pbs.twimg.com/profile_images/1198584535752953856/em_2OFnB_400x400.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Sri Hemant Soren</h2>
                            <p class="leading-relaxed text-sm opacity-75">Hemant Soren (born 10 August 1975) is an Indian politician from Jharkhand, who has taken oath as a Chief Minister of Jharkhand on 29 December 2019.</p>

                        </div>
                    </div>
                    <div class="flex items-center mx-auto pb-2 mb-2 px-4 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl ">
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shri Ramesh Bais</h2>
                            <p class="leading-relaxed text-sm opacity-75">Ramesh Bais (born 2 August 1947) is an Indian politician from Raipur, Chhattisgarh. He is serving as the 10th and current Governor of Jharkhand..</p>

                        </div>
                        <div className=' w-28 md:h-auto md:w-28 mt-2'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Governor_of_Tripura%2C_Shri_Ramesh_Bais.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                        </div>
                    </div>

                </div>
                <div>
                        <div class="container px-2 py-1 mx-auto ">
                            <div class="flex items-center mx-auto pb-2 mb-2 px-4 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl   ">
                                <div  className=' w-28 md:h-auto md:w-28 mt-2'>
                                    <img src='https://i0.wp.com/www.indianbureaucracy.com/wp-content/uploads/2020/04/Sukhdeo-Singh-IAS-Jharkhand.jpg?fit=348%2C404&ssl=1' class="sm:w-28 sm:h-28 w-32 h-32" />
                                </div>
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shri Sukhdeo Singh</h2>
                                    <p class="leading-relaxed text-sm opacity-75">Sukhdeo Singh a 1987-batch IAS officer has been appointed as the chief secretary of Jharkhand.</p>

                                </div>
                            </div>
                            <div class="flex items-center mx-auto pb-2 mb-2 px-4 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl ">
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shri Ramesh Bais</h2>
                                    <p class="leading-relaxed text-sm opacity-75">Ramesh Bais (born 2 August 1947) is an Indian politician from Raipur, Chhattisgarh. He is serving as the 10th and current Governor of Jharkhand..</p>

                                </div>
                                <div className=' w-28 md:h-auto md:w-28 mt-2'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Governor_of_Tripura%2C_Shri_Ramesh_Bais.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default LeadersGallery