//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 24 june 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WorkFlowCandidate
//    DESCRIPTION - WorkFlowCandidate Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
// import user from './user.jpg'


function WorkFlowCandidate(props) {
    return (
        <>
            <div className={(props.activeCandidateStatus && "mb-2") + " flex  py-2 relative mt-3"}>
                {props.activeCandidateStatus && <div className="absolute -bottom-1 font-semibold left-1 bg-green-500 text-gray-100 rounded-lg px-1 py-0 shadow-xl" style={{ 'fontSize': '10px' }}>Active</div>}
                <div className="absolute -top-2 right-4 bg-yellow-500 text-white rounded-full px-1  py-0 shadow-xl" style={{ 'fontSize': '10px' }}>12</div>
                <div className="flex-initial pl-1"><img className='w-8 rounded-full'  alt="" /></div>
                <div className="flex-initial pl-2 text-sm"><div className='text-black'>{props.name}</div>
                    <div className='text-xs text-gray-400'>{props.designation}</div></div>
            </div>
        </>
    )
}

export default WorkFlowCandidate
/**
 * Exported to :
 * 1. MailboxComponent/Sidebar Component
 * 
 */