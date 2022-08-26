//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LandingNav
//    DESCRIPTION - LandingNav Component is for NavBar
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import SearchBox from './SearchBox'

function LandingNav() {

    const [menuDropdown, setmenuDropdown] = useState('hidden')

    const menuOpen = () => {
        menuDropdown == 'hidden' ? setmenuDropdown('') : setmenuDropdown('hidden')
    }

    return (
        <>
            <header>
                <nav className="opacity-75   bg-gray-800 h-22">
                    <div className="flex justify-between items-center py-1 px-2 container mx-auto ">
                        <div className='flex  '>
                            <div  className='fixed -mt-3 -ml-5 '>
                             
                                <Logo />
                            </div>
                            <div className='  '>
                                <h1 className='text-center text-md mt-0 ml-9  text-gray-100 font-normal font-sans'>Government of Jharkhand</h1>
                            </div>
                        </div>
                        <div>
                            <div className="hover:cursor-pointer sm:hidden">
                                <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                                <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                                <spnan className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></spnan>
                            </div>

                            <div className="flex items-center ">
                                <div className="sm:mx-auto sm:max-w-lg sm:px-1  ">
                                    <SearchBox />
                                </div>

                                <ul className="sm:flex hidden items-center h-10 ">
                                    <div>
                                        <div className="flex-col  ">
                                            <div className="flex w-60 justify-center space-x-0 ">
                                                <button className="min-w-auto w-12 h-9 bg-gray-800 p-2 rounded-l-full hover:bg-blue-500  hover:text-white  text-gray-200  font-semibold  hover:flex-grow hover: will-change-contents transition-all duration-200 ease-in-out ">
                                                    <div className='flex flex-row'>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <Link to="/">
                                                                <p className='ml-4 text-sm mt-0'>HOME</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </button>
                                                <button className="min-w-auto w-12 h-9 bg-gray-800  p-2 rounded-none hover:hover:bg-blue-500 hover:text-white  text-gray-200 font-semibold  hover:flex-grow transition-all duration-200 ease-in-out">
                                                    <div className='flex flex-row'>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <Link to="/about">
                                                                <p className='ml-3 text-sm mt-0'>ABOUT</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </button>
                                                <div class="relative inline-block text-left z-10">
                                                    <div>
                                                        <button className="min-w-auto w-12 h-9 bg-gray-800  p-2 rounded-r-full hover:bg-blue-500  hover:text-white   text-gray-200   font-semibold hover:flex-grow transition-all duration-200 ease-in-out inline-flex " id="menu-button" aria-expanded="true" aria-haspopup="true" type='button' onClick={menuOpen}>
                                                            <div className='flex flex-row'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        </button>
                                                        <div class={`${menuDropdown} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                                            <div class="py-1" role="none">
                                                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                                                <Link to="/logout">
                                                                    <p class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Logout</p>
                                                                </Link>
                                                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">About</a>
                                                            </div>
                                                            <div class="py-1" role="none">
                                                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Property</a>
                                                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Trade</a>
                                                            </div>
                                                            <div class="py-1" role="none">
                                                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Water</a>
                                                                <Link to="/citizenDashboard"> <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Dashboard</a>
                                                                </Link>
                                                            </div>
                                                            <div class="py-1" role="none">
                                                                <Link to = "/">
                                                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6">Home</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </ul>

                                <div className='flex  mt-1 w-18'>
                                    <div className='flex-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                        </svg>
                                    </div>
                                    <div className='flex-1'>
                                        <Link to="/login">
                                            <h2 class="   hover:cursor-pointer px-1 hover:text-gray-200 text-gray-200 text-sm">Login</h2>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className=' flex mt-1 w-18 px-2'>
                                    <div className='flex-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className='flex-1'>
                                        <Link to='/register'>
                                            <h2 class=" hover:cursor-pointer px-1  hover:text-gray-200 text-gray-200  text-sm ">Signup</h2>
                                        </Link>
                                    </div>
                                </div>

                                <div>


                                </div>

                            </div>

                        </div>
                    </div>
                </nav>
            </header>




        </>
    )
}

export default LandingNav