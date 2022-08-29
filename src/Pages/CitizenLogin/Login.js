//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 08 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - register.js
//    DESCRIPTION - Citizen Registration
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect } from 'react'
import LandingNav from '../Landing/LandingNav'
import RegistrationSidebar from '../Registration/RegistrationSidebar'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  useEffect(() => {

    let login = localStorage.getItem('token');
    if (login) {
      return navigate('/citizenDashboard')
    }
  });

  return (
    <>
      <div className='bg-gray-100 h-screen'>
        <div className='md:grid md:grid-cols-1'>
          <div className='col-span-1 justify-self-center'>
            <h1 className='text-3xl text-center font-semibold text-gray-800 md:my-8'>Citizen Login</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login