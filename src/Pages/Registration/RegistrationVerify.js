//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 06 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - RegistrationVerify.js
//    DESCRIPTION -RegistrationVerify
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import { BsPaperclip } from 'react-icons/bs';

function RegistrationVerify(props) {

    // console.log("Data In Vefify PAge----", props.docList)

    const handleBacktBtn = () => {
        props.backBtn(1)
    }

    const handleNxtBtn = () => {
        props.nxtBtn(1)
    }

    const saveFileSelected = (e) => {
        console.log("Updated", e.target.files[0]);
        // setFileSelected(e.target.files[0]);
    };



    return (
        <>
            <div className='bg-white shadow-xl'>
                <div className='grid grid-cols-12 px-10 py-5'>
                    <div className='col-span-6'>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>Full Name</div>
                            <div className='col-span-6'>{props.formData && props.formData.full_name}</div>
                        </div>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>Guardian Name</div>
                            <div className='col-span-6'>{props.formData && props.formData.guardian_name}</div>
                        </div>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>Date of Birth</div>
                            <div className='col-span-6'>{props.formData && props.formData.dob}</div>
                        </div>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>Aadhar No.</div>
                            <div className='col-span-6'>{props.formData && props.formData.aadhar}</div>
                        </div>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>PAN No.</div>
                            <div className='col-span-6'>{props.formData && props.formData.pan}</div>
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>Email Address</div>
                            <div className='col-span-6'>{props.formData && props.formData.email}</div>
                        </div>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>Mobile No.</div>
                            <div className='col-span-6'>{props.formData && props.formData.mobile_no}</div>
                        </div>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>Gender</div>
                            <div className='col-span-6'>{props.formData && props.formData.gender}</div>
                        </div>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>Is Armed forces ?</div>
                            <div className='col-span-6'>{props.formData && props.formData.isArmed}</div>
                        </div>
                        <div className='grid grid-cols-12 my-2'>
                            <div className='col-span-6 text-gray-500'>Is Specially Abled ?</div>
                            <div className='col-span-6'>{props.formData && props.formData.isSpecially}</div>
                        </div>
                        {/* <div className='grid grid-cols-12'>Address :- Ranchi Jakhaed India</div> */}
                    </div>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500 ml-5">Uploaded Documents</div>
                    <dd className="w-96 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                            {
                                props.docList && props.docList.map((e) => (
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            <BsPaperclip className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span className="ml-2 flex-1 w-0 truncate">{e.docName}</span>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                View
                                            </a>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </dd>
                </div>
                    <div className='text-center mb-3'>
                        {props.regMsg && props.regMsg}
                    </div>
                    <div className='grid grid-cols-2 md:px-10 pb-10'>
                        <div className='col-span-1'><button onClick={handleBacktBtn} className='bg-blue-600 hover:bg-blue-700 px-5 py-2 shadow-xl rounded-md text-white text-base float-left'>Back</button></div>
                        <div className='col-span-1'><button onClick={handleNxtBtn} className='bg-green-600 hover:bg-green-700 px-5 py-2 shadow-xl rounded-md text-white text-base float-right'>Submit</button></div>
                    </div>
            </div>
        </>
    )
}

export default RegistrationVerify

/*
Exported to -
1. Register.js
*/