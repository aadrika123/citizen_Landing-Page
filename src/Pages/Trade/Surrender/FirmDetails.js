
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
import { TRADE,HEADER } from '../tradeComponent/TradeApiListFile';
import { Debounce } from '../tradeComponent/TradeDebounce';

function FirmDetails(props) {

    const { applicationType, colorCode, currentStep, currentStepFun, collectFormDataFun, firmStepFun, firmStep, colorCodeFun, allFormData, showLoader } = props.values;
    const {ward_mstr_id,holding_no,new_ward_mstr_id,area_in_sqft,firm_name,establishment_date,address,landmark,pin_code,premises_owner_name,brife_desp_firm,nature_of_bussiness,tobacco_status,prop_dtl_id} = props.values.licenseData?.licenceDtl;
    
    const [minHeight, setminHeight] = useState(false)
    const [propertyData, setpropertyData] = useState({})
    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)
    const [establishmentDate, setestablishmentDate] = useState();
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
    const validationSchema =
        yup.object(
            {
                holdingNo: yup.string().required('Select holdingNo'),
            }
        );

   
    
    const initialValues = {
        wardNo: ward_mstr_id,
        holdingNo: holding_no,
        newWardNo: new_ward_mstr_id,
        areaSqft: area_in_sqft,
        firmName: firm_name,
        firmEstdDate: establishment_date,
        businessAddress: address,
        landmark: landmark,
        pincode: pin_code,
        premisesOwner: premises_owner_name,
        businessDescription: brife_desp_firm,
        natureOfBusiness: nature_of_bussiness,
        tocStatus: tobacco_status,
        propDtlId: prop_dtl_id
    };

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
                        // setformValues(response.data.data.property)
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
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Ward No</label>
                                <input type="hidden" name="wardNo" value={formik.values.wardNo} className={`${commonInputStyle} cursor-pointer `} readOnly />
                                <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{props.values.licenseData.licenceDtl.ward_no}</div>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Holding No. </label>
                                <input type="text" name="holdingNo" className={`${commonInputStyle} cursor-pointer `} placeholder="Enter Holding No" value={formik.values.holdingNo} onChange={formik.handleChange} onBlur={validateHolding}/>

                                <span className={`${inputErrorStyle}`}>
                                    {formik.touched.holdingNo && formik.errors.holdingNo ? formik.errors.holdingNo : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>New Ward No.</label>
                                <input type="hidden" name="newWardNo" className={`${commonInputStyle} cursor-pointer `} value={formik.values.newWardNo} readOnly />
                                <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{props.values.licenseData.licenceDtl.ward_no}</div>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Area (sqft).</label>
                                <input type="hidden" name="areaSqft" className={`${commonInputStyle} cursor-pointer `} value={formik.values.areaSqft} readOnly />
                                <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{props.values.licenseData.licenceDtl.area_in_sqft}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Firm Name.</label>
                                <input type="hidden" name="firmName" className={`${commonInputStyle} cursor-pointer `} value={formik.values.firmName} readOnly />
                                <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{props.values.licenseData.licenceDtl.firm_name}</div>

                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Firm Establishment Date</label>
                                <input type="hidden" name="firmEstdDate" className={`${commonInputStyle} cursor-pointer `} value={formik.values.firmEstdDate} readOnly />
                                <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{props.values.licenseData.licenceDtl.establishment_date}</div>

                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Business Address</label>
                                <input type="hidden" name="businessAddress" className={`${commonInputStyle} cursor-pointer `} value={formik.values.businessAddress} readOnly />
                                <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{props.values.licenseData.licenceDtl.address}</div>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Landmark</label>
                                <input type="hidden" name="landmark" className={`${commonInputStyle} cursor-pointer `} value={formik.values.landmark} readOnly />
                                <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{props.values.licenseData.licenceDtl.landmark}</div>

                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Pin Code</label>
                                <input type="hidden" name="pincode" className={`${commonInputStyle} cursor-pointer `} value={formik.values.pincode} readOnly />
                                <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{props.values.licenseData.licenceDtl.pin_code}</div>
                            </div>
                            <div className={`${inputContainerStyle} `}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Owner of Business Premises</label>
                                <input type="hidden" name="premisesOwner" className={`${commonInputStyle} cursor-pointer `} value={formik.values.wardNo} readOnly />
                                <div className="border bg-gray-400 px-4 py-1.5 rounded-lg">{props.values.licenseData.licenceDtl.premisesOwner?props.values.licenseData.licenceDtl.premisesOwner:"N/A"}</div>
                            </div>

                            <div className={` col-span-2 mx-4`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Business Description</label>
                                <input type="hidden" name="businessDescription" className={`${commonInputStyle} cursor-pointer `} value={formik.values.businessDescription} readOnly />
                                <div className="border bg-gray-400 px-4 py-2.5 rounded-lg">{props.values.licenseData.licenceDtl.brife_desp_firm}</div>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-1">
                            <div className={`mx-4`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Nature of Business</label>
                                <input type="hidden" name="natureOfBusiness" className={`${commonInputStyle} cursor-pointer `} value={formik.values.natureOfBusiness} readOnly />
                                <div className="border bg-gray-400 px-4 py-2.5 rounded-lg">
                                    {/* {props.values.licenseData.licenceDtl?.nature_of_bussiness} */}
                                    {
                                        props.values.licenseData.licenceDtl?.nature_of_bussiness.map((item) => (
                                            <p>{item.trade_item} </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className='md:px-10 text-right h-36 '>
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