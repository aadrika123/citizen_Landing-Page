import React from 'react'

function ApplicationPending() {
    return (
        <>
            <div>
                <div className='flex flex-row bg-gray-50  p-2 border border-gray-100 shadow-md'>
                    <div className=' -mt-8'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1074/1074118.png' className='h-14 w-16  p-1' />

                    </div> 
                    <h1 className='text-xs ml-2  text-gray-600'>Pending Application</h1>
                    <br />
                    <h1 className='mt-2 font-semibold text-gray-500 text-3xl'>0</h1>
                </div>
            </div>
        </>
    )
}

export default ApplicationPending