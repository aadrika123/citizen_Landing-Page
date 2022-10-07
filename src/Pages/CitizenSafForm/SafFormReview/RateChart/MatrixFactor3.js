import React from 'react'
import Rate from '../../../../components/Media/rate.png'


function MatrixFactor3() {
    return (
        <>
            <div className=''>
                <h1 className='px-2 font-semibold mt-4 text-gray-600 text-sm'><img className='inline w-6' src={Rate} alt="rate-image" /> Matrix factor 3</h1>

                <table className='min-w-full leading-normal mt-2'>
                    <thead className='font-bold text-left text-sm bg-green-700 text-white'>
                        <tr>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Building Type----Road Type</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left border-r border-l border-white">Building Pakka</th>
                            <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Building Kaccha</th>

                        </tr>
                       
                    </thead>
                    <tbody className="text-sm">
                        <>
                            <tr className="bg-white shadow-lg border-b border-gray-200">
                                <td className="px-2 py-2 text-sm text-left ">Main Road</td>
                                <td className="px-2 py-2 text-sm text-left border-l border-gray-500">1</td>
                                <td className="px-2 py-2 text-sm text-left border-l border-gray-500">0.5</td>
                               
                            </tr>
                            <tr className="bg-white shadow-lg border-b border-gray-200">
                                <td className="px-2 py-2 text-sm text-left ">Other Road</td>
                                <td className="px-2 py-2 text-sm text-left border-l border-gray-500">1</td>
                                <td className="px-2 py-2 text-sm text-left border-l border-gray-500">0.5</td>
                               
                            </tr>
                            
                        </>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MatrixFactor3