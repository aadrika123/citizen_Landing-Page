//////////////////{*****}//////////////////////////////////////////
// >Author - swati sharma
// >Version - 1.0
// >Date - 7 oct 2022
// >Revision - 1
// >Project - JUIDCO
// >Component  - CitizenPropFormStatusTimeline
// >DESCRIPTION - CitizenPropFormStatusTimeline Component
//////////////////{*****}//////////////////////////////////////////

import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { ImLocation } from 'react-icons/im'

function CitizenPropFormStatusTimeline(props) {
    return (
        <>
            {/* <div className={`relative flex-1 `}>
                <div className={" mb-2 flex items-center w-full"}>
                    <div style={{ 'boxShadow': '2px 4px 2px gray' }} className={(props.verificationStatus ? `${props.active ? 'bg-green-400 border-green-500' : 'bg-green-400 border-green-500'} border-2 shadow-lg` : "bg-gray-200") + " z-1 flex flex-initial items-center order-1 w-4 h-4 sm:w-6 sm:h-6 rounded-full"}>
                        <h1 className="mx-auto font-semibold text-sm text-white">{props.verificationStatus ? <GiCheckMark size={20} /> : 'X'} </h1>
                    </div>
                    {!props.last ? <div className={(props.verificationStatus ? "bg-green-300" : "bg-gray-200") + " order-2 flex-initial w-full"} style={{ 'height': '2px' }}></div> : ''}

                </div>
                <div className={`flex-initial text-xs text-left font-semibold pl-2 ${props.active && 'text-blue-700 font-bold'}`}>{props.index}</div>
                <div className={`flex-initial text-xs  opacity-50 pl-0 sm:pl-2 ${props.active && ' text-blue-700 underline font-bold'}`}>{props.level}</div>
            </div> */}
            <div className={`relative flex flex-col`}>
                <div className={" mb-2  items-center w-full"}>
                    <div style={{ 'boxShadow': '2px 4px 2px gray' }} className={(props.verificationStatus ? `${props.active ? 'bg-green-400 border-green-500' : 'bg-green-400 border-green-500'} border-2 shadow-lg` : "bg-gray-200") + " z-1  items-center order-1 w-6 h-6 sm:w-6 sm:h-6 rounded-full"}>
                        <h1 className="mx-auto font-semibold text-sm text-white">{props.verificationStatus ? <GiCheckMark size={20} /> : 'X'} </h1>
                        <div className='-mt-4  ml-8 bg-yellow-200 px-16 rounded-lg shadow-lg'>
                        <div className={` text-xs -ml-12 font-semibold ${props.active && 'text-blue-700 font-bold'}`}>{props.index}</div>
                        <div className={`text-xs -ml-12 opacity-50 pl-0  sm:pl-2 ${props.active && ' text-blue-700 underline font-bold'}`}>{props.level}</div>
                        </div>
                      
                    </div>

                    {!props.last ? <div className={(props.verificationStatus ? "bg-green-300" : "bg-gray-800") + " h-16 ml-3 order-2   w-0.5 "}></div> : ''}

                </div>

            </div>

        </>
    )
}

export default CitizenPropFormStatusTimeline
/**
 * Exported to :
 * 1. DetailsTabs Component
 * 
 */