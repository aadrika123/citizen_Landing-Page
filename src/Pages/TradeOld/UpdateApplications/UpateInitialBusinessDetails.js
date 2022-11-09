import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
// import { getCurrentDate, allowFloatInput } from 'Components/Common/PowerUps/PowerupFunctions'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles';
import axios from 'axios'
function InitialBusinessDetails(props) {

    const { applicationType, colorCode, currentStep, currentStepFun, collectAllFormData, collectFormDataFun, firmStepFun, firmStep, colorCodeFun } = props.values;
    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)
    const [noticeDate, setnoticeDate] = useState()
    // const [applicationType, setapplicationType] = useState(2);


    const validationSchema = yup.object({
        // applyWith: yup.string().required('Select an option'),
        // firmType: yup.string().required('Select firm type'),
        // ownershipType: yup.string().required('Select ownership type'),

    })
    // console.log('license data on owner details',props.values.licenseDataForUpdate[0].initialbusinessDetail[0]
    // );
    const {apply_with,firm_type,notice_date,notice_no,ownership_type} = props.values.licenseDataForUpdate[0].initialbusinessDetail[0];
    const initialValues = applicationType == 1 ? {
        applyWith: apply_with,
        noticeNo: firm_type,
        noticeDate: notice_date,
        firmType: notice_no,
        ownershipType:ownership_type,
     
    } : {
        applyWith: 1,
        firmType: 1,
        ownershipType: 1,
        licenseNo: 'RAN123456789',
    }

    
    const onSubmit = (values, resetForm) => {
        alert(values);
        console.log('basic deatils ', values)
        collectFormDataFun('initialBusinessDetails', values) //sending BasicDetails data to parent to store all form data at one container
        firmStepFun(2) //forwarding to next form level
        currentStepFun(2)
        colorCodeFun(1)

    }


    const ApplyWithOptions = [
        { option: 'Notice No.', value: 1 },
        { option: 'New Application', value: 2 },

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
    const handleNoticeDate = (e) => {
        // axios.get('http://localhost')
        console.log('handleNoticeDate', e.target.value);
        const noticeno = e.target.value;
        alert(noticeno)

        axios.get('http://localhost:3333/notices/' + noticeno)
            .then(function (response) {
                console.log('notice data ', response.data.noticeDate);
                setnoticeDate(response.data.noticeDate);
            })
    }

    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        { name === 'applyWith' && (value === '1' ? setMobileTowerStatusToggle(true) : setMobileTowerStatusToggle(false)) }
    };


    return (
        <>
            <div className={` absolute w-full md:w-full sm:w-full `} >
                <h1 className=' mb-2 font-serif font-semibold  text-gray-600'><FaHome className="inline mr-2" />Basic Details (update)</h1>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form onChange={handleOnChange}>
                        {/* <h1 className='text-2xl text-cyan-400 font-bold pl-4'>Update Business Details</h1><br /> */}
                        {applicationType == 1 &&
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-4">
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Apply With</label>
                                        <Field as="select" name="applyWith" className={`${commonInputStyle} cursor-pointer `}>
                                            <option value="" disabled selected>SELECT</option>
                                            {ApplyWithOptions.map((data) => (<option value={data.value}>{data.option}</option>))}
                                        </Field>
                                        <span className={`${inputErrorStyle}`}> <ErrorMessage name='applyWith' />
                                        </span>
                                    </div>
                                    {/* if notice no is available */}
                                    <div className={`relative  col-span-4 md:col-span-3 ${mobileTowerStatusToggle ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-3 `}>
                                        <div className={`${inputContainerStyle}`}>
                                            <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal">
                                                <small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Notice Date</label>
                                            <Field name="noticeDate" type="date" value={noticeDate} className={`read-only:bg-gray-100  ${commonInputStyle} `} readOnly="readOnly" placeholder="2021/04/12" />
                                            <span className={`${inputErrorStyle}`}> <ErrorMessage name='noticeDate' />
                                            </span>
                                        </div>
                                        <div className={`${inputContainerStyle} w-64`}>
                                            <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal">
                                                <small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Notice No.
                                            </label>
                                            <div className='flex'>
                                                <div className='flex-1'>
                                                    <Field name="noticeNo" type="text" className={`w-36 ${commonInputStyle} `} placeholder="Enter 1 or 2" min={6} onBlur={handleNoticeDate} />
                                                </div>
                                            </div>
                                            <span className={`${inputErrorStyle}`}> <ErrorMessage name='noticeNo' /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4">

                                    {/* Notice no fields hidden  */}

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Firm Type </label>
                                        <Field as="select" name="firmType" className={`${commonInputStyle} cursor-pointer text-xs`} >
                                            <option value="" disabled selected>SELECT</option>
                                            {
                                                FirmTypeOptions.map((data) => (
                                                    <option value={data.value}>{data.option}</option>
                                                ))
                                            }
                                        </Field>
                                        <span className={`${inputErrorStyle}`}> <ErrorMessage name='firmType' />
                                        </span>
                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Premises Ownership Type</label>
                                        <Field as="select" name="ownershipType" className={`${commonInputStyle} cursor-pointer text-xs `} >
                                            <option value="" disabled selected>SELECT</option>
                                            {
                                                PremiseOwnershipTypeOptions.map((data) => (
                                                    <option value={data.value}>{data.option}</option>
                                                ))
                                            }
                                        </Field>
                                        <span className={`${inputErrorStyle}`}><ErrorMessage name='ownershipType' />
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
                            </>}
                        {applicationType == 2 && <>
                        
                            <h1 className="text-2xl text-green-400">Renewal</h1>
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
                        </>}

                        {applicationType == 3 && <>
                        
                            <h1 className="text-2xl text-green-400">Amendment</h1>
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
                        </>}

                        {applicationType == 4 && <>
                        
                            <h1 className="text-2xl text-green-400">Surrender</h1>
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
                        }
                    </Form>
                </Formik>

            </div>

        </>
    )
}

export default InitialBusinessDetails