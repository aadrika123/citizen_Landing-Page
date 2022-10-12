import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi';
import { MdCloudUpload } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import LandingNav from '../../Landing/LandingNav';
import WaterApplySidebar from '../WaterApplySidebar';
import DocumetStatus from './DocumetStatus';
import WaterDocUploadModel from './WaterDocUploadModel';

function DocUploadFormIndex(props) {

    const navigate = useNavigate()

    const handleBackBtn = () => {
        navigate("/water")
    }

    const saveFileSelected = (e) => {
        console.log("Updated", e.target.files[0]);
        // setFileSelected(e.target.files[0]);
    };

    const docList =
        [
            { 'docid': 1, 'docName': 'Permanent Address Proof', 'docUrl': '/dd', 'docStatus': 'Not Uploaded' },
            { 'docid': 2, 'docName': 'Local Address Proof', 'docUrl': '/dd', 'docStatus': 'Uploaded' },
            // { 'docid': 3, 'docName': 'Specially Abled Proof', 'docUrl': '/dd', 'docStatus': 'Uploaded' },
            // { 'docid': 4, 'docName': 'Armed Force Document', 'docUrl': '/dd', 'docStatus': 'Not Uploaded' },
        ]

    // isSpeciallyAbled == 1 ? docList[2] = { 'docid': 3, 'docName': 'Specially Abled Proof NEW', 'docUrl': '/dd', 'docStatus': 'Uploaded' } : delete docList[2]
    // isArmed == 1 ? docList[3] = { 'docid': 4, 'docName': 'Armed Force Document', 'docUrl': '/dd', 'docStatus': 'Not Uploaded' } : delete docList[3]


    return (
        <>
            <LandingNav />  {/* show main nagivation menu*/}
            <div className='grid md:grid-cols-10 grid-cols-12 select-none'>
                <div className='col-span-2 bg-white md:block hidden'>
                    <WaterApplySidebar />  {/* Show water Sidebar on desktop*/}
                </div>
                <div className='md:col-span-8 col-span-12 relative'>
                    <div className='border shadow-xl bg-gray-100'>
                        <div className='text-center my-5 font-semibold text-2xl'>Upload Your Document</div>
                    </div>
                    <WaterDocUploadModel />
                    <DocumetStatus />


                    {/* Document Upload for Mobile*/}
                    <div className='md:hidden'>
                        <p className='mx-2 my-3 font-semibold flex'>< MdCloudUpload size={25} className='mx-2' />Water Connection Document Upload</p>
                        <div className='text-center bg-sky-200 py-1 font-semibold'>
                            <span className='mr-3'>#</span>
                            <span className='mx-2'>Document Name</span>
                            <span className='mx-2'>Document Type</span>
                            <span className='mx-2'>Action</span>
                        </div>
                        <div className='mx-2'>
                            {docList.map((e, i = 1) => (
                                <div className='my-3 border-b-2 py-2'>
                                    <div className='flex align-middle'>
                                        <div className='mx-2'>{i + 1}</div>
                                        <div className='mx-2 text-center'>{e.docName}</div>
                                        <div className='mx-5'>
                                            <select className='py-1 border border-black rounded-sm text-sm' name="" id="">
                                                <option >Select</option>
                                                <option value="Aadhar">Aadhar Card</option>
                                                <option value="pan">PAN Card</option>
                                                <option value="passport">Passport</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button className='bg-green-400 px-3 py-1 rounded-sm shadow-md'>Upload</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={() => { props.back() }} className='bg-red-500 mx-2 text-white px-2 py-1 text-xl w-32 rounded-md shadow-lg'>Back</button>
                            <button className='bg-indigo-500 mx-2 text-white px-5 py-1 text-xl w-32 rounded-md shadow-lg'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocUploadFormIndex

/*
Exported to -
1. WaterIndex.js
*/