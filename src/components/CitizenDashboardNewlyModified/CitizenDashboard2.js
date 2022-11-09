import React from 'react'
import CitizenNavbar from './CitizenNavbar'
import Dashboard from './Dashboard'
import CitizenSidebar from './CitizenSidebar'

function CitizenDashboard() {
  return (
    <>
      <CitizenNavbar />

      <div className='grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto'>
        <div className='col-span-2 z-20 -mt-32 '>
          <CitizenSidebar />
        </div>
        {/* <div className='col-span-10 z-20 -mt-32'>
          <Dashboard />
        </div> */}
      </div>
      <div className={`sm:w-full transition-all pl-4 pr-4 md:pl-8  mt-2 h-screen overflow-y-scroll`}>
        <Dashboard />
      </div>

    </>
  )
}

export default CitizenDashboard