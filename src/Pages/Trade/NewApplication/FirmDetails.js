
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Anshuman
//    Version - 1.0
//    Date - 19 july 2022
//    Updated On - 13/Aug/2022 - API Integrated
//    Revision - 1
//    Project - JUIDCO
//    Component  - Trade (closed)
//    DESCRIPTION - New application (FirmDetails) Component
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useRef } from 'react';
import { FaHome } from 'react-icons/fa';
import { useFormik, Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as yup from 'yup';
// import { getCurrentDate, allowFloatInput } from 'Components/Common/PowerUps/PowerupFunctions';
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles'
import axios from 'axios';
import { baseUrlLocal, baseUrl } from '../Constants';
// import { MultiSelect } from "react-multi-select-component";
import Multiselect from 'multiselect-react-dropdown';
import { TRADE, HEADER } from '../tradeComponent/TradeApiListFile';
import { Debounce } from '../tradeComponent/TradeDebounce';

function FirmDetails(props) {

    const { applicationType, colorCode, currentStep, currentStepFun, collectFormDataFun, firmStepFun, firmStep, colorCodeFun, fieldData, allFormData, showLoader } = props.values;
    const [minHeight, setminHeight] = useState(false)
    const [propertyData, setpropertyData] = useState({})
    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)
    // const [establishmentDate, setestablishmentDate] = useState(getCurrentDate());
    let natureOfBusinessSelectedOptions = [];
    const [tocState, settocState] = useState(true);
    const handleHeight = () => {
        minHeight == true ? setminHeight(false) : setminHeight(true);
    }
    const onSelectFun = (selectedList, selectedItem) => {
        // console.log('selectedItems ', selectedList)
        formik.values.natureOfBusiness = selectedList;
    }

    const onRemoveFun = (selectedList, removedItem) => {
        // console.log("selected list index ", selectedList)
        // console.log("removedList index ", removedItem)
        formik.values.natureOfBusiness = selectedList
    }

    // validation rules for form
    const validationSchema =
        yup.object(
            {
                wardNo: yup.string().required('Select ward'),
                // holdingNo: yup.string().required('Enter Holding No.'),
                newWardNo: yup.string().required('Select New Ward.'),
                areaSqft: yup.number().required('Enter Area of the premises'),
                firmName: yup.string().required('Enter Name of the firm'),
                firmEstdDate: yup.date().required('Choose establishment date'),
                businessAddress: yup.string().required('Enter Business address'),
                landmark: yup.string().required('Enter landmark'),
                pincode: yup.number().required('Enter pincode'),
                premisesOwner: yup.string().required('Enter premises owner name'),
                businessDescription: yup.string().required('Enter Business Description'),
                // natureOfBusiness: yup.string().required('Select Nature of Business'),

            }
        );

    const initialValues =
    {
        wardNo: '',
        holdingNo: '',
        newWardNo: '',
        areaSqft: '',
        firmName: '',
        firmEstdDate: '',
        businessAddress: '',
        landmark: '',
        pincode: '',
        premisesOwner: '',
        businessDescription: '',
        natureOfBusiness: '',
        tocStatus: 0,
        propDtlId: ''

    }
    const formik = useFormik(
        {
            initialValues: initialValues,
            onSubmit: (values, resetForm) => {
                alert(values);
                console.log('Firm deatils ', values)
                if (values.natureOfBusiness != null && values.natureOfBusiness != '') {
                    collectFormDataFun('firmDetails', values, 0) //sending BasicDetails data to parent to store all form data at one container
                    firmStepFun(3) //forwarding to next form level
                    currentStepFun(3)
                    colorCodeFun(2)
                } else {
                    alert('nature of business cann\'t be empty');
                }

            }
            , validationSchema
        });

    let nob = [];
    if (applicationType == 1) {
        // alert("applicationType", applicationType)
        let tempArray = {};
        console.log("nature of business ", fieldData?.natureOfBusiness);
        fieldData.natureOfBusiness?.forEach(element => {
            tempArray = { name: '(' + element.trade_code + ')' + element.trade_item, id: element.id }
            nob.push(tempArray);
        });
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
    const validateHolding = (e) => {
        // alert("hello");
        const holdingNo = e.target.value;
        if (holdingNo != '') {
            // alert(holdingNo)
            showLoader(true)
            axios.post(TRADE.VALIDATE_HOLDING, { holdingNo: holdingNo }, HEADER)
                .then(function (response) {
                    console.log('validate holding ', response.data);
                    if (response.data.status) {
                        setTimeout(() => {
                            showLoader(false)
                        }, 500)
                        setformValues(response.data.data.property)
                    } else {
                        alert("holding no not found !");
                        formik.setFieldValue("holdingNo", '');
                        showLoader(false)
                    }
                    // setpropertyData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const setformValues = (vals) => {
        formik.setFieldValue('businessAddress', vals.prop_address)
        formik.setFieldValue('pincode', vals.prop_pin_code)
        formik.setFieldValue('premisesOwner', vals.owner_name)
    }

    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        { name === 'applyWith' && (value === '1' ? setMobileTowerStatusToggle(true) : setMobileTowerStatusToggle(false)) }
        // { name === 'holdingNo' && validateHolding(value) }
        { name === 'tocStatus' && handleTocStatus(event) }

    };

    const handleTocStatus = (event) => {
        // console.log(event.target.checked)
        if (event.target.checked === true) {
            settocState(false);
            formik.setFieldValue('tocStatus', 1)
            formik.setFieldValue('natureOfBusiness', [{ id: 187 }])
        } else {
            settocState(true);
            formik.setFieldValue('tocStatus', 0);
            formik.setFieldValue('natureOfBusiness', '')
        }
    }



    return (
        <>
            <div className={`absolute w-full`} >
                <h1 className=' mb-2 font-serif font-semibold text-gray-600'><FaHome className="inline mr-2" />Firm Details</h1>

                <form onChange={handleOnChange} onSubmit={formik.handleSubmit} autoComplete="off" >
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Ward No</label>
                                <select {...formik.getFieldProps('wardNo')} className={`${commonInputStyle} cursor-pointer `}>
                                    <option value="" selected>SELECT</option>
                                    {
                                        fieldData.wardList?.map((data) => (
                                            <option value={data.id}>{data.ward_no}</option>
                                        ))
                                    }
                                </select>
                                <span className={`${inputErrorStyle}`}>
                                    {formik.touched.wardNo && formik.errors.wardNo ? formik.errors.wardNo : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}>
                                    <small className=" text-sm font-semibold text-red-600 inline "> </small> Holding No.
                                </label>
                                <input type="text" name="holdingNo" className={`${commonInputStyle} cursor-pointer `} onBlur={validateHolding} value={formik.values.holdingNo} onChange={formik.handleChange} placeholder="eg: HOL/12345" />
                                <span className={`${inputErrorStyle}`}>
                                    {formik.touched.holdingNo && formik.errors.holdingNo ? formik.errors.holdingNo : null}
                                </span>
                                <input type="hidden" name='propDtlId' value={formik.values.propDtlId} />
                            </div>
                            <div className={`${inputContainerStyle} overflow-y-scroll`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>New Ward No.</label>
                                <select  {...formik.getFieldProps('newWardNo')} className={`${commonInputStyle} cursor-pointer `} >
                                    <option value="" selected>select ward no.</option>
                                    {
                                        fieldData.wardList?.map((data) => (
                                            <option className="text-white bg-teal-400 border-b-2 hover:bg-teal-500" value={data.id}>{data.ward_no}</option>
                                        ))
                                    }
                                </select>
                                <span className={`${inputErrorStyle}`}>
                                    {/* <ErrorMessage name='newWardNo' /> */}
                                    {formik.touched.newWardNo && formik.errors.newWardNo ? formik.errors.newWardNo : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Total Area (sqft).</label>
                                <input type="text" name="areaSqft" className={`${commonInputStyle} cursor-pointer `} placeholder="Enter area in sqft" value={formik.values.areaSqft} onChange={formik.handleChange} />

                                <span className={`${inputErrorStyle}`}>
                                    {/* <ErrorMessage name='areaSqft' /> */}
                                    {formik.touched.areaSqft && formik.errors.areaSqft ? formik.errors.areaSqft : null}
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Firm Name.</label>
                                <input type="text" name="firmName" placeholder="Enter Firm Name" className={`${commonInputStyle} cursor-pointer `} value={formik.values.firmName} onChange={formik.handleChange} />

                                <span className={`${inputErrorStyle}`}>
                                    {/* <ErrorMessage name='firmName' /> */}
                                    {formik.touched.firmName && formik.errors.firmName ? formik.errors.firmName : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className="text-sm font-semibold text-red-600 inline ">*</small>Firm Establishment Date</label>
                                <input type="date" name="firmEstdDate" placeholder="Firm Establishment Date" className={`${commonInputStyle} cursor-pointer `} value={formik.values.firmEstdDate} onChange={formik.handleChange} />

                                <span className={`${inputErrorStyle}`}>
                                    {/* <ErrorMessage name='firmEstdDate' /> */}
                                    {formik.touched.firmEstdDate && formik.errors.firmEstdDate ? formik.errors.firmEstdDate : null}

                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Business Address</label>
                                <input type="text" name="businessAddress" className={`${commonInputStyle} cursor-pointer `} value={formik.values.businessAddress} onChange={formik.handleChange} placeholder="Business Address" />

                                <span className={`${inputErrorStyle}`}>
                                    {/* <ErrorMessage name='businessAddress' /> */}
                                    {formik.touched.businessAddress && formik.errors.businessAddress ? formik.errors.businessAddress : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className="text-sm font-semibold text-red-600 inline ">*</small>Landmark</label>
                                <input type="text" name="landmark" className={`${commonInputStyle} cursor-pointer `} value={formik.values.landmark} onChange={formik.handleChange} placeholder="landmark" />

                                <span className={`${inputErrorStyle}`}>
                                    {/* <ErrorMessage name='landmark' /> */}
                                    {formik.touched.landmark && formik.errors.landmark ? formik.errors.landmark : null}
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">

                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Pin Code</label>
                                <input type="text" name="pincode" placeholder="pincode" className={`${commonInputStyle} cursor-pointer `} value={formik.values.pincode} onChange={formik.handleChange} />

                                <span className={`${inputErrorStyle}`}>
                                    {/* <ErrorMessage name='pincode' /> */}
                                    {formik.touched.pincode && formik.errors.pincode ? formik.errors.pincode : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle} `}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Owner of Business Premises</label>
                                <input type="text" name="premisesOwner" placeholder="premisesOwner" className={`${commonInputStyle} cursor-pointer `} value={formik.values.premisesOwner} onChange={formik.handleChange} />

                                <span className={`${inputErrorStyle}`}>
                                    {/* <ErrorMessage name='premisesOwner' /> */}
                                    {formik.touched.premisesOwner && formik.errors.premisesOwner ? formik.errors.premisesOwner : null}
                                </span>
                            </div>
                            <div className={`form-group col-span-2 md:px-4 `}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Business Description</label>
                                <textarea name="businessDescription" placeholder="businessDescription" className={`border h-10 w-full rounded shadow-lg   `} value={formik.values.businessDescription} onChange={formik.handleChange} >

                                </textarea>

                                <p className={`${inputErrorStyle}`}>
                                    {/* <ErrorMessage name='businessDescription' /> */}
                                    {formik.touched.businessDescription && formik.errors.businessDescription ? formik.errors.businessDescription : null}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                            <div className={`form-group mb-6 md:px-4 col-span-3`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Nature of Business</label>
                                <div className={`${tocState ? 'grid' : 'hidden'} w-full  border`} onClick={handleHeight}>
                                    {/* <h1>Select Fruits</h1> */}
                                    <Multiselect
                                        options={nob.reverse()}
                                        selectedValues={natureOfBusinessSelectedOptions}
                                        onSelect={onSelectFun}
                                        onRemove={onRemoveFun}
                                        displayValue="name"
                                        name="natureOfBusiness"
                                        style={{ searchBox: { border: 'none', fontSize: '10px', minHeight: minHeight ? '50px' : '' } }}
                                        showArrow="true"
                                        selectionLimit="3"
                                        closeIcon="circle"
                                        onChange={formik.handleChange}
                                        value={formik.values.natureOfBusiness}
                                        autoComplete={false}
                                    />
                                    {/* <select {...formik.getFieldProps('natureOfBusiness')} id="" className='form-control w-full' multiple>
                                            <option value="">SELECT</option>
                                            {nautreOfBusinessOptions.map((item)=>{
                                                <option value={item.id}> {item.name}</option>
                                            })}
                                        </select> */}
                                    <span className={`${inputErrorStyle}`}>
                                        {/* <ErrorMessage name='natureOfBusiness' /> */}
                                    </span>
                                </div>

                            </div>
                            <div className='col-span-1'>
                                <input type="checkbox" name='tocStatus' onChange={formik.handleChange} value={formik.values.tocStatus} />
                                <label className={`${inputLabelStyle} text-xs`}>
                                    <small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>check if tobacco
                                </label>

                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className={`${inputContainerStyle}`}>
                                <button type="button" onClick={handleBack} className="float-left ml-16 mb-8 mt-4 px-12 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">&#60;&#60; Back </button>
                                <button type="submit" className="float-right ml-16 mb-8 mt-4 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next&#62;&#62; </button>
                            </div>
                        </div>
                    </>

                </form>

            </div>

        </>
    )
}

export default FirmDetails