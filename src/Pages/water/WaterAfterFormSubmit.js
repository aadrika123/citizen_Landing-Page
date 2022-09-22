import React from 'react'

function WaterAfterFormSubmit() {
    return (
        <>
            <div className='m-2 mt-20'>

                <div className='bg-sky-50 border border-gray-400 md:w-1/2 p-5 text-center shadow-xl rounded-md m-auto'>
                    <p className='text-2xl'> Form has been submitted Successfully</p>
                    <p> Your Application No - 635644545651545</p>

                    <div className='mt-10'>
                        <button className='bg-green-400 hover:bg-green-700 hover:text-white px-3 py-1 mx-2 '> Make Payment </button>
                        <button className='bg-indigo-300 hover:bg-indigo-600 hover:text-white px-3 py-1 mx-2 hover:border-b-2 border-red-600'> Upload Documets </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WaterAfterFormSubmit