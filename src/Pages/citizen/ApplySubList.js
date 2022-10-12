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
            {/* <div className='container mx-auto p-12'>
                <h1 className='text-center font-semibold text-xl text-gray-500'>APPLY APPLICATION</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 p-6'>
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

                                <div class="px-4 py-6 relative  w-58  bg-white opacity-0 hover:opacity-100  ">

                                    <h1 class=" text-md  font-sans text-gray-700 mb-3">Solid Waste Management</h1>
                                    <p class="text-sm text-gray-400">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div> */}


            <div className='container mx-auto  p-20'>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  container mt-2'>
                    <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/8062/8062163.png' className='h-12   float-right' />
                    </div>
                    <div className=''>
                        <h1 className='ml-2 text-2xl font-semibold text-gray-600 font-serif  '>
                            SERVICES
                        </h1>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4   p-4'>
                    <div className=' mx-auto'>
                        <Link to="/citizenselfdetailform">
                            <div class="shadow-lg rounded-2xl lg:w-64 w-96   p-2 py-2 mb-2 bg-purple-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <div class="flex flex-col items-center justify-center">
                                    <div class="w-20 h-20 relative ">
                                        <img src='https://cdn-icons-png.flaticon.com/512/1055/1055664.png' className=' h-16  opacity-85' />
                                    </div>
                                    <p class="text-gray-800 text-md font-medium mb-1">
                                        ADVERTISEMENT
                                    </p>
                                    <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                        You Can Get License To Advertise Your Business Name On Your Shop
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className=' mx-auto'>
                        <Link to="/citizenPropertyApply">
                            <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-blue-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <div class="flex flex-col items-center justify-center">
                                    <div class="w-20 h-20  mx-auto relative">
                                        <img src='https://cdn-icons-png.flaticon.com/512/609/609803.png' className=' h-16  opacity-85' />
                                    </div>
                                    <p class="text-gray-800 text-md font-medium mb-1 ">
                                        PROPERTY
                                    </p>
                                    <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                        You Can Get License To Advertise Your Business Name On Your Shop
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className=' mx-auto'>
                        <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-cyan-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <div class="flex flex-col items-center justify-center">
                                <div class="w-20 h-20   relative ">
                                    <img src='https://cdn-icons-png.flaticon.com/512/3105/3105807.png' className=' h-16  opacity-85' />
                                </div>
                                <p class="text-gray-800 text-md font-medium mb-1">
                                    WATER
                                </p>
                                <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                    You Can Get License To Advertise Your Business Name On Your Shop
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' mx-auto'>
                        <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <div class="flex flex-col items-center justify-center">
                                <div class="w-20 h-20   relative  ">
                                    <img src='https://cdn-icons-png.flaticon.com/512/3309/3309991.png' className=' h-16  opacity-85' />
                                </div>
                                <p class="text-gray-800 text-md font-medium mb-1">
                                    TRADE
                                </p>
                                <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                    You Can Get License To Advertise Your Business Name On Your Shop
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 p-4 -mt-7'>
                    <div className=' mx-auto'>
                        <Link to="/citizenselfdetailform">
                            <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-teal-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <div class="flex flex-col items-center justify-center">
                                    <div class="w-20 h-20   relative  ">
                                        <img src='https://cdn-icons-png.flaticon.com/512/602/602182.png' className=' h-16  opacity-85' />
                                    </div>
                                    <p class="text-gray-800 text-md font-medium mb-1">
                                        BUILDING PLAN
                                    </p>
                                    <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                        You Can Get License To Advertise Your Business Name On Your Shop
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className=' mx-auto'>
                        <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-orange-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <div class="flex flex-col items-center justify-center">
                                <div class="w-20 h-20  relative ">
                                    <img src='https://cdn-icons-png.flaticon.com/512/2587/2587883.png' className=' h-16  opacity-85' />
                                </div>
                                <p class="text-gray-800 text-md font-medium mb-1">
                                    SOLID WASTE MANAGEMENT
                                </p>
                                <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                    You Can Get License To Advertise Your Business Name On Your Shop
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' mx-auto'>
                        <div class="shadow-lg rounded-2xl lg:w-64 w-96 p-2 py-2 mb-2 bg-yellow-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <div class="flex flex-col items-center justify-center">
                                <div class="w-20 h-20   relative">
                                    <img src='https://cdn-icons-png.flaticon.com/512/3617/3617064.png' className=' h-16  opacity-85' />
                                </div>
                                <p class="text-gray-800 text-md font-medium mb-1">
                                    BIRTH & DEATH CERTIFICATE
                                </p>
                                <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                    You Can Get License To Advertise Your Business Name On Your Shop
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className=' mx-auto'>
                        <div class="shadow-lg rounded-2xl lg:w-64 w-96  p-2 py-2 mb-2 bg-teal-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <div class="flex flex-col items-center justify-center">
                                <div class="w-20 h-20   relative ">
                                    <img src='https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg?w=740&t=st=1664274233~exp=1664274833~hmac=522e5bcf3834f2bc492b270610878ccef08f7fa09de3f086006b8055760a1833' className=' h-16  opacity-85' />
                                </div>
                                <p class="text-gray-800 text-md font-medium mb-1">
                                    TRADE
                                </p>
                                <p class="text-gray-700 text-center text-xs px-1 mb-2">
                                You Can Get License To Advertise Your Business Name On Your Shop
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default ApplySubList