//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - NewsComponent
//    DESCRIPTION - NewsComponent Component containing news of different ulb in landingPage
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { contextVar } from '../../components/ContextVar';

function NewsComponent() {



    const vals = useContext(contextVar)

    console.log('vals from context ', vals.ulbdata)



    return (
        <>
       

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
                <div class=" ">
                    <h3 class="text-lg text-[#37517e] text-center font-semibold ">Ranchi Headlines</h3>
                   
                </div>
                {vals.ulbdata?.news.map((item) => (
                    <div className='flex p-1'>
                        <div className=' w-20 md:h-auto md:w-20 mt-2'>
                            <img class="object-cover " src="https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-720038230.jpg" alt="" />
                        </div>
                        <div className='flex-1 p-2 text-xs text-[#8894a8]'>
                            {item.header}
                        </div>
                    </div>
                ))}
                <div class=" text-base font-semibold text-gray-900 dark:text-white p-2">
                    <p class="text-sm font-medium text-[#1a2558]  float-right">
                        View all
                    </p>
                </div>
            </div>
        </>
    )
}

export default NewsComponent