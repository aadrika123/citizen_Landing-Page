import React from 'react'
import ApplicationPending from './ApplicationPending'
import CitizenNotification from './CitizenNotification'
import PaymentComponent from './PaymentComponent'

function ProfileConponent() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-2'>
                <div className='flex bg-white shadow-lg rounded-xl p-1 '>
                    <div className='flex-1 p-4 '>
                        <h1 className='text-xl text-[#37517e]'>User Name</h1>
                        <h1 className='text-md -mt-1 text-[#37517e] opacity-75'>user@gmail.com</h1>

                        <div className='flex flex-row mt-10'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9 bg-teal-400 rounded-full text-xs px-2 py-1 shadow-lg shadow-sky-300 text-white">
                                    <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                </svg>
                                <span className=' text-sky-500 font-bold ml-2 text-2xl'>4</span> <br />
                                <span className='text-sm text-[#37517e] -ml-4 mt-8'> Services </span>

                            </div>
                           
                            <div className='flex ml-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-9 h-9 bg-purple-400 rounded-full text-xs px-2 py-1 shadow-lg shadow-sky-200 text-white">
                                    <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                </svg>
                                <span className=' text-sky-500 font-bold ml-2 text-2xl'>2</span> <br />
                                <span className='text-sm text-[#37517e] -ml-4 mt-8'> Statics </span>

                            </div>
                        </div>

                    </div>

                    <div className='flex-1 -ml-12 '>
                        <img src='https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png' className='h-20 ml-10 mt-4' />
                        <div className=' '>
                            <span className=''>
                                <button className='bg-teal-400 hover:bg-teal-500 shadow-lg shadow-gray-300 px-3 py-0  ml-12 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg><h1 className='ml-4 -mt-5 text-stone-50 '>Edit</h1>
                                </button>
                            </span>
                        </div>
                    </div>

                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 p-2 mt-8'>
                <div>
                    <ApplicationPending />
                </div>
                <div>
                    <ApplicationPending />
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 p-2 mt-8'>

                <div>
                    <PaymentComponent />
                </div>
                <div>
                    <CitizenNotification />
                </div>
            </div>
        </>
    )
}

export default ProfileConponent