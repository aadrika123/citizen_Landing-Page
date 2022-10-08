import React from 'react'
import Rate from '../../../../components/Media/rate.png'

function RentalRate1() {
    return (
        <>
            <div className=''>
                <h1 className='px-2 font-semibold mt-4 text-gray-600 text-sm'><img className='inline w-6' src={Rate} alt="rate-image" /> Rental Rate 1 </h1>

                <table className='min-w-full leading-normal mt-2'>
                    <thead className='font-bold text-left text-sm bg-green-700 text-white'>
                        <tr>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left" colSpan={1}>..</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center border-r border-l border-white" colSpan={3}>ZONE 1</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center" colSpan={3}>ZONE 2</th>

                        </tr>
                        <tr>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Construction Type
                                ------------
                                USE OF BUILDING</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-l border-white">Pucca with RCC Roof (RCC)</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Pucca with Asbestos/Corrugated Sheet (ACC)</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-white">Kuttcha with Clay Roof (Other)</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Pucca with RCC Roof (RCC)</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Pucca with Asbestos/Corrugated Sheet (ACC)</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Kuttcha with Clay Roof (Other)</th>


                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <>
                            <tr className="bg-white shadow-lg border-b border-gray-200">
                                <td className="px-2 py-2 text-sm text-left ">Residential</td>
                                <td className="px-2 py-2 text-sm text-left border-l border-gray-500">2,241.00</td>
                                <td className="px-2 py-2 text-sm text-left">200.00</td>
                                <td className="px-2 py-2 text-sm text-left border-r border-gray-500">1.00</td>
                                <td className="px-2 py-2 text-sm text-left">0.075%</td>
                                <td className="px-2 py-2 text-sm text-left">1.00</td>
                                <td className="px-2 py-2 text-sm text-left">0.80</td>
                            </tr>
                            <tr className="bg-white shadow-lg border-b border-gray-200">
                                <td className="px-2 py-2 text-sm text-left ">Commercial</td>
                                <td className="px-2 py-2 text-sm text-left border-l border-gray-500">2,241.00</td>
                                <td className="px-2 py-2 text-sm text-left">200.00</td>
                                <td className="px-2 py-2 text-sm text-left border-r border-gray-500">1.00</td>
                                <td className="px-2 py-2 text-sm text-left">0.075%</td>
                                <td className="px-2 py-2 text-sm text-left">1.00</td>
                                <td className="px-2 py-2 text-sm text-left">0.80</td>
                            </tr>
                        </>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default RentalRate1