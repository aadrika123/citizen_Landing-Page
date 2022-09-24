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
            <div className=' bg-white'>
                <p className='bg-gray-600 text-white md:text-left text-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'>Review Your Application</p>
                <div className='p-5'>
                    <div>
                        Type of Connection {form1?.connectionType} <br />
                        Property Type : - {form1?.propertyType} <br />
                        Connection Through : - {form1?.connectionThrough}<br />
                        Owner Type {form1?.ownerType}<br />
                        Ward No<br />
                        Total Area(in Sq. Ft) <br />
                        Landmark<br />
                        PIN Code<br />
                        Khata No<br />
                        Bind Book No<br />
                        Account No<br />
                        Category Type
                    </div>

                    <div>
                        <h1 className='text-center font-semibold'>Applicant Details</h1>
                        {
                            form2?.applicant.map((e) => (
                                <div className='leading-10'>
                                    Name : - {e.ApplicantName}
                                    Guardian Name : - {e.GuardianName}
                                    Phone : - {e.phone}
                                    Email : - {e.email}
                                </div>
                            ))
                        }

                    </div>
                    <div className='grid col-span-12 justify-items-center'>
                        <div>
                            <button onClick={finalSubmit} className='bg-green-500 px-4 py-1 rounded-sm shadow-md hover:shadow-2xl hover:bg-green-400' type="submit">Submit</button>
                            <button onClick={goBack} className='bg-red-500 px-4 py-1 mx-2 rounded-sm hover:shadow-2xl hover:bg-red-600 shadow-lg' type='button'>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaterFormReview

/*
Exported to -
1. WaterIndex.js
*/