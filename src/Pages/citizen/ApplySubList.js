//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - ApplySubList
//    DESCRIPTION - ApplySubList Component is for our domain category list in citizen dashboard
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { Link } from 'react-router-dom'
import CitizenDashboardPage from '../../components/CitizenMainPage'
import LandingNav from '../Landing/LandingNav'
import SideNav from './SideNav'

function ApplySubList() {

    return (
        <>
            <div>
                <div className='fixed z-50 w-full'> <LandingNav /></div>

                <div className=''>
                    <div className='absolute left-0 top-0'><SideNav /></div>

                    {/* Apply category  in  citizen dashboard    */}



                </div>
            </div>



            <div className='container mx-auto p-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 p-14'>
                    <div className=' '>
                        <Link to="/citizenselfdetailform">
                            <div class=" p-4 ">
                                <h1 className='text-sm  font-semibold font-serif text-gray-500 '>Advertisement
                                </h1>
                                <div class="flex relative shadow-lg " >
                                    <img alt="gallery" class="absolute inset-0  h-40 object-cover object-center drop-shadow-sm rounded-md opacity-75" src="https://img.freepik.com/free-vector/bloggers-advertising-referrals-young-people-with-gadgets-loudspeakers-announcing-news-attracting-target-audience-vector-illustration-marketing-promotion-communication_74855-8244.jpg?t=st=1659594287~exp=1659594887~hmac=285b3c4de1ec111a568628448d0959932602161df6bf010cfc3aad47c6d1f269" />

                                    <div class="px-4 py-6 relative  w-58  bg-white opacity-0 hover:opacity-100">

                                        <h1 class=" text-md  font-sans text-gray-700 mb-3">Advertisement</h1>
                                        <p class="text-sm text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className=''>
                        <div class=" p-4 ">
                            <h1 className='text-sm  font-semibold font-serif text-gray-500'>Birth & Death Certificate
                            </h1>
                            <div class="flex relative shadow-lg " >

                                <img alt="gallery" class="absolute inset-0 h-40  object-cover object-center drop-shadow-sm rounded-md opacity-75" src="https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-beige_53876-157582.jpg?w=740&t=st=1659594660~exp=1659595260~hmac=fda76c07c9c807c69ab10368ab5d76205a7ff780e84cbff975ebb2431f62dece" />

                                <div class="px-4 py-6 relative  w-58  bg-white opacity-0 hover:opacity-100 ">

                                    <h1 class=" text-md  font-sans text-gray-700 mb-3">Birth & Death Certificate</h1>
                                    <p class="text-sm text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <Link to="/citizenPropertyApply">
                            <div class=" p-4 ">
                                <h1 className='text-sm  font-semibold font-serif text-gray-500'>Property
                                </h1>
                                <div class="flex relative shadow-lg" >
                                    <img alt="gallery" class="absolute inset-0 h-40 object-cover object-center drop-shadow-sm rounded-md opacity-75" src="https://img.freepik.com/free-vector/real-estate-searching_52683-46407.jpg?w=740&t=st=1659594868~exp=1659595468~hmac=93d688f9e341442af8050c8b1adf543da1d76b1df5a277be34dd28bc3fd39b28" />

                                    <div class="px-4 py-6 relative  w-58  bg-white opacity-0 hover:opacity-100  ">

                                        <h1 class=" text-md  font-sans text-gray-700 mb-3">Property</h1>
                                        <p class="text-sm text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className=''>
                        <div class=" p-4 ">
                            <h1 className='text-sm  font-semibold font-serif text-gray-500'>Water
                            </h1>
                            <div class="flex relative shadow-lg" >
                                <img alt="gallery" class="absolute inset-0 h-40 w-56 object-cover object-center drop-shadow-sm rounded-md opacity-75" src="https://img.freepik.com/free-vector/vector-clean-shiny-blue-drop-with-circles-water-close-up-front-view_1284-48012.jpg?w=740&t=st=1659594024~exp=1659594624~hmac=c260f1254b7d3695a9a0b4ed4ff4c7d0c96a497d9c97c37690617008ff35dcde" />

                                <div class="px-4 py-6 relative  w-58  bg-white opacity-0 hover:opacity-100 ">

                                    <h1 class=" text-md  font-sans text-gray-700 mb-3">Water</h1>
                                    <p class="text-sm text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 p-14 -mt-20'>
                    <div className=''>
                        <div class=" p-4 ">
                            <h1 className='text-sm  font-semibold font-serif text-gray-500'>Trade
                            </h1>
                            <div class="flex relative shadow-lg" >
                                <img alt="gallery" class="absolute inset-0 w-58 h-36 object-cover object-center drop-shadow-sm rounded-md opacity-75" src="https://img.freepik.com/free-vector/successful-partnership-negotiation-partners-handshaking_335657-2453.jpg?w=740&t=st=1659593504~exp=1659594104~hmac=6242bdcc25cd27e6b5368c09ea84aee84da3653dc98d1cf4510569b9fc971eb6" />
                                {/* <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Trade</button> */}
                                <div class="px-4 py-6 relative  w-58  bg-white opacity-0 hover:opacity-100">

                                    <h1 class=" text-md  font-sans text-gray-700 mb-3">Trade</h1>
                                    <p class="text-sm text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>

                        <div class=" p-4 ">
                            <h1 className='text-sm  font-semibold font-serif text-gray-500'>Building Plan Approval
                            </h1>
                            <div class="flex relative shadow-lg " >
                                <img alt="gallery" class="absolute inset-0 w-60 h-36 object-cover object-center drop-shadow-sm rounded-md opacity-75" src="https://img.freepik.com/free-vector/building-concept-illustration_114360-4469.jpg?w=740&t=st=1659600603~exp=1659601203~hmac=73157c68dcc27ee3db479dcbe336ccb090081c43f9f6d0dabb4122c730c323d2" />
                                {/* <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Building Plan Approval</button> */}
                                <div class="px-4 py-6 relative  w-58  bg-white opacity-0 hover:opacity-100 ">

                                    <h1 class=" text-md  font-sans text-gray-700 mb-3">Building Plan Approval</h1>
                                    <p class="text-sm text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div class="  p-4 ">
                            <h1 className='text-sm  font-semibold font-serif text-gray-500'>Solid Waste Management
                            </h1>
                            <div class="flex relative shadow-lg  " >
                                <img alt="gallery" class="absolute inset-0 w-58 h-36 object-cover object-center drop-shadow-sm rounded-md opacity-75" src="https://img.freepik.com/free-vector/isolated-trash-container-white-background_1308-23989.jpg?w=740&t=st=1659600835~exp=1659601435~hmac=34813b99a98211e6a30d4c2d661ee66f92e5f5f85cc54fb8e4af9ec0b3b82e1c" />
                                {/* <button class="dark:bg-gray-800  focus:ring-gray-400 bottom-0 absolute  font-medium leading-none text-gray-800 py-1  bg-slate-50 w-full text-sm">Solid Waste Management</button> */}
                                <div class="px-4 py-6 relative  w-58  bg-white opacity-0 hover:opacity-100  ">

                                    <h1 class=" text-md  font-sans text-gray-700 mb-3">Solid Waste Management</h1>
                                    <p class="text-sm text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default ApplySubList