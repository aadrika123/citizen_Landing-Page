//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenMainPage
//    DESCRIPTION - CitizenMainPage Component is a parent component of citizen dashboard , passing citizen email and name to sidenav and citizenEntryPage
//////////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react'
import ApplySubList from '../Pages/citizen/ApplySubList'
import CitizenContentArea from '../Pages/citizen/CitizenContentArea'
import CitizenEntryPage from '../Pages/citizen/CitizenEntryPage'
import DashboardNavbar from '../Pages/citizen/DashboardNavbar'
import SideNav from '../Pages/citizen/SideNav'
import LandingNav from '../Pages/Landing/LandingNav'
import axios from 'axios'
import SidenavContent from './testDelete/SidenavContent'
import TestComponent from './testDelete/TestComponent'
import CitizenDashboard from './CitizenDashboard/CitizenDashboard'
import CitizenNavbar from './CitizenDashboard/CitizenNavbar'
import Footer from './Footer'
import CitizenDashboard2 from './CitizenDashboardNewlyModified/CitizenDashboard2'



function CitizenMainPage() {


  const bearerTokenInit = localStorage.getItem('token');

  // state to store loged citizen data 
  const [fetchCitizenData, setfetchCitizenData] = useState()

  //function which fetch citizen profile data
  const getData = () => {

    axios({
      method: "GET",
      url: "http://192.168.0.166/api/my-profile-details",
      headers: {
        Authorization: `Bearer ${bearerTokenInit}`,
        Accept: 'application/json',
      }
    })
      .then(function (response) {
        console.log("getdata DIRECT......", response.data);
        setfetchCitizenData(response.data.data)

      });
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <>

      <div>
        <div className='w-full'> <CitizenNavbar /></div>

        <div className='w-full bg-gray-50'>
          {/* <CitizenDashboard2/> */}
          <CitizenDashboard/>
          <Footer />
        </div>
      </div>


    </>
  )
}

export default CitizenMainPage