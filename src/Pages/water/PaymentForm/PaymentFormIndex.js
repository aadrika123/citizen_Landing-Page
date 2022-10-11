import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HiCurrencyRupee } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import LandingNav from '../../Landing/LandingNav';
import WaterApplySidebar from '../WaterApplySidebar';
import WaterPaymentModel from './WaterPaymentModel';

function PaymentFormIndex(props) {
    const [ApplicationData, setApplicationData] = useState()
    const [openModel, setOpenModel] = useState(0)
    const [appIdModel, setAppIdModel] = useState(0)

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

    const handlePayBtn = (appId) => {
        setAppIdModel(appId)
        setOpenModel(openModel + 1)
    }


    const fetchApplication = () => {

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


    return (
        <>
            <LandingNav />  {/* show main nagivation menu*/}

            <div className='grid md:grid-cols-10 grid-cols-12 select-none'>
                <div className='col-span-2 bg-white md:block hidden'>
                    <WaterApplySidebar />  {/* Show water Sidebar on desktop*/}
                </div>
                <div className='md:col-span-8 col-span-12 relative'>
                    <div className='border shadow-xl'>
                        <div className='text-center my-5 font-semibold text-2xl'>Pending Payments List</div>
                    </div>
                    <WaterPaymentModel openModel={openModel} appIdModel={appIdModel} fetchApplication={fetchApplication} />
                    <div className='m-5 shadow-md'>
                        <table className='w-full '>
                            <thead className='bg-sky-300'>
                                <tr className='tracking-wide'>
                                    <td className='px-5'>#</td>
                                    <td className='px-5'>Applicaion No</td>
                                    <td className='px-5'>Amount</td>
                                    <td className='px-5'>Paid Status</td>
                                    <td className='px-5'>Penalty</td>
                                    <td className='px-5'>Connection Fee</td>
                                    <td className='px-5'>Action</td>
                                </tr>
                            </thead>
                            <tbody className=''>

                                {
                                    ApplicationData?.map((e, i) => (
                                        <tr>
                                            <td className='px-5 py-2 font-semibold'>{i + 1}</td>
                                            {/* <td className='px-5 py-2'>{e.application_id}</td> */}
                                            <td className='px-5 py-2'>{e.application_no}</td>
                                            <td className='px-5 py-2'>{e.amount}</td>
                                            <td className='px-5 py-2'>
                                                {e.paid_status && <p className='bg-green-300 px-5 rounded-md w-fit'>Paid</p>}
                                                {!e.paid_status && <p className='bg-red-300 px-5 rounded-md w-fit'>UnPaid</p>}
                                            </td>
                                            <td className='px-5 py-2'>{e.penalty}</td>
                                            <td className='px-5 py-2'>{e.conn_fee}</td>
                                            <td className='flex justify-center py-2'>
                                                {e.paid_status && <button className='px-2 bg-indigo-500 text-white rounded-sm shadow-lg'>Receipt</button>}
                                                {!e.paid_status && <button onClick={() => handlePayBtn(e.application_id)} className='px-2 bg-green-500 text-white rounded-sm shadow-lg'>Pay Now</button>}
                                                {/* {!e.paid_status && <button onClick={openModelOnClick} className='px-2 bg-green-800 text-white rounded-sm shadow-lg'>Pay OPEN</button>} */}
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className='flex justify-center my-10'>
                        <button onClick={handleBackBtn} className='mx-2 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-lg  rounded-sm shadow-xl'>Back</button>
                        {/* <button onClick={() => { props.back() }} className='mx-2 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-lg  rounded-sm shadow-xl'>Back</button> */}
                        {/* <button onClick={fetchApplication} className='mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-3 py-1 text-lg  rounded-sm shadow-xl'>Pay Now</button> */}
                    </div>



                    {/* <div className='bg-red-200 m-3 md:h-72 h-96 md:w-2/3 md:m-auto shadow-lg rounded-sm md:mt-10'>
                        <div className='bg-indigo-200 border-b-2 py-1 pl-3 font-semibold border-red-400 shadow-md flex'><HiCurrencyRupee size={20} className='mt-1 mr-1' /> Payment</div>
                        <div className='grid grid-cols-12 px-8 py-3 leading-8'>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-6 font-semibold'>
                                        <p>Name</p>
                                        <p>Ward No</p>
                                        <p>Owner Type</p>
                                        <p>Property Type</p>
                                        <p>Category Type</p>
                                    </div>
                                    <div className='col-span-6'>
                                        <p>Dipu Kumar Singh</p>
                                        <p>43 A</p>
                                        <p>Tenet</p>
                                        <p>Commercial</p>
                                        <p>II / III</p>
                                    </div>
                                </div>
                            </div>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-6 font-semibold'>
                                        <p>Name</p>
                                        <p>Ward No</p>
                                    </div>
                                    <div className='col-span-6'>
                                        <p>Dipu Kumar Singh</p>
                                        <p>43 A</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 md:mt-4 mt-10'>
                                <div className='flex justify-center'>
                                    <button onClick={handleBackBtn} className='mx-2 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-lg  rounded-sm shadow-xl'>Back</button>
                                    <button onClick={fetchApplication} className='mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-3 py-1 text-lg  rounded-sm shadow-xl'>Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default PaymentFormIndex

/*
Exported to -
1. WaterIndex.js
*/