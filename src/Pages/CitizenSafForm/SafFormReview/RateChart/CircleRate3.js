import React from 'react'
import Rate from '../../../../components/Media/rate.png'


function CircleRate3() {
    return (
        <>
            <div className=''>
                <h1 className='px-2 font-semibold mt-4 text-gray-600 text-sm'><img className='inline w-6' src={Rate} alt="rate-image" /> Circle Rate 3 </h1>

                <table className='min-w-full leading-normal mt-2'>
                    <thead className='font-bold text-left text-sm bg-green-700 text-white'>
                        <tr>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left" ></th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center border-r border-l border-white" colSpan={4}>DLX Apartment (Square Feet )</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center border-r border-l border-white" colSpan={4}>Building Pakka(Square Feet )</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-center" colSpan={4}>Building Kaccha(Square Feet )</th>

                        </tr>
                        <tr>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">WARD NO</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-l border-white">Urban Residential Main Road</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Urban Commercial Main Road</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left ">Urban Residential</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-white">Urban Commercial</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Urban Residential Main Road</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Urban Commercial Main Road</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Urban Residential</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-white">Urban Commercial</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Urban Residential Main Road</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Urban Commercial Main Road</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Urban Residential</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Urban Commercial</th>


                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <>
                            <tr className="bg-white shadow-lg border-b border-gray-200">
                                <td className="px-2 py-2 text-sm text-left ">1</td>
                                <td className="px-2 py-2 text-sm text-left border-l border-gray-500">2,241.00</td>
                                <td className="px-2 py-2 text-sm text-left">200.00</td>
                                
                                <td className="px-2 py-2 text-sm text-left">0.075%</td>
                                <td className="px-2 py-2 text-sm text-left border-r border-gray-500">1.00</td>
                                <td className="px-2 py-2 text-sm text-left border-l border-gray-500">2,241.00</td>
                                <td className="px-2 py-2 text-sm text-left">200.00</td>
                                
                                <td className="px-2 py-2 text-sm text-left">0.075%</td>
                                <td className="px-2 py-2 text-sm text-left border-r border-gray-500">1.00</td>
                                <td className="px-2 py-2 text-sm text-left border-l border-gray-500">2,241.00</td>
                                <td className="px-2 py-2 text-sm text-left">200.00</td>
                                
                                <td className="px-2 py-2 text-sm text-left">0.075%</td>
                                <td className="px-2 py-2 text-sm text-left border-r border-gray-500">1.00</td>
                            </tr>
                           
                        </>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CircleRate3