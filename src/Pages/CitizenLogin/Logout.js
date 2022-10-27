//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 08 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Logout.js
//    DESCRIPTION - Citizen Logout
//////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handleLogoutBtn = () => {

        localStorage.removeItem('token');
        // navigate("/login")


        // useEffect(() => {
        //     const timer = setTimeout(() => {
        //         navigate("/login")
        //     }, 2000);
        //     return () => clearTimeout(timer);
        // }, []);
    }
    if (window.confirm("Are you sure you want to Log Out ?")) {
        localStorage.removeItem('token');
        // return navigate("/login")

    }


    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-8 md:grid-cols-8 container mx-auto'>
                <div className='col-span-6 '>
                    <img src='https://img.freepik.com/free-vector/young-female-character-holding-door-knob-entering-building_74855-20435.jpg?w=740&t=st=1666679476~exp=1666680076~hmac=a712a43f8dd2b06184ae104a783a50fd8de26b434116db21c37efade5f894ad2' className='h-72 mt-16 mx-auto' />
                </div>
                <div className='col-span-2  '>
                   <Link to='/'>
                   <button className='bg-green-300 shadow-lg p-2'>BACK TO HOME</button>
                   </Link>
                </div>
            </div>


        </>
    )
}

export default Logout