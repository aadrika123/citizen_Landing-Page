import React from 'react'
import ProfileConponent from './ProfileConponent'

function Dashboard() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-1 container mx-auto '>
                <div className='col-span-8 bg-stone-50 rounded-lg '>
                    <div className=' rounded-md shadow-lg p-2'>
                        <h1 className='text-lg text-center font-semibold text-blue-800'>APPLY  SERVICES</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4 container mx-auto p-2'>
                            <div className='bg-white rounded-b-3xl rounded-l-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/8780/8780337.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center font-semibold text-[#294f91] '>ADVERTISEMENT</h1>
                                <h1 className='text-xs text-center text-[#37517e] opacity-75'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                                <span ><button className='text-xs font-mono  text-stone-50 shadow-lg px-6 py-1 rounded-md bg-teal-300 hover:bg-teal-400 ml-10 mt-2 '>TAKE ME IN</button></span>
                            </div>
                         
                            <div className='bg-white rounded-b-3xl rounded-l-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/3558/3558233.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center font-semibold text-[#294f91] '>TRADE</h1>
                                <h1 className='text-xs text-center text-[#37517e] opacity-75'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                                <span ><button className='text-xs font-mono  text-stone-50 shadow-lg px-6 py-1 rounded-md bg-teal-300 hover:bg-teal-400 ml-10 mt-2 '>TAKE ME IN</button></span>
                            </div>

                            <div className='bg-white rounded-b-3xl rounded-l-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/427/427112.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center font-semibold text-[#294f91] '>WATER</h1>
                                <h1 className='text-xs text-center text-[#37517e] opacity-75'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                                <span ><button className='text-xs font-mono  text-stone-50 shadow-lg px-6 py-1 rounded-md bg-teal-300 hover:bg-teal-400 ml-10 mt-2 '>TAKE ME IN</button></span>
                            </div>


                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4 container mx-auto p-2'>
                          
                            <div className='bg-white rounded-r-3xl rounded-t-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/2544/2544056.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center font-semibold text-[#294f91] '>PROPERTY</h1>
                                <h1 className='text-xs text-center text-[#37517e] opacity-75'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                                <span ><button className='text-xs font-mono  text-stone-50 shadow-lg px-6 py-1 rounded-md bg-teal-300 hover:bg-teal-400 ml-10 mt-2 '>TAKE ME IN</button></span>
                            </div>
                            <div className='bg-white rounded-r-3xl rounded-t-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/3820/3820785.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center font-semibold text-[#294f91] '>SOLID WASTE </h1>
                                <h1 className='text-xs text-center text-[#37517e] opacity-75'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                                <span ><button className='text-xs font-mono  text-stone-50 shadow-lg px-6 py-1 rounded-md bg-teal-300 hover:bg-teal-400 ml-10 mt-2 '>TAKE ME IN</button></span>
                            </div>
                            <div className='bg-white rounded-t-3xl rounded-r-3xl p-4 shadow-lg'>
                                <img src='https://cdn-icons-png.flaticon.com/512/602/602182.png' className='h-20 mx-auto p-2' />
                                <h1 className='text-center font-semibold text-[#294f91] '>BUILDING PLANS</h1>
                                <h1 className='text-xs text-center text-[#37517e] opacity-75'>
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                                </h1>
                                <span ><button className='text-xs font-mono  text-stone-50 shadow-lg px-6 py-1 rounded-md bg-teal-300 hover:bg-teal-400 ml-10 mt-2 '>TAKE ME IN</button></span>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='col-span-4 '>
                    <ProfileConponent />
                </div>
            </div>
        </>
    )
}

export default Dashboard