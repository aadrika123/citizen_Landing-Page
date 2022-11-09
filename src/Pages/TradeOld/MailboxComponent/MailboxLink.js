//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - MailboxLink
//    DESCRIPTION - MailboxLink Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function MailboxLink(props) {
    // console.log("activate status of ",props.activeStatus)
    return (
        <>

            <p className={(props.activeStatus ? "bg-sky-100 text-indigo-400 font-semibold shadow-lg " : "   bg-teal-300 text-gray-600") + " cursor-pointer flex items-centertext-base m-2 rounded-md py-6 px-8 hover:bg-teal-500 hover:text-white"}>

                <svg className={(props.activeStatus ? "text-indigo-400 font-semibold" : " text-gray-600") + " w-24 h-12 transition duration-75  group-hover:text-gray-900 "} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>

                <span className="sm:ml-3 text-md sm:text-md">{props.title} </span>
            </p>

        </>
    )
}

export default MailboxLink
/**
 * Exported to :
 * 1. Sidebar Component
 * 
 */