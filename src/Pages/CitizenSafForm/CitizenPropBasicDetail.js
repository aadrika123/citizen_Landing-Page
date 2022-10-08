//////////////////{*****}//////////////////////////////////////////
// >Author - swati sharma
// >Version - 1.0
// >Date - 7 oct 2022
// >Revision - 1
// >Project - JUIDCO
// >Component  - CitizenPropBasicDetail
// >DESCRIPTION - CitizenPropBasicDetail Component
//////////////////{*****}//////////////////////////////////////////

import { useState, useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { getCurrentDate, allowFloatInput } from '../../components/Common/PowerUps/PowerupFunctions'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../../components/Common/CommonTailwind/CommonTailwind'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function CitizenPropBasicDetail(props) {


    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)

    console.log("passing master data to basic detail form", props.preFormData)

    // const commonInputStyle = `form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md`
    // const inputContainerStyle = `form-group col-span-4 md:col-span-1 mb-6 md:px-4`

    const validationSchema = yup.object({
        wardNo: yup.string().required('Select ward').max(50, 'Enter maximum 50 characters'),
        newWardNo: yup.string().required('Select new ward'),
        ownerShiptype: yup.string().required('Select ownership type'),
        propertyType: yup.string().required('Select property'),
        zone: yup.string(),
        mobileTowerStatus: yup.string().required('Select mobile tower status'),
        hoardingStatus: yup.string().required('Select hoarding status'),
        petrolPumpStatus: yup.string().required('Select petrol pump status'),
        waterHarvestingStatus: yup.string().required('Select water harvesting status'),
        mobileTowerArea: yup.string('enter numbers only').when('mobileTowerStatus', {
            is: 'yes',
            then: yup.string().required('Field is required')
        }).min(1, 'enter minimum ').max(10, 'Enter max 10 digit'),
        hoardingArea: yup.string().when('hoardingStatus', {
            is: 'yes',
            then: yup.string().required('Field is required')
        }).min(1, 'enter minimum ').max(10, 'Enter max 10 digit'),
        petrolPumpArea: yup.string().when('petrolPumpStatus', {
            is: 'yes',
            then: yup.string().required('Field is required')
        }).min(1, 'enter minimum ').max(10, 'Enter max 10 digit'),
        mobileTowerDate: yup.date().when('mobileTowerStatus', {
            is: 'yes',
            then: yup.date().required('Field is required')
        }),
        hoardingDate: yup.date().when('hoardingStatus', {
            is: 'yes',
            then: yup.date().required('Field is required')
        }),
        petrolPumpDate: yup.date().when('petrolPumpStatus', {
            is: 'yes',
            then: yup.date().required('Field is required')
        }),

    })

    const navigate = useNavigate()
    const initialValues = {
        wardNo: '',
        newWardNo: '',
        ownerShiptype: '',
        propertyType: '',
        zone: '',
        mobileTowerStatus: 'no',
        hoardingStatus: 'no',
        petrolPumpStatus: 'no',
        waterHarvestingStatus: 'no',
        mobileTowerArea: '',
        hoardingArea: '',
        petrolPumpArea: '',
        mobileTowerDate: getCurrentDate(),
        hoardingDate: getCurrentDate(),
        petrolPumpDate: getCurrentDate()
    }

    const onSubmit = (values, resetForm) => {
        console.log('basic deatils ', values)
        props.collectFormDataFun('basicDetails', values) //sending BasicDetails data to parent to store all form data at one container
        props.nextFun(1) //forwarding to next form level
    }

    const seleOptions = [
        { option: 'one', value: 1 },
        { option: 'two', value: 2 },
        { option: 'three', value: 3 },
        { option: 'four', value: 4 },
        { option: 'five', value: 5 },
        { option: 'six', value: 6 },
    ]
    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        { name === 'mobileTowerStatus' && ((value === 'yes') ? setMobileTowerStatusToggle(true) : setMobileTowerStatusToggle(false)) }
        { name === 'hoardingStatus' && ((value === 'yes') ? setHoardingStatusToggle(true) : setHoardingStatusToggle(false)) }
        { name === 'petrolPumpStatus' && ((value === 'yes') ? setPetrolPumpStatusToggle(true) : setPetrolPumpStatusToggle(false)) }

        // //allow restricted inputs
        // { name == 'mobileTowerArea' && formik.setFieldValue("mobileTowerArea", allowFloatInput(value, formik.values.mobileTowerArea, 20)) } //(currentValue,oldValue,max,isCapital)
        // { name == 'hoardingArea' && formik.setFieldValue("hoardingArea", allowFloatInput(value, formik.values.hoardingArea, 20, true)) }
        // { name == 'petrolPumpArea' && formik.setFieldValue("petrolPumpArea", allowFloatInput(value, formik.values.petrolPumpArea, 20)) }


    };
    return (
        <>
            <h1 className='mt-6 mb-2 font-serif font-semibold absolute text-gray-600'><FaHome className="inline mr-2" />Basic Details</h1>
            <div className="block p-4 w-full md:py-6 shadow-lg bg-white border border-gray-200  mx-auto absolute top-14">

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form onChange={handleOnChange}>
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className="col-span-4 grid grid-cols-1 md:grid-cols-5">
                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle}`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Ward No</label>
                                    <Field as="select" name="wardNo" className={`${commonInputStyle} cursor-pointer `}>
                                        <option value="" disabled selected>select ward</option>

                                        {
                                            props.preFormData?.ward_master.map((data) => (
                                                <option value={data.id}>{data.ward_name}</option>
                                            ))
                                        }

                                    </Field>
                                    <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='wardNo' />
                                    </span>
                                </div>
                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle}`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>New Ward No</label>
                                    <Field as="select" name="newWardNo" className={`${commonInputStyle} cursor-pointer `} >
                                        <option value="" disabled selected>select new ward</option>

                                        {
                                            props?.preFormData?.ward_master.map((data) => (
                                                <option value={data.id}>{data.ward_name}</option>
                                            ))
                                        }
                                    </Field>
                                    <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='newWardNo' />
                                    </span>
                                </div>
                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle}`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Ownership Type</label>
                                    <Field as="select" name="ownerShiptype" className={`${commonInputStyle} cursor-pointer `}
                                    >
                                        <option value="" disabled selected>select ownership type</option>
                                        {
                                            props?.preFormData?.ownership_types.map((data) => (
                                                <option value={data.id}>{data.ownership_type}</option>
                                            ))
                                        }
                                    </Field>
                                    <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='ownerShiptype' />
                                    </span>
                                </div>
                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle}`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Property Type</label>
                                    <Field as="select" name="propertyType" className={`${commonInputStyle} `}
                                    >
                                        <option value="" disabled selected>select property type</option>

                                        {
                                            props?.preFormData?.property_type.map((data) => (
                                                <option value={data.id}>{data.property_type}</option>
                                            ))
                                        }
                                    </Field>
                                    <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='propertyType' />
                                    </span>
                                </div>
                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle}`}>Zone</label>
                                    <Field as="select" name="zone" className={`${commonInputStyle} cursor-pointer `}
                                    >
                                        <option value="" disabled selected>select zone</option>
                                        <option value="1">Zone-1</option>
                                        <option value="2">Zone-2</option>

                                    </Field>
                                    <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='zone' />
                                    </span>
                                </div>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle}`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Property has Mobile Tower(s) ?</label>
                                <Field as="select" name="mobileTowerStatus" className={`${commonInputStyle} cursor-pointer `}
                                >
                                    <option value="no" selected>No</option>
                                    <option value="yes">Yes</option>
                                </Field>
                                <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='mobileTowerStatus' />
                                </span>
                            </div>
                            <div className={`col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3`}>
                                <div className={`${inputContainerStyle}`}>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Area Covered</label>
                                    <Field disabled={!mobileTowerStatusToggle} name="mobileTowerArea" type="text" className={`${commonInputStyle} ${!mobileTowerStatusToggle && 'bg-gray-300 opacity-30'}`} />
                                    <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='mobileTowerArea' />
                                    </span>
                                </div>

                                <div className={`${inputContainerStyle}`}>

                                    <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Installation Date</label>

                                    <Field disabled={!mobileTowerStatusToggle} name="mobileTowerDate" type="date" className={`${commonInputStyle} ${!mobileTowerStatusToggle && 'bg-gray-300 opacity-30'}`} placeholder='dd-mm-yyyy' min={'2021-05-20'} max={'2024-05-25'}
                                    />
                                    <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='mobileTowerDate' />
                                    </span>
                                </div>
                            </div>
                            <div className="col-span-4 grid grid-cols-4">
                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle}`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Property has Hoarding Board(s) ?</label>
                                    <Field as="select" name="hoardingStatus" className={`${commonInputStyle} cursor-pointer `}
                                    >
                                        <option value="no" selected>No</option>
                                        <option value="yes">Yes</option>
                                    </Field>
                                    <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='hoardingStatus' />
                                    </span>
                                </div>


                                <div className={`col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3`}>
                                    <div className={`${inputContainerStyle}`}>

                                        <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Area</label>
                                        <Field disabled={!hoardingStatusToggle} name="hoardingArea" type="text" className={`${commonInputStyle} ${!hoardingStatusToggle && 'bg-gray-300 opacity-30'}`} />
                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='hoardingArea' />
                                        </span>
                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className="form-check-label text-gray-800"><small className="block mt-1 text-xs text-gray-600 inline "><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Installation Date</small></label>
                                        <Field disabled={!hoardingStatusToggle} name="hoardingDate" type="date" className={`${commonInputStyle} ${!hoardingStatusToggle && 'bg-gray-300 opacity-30'}`}
                                        />
                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='hoardingDate' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 grid grid-cols-4">
                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle}`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Is property a Petrol Pump ?</label>
                                    <Field as="select" name="petrolPumpStatus" className={`${commonInputStyle} cursor-pointer `}
                                    >
                                        <option value="no" selected>No</option>
                                        <option value="yes">Yes</option>
                                    </Field>
                                    <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='petrolPumpStatus' />
                                    </span>
                                </div>

                                <div className={`col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3`}>
                                    <div className={`${inputContainerStyle}`}>

                                        <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Area</label>
                                        <Field disabled={!petrolPumpStatusToggle} name="petrolPumpArea" type="text" className={`${commonInputStyle} ${!petrolPumpStatusToggle && 'bg-gray-300 opacity-30'}`} />
                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='petrolPumpArea' />
                                        </span>
                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className="form-check-label text-gray-800"><small className="block mt-1 text-xs text-gray-600 inline "><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Completion Date</small></label>
                                        <Field disabled={!petrolPumpStatusToggle} name="petrolPumpDate" type="date" className={`${commonInputStyle} ${!petrolPumpStatusToggle && 'bg-gray-300 opacity-30'}`}
                                        />
                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='petrolPumpDate' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle}`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Rainwater harvesting provision ?</label>
                                <Field as="select" name="waterHarvestingStatus" className={`${commonInputStyle} cursor-pointer `}
                                >
                                    <option value="no" selected>No</option>
                                    <option value="yes">Yes</option>
                                </Field>
                                <span className={`${inputErrorStyle}`}>                                   <ErrorMessage name='waterHarvestingStatus' />
                                </span>
                            </div>




                            <div></div>
                            <div className="col-span-4 grid grid-cols-2">
                                <div className='md:px-10'>
                                </div>
                                <div className='md:px-10 text-right'>
                                    <button type="submit" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next</button>
                                </div>
                            </div>
                            <div className="col-span-4 grid grid-cols-2">

                            </div>

                        </div>

                    </Form>
                </Formik>

            </div>
        </>
    )
}

export default CitizenPropBasicDetail