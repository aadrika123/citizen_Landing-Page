import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function DocumetStatus() {
    const [ApplicationData, setApplicationData] = useState()

    const navigate = useNavigate()

    const bearer = window.localStorage.getItem('token')
    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }

    const handleBackBtn = () => {
        navigate("/water")
    }

    const fetchApplication = () => {
        console.log("Yahh")

        axios.post(`http://192.168.0.166/api/water/user-water-connection-charges`, {}, header)
            .then(function (response) {
                console.log("Payment Date", response.data)
                setApplicationData(response.data)

            })
            .catch(function (error) {
                console.log("Error in fetching pending payment list", error);
            })
    }

    useEffect(() => {
        fetchApplication() //fetching data of specific application
    }, [])


    const handleUploadBtn=(appID)=>{
        console.log("Water Application Id", appID)
        // props.application
    }


    return (
        <>
            <div className='m-5'>
                <table className='w-full shadow-md'>
                    <thead className='bg-sky-300'>
                        <tr className='tracking-wide'>
                            <td className='px-5 py-1'>#</td>
                            <td className='px-5'>Applicaion No</td>
                            <td className='px-5'>Document</td>
                            <td className='px-5'>Payment</td>
                            <td className='px-5'>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ApplicationData?.map((e, i) => (
                                <tr className=''>
                                    <td className='px-5 py-2 font-semibold'>{i + 1}</td>
                                    {/* <td className='px-5'>{e.application_id}</td> */}
                                    <td className='px-5'>{e.application_no}</td>
                                    <td className='px-5'>Not Uploaded</td>
                                    <td className='px-5 py-2'>
                                        {e.paid_status && <p className='bg-green-300 px-5 rounded-md w-fit'>Paid</p>}
                                        {!e.paid_status && <p className='bg-red-300 px-5 rounded-md w-fit'>UnPaid</p>}
                                    </td>
                                    <td className=''>
                                        <button onClick={() => handleUploadBtn(e.application_id)} className='px-2 bg-green-500 text-white rounded-sm shadow-lg'>Upload</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className='flex justify-center my-10'>
                    <button onClick={handleBackBtn} className='mx-2 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-lg  rounded-sm shadow-xl'>Back</button>
                    {/* <button onClick={() => { props.back() }} className='mx-2 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-lg  rounded-sm shadow-xl'>Back</button> */}
                    {/* <button onClick={fetchApplication} className='mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-3 py-1 text-lg  rounded-sm shadow-xl'>Pay Now</button> */}
                </div>
            </div>
        </>
    )
}

export default DocumetStatus

/*
Exported to -
1. DocUploadFormIndex.js
*/