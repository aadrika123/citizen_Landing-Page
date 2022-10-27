//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - EventComponent
//    DESCRIPTION - EventComponent  conating event according to selected ulb in landingPage
//////////////////////////////////////////////////////////////////////////////////////

import React, { useContext } from 'react'
import { contextVar } from '../../components/ContextVar';


function EventComponent() {


    const vals = useContext(contextVar)

    console.log('vals from context ', vals.ulbdata)


    return (
        <>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
                <div class=" ">
                    <h3 class="text-lg text-[#37517e] text-center font-semibold">Events</h3>

                </div>
                {vals.ulbdata?.events.map((item) => (
                    <div className='flex p-1'>
                        <div className=' w-20 md:h-auto md:w-20 mt-2'>
                            <img class="object-cover" src="https://cdn.siasat.com/wp-content/uploads/2019/11/events-in-hyderabad.jpg" alt="" />
                        </div>
                        <div className='flex-1 p-2 text-xs text-[#8894a8]'>
                            {item.header}
                        </div>
                    </div>
                ))}

                {/* <div class=" text-base font-semibold text-gray-900 dark:text-white">
                    <p class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 float-right">
                        View all
                    </p>
                </div> */}
            </div>

        </>
    )
}

export default EventComponent