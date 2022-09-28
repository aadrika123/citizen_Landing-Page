import React from 'react'
import { HiCurrencyRupee } from 'react-icons/hi';

function PaymentFormIndex(props) {
    return (
        <>
            <div>
                <div className='bg-red-200 h-72 w-2/3 m-auto shadow-lg rounded-sm mt-10'>
                    <div className='bg-indigo-200 border-b-2 py-1 pl-3 font-semibold border-red-400 shadow-md flex'><HiCurrencyRupee size={20}  className='mt-1 mr-1'/> Payment</div>
                    <div className='grid grid-cols-12 py-5 px-10 leading-8'>
                        <div className='col-span-6'>
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
                        <div className='col-span-6'>
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
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={()=>{props.back()}} className='mx-2 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-3 py-1 text-lg  rounded-sm shadow-xl'>Back</button>
                        <button className='mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-3 py-1 text-lg  rounded-sm shadow-xl'>Pay Now</button>
                    </div>
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