//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - NoticeComponent
//    DESCRIPTION - NoticeComponent Component containing notice of different ulb in landingPage
//////////////////////////////////////////////////////////////////////////////////////

import React, { useContext } from 'react'
import { contextVar } from '../../components/ContextVar';


function NoticeComponent() {

    const vals = useContext(contextVar)

    console.log('vals from context ', vals.ulbdata)



    return (
        <>


            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 ">
            <div class=" ">
                    <h3 class="text-lg text-[#37517e] text-center font-semibold">Notice</h3>

                </div>
                {vals.ulbdata?.notice.map((item) => (
                    <div className='flex '>
                        <div className='flex-1 p-1 text-xs text-[#8894a8] ml-6'>
                            {item.header}
                        </div>
                    </div>
                ))}

                <div class=" text-base font-semibold text-gray-900 dark:text-white p-2">
                    <p class="text-sm font-medium text-[#1a2558] float-right">
                        View all
                    </p>
                </div>
            </div>
        </>
    )
}

export default NoticeComponent