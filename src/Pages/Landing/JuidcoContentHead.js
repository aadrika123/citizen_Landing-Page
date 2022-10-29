 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - JuidcoContentHead
//    DESCRIPTION - JuidcoContentHead is a section in landingPage containing  nformation about jharkhand
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
// import style from '../index.css'


function JuidcoContentHead() {
    return (
        <>
            <div class=''>
                {/* <div class="bg-gradient-to-tr from-indigo-800 to-indigo-500  rounded-3xl "> id=spin */}
                <div class="">
                    <div class=" p-5 px-8 space-y-1r text-center col-span-4   h-64">
                        <h1 class="font-bold md:text-3xl text-xl text-[#37517e] tracking-wide ">Government of Jharkhand<br />
                        </h1>
                        <span  class=" font-bold text-xl bg-clip-text "></span>
                        <div className='p-2'>
                        <p class="font-bold text-xl bg-clip-text  text-[#37517e]">Jharkhand Urban Infrastructure Development Company (JUIDCO)</p>
                        </div>
                        <div className=' p-4'>
                        <p class="text-[#7580a7] md:text-sm text-sm px-18  "> Jharkhand ("The land of forest") is a state in eastern India, created on 15 November 2000, from what was previously the southern half of Bihar.The state shares its border with the states of Bihar to the north, Uttar Pradesh to the northwest, Chhattisgarh to the west, Odisha to the south and West Bengal to the east. It has an area of 79,710 km2 (30,778 sq mi). It is the 15th largest state by area, and the 14th largest by population. Hindi is the official language of the state.The city of Ranchi is its capital and Dumka its sub capital. The state is known for its waterfalls, hills and holy places: Baidyanath Dham, Parasnath and Rajrappa are major religious sites.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default JuidcoContentHead