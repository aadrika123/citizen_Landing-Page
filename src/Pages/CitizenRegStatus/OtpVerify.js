import React, { useEffect, useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai';
import { BsArrowClockwise } from 'react-icons/bs';

function OtpVerify(props) {
    const [otp, setOtp] = useState([])
    const [msg, setMsg] = useState()

    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [n3, setN3] = useState()
    const [n4, setN4] = useState()

    console.log("NS--",n1, n2,n3,n4)

  
    // setOtp([...otp, n1, n2,n3,n4])
    // console.log("OTP", otp.join(''), otp.length)

    const test =(a)=>{
        setMsg("OTP Verifying..",a)
        // console.log("this...",n1,n2)
         setInterval(() => {
             props.afterOPTSuccess()
         }, 3000);
    }

    useEffect(() => {
        test("googd")
        console.log("helere")
      
    }, [n4])
    

    // if(n4){
    //     test("googd")
    //     console.log("helere")
    // }

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
                                    <form>
                                        {/* <input onChange={(e) => OTPValue(e.target.value)} onInput={submitOTP} onBlur={submitOTP} className="m-2 border h-10 w-10 text-center form-control rounded" type="tel" id="first" maxLength="1" /> */}
                                        <input onChange={(e) => setN1(e.target.value)} className="m-2 border h-10 w-10 text-center form-control rounded" type="tel" maxLength="1" autoComplete='off'/>
                                        <input onChange={(e) => setN2(e.target.value)} className="m-2 border h-10 w-10 text-center form-control rounded" type="tel" maxLength="1" autoComplete='off'/>
                                        <input onChange={(e) => setN3(e.target.value)} className="m-2 border h-10 w-10 text-center form-control rounded" type="tel" maxLength="1" autoComplete='off'/>
                                        <input onChange={(e) => setN4(e.target.value)} className="m-2 border h-10 w-10 text-center form-control rounded" type="tel" maxLength="1" autoComplete='off'/>
                                        {/* <input onChange={(e) => OTPValue(e.target.value)} className="m-2 border h-10 w-10 text-center form-control rounded" type="tel" id="fifth" maxLength="1" /> */}
                                        {/* <input onChange={(e) => OTPValue(e.target.value)} className="m-2 border h-10 w-10 text-center form-control rounded" type="tel" id="sixth" maxLength="1" /> */}
                                    </form>
                                </div>
                                <div>{msg}</div>
                                <div className="flex justify-center text-center mt-2">
                                    <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                                        <span className="font-bold">Resend OTP</span>
                                        <p >
                                            <BsArrowClockwise className='ml-1 mt-0.5' />
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpVerify

/*
Exported To -
1. RegistrationStatus.js
*/