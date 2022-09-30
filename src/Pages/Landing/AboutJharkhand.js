//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AboutJharkhand
//    DESCRIPTION - AboutJharkhand  is section  containing brief about jharkhand in landingPage
//////////////////////////////////////////////////////////////////////////////////////

import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Link, useNavigate } from "react-router-dom";
import JuidcoContentHead from './JuidcoContentHead';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function AboutJharkhand() {

    return (
        <>
            {/* <section className='bg-slate-100 '>
                <div class="container flex flex-wrap  mx-auto items-center  ">

                    <div class=" sm:grid grid-cols-2  sm:gap-4">
                        <div class="h-96 col-span-4 flex items-center bg-cover " >
                           

                        </div>
                        <div className='w-full '>



                            <section class="text-gray-600 w-full ml-80">
                                <div class="container mx-auto">

                                    <div class="flex flex-wrap -m-32 mx-auto  text-center">
                                        <div class="  ">
                                            <div class="border-2 border-gray-200 w-32 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-8 h-8 mb-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" />
                                                </svg>
                                                <h2 class="title-font font-medium text-sm text-gray-900">24</h2>
                                                <p class="leading-relaxed">DISTRICT</p>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="border-2 border-gray-200 w-32 ml-8 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-8 h-8 mb-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                                </svg>
                                                <h2 class="title-font font-medium text-sm text-gray-900">37.33 Millions</h2>
                                                <p class="leading-relaxed">POPULATION</p>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="border-2 border-gray-200 w-32 ml-8 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-8 h-8 mb-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd" />
                                                </svg>
                                                <h2 class="title-font font-medium text-sm text-gray-900">79,716 km²</h2>
                                                <p class="leading-relaxed">AREA</p>
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="border-2 border-gray-200 w-32 ml-8 rounded-lg">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-8 h-8 mb-2 inline-block" viewBox="0 0 24 24">
                                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                                </svg>
                                                <h2 class="title-font font-medium text-sm text-gray-900">2.7K</h2>
                                                <p class="leading-relaxed">Downloads</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>


            </section> */}
            <div className='bg-slate-50 shadow-lg'>
                <div className='container  mx-auto'>
                <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                    <div class=" ">
                        <JuidcoContentHead />
                    </div>
                </div><br />
                <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 text-center -mt-16 p-4">

                    <div class="mx-auto">
                        <div class="border-2 border-gray-200 rounded-lg  w-32">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-8 h-8 mb-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" />
                            </svg>
                            <h2 class="title-font font-medium text-sm text-gray-900">24</h2>
                            <p class="leading-relaxed">DISTRICT</p>
                        </div>
                    </div>
                    <div class="mx-auto">
                        <div class="border-2 border-gray-200 w-32 ml-8 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-8 h-8 mb-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <h2 class="title-font font-medium text-sm text-gray-900">37.33 Millions</h2>
                            <p class="leading-relaxed">POPULATION</p>
                        </div>
                    </div>
                    <div class="mx-auto">
                        <div class="border-2 border-gray-200 w-32 ml-8 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-indigo-500 w-8 h-8 mb-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                            <h2 class="title-font font-medium text-sm text-gray-900">79,716 km²</h2>
                            <p class="leading-relaxed">AREA</p>
                        </div>
                    </div>
                    <div class="mx-auto">
                        <div class="border-2 border-gray-200 w-32 ml-8 rounded-lg">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-8 h-8 mb-2 inline-block" viewBox="0 0 24 24">
                                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                            </svg>
                            <h2 class="title-font font-medium text-sm text-gray-900">2.7K</h2>
                            <p class="leading-relaxed">Downloads</p>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </>
    )
}

export default AboutJharkhand