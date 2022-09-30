import React from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SyncIcon from '@mui/icons-material/Sync';


function TestNav() {
    return (
        <>
            <div className='container mx-auto'>

                <div className='md:grid  py-2 justify-center items-center rounded-md shadow-lg shadow-blue-500/40 border-l-2 border-r-2 border-blue-600'>
                    <h1 className=' text-blue-600 text-2xl font-serif'><u>APPLICANT  INFORMATION</u></h1>
                </div>

                <div>
                    <div className=' md:grid-cols-1 lg:grid-cols-2 mt-20 p-1 bg-blue-300 shadow-lg   '>
                        <div className='flex items-center justify-between'>
                            <div className='font-serif text-lg text-black m-1 h-4'> <span className='text-lg mx-2'>< HowToRegIcon /></span> Basic Details Of The Applicant </div>
                            <div className='float-right'>
                                <button type='submit' className='bg-blue-500  text-white hover:bg-blue-700  rounded-md px-3 py-1 mx-1 mt-3 relative' ><SyncIcon />Update</button>
                            </div>
                        </div>


                        <div className='bg-blue-800'>
                            <div className=''>
                                {/* <div className='font-medium text-fuchsia-900'><span>*</span>ULB             <span>:-</span> </div><br />
                                <div className='font-medium text-fuchsia-900'><span>*</span>GUARDIAN NAME   <span>:-</span> </div>
                                <div className='font-medium text-fuchsia-900'><span>*</span>FULL NAME       <span>:-</span> </div>
                                <div className='font-medium text-fuchsia-900'><span>*</span>DATE-OF-BIRTH   <span>:-</span> </div>
                                <div className='font-medium text-fuchsia-900'><span>*</span>MOBILE NO       <span>:-</span> </div>
                                <div className='font-medium text-fuchsia-900'><span>*</span>E-MAIL          <span>:-</span> </div>
                                <div className='font-medium text-fuchsia-900'><span>*</span>ARMED-FORCE     <span>:-</span> </div>
                                <div className='font-medium text-fuchsia-900'><span>*</span>SPECIALLY-ABLED <span>:-</span> </div> */}
                                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4'>
                                    <div className='bg-sky-200'>
                                    <label for="" className="block text-sm font-medium text-gray-700">ULB :-</label>
                                    </div>
                                    <div className='bg-sky-200'>2</div>
                                    <div className='bg-sky-200'>
                                    <label for="" className="block text-sm font-medium text-gray-700">MOBILE NO :-</label>
                                    </div>
                                    <div className='bg-sky-200'>4</div>

                                </div>
                                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2'>
                                    <div className='bg-sky-200'>
                                    <label for="" className="block text-sm font-medium text-gray-700">GUARDIAN NAME :-</label>
                                    </div>
                                    <div className='bg-sky-200'>2</div>
                                    <div className='bg-sky-200'>
                                    <label for="" className="block text-sm font-medium text-gray-700">EMAIL :-</label>
                                    </div>
                                    <div className='bg-sky-200'>4</div>

                                </div>
                                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2'>
                                    <div className='bg-sky-200'>
                                    <label for="" className="block text-sm font-medium text-gray-700">FULL NAME:-</label>
                                    </div>
                                    <div className='bg-sky-200'>2</div>
                                    <div className='bg-sky-200'>
                                    <label for="" className="block text-sm font-medium text-gray-700">DATE-OF-BIRTH :-</label>
                                    </div>
                                    <div className='bg-sky-200'>4</div>

                                </div>
                                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2'>
                                    <div className='bg-sky-200'>
                                    <label for="" className="block text-sm font-medium text-gray-700">ARMED-FORCE:-</label>
                                    </div>
                                    <div className='bg-sky-200'>2</div>
                                    <div className='bg-sky-200'>
                                    <label for="" className="block text-sm font-medium text-gray-700">SPECIALLY- ABLED :-</label>
                                    </div>
                                    <div className='bg-sky-200'>4</div>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default TestNav