import React from 'react'
import { FaQuestion } from 'react-icons/fa';

function WaterApplySidebar(props) {
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
        <>
            <div className="h-full bg-white border-r shadow-lg">
                <div className="bg-white">
                    <div className="border bg-red-100 py-1">
                        <h2 className="text-2xl font-semibold flex justify-center">FAQ <FaQuestion size={18} className="mt-2 ml-2" /></h2>
                    </div>
                    <div className='flex justify-center my-5'>
                        <button className='bg-blue-400 px-4 py-1 text-lg' onClick={()=>props.dash()}>Water Dashboard</button>
                    </div>
                    <p className=" my-4 text-gray-600 text-center"> Water Form Reladed Query </p>
                    <div className="space-y-4 p-2">
                        {faqs.map((item, i) => (
                            <div>{i}</div>,
                            <details className="rounded-sm ring-1 ring-blue-300 shadow-md bg-gray-100">
                                <summary className="px-4 py-2 cursor-pointer font-semibold bg-sky-50">{item.title}</summary>
                                <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-gray-600">{item.body}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaterApplySidebar

/*
Exported to -
1. WaterIndex.js
*/