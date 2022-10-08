//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 23 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterAfterFormSubmit.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { useNavigate } from 'react-router-dom'

function WaterAfterFormSubmit(props) {
    const navigate = useNavigate()
   
    const handlePaymetBtn = () => {
        navigate('/water/payment')
    }
    const handleUploadDoctBtn = () => {
        navigate('/water/uploadDocs')
    }

    return (
        <>
            <div className='m-2 md:my-28'>
                <div className='bg-sky-50 border border-gray-400 md:w-1/2 p-5 text-center shadow-xl rounded-md m-auto'>
                    <p className='text-2xl'> Form has been submitted Successfully</p>
                    <p> Your Application No - {props?.applicationNo} </p>

                    <div className='mt-5'>
                        <button onClick={handlePaymetBtn} className='bg-green-400 hover:bg-green-700 hover:text-white px-3 py-1 mx-2 my-1'> Make Payment </button>
                        <button onClick={handleUploadDoctBtn} className='bg-indigo-300 hover:bg-indigo-600 hover:text-white px-3 py-1 mx-2 my-1 hover:border-b-2 border-red-600'> Upload Documets </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WaterAfterFormSubmit

/*
Exported to -
1. WaterIndex.js
*/