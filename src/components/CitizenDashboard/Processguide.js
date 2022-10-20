//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 20 oct 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Processguide
//    DESCRIPTION - Processguide Component to guide the citizen to fill the form
//////////////////////////////////////////////////////////////////////////////////////


import React from 'react'
function Processguide(props) {

    const handleClose = () => {
        props.fun(false)
    }
    
    return (
        <>
            <div className=' overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center bg-gray-600 opacity-95 '>
                <div className='flex'>
                <h1 className='text-3xl font-bold p-12 text-gray-50'> HOW TO APPLY FOR ANY SERVICE ?</h1>
                    <div className='flex-1 '>
                        <button type='button' className='float-right' onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-red-500">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 -mt-4'>
                    <div className='col-span-12 p-6'>
                        <div className='grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 mt-12 '>

                            <div className=' ' >
                                <div className='bg-green-300 h-24 w-24 rounded-full border float-right'>
                                    <h1 className='text-center p-8'>start</h1>
                                    <img src='https://o.remove.bg/downloads/5ea6b2f4-bc1f-4f3e-9c4e-784062de65cc/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362-removebg-preview.png' className='h-32 w-28 -mt-28 -ml-14' />
                                </div>
                            </div>
                            <div className='  '>
                                <div className='mt-6 '>
                                    <img src='https://cdn-icons-png.flaticon.com/512/2267/2267911.png' className='h-14 w-28 ml-4 ' />
                                </div>
                            </div>
                            <div className='bg-yellow-200  rounded-lg shadow-lg'>
                                <div className='h-24 w-24 '>
                                    <h1 className='text-xs p-2'>Apply for the  services required</h1>
                                    <img src='https://i.ibb.co/QH2TLXL/screenshot-2.png' className=' -mt-3 ml-14' />
                                </div>
                            </div>
                            <div className='mt-6 '>
                                <img src='https://cdn-icons-png.flaticon.com/512/2267/2267911.png' className='h-14 w-28 ml-4 ' />
                            </div>
                            <div className='bg-sky-200 rounded-lg shadow-lg '>
                                <div className='h-24 w-24 '>
                                    <h1 className='text-xs p-2'> APPLICATION LIST</h1>
                                    <img src='https://i.ibb.co/C8mMZTd/screenshot-3.png' className='h-12 -mt-1 ml-12' />
                                </div>
                            </div>
                            <div className=''>
                                <div className='mt-8 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="w-24 h-20 -mt-2  ml-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 '>
                            <div className=' ' >
                                <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="w-24 h-20 mt-6  ml-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                                    </svg>
                                </div>
                            </div>
                            <div className='bg-cyan-200  rounded-lg shadow-lg'>
                                <div className=''>
                                    <h1 className='text-sm p-1'> Apply more</h1>
                                    <img src='https://i.ibb.co/rbR0Q7s/screenshot-5.png  ' className='h-14 mt-6' />
                                </div>
                            </div>
                            <div className=''>
                                <div className='h-24 w-24 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="w-24 h-24 mt-2 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                    </svg>
                                </div>
                            </div>
                            <div className='bg-teal-200 rounded-lg shadow-lg'>
                                <h1 className='text-xs p-1'>   Apply New Application / View Application</h1>
                                <img src='https://i.ibb.co/jgbzWYq/screenshot-4.png' className='h-20 w-20 ml-16' />
                            </div>
                            <div className=''>
                                <div className='h-24 w-24 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" class="w-24 h-24 mt-2 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                    </svg>
                                </div>
                            </div>
                            <div className='bg-teal-200 rounded-lg shadow-lg'>
                                <div className=' '>
                                    <h1 className='text-xs p-1'>Application List</h1>
                                    <img src='https://i.ibb.co/jgbzWYq/screenshot-4.png' className='h-20 w-20 ml-16' />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 '>

                            <div className='bg-purple-200 shadow-lg rounded-lg ' >
                                <div className=''>
                                    <h1 className='text-sm p-1'>Form</h1>
                                    <img src='https://i.ibb.co/6XHT0F6/screenshot-6.png' className='p-1' />
                                </div>
                            </div>
                            <div className=''>
                                <div className='mt-8 '>
                                    <img src='https://cdn-icons-png.flaticon.com/512/2267/2267911.png' className='h-14 w-28 ml-4 ' />
                                </div>
                            </div>
                            <div className='bg-sky-200  shadow-lg rounded-lg'>
                                <div className='h-24 w-24 '>
                                    <h1 className='text-sm p-1'> submit</h1>
                                    <img src='https://o.remove.bg/downloads/ebd86711-cf5f-4e61-8030-eedb11690029/upload-concept-illustration_114360-1317-removebg-preview.png' className='-mt-5 ml-12 h-28' />

                                </div>
                            </div>
                            <div className='mt-6'>
                                <img src='https://cdn-icons-png.flaticon.com/512/2267/2267911.png' className='h-14 w-28 ml-4 ' />

                            </div>
                            <div className='  '>
                                <div className='h-24 w-24 '>

                                    <div className='bg-green-300 h-24 w-24 rounded-full border float-left'>
                                        <h1 className='text-center p-8'>End</h1>
                                        <img src='https://o.remove.bg/downloads/30cbdc34-d5fa-49f8-94a5-ff1316b93578/completed-concept-illustration_114360-3891-removebg-preview.png' className='h-32 w-28 -mt-28 ml-14' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className=' col-span-3 bg-blue-00'>
                        <h1 className='text-3xl font-bold p-12 text-gray-600'> HOW TO APPLY FOR ANY SERVICE ?</h1>
                        <img src='https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1665668008~exp=1665668608~hmac=11bf70324869ece22bc34dcdb9cbd5e8dafd4abba76054822143d0f1d8e7951e' className='-mt-12' />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Processguide