import React from 'react';
import TRACKING from '../TradeAssests/tracking.png'

function TrackLicenseComponent() {
  return (
    <div className='w-full  h-screen mt-4'>

      <div className='w-full h-16 bg-teal-200 mx-auto font-mono rounded-lg flex m-4'>
        <img src={TRACKING} className='h-12 w-12 my-1 ml-8' />
        <h1 className='font-bold text-lg py-3 px-2'> TRACK LICENSE NO</h1>
        <p className='font-bold text-sm py-4 px-2'>( SEARCH WITH APPLICATION, LICENSE, MOBILE OR FIRM NAME )</p>
      </div>

      {/* <div className='w-full h-16 bg-slate-200 mx-auto font-mono rounded-sm flex justify-center '>
        <div className='' >
          <img src={TRACKING} className='h-8 w-8 my-1 ml-8' />
        </div>
        <div className='mx-2' >
          <p>FIRM NAME</p>
          <input type="radio" name='entity_name' value="FIRM" />
        </div>
        <div className='mx-2' >
          <p>REST</p>
          <input type="radio" name='entity_name' value="FIRM" />
        </div>
        
      </div> */}

      <div className='w-full h-16 bg-slate-100 mx-auto font-semibold rounded-sm flex text-xs'>
        {/* <img src={TRACKING} className='h-12 w-12 my-1 ml-8' /> */}

        {/* <p> SEARCH BY </p> */}
        <select className='form-control border h-8 my-3 mx-4 px-4 rounded-md'>
          <option value="">APPLICATION, MOBILE OR LICENSE NO.</option>
          <option value="">FIRM NAME.</option>
        </select>

        <input type="text" name='entity_name' className='form-control border h-8 my-3 mx-4 px-4 w-[16rem] rounded-md' placeholder='Enter Application, Mobile, License or Firm name.' />
        <button className='font-semibold text-sm px-4 bg-white h-8  my-3 mx-4 rounded-md'> SEARCH </button>
      </div>

      {/* <div className='w-full '>
        <h1 className='font-bold text-lg text-teal-400 py-2'>
          <img src={TRACKING} className='h-8 w-8' />
          TRACK LICENSE NO.
        </h1>
        <div className='flex'>
          <input type="text" name='entity_name' className='w-2/3 border border-gray-700 rounded-md px-4 py-1.5' />
          <button className=' px-4 mx-auto py-1.5 w-1/5  bg-teal-400 hover:bg-teal-500 rounded-lg'>SEARCH</button>
        </div>
      </div> */}

    </div>
  )
}

export default TrackLicenseComponent