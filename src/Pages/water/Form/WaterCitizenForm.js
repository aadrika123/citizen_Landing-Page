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
import { FaHandHoldingWater } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { GiElectric } from 'react-icons/gi';
import axios from 'axios';

function WaterCitizenForm(props) {
    const [connectionThroughState, setConnectionThroughState] = useState()
    const [propertyNewCol, setPropertyNewCol] = useState(null) // uses for manage -> md:col-span-${propertyNewCol ? 2 : 3 }
    const [propertyType, setPropertyType] = useState(false) // used for show extra fileds,If Residencial
    const [applicantPropertyDetailsWidth, setApplicantPropertyDetailsWid] = useState(true) // used for resize filed width
    const [isSaf, setIsSaf] = useState(false) // used for if user is choosen to SAF
    const [isholdingProof, setIsholdingProof] = useState(false)// used for if user is choosen to Holding Proof

    const selectPropertyType = (e) => { //// used for show extra fileds,If Residencial
        if (e === "Residencial") {
            setPropertyType(true)
        } else {
            setPropertyType(false)
        }

    }


    const handleConnectionThroughState = (e) => {
        setPropertyNewCol(e)
        setConnectionThroughState(e)
        if (e === "") {
            props.fakeUserData(null)
            setApplicantPropertyDetailsWid(true)
            setIsSaf(false)
            setIsholdingProof(false)
        } else if (e === "saf") {
            setApplicantPropertyDetailsWid(false)
            setIsSaf(true)
            setIsholdingProof(false)
        } else if (e === "idProof") {
            props.fakeUserData(null)
            setPropertyNewCol(false)
            setApplicantPropertyDetailsWid(true)
            setIsSaf(false)
            setIsholdingProof(false)
        } else if (e === "holdingProof") {
            props.fakeUserData(null)
            setApplicantPropertyDetailsWid(false)
            setIsholdingProof(true)
            setIsSaf(false)
        } else {
            props.fakeUserData(null)
            setApplicantPropertyDetailsWid(false)
            setIsSaf(false)
            setIsholdingProof(false)
        }
    }


    const handleSafField = (value) => { // this is used for check and get fetch the data of saf number
        if (value == 5) {
            alert(`Valid SAF No. ${value}`)

            axios.get('https://dummyjson.com/users/5')
                .then((e) => {
                    let fakeUserData = {
                        "Name": e.data.firstName + e.data.lastName,
                        "FatherName": e.data.maidenName + e.data.lastName,
                        "Email": e.data.email,
                        "Mobile": e.data.phone,
                    }
                    props.fakeUserData(fakeUserData)
                })
        } else {
            alert(`Wrong SAF No. ${value}`)
        }
    }

    const handleHoldingField = (value) => { // this is used for check and get fetch the data of Holding filed
        if (value == 6) {
            alert(`Valid Holding No. ${value}`)

            axios.get('https://dummyjson.com/users/6')
                .then((e) => {
                    let fakeUserData = {
                        "Name": e.data.firstName + e.data.lastName,
                        "FatherName": e.data.maidenName + e.data.lastName,
                        "Email": e.data.email,
                        "Mobile": e.data.phone,
                    }
                    props.fakeUserData(fakeUserData)
                })
        } else {
            alert(`Wrong Holding No. ${value}`)
        }
    }

    const submitFormData = (formValue) => {
        props.formValue(formValue)

    }


    return (
        <>
            <Formik
                initialValues={{ connectionType: '', propertyType: '', connectionThrough: '', ownerType: '', categoryType : '', pipelineType : '', SAFNo : '', holdingNo : '', wardNo : '', totalArea : '', landmark : '', PINCode : '', address : '', khataNo : '', bindBookNo : '', accountNo : '', electricityCategoryType : '' }}
                
                validationSchema={Yup.object({
                    connectionType: Yup.string().required('Required'),
                    propertyType: Yup.string().required('Required.'),
                    connectionThrough: Yup.string().required('Required.'),
                    ownerType: Yup.string().required('Required.')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        submitFormData(values)
                        setSubmitting(false);
                    }, 400);
                }}

                render={({ values, setFieldValue }) => (
                    <Form>
                        <div className=''>
                            <div className=' bg-white pb-10'>
                                <div className='bg-white'>
                                    <div className='flex bg-gray-600 text-white md:text-left text-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'><FaHandHoldingWater className='mr-2 mt-1' />Apply Water Connection Form</div>
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

                                            <Field onClick={(e) => handleConnectionThroughState(e.target.value)} className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="connectionThrough">
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
                                    {propertyType &&
                                        <div className='md:flex'>
                                            <div className='m-3'>
                                                <p className='text-lg md:text-base md:font-medium font-normal'>Category Type</p>
                                                <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="categoryType">
                                                    <option value="">-- Category Type --</option>
                                                    <option value="apl">APL</option>
                                                    <option value="bpl">BPL</option>
                                                </Field>
                                                <p className='text-red-600 text-sm  absolute'><ErrorMessage name="categoryType" /></p>
                                            </div>
                                            <div className='m-3 ml-4'>
                                                <p className='text-lg md:text-base md:font-medium font-normal'>Pipeline Type</p>
                                                <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="pipelineType">
                                                    <option value="">-- Pipeline Type --</option>
                                                    <option value="NewPipeline">New Pipeline</option>
                                                    <option value="OldPipeline">Old Pipeline</option>
                                                </Field>
                                                <p className='text-red-600 text-sm  absolute'><ErrorMessage name="pipelineType" /></p>
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div className='bg-white'>
                                    <div className='flex bg-gray-600 text-white md:text-left text-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'><BiBuildingHouse className='mr-2 mt-1' />Applicant Property Details</div>
                                    <div className='md:flex'>
                                        <div className={`grid grid-cols-${applicantPropertyDetailsWidth ? 12 : 10}`}>
                                            {isSaf && <div className='m-3 col-span-2'>
                                                <label className='text-lg md:text-base md:font-medium font-normal'>SAF No</label>
                                                <Field onBlur={(e) => handleSafField(e.target.value)} className={`px-2 my-1 border w-80 md:w-${applicantPropertyDetailsWidth ? 60 : 52} h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl`} type="text" name="SAFNo"></Field>
                                                <p className='text-red-600 text-sm  absolute'><ErrorMessage name="SAFNo" /></p>
                                            </div>}
                                            {isholdingProof && <div className='m-3 col-span-2'>
                                                <label className='text-lg md:text-base md:font-medium font-normal'>Holding No</label>
                                                <Field onBlur={(e) => handleHoldingField(e.target.value)} className={`px-2 my-1 border w-80 md:w-${applicantPropertyDetailsWidth ? 60 : 52} h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl`} type="text" name="holdingNo"></Field>
                                                <p className='text-red-600 text-sm  absolute'><ErrorMessage name="holdingNo" /></p>
                                            </div>}
                                            <div className={`m-3 md:col-span-${propertyNewCol ? 2 : 3} col-span-12`}>
                                                <label className='text-lg md:text-base md:font-medium font-normal'>Ward No </label>
                                                <Field className={`px-2 my-1 border w-80 md:w-${applicantPropertyDetailsWidth ? 60 : 52} h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl`} as="select" name="wardNo">
                                                    <option value="">-- Select Ward No --</option>
                                                    <option value="1">1</option>
                                                    <option value="1A">1A</option>
                                                    <option value="2">2</option>
                                                    <option value="2A">2A</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </Field>
                                                <p className='text-red-600 text-sm absolute'><ErrorMessage name="wardNo" /></p>
                                            </div>
                                            <div className={`m-3 md:col-span-${propertyNewCol ? 2 : 3} col-span-12`}>
                                                <label className='text-lg md:text-base md:font-medium font-normal'>Total Area(in Sq. Ft) <span className='text-red-600'>*</span> </label>
                                                <Field className={`px-2 my-1 border w-80 md:w-${applicantPropertyDetailsWidth ? 60 : 52} h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl`} type="text" name="totalArea" />
                                                <p className='text-red-600 text-sm absolute'><ErrorMessage name="totalArea" /></p>
                                            </div>
                                            <div className={`m-3 md:col-span-${propertyNewCol ? 2 : 3} col-span-12`}>
                                                <label className='text-lg md:text-base md:font-medium font-normal'>Landmark<span className='text-red-600'>*</span></label>
                                                <Field className={`px-2 my-1 border w-80 md:w-${applicantPropertyDetailsWidth ? 60 : 52} h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl`} type="text" name="landmark"></Field>
                                                <p className='text-red-600 text-sm absolute'><ErrorMessage name="landmark" /></p>
                                            </div>
                                            <div className={`m-3 md:col-span-${propertyNewCol ? 2 : 3} col-span-12`}>
                                                <p className='text-lg md:text-base md:font-medium font-normal'>PIN Code</p>
                                                <Field className={`px-2 my-1 border w-80 md:w-${applicantPropertyDetailsWidth ? 60 : 52} h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl`} type="text" name="PINCode"></Field>
                                                <p className='text-red-600 text-sm  absolute'><ErrorMessage name="PINCode" /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`mx-3 md:col-span-12 col-span-12`}>
                                        <p className='text-lg md:text-base md:font-medium font-normal'>Address</p>
                                        <Field component="textarea" rows="2" className='p-2 my-1 border w-full outline-blue-600 border-black rounded-sm shadow-xl' name="address"></Field>
                                        <p className='text-red-600 text-sm  absolute'><ErrorMessage name="address" /></p>
                                    </div>
                                </div>

                                <div className='bg-white'>
                                    <div className='flex bg-gray-600 text-white md:text-left text-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'><GiElectric className='mt-1 mr-2' />Applicant Electricity Details</div>
                                    <div className='md:flex'>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Khata No </label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="khataNo" />
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="khataNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Bind Book No.<span className='text-red-600'>*</span> </label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="bindBookNo" />
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="bindBookNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Account No<span className='text-red-600'>*</span></label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" type="text" name="accountNo"></Field>
                                            <p className='text-red-600 text-sm absolute'><ErrorMessage name="accountNo" /></p>
                                        </div>
                                        <div className='m-3'>
                                            <label className='text-lg md:text-base md:font-medium font-normal'>Category Type</label>
                                            <Field className="px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl" as="select" name="electricityCategoryType">
                                                <option value="">-- Select Category Type --</option>
                                                <option value="DS">Residential - DS I/II</option>
                                                <option value="NDS">Commercial - NDS II/III</option>
                                                <option value="IS">Agriculture - IS I/II</option>
                                                <option value="LTS">Low Tension - LTS</option>
                                                <option value="HTS">High Tension - HTS</option>
                                            </Field>
                                            <p className='text-red-600 text-sm  absolute'><ErrorMessage name="electricityCategoryType" /></p>
                                        </div>

                                    </div>
                                </div>


                                <div className='grid col-span-12 justify-items-center'>
                                    <div>
                                        <button className='bg-green-500 px-4 py-1 rounded-sm shadow-md hover:shadow-2xl hover:bg-green-400' type="submit">Save and Next</button>                                        
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
