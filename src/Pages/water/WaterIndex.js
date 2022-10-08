//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 20 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterIndex.js
//    DESCRIPTION - This is Main Index Component of water module.
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import WaterFormIndex from './Form/WaterFormIndex'
import LandingNav from '../Landing/LandingNav'
import WaterApplySidebar from './WaterApplySidebar'

import DocUploadFormIndex from './DocUploadForm/DocUploadFormIndex'
import PaymentFormIndex from './PaymentForm/PaymentFormIndex'
import { AiOutlineMenuFold } from 'react-icons/ai';
import WaterMobileMenu from './Components/WaterMobileMenu'
import WaterDashMainBlocks from './Components/WaterDashMainBlocks'
import WaterBreadcrumb from './Components/WaterBreadcrumb'

function WaterIndex() {
    const [blocks, setBlocks] = useState(true) // This is used for show/hide blocks(dash menus)
    const [applyWater, setApplyWater] = useState(false) //This will show/hide water application form
    const [docUpload, setDocUpload] = useState(false) //This will show/hide Docment upload screen
    const [makePayment, setMakePayment] = useState(false) //This will show/hide Payment Screen 
    const [mobileSideMenu, setMobileSideMenu] = useState(false) // used for show hide mobile menu

    const waterDashboard = () => { // used for show blocks and hide all the form components
        console.log("this is water dash calling..")
        setBlocks(true)
        setApplyWater(false)
        setDocUpload(false)
        setMakePayment(false)
    }

    const handleApplyNew = () => {  // this will hide blocks and show water application form
        setBlocks(false)
        setApplyWater(true)
    }

    const handleDocUpload = () => { // this will hide blocks and show Document Screen
        setBlocks(false)
        setDocUpload(true)
    }

    const handlePayment = () => { // This will hide blocks and show Payment Screen
        setBlocks(false)
        setMakePayment(true)
    }


    const handleMobileMenu = () => {  // This is action for mobile menu open/close
        console.log("Cliked mobile menu..")
        setMobileSideMenu(!mobileSideMenu)
    }


    return (
        <>
            <LandingNav />  {/* show main nagivation menu*/}
            <div className='grid md:grid-cols-10 grid-cols-12 select-none'>
                <div className='col-span-2 bg-white md:block hidden'>
                    <WaterApplySidebar dash={waterDashboard} />  {/* Show water Sidebar on desktop*/}
                </div>
                <div className='md:col-span-8 col-span-12 relative'>
                    <div className='bg-sky-300 w-full h-8 md:hidden'>
                        <AiOutlineMenuFold onClick={handleMobileMenu} className='absolute ml-2 cursor-pointer' size={30} /> {/* This icon will shown on mobile only -- used for show/hide sub menu */}
                        <p className='text-center font-semibold text-xl '>Water Releted Services</p>
                    </div>
                 {/*    <WaterBreadcrumb /> */} {/* WaterBreadcrumb used for navigate the page*/}
                    {mobileSideMenu && <WaterMobileMenu />} {/* Show hide mobile side menu*/}
                    {blocks && <WaterDashMainBlocks handleApplyNew={handleApplyNew} handleDocUpload={handleDocUpload} handlePayment={handlePayment} />} {/* Show/Hide Water Dashboard Main blocks*/}
                    {applyWater && <WaterFormIndex back={waterDashboard} />} {/*Show Water Application form */}
                   {/* {docUpload && <DocUploadFormIndex back={waterDashboard} />}  Show doument upload form*/}
                   {/*  {makePayment && <PaymentFormIndex back={waterDashboard} />} Show payment Page*/}
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
