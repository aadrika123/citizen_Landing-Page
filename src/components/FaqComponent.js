import React from 'react'

function FaqComponent(props) {
    const faqs = [
        {
            id: 1,
            title: 'How to Apply ?',
            body: 'Step 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Step 2. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 2,
            title: 'How  avail Armed Forces ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 3,
            title: 'Who is Specially Abled ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 4,
            title: 'This is heading for this ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 5,
            title: 'This is heading for this ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 6,
            title: 'This is heading for this ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        }
    ]

    return (
        <div className='col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                <div className='bg-[#e6fafb] '>
                    <div className="space-y-2 p-4">
                        <h1 className='text-center py-1 rounded-lg font-mono bg-teal-300 hover:bg-amber-400 text-white p-0 text-md'>FAQ ?</h1>
                        {faqs.map((item, i) => (
                            <div>{i}</div>,
                            <details className="rounded-lg  shadow-lg bg-white hover:bg-gray-100">
                                <summary className="px-3  py-1 cursor-pointer font-mono  text-[#37517e] h-8 rounded-lg text-sm">{item.title}</summary>
                                <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-[#37517e] text-xs">{item.body}</p>
                            </details>
                        ))}
                    </div>

                </div>


                {/*  notify card*/}
                {/* <div className='p-2 mt-4  shadow-lg'>
                    <h1 className='text-center -mt-4 font-semibold bg-[#37517e] text-white text-lg'>NOTIFICATION</h1>
                    <div className=''>
                        <div className="space-y-2 p-4">
                            <div class="text-[#37517e]  border-[#37517e]   border-l-4 border-r-4  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-12 p-2">
                                <div class="flex items-center rounded-lg  cursor-pointer">
                                    <div class="ml-3.5">
                                        <span class="text-sm leading-none  text-[#37517e] ">you have successfully registered for saf </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='-mt-6'>
                        <div className="space-y-2 p-4">
                            <div class="text-[#37517e]  border-[#37517e]    border-l-4 border-r-4  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-12 p-2">
                                <div class="flex items-center rounded-lg  cursor-pointer">
                                    <div class="ml-3.5">
                                        <span class="text-sm leading-none  text-[#37517e]">you have successfully registered for saf </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='-mt-6'>
                        <div className="space-y-2 p-4">
                            <div class="text-[#37517e]  border-[#37517e]    border-l-4 border-r-4  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-12 p-2">
                                <div class="flex items-center rounded-lg  cursor-pointer">
                                    <div class="ml-3.5">
                                        <span class="text-sm leading-none  text-[#37517e]">you have successfully registered for saf </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default FaqComponent