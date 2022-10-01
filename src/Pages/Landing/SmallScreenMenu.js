
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SmallScreenMenu() {



    const [menuDropdown, setmenuDropdown] = useState('hidden')
    const openDropdown = () => {
        menuDropdown == 'hidden' ? setmenuDropdown('') : setmenuDropdown('hidden')
    }

    return (
        <>

            <div className='grid grid-cols-6 md:hidden lg:hidden divide-x container mx-auto opacity-75 '>
                <div className='bg-gray-800  text-center'>
                    <div className='flex flex-row p-3 -ml-2 mt-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-200 " viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <Link to="/">
                                <p className=' text-gray-200  text-xs '>Home</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 p-3 text-center'>
                    <div className='flex flex-row -ml-2  mt-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-gray-200 " viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <Link to="/about">
                                <p className=' text-gray-200  text-xs '>About</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 p-3 text-center'>
                    <div className='flex flex-row -ml-2  mt-1' onClick={openDropdown}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className=' text-gray-200  text-xs '>More</p>
                        </div>
                    </div>
                    <div class={`${menuDropdown} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">

                        <div class="py-1" role="none">
                            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                            <Link to="/logout">
                                <p class="text-white block px-4 py-2 text-sm hover:bg-white hover:text-gray-800  " role="menuitem" tabindex="-1" id="menu-item-0">Logout</p>
                            </Link>
                            <a href="#" class="text-white block px-4 py-2 text-sm hover:bg-white hover:text-gray-800" role="menuitem" tabindex="-1" id="menu-item-1">About</a>
                        </div>
                        <div class="py-1" role="none">
                            <a href="#" class="text-white block px-4 py-2 text-sm hover:bg-white hover:text-gray-800" role="menuitem" tabindex="-1" id="menu-item-2">Property</a>
                            <a href="#" class="text-white block px-4 py-2 text-sm hover:bg-white hover:text-gray-800" role="menuitem" tabindex="-1" id="menu-item-3">Trade</a>
                        </div>
                        <div class="py-1" role="none">
                            <a href="#" class="text-white block px-4 py-2 text-sm hover:bg-white hover:text-gray-800" role="menuitem" tabindex="-1" id="menu-item-4">Water</a>
                            <Link to="/citizenDashboard"> <a href="#" class="text-white block px-4 py-2 text-sm hover:bg-white hover:text-gray-800" role="menuitem" tabindex="-1" id="menu-item-5">Dashboard</a>
                            </Link>
                        </div>
                        <div class="py-1" role="none">
                            <Link to="/">
                                <a href="#" class="text-white block px-4 py-2 text-sm hover:bg-white hover:text-gray-800" role="menuitem" tabindex="-1" id="menu-item-6">Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 p-3 text-center'>
                    <div className='flex flex-row -ml-2  mt-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                            </svg>
                        </div>
                        <div>
                            <Link to="/login">
                                <p className=' text-gray-200  text-xs '>Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 p-3 text-center'>
                    <div className='flex flex-row -ml-2   mt-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <Link to="/register">
                                <p className=' text-gray-200  text-xs '>Signup</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-800 p-3 text-center'>
                    <div className='flex flex-row  mt-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <Link to="/login">
                                <p className=' text-gray-200  text-xs '>Apply</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SmallScreenMenu