//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 21 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterIndex.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import WaterCitizenForm from './WaterCitizenForm'

function WaterIndex() {
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 bg-sky-300 md:block hidden'>
                    sidebar
                </div>
                <div className='md:col-span-10 col-span-12'>
                    <WaterCitizenForm />
                </div>
            </div>
        </>
    )
}

export default WaterIndex

/*
Exported to -
1. App.js
*/
