import React, { useState } from 'react'

function AfterOTPSuccess(props) {

    return (
        <>
            <div className="h-screen bg-blue-500 py-20 px-3">
                <div className="container mx-auto">
                    <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                            <div className="bg-white h-64 py-3 rounded text-center">
                                <h1 className="text-2xl font-bold">Welcome {'{Name}'}</h1>
                                <div className="flex flex-col mt-2">
                                    <span>Your Profile {props.mobile}</span>
                                </div>
                                <div className='text-red-400 font-extrabold text-2xl my-5'>
                                    Application Rejected
                                </div>
                                <div>
                                    Reason :- Lorem ipsum dolor sit.
                                </div>
                                {/* <div id="otp" className="flex flex-row text-2xl justify-center font-semibold text-center px-2 mt-5">
                                    <input className="m-2 border h-10 w-12 text-center form-control rounded" type="tel" id="first" value="91" disabled />
                                    <input onChange={(e) => setMobileNo(e.target.value)} className="m-2 border h-10 w-60 text-center form-control rounded" type="tel" id="first" maxlength="10" />
                                </div>
                                <div className="flex justify-center text-center mt-5">
                                    <button onClick={btnSubmit} className='bg-green-500 hover:bg-green-600 px-5 py-2 w-60 rounded-sm text-white font-semibold text-xl' >Send OTP</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AfterOTPSuccess

/*
Exported To -
1. RegistrationStatus.js
*/