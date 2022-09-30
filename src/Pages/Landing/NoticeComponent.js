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
            {/* <div class="max-w-xl px-2  mx-auto  h-full ">

                <div class="   dark:bg-gray-800 dark:border-gray-700 ">
                    <div class="flex justify-between items-center mb-1">
                        <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Notice Board</h3>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 text-indigo-800" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div class="flow-root">

                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 ">
                            {vals.ulbdata?.notice.map((item) => (
                                <li class="py-0 sm:py-1">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {item.header}
                                            </p>
                                        </div>

                                    </div>
                              

                                </li>
                            ))}
                        </ul>
                        <div class="float-right text-base font-semibold text-gray-900 dark:text-white">
                            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                    </div>
                </div>

            </div> */}

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 ">
                <div class="flex justify-between items-center  ">
                    <h3 class="text-xl font-bold leading-none text-gray-600 ml-6 ">Notice Board</h3>
                </div>
                {vals.ulbdata?.notice.map((item) => (
                    <div className='flex '>
                        <div className='flex-1 p-1 text-xs  ml-6'>
                            {item.header}
                        </div>
                    </div>
                ))}

                <div class=" text-base font-semibold text-gray-900 dark:text-white">
                    <p class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 float-right">
                        View all
                    </p>
                </div>
            </div>
        </>
    )
}

export default NoticeComponent