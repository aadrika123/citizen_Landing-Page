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
          <WaterBreadcrumb />  {/* WaterBreadcrumb used for navigate the page*/}
          <div>
            <StatusStatus />
          </div>
        </div>
      </div>
    </>
  )
}

export default WaterApplicationStatus