//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 23 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterFormReview.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function WaterFormReview(props) {

    const form1 = props.form1;  // stores form 1 data in a variable
    const form2 = props.form2; // stores form 2 data in a variable

    const goBack = () => {  // when Back button clicked
        props.handleBackBtn()
    }
    const finalSubmit = () => { // When submit button is clicked
        props.finalSubmit()
    }

    console.log("Form 2 data in water review", form2)

    return (
        <>
            <div className=' bg-white border-0 shadow-none'>
                {/* <p className='bg-gray-600 text-white md:text-left text-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'>Review Your Application</p> */}
                <div className='md:m-2 '>

                    <div className='mb-2 md:col-span-4 col-span-12 bg-red-100 rounded-md shadow-md hover:bg-red-200'>
                        <p className='text-center font-semibold border-b-2 border-red-200 py-2'>Review Your Application</p>
                        <div className='grid grid-cols-12 px-5 py-2 leading-7'>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-6 font-semibold'>
                                        <p>Type of Connection</p>
                                        <p>Property Type</p>
                                        <p>Category Type</p>
                                        <p>Pipeline Type</p>
                                    </div>
                                    <div className='col-span-6 capitalize'>
                                        <p>{form1?.connectionType}</p>
                                        <p>{form1?.propertyType}</p>
                                        <p>{form1?.categoryType}</p>
                                        <p>{form1?.pipelineType}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-6 font-semibold'>
                                        <p>Connection Through</p>
                                        <p>SAF/Holdoing</p>
                                        <p>Owner Type</p>
                                    </div>
                                    <div className='col-span-6 capitalize'>
                                        <p>{form1?.connectionThrough}</p>
                                        <p>{form1?.SAFNo + " / " + form1?.holdingNo}</p>
                                        <p>{form1?.ownerType}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className='md:col-span-6 md:mr-1 mt-1 col-span-12 border shadow-lg rounded-md bg-indigo-200 hover:bg-indigo-300'>
                            <p className='text-center font-semibold border-b-2 border-indigo-300 py-1'>Property Details</p>
                            <div className='col-span-12 flex px-3 py-2 leading-6 '>
                                <div className='col-span-6 font-semibold'>
                                    <p>Total Area(Sq.Ft)</p>
                                    <p>Ward No</p>
                                    <p>Landmark</p>
                                    <p>PIN Code</p>
                                    <p>Address</p>
                                </div>
                                <div className='ml-5 md:ml-2'>
                                    <p>{form1?.totalArea}</p>
                                    <p>{form1?.wardNo}</p>
                                    <p>{form1?.landmark}</p>
                                    <p>{form1?.PINCode}</p>
                                    <p>{form1?.address}</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:col-span-6 col-span-12 md:ml-1 md:mt-1 mt-3 border shadow-lg rounded-md bg-green-200 hover:bg-green-300'>
                            <p className='text-center font-semibold border-b-2 border-green-300 py-1'>Electricity Details</p>
                            <div className='col-span-12 flex px-5 py-2 leading-6'>
                                <div className='col-span-6 font-semibold'>
                                    <p>Khata No</p>
                                    <p>Bind Book No</p>
                                    <p>Account No</p>
                                    <p>Category Type</p>
                                </div>
                                <div className='ml-5 md:ml-5'>
                                    <p>{form1?.khataNo}</p>
                                    <p>{form1?.bindBookNo}</p>
                                    <p>{form1?.accountNo}</p>
                                    <p>{form1?.electricityCategoryType}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='md:my-2'>
                            <h1 className='text-center font-semibold py-1'>Applicant Details</h1>
                            <div className='border-b-2 md:mx-4 border-red-200'></div>
                        </div>
                        <div className="mx-4">
                            <div className='hidden md:block'> {/* This will be visible on Desktop only*/}
                                <table className='w-full text-center'>
                                    <thead className='bg-sky-200'>
                                        <tr className=''>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Gurdian Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {
                                            form2?.applicant.map((e, i) => (
                                                <tr>
                                                    <td className="px-2 py-2 text-sm font-medium text-gray-800 whitespace-nowrap">{i + 1}</td>
                                                    <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap">{e.ownerName}  </td>
                                                    <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap">{e.guardianName}</td>
                                                    <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap"> {e.mobileNo} </td>
                                                    <td className="px-2 py-2 text-sm text-gray-800 whitespace-nowrap"> {e.phone}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className='md:hidden'>  {/* This will be visible on mobile only*/}
                                {
                                    form2?.applicant.map((e, i) => (
                                        <div className='border-b border-black py-1 leading-6'>
                                            <div className='bg-sky-200 p-3 rounded-md'>
                                                <p>Name : {e.ApplicantName}</p>
                                                <p>Father Name : Ram Mohan Singh</p>
                                                <p>Email : dsingh197@gmail.com</p>
                                                <p>Phone : 45893485935</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                    </div>
                    <div className='grid col-span-12 justify-items-center my-5'>
                        <div>
                            <button onClick={finalSubmit} className='bg-green-500 px-4 py-1 rounded-sm shadow-md hover:shadow-2xl hover:bg-green-400' type="submit">Submit</button>
                            <button onClick={goBack} className='bg-red-500 px-4 py-1 mx-2 rounded-sm hover:shadow-2xl hover:bg-red-600 shadow-lg' type='button'>Go Back</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default WaterFormReview

/*
Exported to -
1. WaterIndex.js
*/