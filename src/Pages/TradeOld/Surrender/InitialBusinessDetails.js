
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
// import { getCurrentDate, allowFloatInput } from 'Components/Common/PowerUps/PowerupFunctions'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles'
import axios from 'axios'
import TradeAssetComponent from '../TradeAssests/TradeAssetComponent';
import newImg from '../TradeAssests/new.png';
function InitialBusinessDetails(props) {

    const { applicationType, colorCode, currentStep, currentStepFun, collectAllFormData, collectFormDataFun, firmStepFun, firmStep, colorCodeFun, fieldData, licenseData } = props.values;

    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)
    const [noticeDate, setnoticeDate] = useState()
    // const [applicationType, setapplicationType] = useState(2);
    const coverStyle = "text-teal-400 text-xs";
    const [otherfirmToggleStatus, setotherfirmToggleStatus] = useState(false)
    const [NoticeField, setNoticeField] = useState(false);


    // console.log("props license detl", props.values.licenseData.licenceDtl.license_no);

    console.log('applicationType initial ', applicationType)
    const validationSchema = yup.object({

    })

    const initialValues = {
        applicationType: licenseData?.licenceDtl.application_type,
        firmType: licenseData?.licenceDtl.firm_type_id,
        ownershipType: licenseData?.licenceDtl.ownership_type_id,
        licenseNo: licenseData?.licenceDtl.license_no,
        categroyTypeId: licenseData?.licenceDtl.category_type_id
    }

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
        console.log('handleNoticeDate', e.target.value);
        const noticeno = e.target.value;
        alert(noticeno)

        axios.get('http://localhost:3333/notices/' + noticeno)
            .then(function (response) {
                console.log('notice data ', response.data.noticeDate);
                setnoticeDate(response.data.noticeDate);
                formik.setFieldValue('noticeDate', response.data.noticeDate);
            })
    }

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

                        {/* <h1 className="text-2xl text-green-400">Surrender</h1> */}
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className={`${inputContainerStyle}`}>

                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Application type</label>

                                <input type="hidden" name="applyWith" className={`${commonInputStyle} cursor-pointer `} value="2" readOnly />
                                <div className="border px-4 py-1.5 bg-gray-400 rounded-lg">Renewal</div>
                            </div>

                            {/* if notice no is available ${mobileTowerStatusToggle ? 'grid' : 'hidden'}  */}
                            <div className={`relative  col-span-2 md:col-span-3 grid-cols-2 md:grid-cols-2 `}>
                                <div className={`${inputContainerStyle}`}>
                                    <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal">
                                        <small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>License No.</label>
                                    <input name="licenseNo" type="hidden" value="RAN123456789" className={`read-only:bg-gray-100  ${commonInputStyle}`} readOnly />
                                    <div className="border px-4 py-1.5 bg-gray-400 rounded-lg w-1/2"> RAN123456789 </div>
                                </div>


                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4">

                            {/* Notice no fields hidden  */}

                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Firm Type </label>
                                <input type="hidden" name="firmType" className={`${commonInputStyle} cursor-pointer text-xs`} value="1" readOnly />
                                <div className="border px-4 py-1.5 bg-gray-400 rounded-lg">Proprietorship</div>

                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Premises Ownership Type</label>
                                <input type="hidden" name="ownershipType" className={`${commonInputStyle} cursor-pointer text-xs`} value="1" readOnly />
                                <div className="border px-4 py-1.5 bg-gray-400 rounded-lg">Own Property</div>

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
    )
}

export default InitialBusinessDetails