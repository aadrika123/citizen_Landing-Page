//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 08 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - register.js
//    DESCRIPTION - Citizen Registration
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react'
import LandingNav from '../Landing/LandingNav'
import RegistrationSidebar from '../Registration/RegistrationSidebar'
import LoginForm from './LoginForm'
import { Link, useNavigate } from 'react-router-dom';
import RzpTestPayment from '../Payment/RzpTestPayment';
import TestFileUpload from './TestFileUpload';

function ResetPassword() {

  const [resetEmail, setResetEmail] = useState()

  const navigate = useNavigate();

  // useEffect(() => {

  //   let login = localStorage.getItem('token');
  //   if (login) {
  //     return navigate('/citizenDashboard')
  //   }
  // });

  const handleResetBtn = () => {
    console.log("Reset Email is -", resetEmail)
  }
  const payData = {
    name: "Dipu Kumar",
    phone: 9658745874,
    email: "dsingh197@gmail.com",
    amount: 101,
    module: "property"
  }

  return (
    <>
      <div className='bg-gray-100'>
        <div className='md:grid md:grid-cols-1 h-screen'>

          <div className='justify-self-center'>
            <div className='text-center font-semibold text-3xl text-gray-700 mt-10'>Reset Password</div>
            <div className='grid bg-white px-10 mt-8 border shadow-2xl'>
              <div className='flex justify-center mt-5'>
                <img className='h-12' src="http://localhost:3001/static/media/logo1.5c4637e45ad69b06fad3.png" alt="" />
              </div>
              <h1 className='text-center text-xl font-semibold my-1 capitalize'>
                Ranchi Municipal Corporation
              </h1>
              <div className='my-3'>
                <div className='text-gray-600 static mb-1 font-semibold'>Email Address <span className='text-red-500 font-bold'>*</span></div>
                <input
                  type="text"
                  name="email"
                  // placeholder='Email Address'
                  className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-sm'
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>
              <div className='relative justify-center'>
                {/* <div className='text-red-600 text-sm font-semibold absolute '> <span className=''> Show Message</span></div> */}
              </div>
              <div className='text-center my-5'>
                <p><Link to="/login" className='text-blue-600 font-semibold'>Login Page </Link></p>
              </div>
              <div className='mb-8 self-center justify-self-center'>
                <button
                  type="submit"
                  onClick={handleResetBtn}
                  className='bg-green-600 hover:bg-green-700 px-5 py-2 shadow-xl rounded-md text-white text-lg font-semibold'>
                  Reset Password
                </button>

                {/* <RzpTestPayment data={payData} /> */}
                {/* <TestFileUpload /> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default ResetPassword