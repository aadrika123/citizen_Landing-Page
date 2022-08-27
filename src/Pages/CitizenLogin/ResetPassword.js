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

  const handleResetBtn = () =>{
    console.log("Reset Email is -", resetEmail)
  }
  const payData = {
    name : "Dipu Kumar",
    phone : 9658745874,
    email : "dsingh197@gmail.com",
    amount : 101,
    module : "property"
  }

  return (
    <>
      {/* <LandingNav /> */}
      <div>
        <div className='md:grid md:grid-cols-1 m-2'>
          {/* <div className='col-span-2 h-screen bg-white border-r-2'>
            <RegistrationSidebar />
          </div> */}
          <div className='col-span-1 justify-self-center md:mt-20 mt-10 shadow-xl'>
            <div className=' border py-3 bg-sky-500 text-white text-center shadow-2xl'>
              <h1 className='text-2xl font-semibold '>Reset Password</h1>
            </div>
            <div className='grid bg-white px-10'>
              <div className='mt-3'>
                <div className='text-gray-600 static mb-1 font-semibold'>Email Address <span className='text-red-500 font-bold'>*</span></div>
                <input
                  type="text"
                  name="email"
                  placeholder='Email Address'
                  className='border border-gray-400 outline-blue-500 text-base rounded-sm pl-2 h-10 w-72 shadow-sm'
                  onChange={(e)=>setResetEmail(e.target.value)}
                />
              </div>
              <div className='relative justify-center'>
                {/* <div className='text-red-600 text-sm font-semibold absolute '> <span className=''> Show Message</span></div> */}
              </div>
              <div className='text-center mt-3'>
                <p><Link to="/login" className='text-blue-600 font-semibold'>Login Page </Link></p>
              </div>
              <div className='my-3 self-center justify-self-center'>
                <button
                  type="submit"
                  onClick={handleResetBtn}                  
                  className='bg-green-600 hover:bg-green-700 px-5 py-2 shadow-xl rounded-md text-white text-lg font-semibold'>
                  Reset Password
                </button>

<RzpTestPayment data={payData} />
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