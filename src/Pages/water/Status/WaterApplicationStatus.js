//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Oct 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterApplicationStatus.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import LandingNav from '../../Landing/LandingNav'
import WaterBreadcrumb from '../Components/WaterBreadcrumb'
import WaterApplySidebar from '../WaterApplySidebar'
import StatusStatus from './StatusStatus'

function WaterApplicationStatus() {
  return (
    <>
      <LandingNav />  {/* show main nagivation menu*/}
      <div className='grid md:grid-cols-10 grid-cols-12 select-none'>
        <div className='col-span-2 bg-white md:block hidden'>
          <WaterApplySidebar />  {/* Show water Sidebar on desktop*/}
        </div>

        <div className='md:col-span-8 col-span-12 relative'>
          <div className='border shadow-xl'>
            <div className='text-center my-5 font-semibold text-2xl'>Applications Status</div>
          </div>
          {/* <WaterBreadcrumb />   WaterBreadcrumb used for navigate the page*/}
          <div>
            <StatusStatus />
          </div>
        </div>
      </div>
    </>
  )
}

export default WaterApplicationStatus


/*
Exported to -
1. WaterDashMainBlocks.js
*/