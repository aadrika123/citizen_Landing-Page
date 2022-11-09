
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Anshuman
//    Version - 1.0
//    Date - 19 july 2022
//    Updated On - 13/Aug/2022 - API Integrated
//    Revision - 1
//    Project - JUIDCO
//    Component  - Trade (closed)
//    DESCRIPTION - New application (InitialBusinessDetails) Component
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles'
import axios from 'axios'
import TradeAssetComponent from '../TradeAssests/TradeAssetComponent';
import newImg from '../TradeAssests/new.png';
import { HEADER, TRADE } from '../tradeComponent/TradeApiListFile'
function InitialBusinessDetails(props) {

    const { applicationType, colorCode, currentStep, currentStepFun, collectAllFormData, collectFormDataFun, firmStepFun, firmStep, colorCodeFun, fieldData, licenseData } = props.values;
    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)
    const [DenialDetails, setDenialDetails] = useState()
    // const [applicationType, setapplicationType] = useState(2);
    const coverStyle = "text-teal-400 text-xs";
    const [otherfirmToggleStatus, setotherfirmToggleStatus] = useState(false)
    const [NoticeField, setNoticeField] = useState(false);


    // console.log("props license detl", props.values.licenseData.licenceDtl.license_no);

    console.log('applicationType initial ', applicationType)
    const validationSchema = yup.object({
        applyWith: yup.string().required('Select an option'),
        firmType: yup.string().required('Select firm type'),
        ownershipType: yup.string().required('Select ownership type'),
        categroyTypeId: yup.string().required("select an option"),
        noticeNo: yup.string().when("applyWith", { is: "1", then: yup.string().required('Notice No. is required') }),
        noticeDate: yup.string().when("applyWith", { is: "1", then: yup.string().required('Notice date is required') })
    });

    const initialValues = {
        applyWith: '',
        noticeNo: '',
        noticeDate: '',
        firmType: '',
        ownershipType: '',
        licenseNo: '',
        licenseNo: '',
        otherFirmType: '',
        categroyTypeId: ''
    };

    // form submit
    const formik = useFormik(
        {
            initialValues: initialValues,
            onSubmit: (values, resetForm) => {
                alert(values);
                console.log('basic deatils ', values)
                collectFormDataFun('initialBusinessDetails', values, 0) //sending BasicDetails data to parent to store all form data at one container
                firmStepFun(2) //forwarding to next form level
                currentStepFun(2)
                colorCodeFun(1)

            }
            , validationSchema
        });

    const ApplyWithOptions = [
        { option: 'Notice No.', value: 1 },
        { option: 'New Application', value: 2 },

    ];


    const handleNoticeDate = (e) => {

        const noticeNo = e.target.value;
        if (noticeNo != '') {
            alert(noticeNo);
            axios.post(TRADE.GET_DENIAL_DETAILS, { noticeNo: noticeNo }, HEADER)
                .then(function (response) {
                    console.log('notice data ', response.data);

                    props.denialDetailsFun(response.data);
                    // setDenialDetails(response.data);
                    if (response.data.status) {
                        formik.setFieldValue("noticeDate", response.data.data.denialDetails.noticedate);
                    }else{
                        formik.setFieldValue("noticeNo", '');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    //onchange event for form fields
    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        { name === 'applyWith' && (value === '1' ? setMobileTowerStatusToggle(true) : setMobileTowerStatusToggle(false)) }
        { name === 'firmType' && (value === '5' ? setotherfirmToggleStatus(true) : setotherfirmToggleStatus(false)) }
        { name === 'noticeNo' && (value === '1' ? setNoticeField(true) : setNoticeField(false)) }
    };

    return (
        <>
            <div className={` absolute w-full md:w-full sm:w-full`} >
                <h1 className=' flex justify-between mb-2 font-serif font-semibold  text-gray-600'>
                    <span><FaHome className="inline ml-4" /> Basic Details</span></h1>
                {/* <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}> */}
                <form onChange={handleOnChange} onSubmit={formik.handleSubmit}>

                    <>
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Apply With</label>
                                <select {...formik.getFieldProps('applyWith')} className={`${commonInputStyle} cursor-pointer `} value={formik.values.applyWith} onChange={formik.handleChange} >
                                    <option value="" selected>SELECT</option>
                                    {ApplyWithOptions.map((data) => (<option value={data.value}>{data.option}</option>))}
                                </select>
                                <span className={`${inputErrorStyle}`}>
                                    {formik.touched.applyWith && formik.errors.applyWith ? formik.errors.applyWith : null}
                                </span>
                            </div>
                            {/* if notice no is available */}
                            <div className={`relative  col-span-4 md:col-span-3 ${mobileTowerStatusToggle ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-3 `}>
                                <div className={`${inputContainerStyle}`}>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal">
                                        <small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Notice Date</label>
                                    <input name="noticeDate" type="date" className={`read-only:bg-gray-100  ${commonInputStyle} `} placeholder="2021/04/12" value={formik.values.noticeDate} onChange={formik.handleChange} readOnly="readonly" />
                                    <span className={`${inputErrorStyle}`}>
                                        {formik.touched.noticeDate && formik.errors.noticeDate ? formik.errors.noticeDate : null}
                                    </span>
                                </div>
                                <div className={`${inputContainerStyle}`}>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal">
                                        <small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Notice No.
                                    </label>
                                    <div className='flex'>
                                        <div className='flex-1'>
                                            <input name="noticeNo" type="text" className={` ${commonInputStyle} `} placeholder="Enter Notice No." min={6} onBlur={handleNoticeDate} value={formik.values.noticeNo} onChange={formik.handleChange} />
                                        </div>
                                    </div>
                                    <span className={`${inputErrorStyle}`}>
                                        {formik.touched.noticeNo && formik.errors.noticeNo ? formik.errors.noticeNo : null}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Firm Type </label>
                                <select {...formik.getFieldProps('firmType')} className={`${commonInputStyle} cursor-pointer text-xs`} value={formik.values.firmType} onChange={formik.handleChange} >
                                    <option value="" disabled selected>SELECT</option>
                                    {
                                        fieldData.firmTypeList
                                            ?.map((data) => (
                                                <option value={data.id}>{data.firm_type}</option>
                                            ))
                                    }
                                </select>
                                <span className={`${inputErrorStyle}`}>
                                    {formik.touched.firmType && formik.errors.firmType ? formik.errors.firmType : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Premises Ownership Type</label>
                                <select {...formik.getFieldProps('ownershipType')} className={`${commonInputStyle} cursor-pointer text-xs `} >
                                    <option value="" disabled selected>SELECT</option>
                                    {
                                        fieldData.ownershipTypeList?.map((data) => (
                                            <option value={data.id}>{data.ownership_type}</option>
                                        ))
                                    }
                                </select>
                                <span className={`${inputErrorStyle}`}>
                                    {formik.touched.ownershipType && formik.errors.ownershipType ? formik.errors.ownershipType : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle} ${otherfirmToggleStatus ? '' : 'hidden'}`}>
                                <label className={`${inputLabelStyle} text-xs`}>
                                    <small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Other Firm Type
                                </label>
                                <input type="text" name="otherFirmType" className={`${commonInputStyle} cursor-pointer text-xs `} placeholder="Other Firm type" onChange={formik.handleChange} value={formik.values.otherFirmType} />
                                <span className={`${inputErrorStyle}`}>
                                    {formik.touched.ownershipType && formik.errors.ownershipType ? formik.errors.ownershipType : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}>
                                    <small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Category Type Id
                                </label>
                                <select {...formik.getFieldProps('categroyTypeId')} className={`${commonInputStyle} cursor-pointer text-xs `} >
                                    <option value="" disabled selected>SELECT</option>
                                    {
                                        fieldData.categoryTypeList?.map((data) => (
                                            <option value={data.id}>{data.category_type}</option>
                                        ))
                                    }
                                </select>
                                <span className={`${inputErrorStyle}`}>
                                    {formik.touched.categroyTypeId && formik.errors.categroyTypeId ? formik.errors.categroyTypeId : null}
                                </span>
                            </div>
                            <div className="col-span-4 grid grid-cols-2">
                                <div className='md:px-10'>
                                </div>
                                <div className='md:px-10 text-right '>
                                    <button type="submit" className="float-left ml-16 mb-8 mt-4 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next</button>
                                </div>
                            </div>

                        </div>
                    </>

                </form>
                {/* </Formik> */}

            </div>

        </>
    );
}

export default InitialBusinessDetails