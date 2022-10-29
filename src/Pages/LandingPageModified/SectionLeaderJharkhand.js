import React from 'react'

function SectionLeaderJharkhand() {
    return (
        <>
            <section className=' bg-[#f3f5fa] p-4'>
                <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto'>
                    <div className='col-span-5   '>
                        {/* <div className=' p-8'>
                            <h1 className='text-center font-semibold  text-2xl text-[#37517e] -mt-6'>
                                JUIDCO
                            </h1>
                            <p className='text-sm mt-4 text-[#7580a7] '>
                                Jharkhand Urban Infrastructure Development Company (JUIDCO) is dedicated to Public works, Government projects of all kinds and all other works of Urban Development and conveniences or other public or private liability.
                            </p>

                        </div> */}
                        <div class="flex items-center mx-auto  pb-2 mb-2 sm:flex-row flex-col hover:scale-105 transition-all transform duration-500 rounded-sm shadow-sm hover:shadow-2xl bg-white p-2">
                            <div className=' w-44 md:h-auto md:w-[20rem] mt-2'>
                                <img src='https://images.indianexpress.com/2019/12/hemantsoren-759.jpeg' class="sm:w-28 sm:h-28 w-32 h-32" />
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
                                <div className=' w-28 md:h-auto md:w-[20rem] mt-2'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Governor_of_Tripura%2C_Shri_Ramesh_Bais.jpg' class="sm:w-28 sm:h-28 w-32 h-32" />
                                </div>
                            </div>

                    </div>
                    <div className='col-span-7 '>
                        <div className='bg-white p-1 shadow-md '>
                            <h1 className='text-center font-semibold text-2xl text-[#37517e] '>
                                RANCHI AT A GLANCE
                            </h1>
                        </div>
                        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 container mx-auto mt-4' >
                            <div className=' p-3 bg-white shadow-md'>
                               
                                <h1 className='text-sm  text-[#7580a7]'>Total Area:- 175 km  </h1>
                                <h1 className='text-sm  text-[#7580a7]'>Population:-13 lakh (1.3 million)</h1>
                                <h1 className='text-sm  text-[#7580a7]'>Male Population:- 6.70 lakh</h1>
                                <h1 className='text-sm  text-[#7580a7]'>Female Population:- 6.30 lakh</h1>
                            </div>
                            <div className='shadow-md'>
                                <img src='https://techstory.in/wp-content/uploads/2016/04/jharkhand_map_s.jpg' className='opacity-95' />
                            </div>
                            <div className='p-2 bg-white shadow-md'>
                                <h1 className='rounded-full w-3 h-3 bg-green-400 mt-2'>
                                <span className='ml-6 text-[#7580a7]'> ranchi</span>
                                </h1>
                                <h1 className='rounded-full w-3 h-3 bg-yellow-400 mt-2'>
                                <span className='ml-6 text-[#7580a7]'> jamshedpur</span>
                                </h1>
                                <h1 className='rounded-full w-3 h-3 bg-red-400 mt-2'>
                                <span className='ml-6 text-[#7580a7]'> bokaro</span>
                                </h1>
                                <h1 className='rounded-full w-3 h-3 bg-blue-400 mt-2'>
                                <span className='ml-6 text-[#7580a7]'> Dhanbad</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default SectionLeaderJharkhand