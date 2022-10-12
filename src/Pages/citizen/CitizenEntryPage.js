//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenEntryPage
//    DESCRIPTION - CitizenEntryPage Component is for landing in citizen dashboard 
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import citizenLog from '../../assets/citizenLog.svg'
function CitizenEntryPage(props) {


    console.log("citizenName in dashboard", props.citizenName)

    const [citizenName, setcitizenName] = useState();
    useEffect(() => {
        setcitizenName(props.citizenName)

    }, [props.citizenName])

    return (
        <>

            <div className='p-20'>
                <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6  container mx-auto'>
                    <div className='col-span-5 '>
                        <h3 class=" text-gray-600 font-sans md:text-lg sm:text-sm  lg:text-4xl mt-6 ">Welcome, {citizenName?.name}!</h3>
                        <p class="text-left  text-gray-500 md:text-xs sm:text-xs  lg:text-sm mt-8 ">This is your dashboard,Find all your information here.<br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem architecto nobis nihil assumenda hic corporis aliquid nisi rerum magni, a fuga excepturi ipsum molestiae ducimus odit necessitatibus fugiat culpa numquam.
                        </p>
                    </div>

                    <div className=' '>
                        <div className='bg-blue-400 w-9 h-9 rounded-full p-1 mt-2 ml-8  border border-slate-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-0.5 mt-0.5 text-white ">
                                <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className='bg-yellow-400 w-9 h-9 rounded-full p-1 ml-24 -mt-14  text-white  border border-slate-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mt-1 ml-0.5">
                                <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clip-rule="evenodd" />
                            </svg>

                        </div>
                        <div className='bg-green-400 w-9 h-9 rounded-full p-1 ml-36  text-white border border-slate-200'>
                            <WhatsAppIcon className='ml-0.5 h-4 -mt-0.5' />


                        </div>
                        <img src={citizenLog} className='h-36' />

                    </div>
                </div>
            </div>
           
        </>
    )
}

export default CitizenEntryPage