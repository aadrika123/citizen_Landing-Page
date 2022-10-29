import React from 'react'

export default function CitizenSidebarDash(props) {

    const activityOne = ["This is heading for this ?", "How avail Armed Forces ?", "Who is Specially Abled ?", "This is heading for this ?", "This is heading for this ?"];
    const activityTwo = ["GAMING MODE", "PLAYING ROUGH","SWIMMING ACTIVITY", "GYMING TIME",  "RUNNING FAST"];
    return (
        <div className='text-justify bg-[#e6fafb]'>
            <div className='text-center w-full '>
                <h1 className='bg-teal-300 hover:bg-amber-300 mt-4 w-5/6 mx-auto rounded-lg py-1 text-md text-white'>My Activity One</h1>

                {
                    activityOne.map((item, index) => (
                        <p className='px-2 py-1 bg-white shadow-lg hover:bg-gray-100 w-5/6 mx-auto my-1 rounded-lg text-indigo-800  text-sm font-mono'> *  {item} </p>
                    ))
                }

            </div>
            <div className='text-center w-full '>
                <h1 className='bg-teal-300  mt-4 w-5/6 mx-auto rounded-lg py-1 hover:bg-orange-500  text-md text-white'>My Activity Two</h1>

                {
                    activityTwo.map((item, index) => (
                        <p className='px-2 py-1 bg-white shadow-lg hover:bg-gray-100 w-5/6 mx-auto my-1 rounded-lg text-indigo-800  text-sm font-mono'> *  {item} </p>
                    ))
                }

            </div>
        </div>
    )
}
