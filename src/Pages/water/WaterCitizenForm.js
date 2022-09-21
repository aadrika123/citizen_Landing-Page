//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 21 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterCitizenForm.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { SiAddthis } from 'react-icons/si';
import { MdCancel } from 'react-icons/md';

function WaterCitizenForm() {
    const [connectionThroughState, setConnectionThroughState] = useState()

    const selectPropertyType = (e) => {
        console.log("Changed..", e)
    }

    const handleAddNewApplicant = () => {
        console.log("handleAddNewApplicant")
    }

    console.log("setConnectionThroughState", connectionThroughState)

    const goBack = () => {
        // props.handleBackBtn()
    }

    return (
        <>
            <Formik
                initialValues={{ Applicant:{ ApplicantOwner:'', ApplicantGuardian:'' } , connectionType: '', propertyType: '', connectionThrough: '', ownerType: '' }}
                validationSchema={Yup.object({
                    connectionType: Yup.string().required('Required'),
                    propertyType: Yup.string().required('Required.'),
                    connectionThrough: Yup.string().required('Required.'),
                    ownerType: Yup.string().required('Required.')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        // submitFormData(values)
                        setSubmitting(false);
                    }, 400);
                }}

                render={({ values }) => (
                    <Form>
                        <div className=''>
                            <div className=' bg-red-50 py-2 border border-red-200 rounded-sm shadow-2xl pb-10'>
                                <span className='flex justify-center text-xl'> Apply Water Connection Form</span>

                                <div className='border border-black m-5 pb-5 bg-white'>
                                    <div className='bg-gray-600 text-white md:text-left text-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'>Apply Water Connection Form</div>
                                    <div className='md:flex'>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Type of Connection </label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="connectionType">
                                                <option value="">-- Select connectin Type --</option>
                                                <option value="NewConnection">New Connection</option>
                                                <option value="Regularization">Regularization</option>
                                            </Field>
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="connectionType" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Property Type <span className='text-red-600'>*</span> </label>
                                            <Field onClick={(e) => selectPropertyType(e.target.value)} className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="propertyType">
                                                <option value="">-- Select Property Type --</option>
                                                <option value="Residencial">Residencial</option>
                                                <option value="Commercial">Commercial</option>
                                                <option value="GovernmentAndPSU">Government and PSU</option>
                                                <option value="Institutinal">Institutinal</option>
                                                <option value="SSLUnit">SSL Unit</option>
                                                <option value="Industrial">Industrial</option>
                                                <option value="Appartment">Appartment/Multi Stored Building</option>
                                            </Field>
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="propertyType" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Connection Through <span className='text-red-600'>*</span></label>
                                            <Field onClick={(e) => setConnectionThroughState(e.target.value)} className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="connectionThrough">
                                                <option value="">-- Select Connection Through --</option>
                                                <option value="holdingProof">Holding Proof</option>
                                                <option value="saf">SAF</option>
                                                <option value="idProof">ID Proof</option>
                                            </Field>
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="connectionThrough" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Owner Type</label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="ownerType">
                                                <option value="">-- Select Owner Type --</option>
                                                <option value="owner">Owner</option>
                                                <option value="tenant">Tenant</option>
                                            </Field>
                                            <p className='text-red-600 text-sm  absolute'><ErrorMessage name="ownerType" /></p>
                                        </div>

                                    </div>
                                </div>

                                <div className='border border-black m-5 pb-5 bg-white'>
                                    <div className='flex bg-gray-600 text-white md:justify-start justify-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'>Applicant Details New <p className='mr-8 ml-auto'> <SiAddthis size={25} onClick={handleAddNewApplicant} className="cursor-pointer" /> </p></div>

                                    <FieldArray
                                        name="ApplicantOwner"
                                        render={arrayHelpers => (
                                            <div className='md:flex'>
                                                {values.ApplicantOwner && values.ApplicantOwner.length > 0 ? (
                                                    values.ApplicantOwner.map((friend, index) => (
                                                        <div key={index}>
                                                            {/* <Field name={`ApplicantOwner.${index}`} /> */}
                                                            <div className='m-3'>
                                                                <label className='text-lg md:text-base md:font-medium font-normal'>Owner Name </label>
                                                                <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name={`Applicant.ApplicantOwner.${index}`} />
                                                                <p className='text-red-600 text-sm absolute'><ErrorMessage name={`Applicant.ApplicantOwner.${index}`} /></p>
                                                            </div>
                                                            <div className='m-3'>
                                                                <label className='text-lg md:text-base md:font-medium font-normal'>Guardian Name </label>
                                                                <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name={`Applicant.ApplicantGuardian.${index}`} />
                                                                <p className='text-red-600 text-sm absolute'><ErrorMessage name={`Applicant.ApplicantGuardian.${index}`} /></p>
                                                            </div>
                                                            {/* <button type="button" onClick={() => arrayHelpers.remove(index)} >-</button> */}
                                                            {/* <button type="button" onClick={() => arrayHelpers.insert(index, '')}>+</button> */}
                                                            <div className='flex'>
                                                                <p className='mr-8 ml-auto'> <SiAddthis size={20} onClick={() => arrayHelpers.insert(index, '')} className="cursor-pointer" /> </p>
                                                                <p className='mr-8 ml-auto'> <MdCancel color='red' size={25} onClick={() => arrayHelpers.remove(index, '')} className="cursor-pointer" /> </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <button type="button" onClick={() => arrayHelpers.push('')}>Add a friend</button>
                                                )}
                                                {/* <div><button type="submit">Submit</button></div> */}
                                            </div>
                                        )}
                                    />

                                </div>

                                <div className='border border-black m-5 pb-5 bg-white'>
                                    <div className='bg-gray-600 text-white md:text-left text-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'>Applicant Property Details</div>
                                    <div className='md:flex'>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Ward No </label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="WardNo">
                                                <option value="">-- Select connectin Type --</option>
                                                <option value="NewConnection">New Connection</option>
                                                <option value="Regularization">Regularization</option>
                                            </Field>
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="WardNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Total Area(in Sq. Ft) <span className='text-red-600'>*</span> </label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="TotalArea" />
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="TotalArea" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Landmark<span className='text-red-600'>*</span></label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="Landmark"></Field>
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="Landmark" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>PIN Code</label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="PINCode"></Field>
                                            <p className='text-red-600 text-sm  absolute'><ErrorMessage name="PINCode" /></p>
                                        </div>

                                    </div>
                                </div>

                                <div className='border border-black m-5 pb-5 bg-white'>
                                    <div className='flex bg-gray-600 text-white md:justify-start justify-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'>Applicant Details <p className='mr-8 ml-auto'> <SiAddthis size={25} onClick={handleAddNewApplicant} className="cursor-pointer" /> </p></div>
                                    <div className='md:flex'>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Owner Name </label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="KhataNo" />
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="KhataNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Guardian Name<span className='text-red-600'>*</span> </label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="BindBookNo" />
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="BindBookNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Mobile No    <span className='text-red-600'>*</span></label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="AccountNo"></Field>
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="AccountNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Email ID</label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="AccountNo"></Field>
                                            <p className='text-red-600 text-sm  absolute'><ErrorMessage name="ElectricityCategoryType" /></p>
                                        </div>

                                    </div>
                                </div>
                                <div className='border border-black m-5 pb-5 bg-white'>
                                    <div className='bg-gray-600 text-white md:text-left text-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'>Applicant Electricity Details</div>
                                    <div className='md:flex'>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Khata No </label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="KhataNo" />
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="KhataNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Bind Book No.<span className='text-red-600'>*</span> </label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="BindBookNo" />
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="BindBookNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Account No<span className='text-red-600'>*</span></label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="AccountNo"></Field>
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="AccountNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Category Type</label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="ElectricityCategoryType">
                                                <option value="">-- Select Category Type --</option>
                                                <option value="DS">Residential - DS I/II</option>
                                                <option value="NDS">Commercial - NDS II/III</option>
                                                <option value="IS">Agriculture - IS I/II</option>
                                                <option value="LTS">Low Tension - LTS</option>
                                                <option value="HTS">High Tension - HTS</option>
                                            </Field>
                                            <p className='text-red-600 text-sm  absolute'><ErrorMessage name="ElectricityCategoryType" /></p>
                                        </div>

                                    </div>
                                </div>


                                <div className='grid col-span-12 justify-items-center'>
                                    <div>
                                        <button className='bg-green-500 px-4 py-1 rounded-sm shadow-md hover:shadow-2xl hover:bg-green-400' type="submit">Submit</button>
                                        <button onClick={goBack} className='bg-red-500 px-4 py-1 mx-2 rounded-sm hover:shadow-2xl hover:bg-red-600 shadow-lg'>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
                }
            >
            </Formik >

        </>
    )
}

export default WaterCitizenForm

/*
Exported to -
1. WaterIndex.js
*/
