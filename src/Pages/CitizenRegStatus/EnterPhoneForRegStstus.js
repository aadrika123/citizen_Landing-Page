import React, { useState } from 'react'


function EnterPhoneForRegStstus(props) {
    // const [mobileNo, setMobileNo] = useState()
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
        // setMobileNo(result);
    };

    const btnSubmit = () => {
        props.userMobileNo(value);
        props.next()
    }
    return (
        <>
            <div className="h-screen bg-blue-500 py-20 px-3">
                <div className="container mx-auto">
                    <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                            <div className="bg-white h-64 py-3 rounded text-center">
                                <h1 className="text-2xl font-bold">Enter Mobile No.</h1>
                                <div className="flex flex-col mt-2">
                                    <span>Should be same which used during Registration</span>
                                </div>
                                <div className="flex flex-row text-2xl justify-center font-semibold text-center px-2 mt-5">
                                    <input className="m-2 border h-10 w-12 text-center form-control rounded" type="tel" id="first" value="91" disabled />
                                    <input
                                        value={value}
                                        onChange={handleChange}
                                        className="m-2 border h-10 w-60 text-center form-control rounded"
                                        type="text"
                                        maxLength="10" />
                                </div>
                                <div className="flex justify-center text-center mt-5">
                                    <button onClick={btnSubmit} className='bg-green-500 hover:bg-green-600 px-5 py-2 w-60 rounded-sm text-white font-semibold text-xl' >Send OTP</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnterPhoneForRegStstus

/*
Exported To -
1. RegistrationStatus.js
*/