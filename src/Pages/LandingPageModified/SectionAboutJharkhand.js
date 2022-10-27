import React from 'react'

function SectionAboutJharkhand() {
    return (
        <>
            <section className=' bg-[#f3f5fa] p-4'>
                <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto'>
                    <div className='col-span-5 bg-white shadow-md '>
                        <div className=' p-8'>
                            <h1 className='text-center font-bold font-sans text-2xl text-[#37517e] -mt-6'>
                                JUIDCO
                            </h1>
                            <p className='text-sm mt-4 text-[#7580a7] '>
                                Jharkhand Urban Infrastructure Development Company (JUIDCO) is dedicated to Public works, Government projects of all kinds and all other works of Urban Development and conveniences or other public or private liability.
                            </p>

                        </div>

                    </div>
                    <div className='col-span-7 '>
                        <div className='bg-[#37517e] p-1 shadow-md'>
                            <h1 className='text-white text-center text-xl'>
                                RANCHI AT A GLANCE
                            </h1>
                        </div>
                        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 container mx-auto mt-4' >
                            <div className=' p-3 bg-white shadow-md'>
                                <h1 className='text-sm  text-[#7580a7]'>District:- 24 </h1>
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

export default SectionAboutJharkhand