import React from 'react'

function PaymentComponent() {
    return (
        <>
            <div className=' border-gray-100 border shadow-md'>
                <div className='flex flex-row bg-stone-50  p-2 border-b-2 border-gray-100 '>
                    <div className=' -mt-8'>
                        <img src='https://cdn-icons-png.flaticon.com/512/4108/4108042.png' className='h-14 w-16  p-1' />
                    </div>
                    <h1 className='text-xs ml-2  text-gray-600'>Pending Payment</h1>
                    <br />
                    <h1 className='mt-2 font-semibold text-gray-500 text-3xl'>2</h1>
                </div>
                <div className='bg-gray-50 p-6 '>
                    <div className='divide-y'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-300 -ml-5 -mt-6">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z" clip-rule="evenodd" />
                        </svg>

                        <h1 className='text-xs -mt-5 ml-1 font-mono font-semibold text-gray-700'>Saf No. SAF88755477634</h1>
                        <button className='text-xs float-right bg-cyan-500 hover:bg-cyan-600 text-stone-50 rounded-md px-3 py-0.5 ml-2 shadow-lg '>Pay</button>
                    </div>

                </div>
                <div className='bg-gray-50 p-6'>
                    <div className='divide-y'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-green-300 -ml-5 -mt-6">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z" clip-rule="evenodd" />
                        </svg>

                        <h1 className='text-xs -mt-5 ml-1 font-mono font-semibold text-gray-700'>Saf No. SAF88755477634</h1>
                        <button className='text-xs float-right bg-cyan-500 hover:bg-cyan-600 text-stone-50 rounded-md  px-3 py-0.5 ml-2 shadow-lg '>Pay</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default PaymentComponent