import React, { useEffect, useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai';
import { BsArrowClockwise } from 'react-icons/bs';
import OTPInput, { ResendOTP } from "otp-input-react";

function NewotpVerify(props) {
    const [otp, setOtp] = useState()
    const [OTP, setOTP] = useState("");


    const submitOTP = () => {
        // console.log("OTP is ", otp)
        // console.log("FF OTP is ",finalOtp)
    }

    const chnageNumber = () => {
        props.chnageNumber()
    }



    return (
        <>
            {/* <div class="rounded animate-spin ease duration-300 w-5 h-5 border-2 border-black"></div> */}

            <div className="h-screen bg-blue-500 py-20 px-3">
                <div className="container mx-auto">
                    <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                            <div className="bg-white h-64 py-3 rounded text-center">
                                <h1 className="text-2xl font-bold">OTP Verification</h1>
                                <div className="flex flex-col mt-2">
                                    <span>Enter the OTP you received at</span>
                                    <span className="font-bold flex justify-center text-xl">+91 {props.mobile}
                                        <AiTwotoneEdit onClick={chnageNumber} size={22} className='ml-2 mt-1 cursor-pointer text-red-400 hover:text-red-600 hover:rounded-full hover:bg-sky-100' />
                                    </span>
                                </div>

                                <div className="flex flex-row justify-center font-semibold text-center px-2 mt-3">
                                    <OTPInput className=" border-2 outline-2 h-10 w-10 text-center rounded" value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} />
                                    <ResendOTP className="my-10" onResendClick={() => console.log("Resend clicked")} />
                                </div>

                                {/* <div className="flex justify-center text-center mt-5">
                                    <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                                        <span className="font-bold">Resend OTP</span>
                                        <p >
                                            <BsArrowClockwise className='ml-1 mt-0.5' />
                                        </p>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewotpVerify

/*
Exported To -
1. RegistrationStatus.js
*/