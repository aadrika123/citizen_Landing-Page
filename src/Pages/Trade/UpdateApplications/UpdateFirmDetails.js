import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles';
import axios from 'axios';
import { baseUrlLocal, baseUrl } from '../Constants';


function FirmDetails(props) {

    const { applicationType, colorCode, currentStep, currentStepFun, collectFormDataFun, firmStepFun, firmStep, colorCodeFun } = props.values;
    // const [applicationType, setapplicationType] = useState(1);
    const [propertyData, setpropertyData] = useState({})

    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)
    const [establishmentDate, setestablishmentDate] = useState()

    const validationSchema = yup.object(

        applicationType == 1 ? {
            wardNo: yup.string().required('Select ward'),
            holdingNo: yup.string().required('Enter Holding No.'),
            newWardNo: yup.string().required('Select New Ward.'),
            areaSqft: yup.string().required('Enter Area of the premises'),
            firmName: yup.string().required('Enter Name of the firm'),
            firmEstdDate: yup.string().required('Choose establishment date'),
            businessAddress: yup.string().required('Enter Business address'),
            landmark: yup.string().required('Enter landmark'),
            pincode: yup.string().required('Enter pincode'),
            premisesOwner: yup.string().required('Enter premises owner name'),
            businessDescription: yup.string().required('Enter Business Description'),


        } : {
            wardNo: yup.string().required('Select ward'),
        })

    console.log('license data on owner details', props.values.licenseDataForUpdate[0].firmDetails
    );
    const { area_sqft, business_address, business_description, firm_estd_date, firm_name, holding_no, landmark, new_ward_no, pincode, premises_owner, ward_no } = props.values.licenseDataForUpdate[0].firmDetails[0];

    // const initialFirmDetails =
    // {
    //     wardNo: ward_no,
    //     holdingNo: holding_no,
    //     newWardNo: new_ward_no,
    //     areaSqft: area_sqft,
    //     firmName: firm_name,
    //     firmEstdDate: firm_estd_date,
    //     businessAddress: business_address,
    //     landmark: landmark,
    //     pincode: pincode,
    //     premisesOwner: premises_owner,
    //     businessDescription: business_description,
    // };

    const initialValues = applicationType == 1 ? {

        wardNo: ward_no,
        holdingNo: holding_no,
        newWardNo: new_ward_no,
        areaSqft: area_sqft,
        firmName: firm_name,
        firmEstdDate: firm_estd_date,
        businessAddress: business_address,
        landmark: landmark,
        pincode: pincode,
        premisesOwner: premises_owner,
        businessDescription: business_description,
    }

        : {
            wardNo: 1,
            holdingNo: 'abcdefgehijklmn',
            // newWardNo: '2021/04/12',
            areaSqft: 200,
            firmName: 'myfirmName',
            firmEstdDate: '2022-03-16',
            businessAddress: 'my business description',
            landmark: 'my given landmark',
            pincode: '999999',
            premisesOwner: ' the house owner',
            businessDescription: 'my business description',
        }


    const onSubmit = (values, resetForm) => {
        alert(values);
        console.log('Firm deatils ', values)
        collectFormDataFun('firmDetails', values) //sending BasicDetails data to parent to store all form data at one container
        firmStepFun(3) //forwarding to next form level
        currentStepFun(3)
        colorCodeFun(2)

    }

    const handleBack = () => {
        firmStepFun(1)
    }

    const WarNoOptions = [
        { option: '1', value: 1 },
        { option: '2', value: 2 },
        { option: '3', value: 2 },
        { option: '3A', value: 2 },

    ];
    const FirmTypeOptions = [
        { option: 'Proprietorship', value: 1 },
        { option: 'Partnership', value: 2 },
        { option: 'Pvt Ltd', value: 3 },
        { option: 'Public Ltd', value: 4 },
        { option: 'Other', value: 5 },
    ];
    const PremiseOwnershipTypeOptions = [
        { option: 'Own Property', value: 1 },
        { option: 'On Rent', value: 2 },
        { option: 'On Lease', value: 3 },
    ];
    const getPropertyDetails = (holdingNo) => {
        if (holdingNo.length == 15) {
            console.log('getting holding no', holdingNo);
            axios.get(baseUrlLocal() + 'prop_data/1')
                .then(function (response) {
                    console.log('property details ', response.data);
                    setpropertyData(response.data);
                })
        } else {
            console.log('proper holding no is required');
        }

    }

    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        { name === 'applyWith' && (value === '1' ? setMobileTowerStatusToggle(true) : setMobileTowerStatusToggle(false)) }
        { name === 'holdingNo' && getPropertyDetails(value) }
        // { name === 'hoardingStatus' && (value === 'yes' ? setHoardingStatusToggle(true) : setHoardingStatusToggle(false)) }
        // { name === 'petrolPumpStatus' && (value === 'yes' ? setPetrolPumpStatusToggle(true) : setPetrolPumpStatusToggle(false)) }


    };
    return (
        <>
            <div className={`absolute w-full`} >
                <h1 className=' mb-2 font-serif font-semibold text-gray-600'><FaHome className="inline mr-2" />Firm Details (update)</h1>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form onChange={handleOnChange}>
                        {applicationType == 1 ?
                            <>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Ward No</label>
                                        <Field as="select" name="wardNo" className={`${commonInputStyle} cursor-pointer `}>
                                            <option value="" disabled selected>SELECT</option>
                                            {
                                                WarNoOptions.map((data) => (
                                                    <option value={data.value}>{data.option}</option>
                                                ))
                                            }

                                        </Field>
                                        <span className={`${inputErrorStyle}`}> <ErrorMessage name='wardNo' />
                                        </span>

                                    </div>


                                    {/* Notice no fields hidden  */}

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Holding No. </label>
                                        <Field type="text" name="holdingNo" className={`${commonInputStyle} cursor-pointer `} placeholder="Enter Holding No" />

                                        <span className={`${inputErrorStyle}`}> <ErrorMessage name='holdingNo' />
                                        </span>
                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>New Ward No.</label>
                                        <Field as="select" name="newWardNo" className={`${commonInputStyle} cursor-pointer `} >
                                            <option value="" disabled selected>select ward no.</option>
                                            {
                                                WarNoOptions.map((data) => (
                                                    <option value={data.value}>{data.option}</option>
                                                ))
                                            }
                                        </Field>
                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='newWardNo' />
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Area (sqft).</label>
                                        <Field type="text" name="areaSqft" className={`${commonInputStyle} cursor-pointer `} />

                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='areaSqft' />
                                        </span>
                                    </div>

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Firm Name.</label>
                                        <Field type="text" name="firmName" className={`${commonInputStyle} cursor-pointer `} />

                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='firmName' />
                                        </span>
                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Firm Establishment Date</label>
                                        <Field type="date" name="firmEstdDate" className={`${commonInputStyle} cursor-pointer `} />

                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='firmEstdDate' />
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Business Address</label>
                                        <Field type="text" name="businessAddress" className={`${commonInputStyle} cursor-pointer `}  />

                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='businessAddress' />
                                        </span>
                                    </div>

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Landmark</label>
                                        <Field type="text" name="landmark" className={`${commonInputStyle} cursor-pointer `}  />

                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='landmark' />
                                        </span>
                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Pin Code</label>
                                        <Field type="text" name="pincode" className={`${commonInputStyle} cursor-pointer `}  />

                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='pincode' />
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
                                    <div className={`${inputContainerStyle} `}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Owner of Business Premises</label>
                                        <Field type="text" name="premisesOwner" className={`${commonInputStyle} cursor-pointer `} />

                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='premisesOwner' />
                                        </span>
                                    </div>

                                    <div className={` col-span-2`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Business Description</label>
                                        <Field as="textarea" name="businessDescription" className={`${commonInputStyle}  cursor-pointer `}  />

                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='businessDescription' />
                                        </span>
                                    </div>

                                </div>
                                <div className="grid grid-cols-1">
                                    {/* <div></div> */}
                                    {/* <div className="col-span-4 grid grid-cols-1">
                                <div className='md:px-10'>
                                </div> */}
                                    <div className='md:px-10 text-right h-36 '>

                                        <button type="button" onClick={handleBack} className="float-left ml-16 mb-8 mt-4 px-12 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">&#60;&#60; Back </button>
                                        <button type="submit" className="float-right ml-16 mb-8 mt-4 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next&#62;&#62; </button>
                                    </div>
                                    {/* </div> */}

                                </div>
                            </> :
                            <>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Ward No</label>
                                        <input type="hidden" name="wardNo" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{initialValues.wardNo}</div>
                                    </div>

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Holding No. </label>
                                        <Field type="text" name="holdingNo" className={`${commonInputStyle} cursor-pointer `} placeholder="Enter Holding No" />

                                        <span className={`${inputErrorStyle}`}> <ErrorMessage name='holdingNo' />
                                        </span>
                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>New Ward No.</label>
                                        <input type="hidden" name="newWardNo" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{initialValues.wardNo}</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Area (sqft).</label>
                                        <input type="hidden" name="areaSqft" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{initialValues.areaSqft}</div>
                                    </div>

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Firm Name.</label>
                                        <input type="hidden" name="firmName" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{initialValues.firmName}</div>

                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Firm Establishment Date</label>
                                        <input type="hidden" name="firmEstdDate" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{initialValues.firmEstdDate}</div>

                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Business Address</label>
                                        <input type="hidden" name="businessAddress" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{initialValues.businessAddress}</div>
                                    </div>

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Landmark</label>
                                        <input type="hidden" name="landmark" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{initialValues.landmark}</div>

                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Pin Code</label>
                                        <input type="hidden" name="pincode" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{initialValues.wardNo}{initialValues.pincode}</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
                                    <div className={`${inputContainerStyle} `}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Owner of Business Premises</label>
                                        <input type="hidden" name="premisesOwner" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{initialValues.premisesOwner}</div>
                                    </div>

                                    <div className={` col-span-2`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Business Description</label>
                                        <input type="hidden" name="businessDescription" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="border bg-gray-400 px-4 py-2.5 rounded-lg">{initialValues.businessDescription}</div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-1">
                                    <div className='md:px-10 text-right h-36 '>
                                        <button type="button" onClick={handleBack} className="float-left ml-16 mb-8 mt-4 px-12 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">&#60;&#60; Back </button>
                                        <button type="submit" className="float-right ml-16 mb-8 mt-4 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next&#62;&#62; </button>
                                    </div>

                                </div>
                            </>
                        }
                    </Form>
                </Formik>

            </div>

        </>
    )
}

export default FirmDetails