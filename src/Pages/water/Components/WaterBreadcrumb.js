//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 30 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterBreadcrumb.js
//    DESCRIPTION -
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { Link } from 'react-router-dom'
import regimg from '../Assets/regimg.png'
import uploadpic from '../Assets/uploadpic.png'
import progress from '../Assets/progress.png'
import paymentImg from '../Assets/credit-card.png'

function WaterBreadcrumb(props) {
    return (
        <>
            <nav aria-label="breadcrumb" className="w-full pl-5 pt-2 dark:bg-gray-800 dark:text-gray-100">
                <ol className="flex space-x-2">
                    <li className="flex items-center">
                        <Link rel="noopener noreferrer" to="/" title="Back to homepage" className="hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 dark:text-gray-400">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                        </Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <Link rel="noopener noreferrer" to="/water" className="flex items-center px-1 capitalize hover:underline">Water Dashboard</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Current</a>
                    </li>
                </ol>
            </nav>

            <div className='md:flex md:flex-wrap m-5'>
                {/* <div onClick={props.handleApplyNew} className='m-3'> */}
                <div className='m-3'>
                    <div className='bg-fuchsia-400 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-fuchsia-500 transition duration-500 hover:scale-105'>
                        <div className='flex justify-center p-3'>
                            <img src={regimg} className="h-14 opacity-80" alt="" />
                        </div>
                        <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Apply For New Services</p>
                    </div>
                </div>
                <div className='m-3'>
                    <div className='bg-yellow-300 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-yellow-400 transition duration-500 hover:scale-105'>
                        <div className='flex justify-center p-3'>
                            <img src={progress} className="h-14 opacity-80" alt="" />
                        </div>
                        <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>View Application Status</p>
                    </div>
                </div>
                <div onClick={props.handleDocUpload} className='m-3'>
                    <div className='bg-red-200 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-red-300 transition duration-500 hover:scale-105'>
                        <div className='flex justify-center p-3'>
                            <img src={uploadpic} className="h-14 opacity-80" alt="" />
                        </div>
                        <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Documet Upload</p>
                    </div>
                </div>
                <div onClick={props.handlePayment} className='m-3'>
                    <div className='bg-green-300 md:h-32 md:w-56 h-36 w-full rounded-sm shadow-lg cursor-pointer hover:bg-green-400 transition duration-500 hover:scale-105'>
                        <div className='flex justify-center p-3'>
                            <img src={paymentImg} className="h-14 opacity-80" alt="" />
                        </div>
                        <p className='font-bold text-gray-800 text-center md:text-lg text-2xl'>Make Payment</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WaterBreadcrumb

/*
Exported to -
1. WaterIndex.js
*/