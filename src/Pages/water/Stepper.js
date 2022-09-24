import React from 'react'

function Stepper() {
    return (
        <>
            <div className='mt-3'>
                <h3 className="text-base text-center font-semibold my-1">Step 3: Fill in order details</h3>
                <div className=" space-y-2 dark:bg-gray-800 dark:text-gray-100 flex justify-center">
                    <div className="flex max-w-xs space-x-3">
                        <span className="w-12 h-2 rounded-sm border border-black bg-violet-400"></span>
                        <span className="w-12 h-2 rounded-sm border border-black bg-violet-400"></span>
                        <span className="w-12 h-2 rounded-sm border border-black bg-gray-100"></span>
                        <span className="w-12 h-2 rounded-sm border border-black bg-gray-600"></span>
                        <span className="w-12 h-2 rounded-sm border border-black bg-gray-600"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stepper