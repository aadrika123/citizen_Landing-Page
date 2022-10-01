import React from 'react'

function StatusStatus() {
    return (
        <>
            <div className='m-5'>
                <table>
                    <thead className='bg-sky-300 px-5'>
                        <tr className='tracking-wide'>
                            <td className='px-5'>#</td>
                            <td className='px-5'>Applicaion No</td>
                            <td className='px-5'>Service Name</td>
                            <td className='px-5'>Status</td>
                            <td className='px-5'>Document</td>
                            <td className='px-5'>Payment</td>
                            <td className='px-5'>Receipt</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=''>
                            <td className='px-5'>1</td>
                            <td className='px-5'>96875874874</td>
                            <td className='px-5'>Apply Water Connection</td>
                            <td className='px-5'>Document/Payment Pending</td>
                            <td className='px-5'>Not Uploaded</td>
                            <td className='px-5'>Complated</td>
                            <td>
                                <button className='px-2 bg-indigo-500 text-white rounded-sm shadow-lg'>Print</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StatusStatus