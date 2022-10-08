import React from 'react'
import Rate from '../../../../components/Media/rate.png'


function RentalRate2() {
    return (
        <>
             <div className=''>
                <h1 className='px-2 font-semibold mt-4 text-gray-600 text-sm'><img className='inline w-6' src={Rate} alt="rate-image" /> Rental Rate 2</h1>

                <table className='min-w-full leading-normal mt-2'>
                    <thead className='font-bold text-left text-sm bg-green-700 text-white'>
                        <tr>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Construction Type</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-l border-white">Principal Main Road</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Main Road</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Other</th>

                        </tr>
                       
                    </thead>
                    <tbody className="text-sm">
                        <>
                            <tr className="bg-white shadow-lg border-b border-gray-200">
                                <td className="px-2 py-2 text-sm text-left ">Pucca with RCC Roof (RCC)</td>
                                <td className="px-2 py-2 text-sm text-left ">144.00</td>
                                <td className="px-2 py-2 text-sm text-left ">115.00</td>
                                <td className="px-2 py-2 text-sm text-left ">86.00</td>
                                
                            </tr>
                          
                        </>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default RentalRate2