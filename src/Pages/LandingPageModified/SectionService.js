import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import EventComponent from '../Landing/EventComponent'
import NewsComponent from '../Landing/NewsComponent'
import NoticeComponent from '../Landing/NoticeComponent'

function SectionService() {
    return (
        <>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 container mx-auto p-2'>
                    <div className='col-span-9 '>
                        <div className='bg-[#f3f5fa]'>
                            <h1 className='text-center font-semibold  text-2xl text-[#37517e]'>
                                SERVICES
                            </h1>
                            <p className='p-2 text-center text-[#37517e] text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eum voluptas sapiente. Veritatis a ad officia alias illum eligendi temporibus laudantium nisi ex eveniet nemo, corporis id voluptas neque excepturi?</p>
                            <div>
                                <Carousel>

                                    {/* 1st */}
                                    {/* <div>
                                    <section class="text-gray-600 body-font">
                                        <div class="container px-5 py-16 mx-auto">
                                            <div class="flex flex-wrap  space-x-10 ">


                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://cdn-icons-png.flaticon.com/512/1907/1907675.png" />
                                                            <p className=' '> </p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://cdn-icons-png.flaticon.com/128/5302/5302733.png" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                </div> */}
                                    <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 container gap-8 mx-auto p-6'>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>
                                                    <img src='https://cdn-icons-png.flaticon.com/512/609/609803.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>PROPERTY</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/427/427112.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>WATER</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/3309/3309991.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>TRADE</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/3405/3405768.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>ADVERTISEMENT</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* 2nd Page*/}
                                    {/* <div>
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-24 mx-auto">
                                            <div class="flex flex-wrap  space-x-28">
                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                </div> */}
                                    <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 container gap-8 mx-auto p-6'>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>
                                                    <img src='https://cdn-icons-png.flaticon.com/512/609/609803.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>PROPERTY</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/427/427112.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>WATER</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/3309/3309991.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>TRADE</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/3405/3405768.png' className='opacity-95 h-20 w-16 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>ADVERTISEMENT</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3rd Page*/}
                                    {/* <div>
                                    <section class="text-gray-600 body-font">
                                        <div class="container px-5 py-24 mx-auto">
                                            <div class="flex flex-wrap  space-x-28">
                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                    </section>
                                </div> */}

                                    <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 container gap-8 mx-auto p-6'>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>
                                                    <img src='https://cdn-icons-png.flaticon.com/512/609/609803.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>PROPERTY</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/427/427112.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>WATER</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/3309/3309991.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>TRADE</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/3405/3405768.png' className='opacity-95 h-20 w-16 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>ADVERTISEMENT</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 4th Page */}
                                    {/* <div>
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-24 mx-auto">
                                            <div class="flex flex-wrap  space-x-28">
                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </section>
                                </div> */}

                                    {/* 5th Page */}
                                    {/* <div>
                                    <section class="text-gray-600 body-font">
                                        <div class="container px-5 py-24 mx-auto">
                                            <div class="flex flex-wrap  space-x-28">
                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="lg:w-1/6  lg:h-[10rem]  sm:w-1/3 md:">
                                                    <div class="flex relative shadow-md bg-green-300 rounded-md cursor-pointer">
                                                        <div className='h-[full]  w-full  flex justify-evenly px-4 items-center flex-col'>
                                                            <img alt="gallery" class=" inset-0 w-full h-1/2 object-cover object-center rounded-lg " src="https://th.bing.com/th/id/OIP.V6waM-05f7F22PqZA_EAhQHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                                                            <p className=' '> Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                        <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                            <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                            <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                    </section>



                                </div> */}

                                    <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 container gap-8 mx-auto p-6'>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>
                                                    <img src='https://cdn-icons-png.flaticon.com/512/609/609803.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>PROPERTY</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/427/427112.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>WATER</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/3309/3309991.png' className='opacity-95 h-20 w-20 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>TRADE</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-54 w-48'>
                                            <div class="flex relative shadow-md bg-white rounded-md cursor-pointer ">
                                                <div className=' mx-auto py-8'>

                                                    <img src='https://cdn-icons-png.flaticon.com/512/3405/3405768.png' className='opacity-95 h-20 w-16 ' />
                                                    <h1 className='text-[#37517e] font-semibold mt-4'>ADVERTISEMENT</h1>
                                                </div>
                                                <div class="px-8 py-10 absolute z-10 h-full w-full shadow-md rounded-md bg-white opacity-0 hover:opacity-100">
                                                    <h6 class="title-font text-lg font-medium text-gray-900 mb-3">Property Tax </h6>
                                                    <p class="leading-relaxed">Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5 p-2 container mx-auto'>
                            <div className='col-span-4  shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500'>
                                <div className='mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 mx-auto text-[#ff583d] rounded-full   p-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>

                                </div>
                                <NewsComponent />
                            </div>
                            <div className='col-span-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500'>
                                <div className='mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 mx-auto text-[#ff583d] rounded-full   p-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>

                                </div>
                                <EventComponent />
                            </div>
                            <div className='col-span-4 shadow-md hover:shadow-lg  hover:scale-105 transition-all duration-500'>
                                <div className='mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 mx-auto text-[#ff583d] rounded-full   p-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>

                                </div>
                                <NoticeComponent />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 border-4 divide-y divide-[#37517e] p-2'>
                        <h1 className='text-center  text-xl text-[#37517e] '>QUICK LINK</h1>
                        <div class="flex  items-center p-1 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#37517e]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            </span>
                            <h3 class="font-normal font-sans text-md text-[#37517e]  float-left ml-2 divide-y divide-[#37517e] ">Projects</h3>
                        </div>
                        <div class="flex  items-center p-1 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#37517e]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            </span>
                            <h3 class="font-normal font-sans text-md text-[#37517e]  float-left ml-2 divide-y divide-[#37517e] ">Government Decision</h3>
                        </div>
                        <div class="flex  items-center p-1 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#37517e]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            </span>
                            <h3 class="font-normal font-sans text-md text-[#37517e]  float-left ml-2 divide-y divide-[#37517e] ">Services</h3>
                        </div>
                        <div class="flex  items-center p-1 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#37517e]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            </span>
                            <h3 class="font-normal font-sans text-md text-[#37517e]  float-left ml-2 divide-y divide-[#37517e] ">Projects</h3>
                        </div>


                        {/************Copied****************/}
                        <div class="flex  items-center p-1 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#37517e]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            </span>
                            <h3 class="font-normal font-sans text-md text-[#37517e]  float-left ml-2 divide-y divide-[#37517e] ">Projects</h3>
                        </div>
                        <div class="flex  items-center p-1 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#37517e]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            </span>
                            <h3 class="font-normal font-sans text-md text-[#37517e]  float-left ml-2 divide-y divide-[#37517e] ">Government Decision</h3>
                        </div>
                        <div class="flex  items-center p-1 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#37517e]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            </span>
                            <h3 class="font-normal font-sans text-md text-[#37517e]  float-left ml-2 divide-y divide-[#37517e] ">Services</h3>
                        </div>
                        <div class="flex  items-center p-1 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#37517e]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            </span>
                            <h3 class="font-normal font-sans text-md text-[#37517e]  float-left ml-2 divide-y divide-[#37517e] ">Projects</h3>
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default SectionService