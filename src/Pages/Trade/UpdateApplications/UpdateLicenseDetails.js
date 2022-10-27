import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
// import { getCurrentDate, allowFloatInput } from 'Components/Common/PowerUps/PowerupFunctions'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles'
function LicenseDetails(props) {

    const { colorCode, currentStep, currentStepFun, collectFormDataFun, firmStepFun, firmStep, colorCodeFun } = props.values;

    console.log('firm step is :', firmStep);
    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)

    // const commonInputStyle = `form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md`
    // const inputContainerStyle = `form-group col-span-4 md:col-span-1 mb-6 md:px-4`

    const validationSchema = yup.object({
        licenseFor: yup.string().required('Select License For'),
        // licenseCharge: yup.string().required('Select firm type'),
        // firmName: yup.string().required('Select ownership type'),
        // penalty: yup.string().required('Select firm type'),
        paymentMode: yup.string().required('Select Payment Mode'),



    })

    const initialValues = {
        // wardNo: '',
        licenseFor: '',
        // newWardNo: '2021/04/12',
        licenseCharge: '0',
        penalty: '0',
        denialAmount: '0',
        totalCharge: '0',
        paymentMode: ''

    }

    const onSubmit = (values, resetForm) => {
        alert(values);
        console.log('Firm deatils ', values)
        collectFormDataFun('licenseDetails',values) //sending BasicDetails data to parent to store all form data at one container
        firmStepFun(5) //forwarding to next form level
        currentStepFun(5)
        colorCodeFun(4)

    }


    const handleBack = () => {
        firmStepFun(2)
    }

    const licenseFor = [
        { option: '1', value: 1 },
        { option: '2', value: 2 },
        { option: '3', value: 3 },
        { option: '4', value: 4 },
        { option: '5', value: 5 },
        { option: '6', value: 6 },
        { option: '7', value: 7 },

    ];
    const paymentMode = [
        { option: 'Cash', value: 1 },
        { option: 'Cheque', value: 2 },
        { option: 'Demand Draft', value: 3 }
    ];


    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        { name === 'applyWith' && (value === '1' ? setMobileTowerStatusToggle(true) : setMobileTowerStatusToggle(false)) }
        // { name === 'hoardingStatus' && (value === 'yes' ? setHoardingStatusToggle(true) : setHoardingStatusToggle(false)) }
        // { name === 'petrolPumpStatus' && (value === 'yes' ? setPetrolPumpStatusToggle(true) : setPetrolPumpStatusToggle(false)) }


    };
    return (
        <>
            <div className={`absolute w-full`} >

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form onChange={handleOnChange}>
                        {/* <h1 className='text-2xl text-cyan-400 font-bold pl-4'>Business Details</h1><br /> */}
                        <div className='h-12'>
                            <h1 className='relative left-0 mb-2 font-serif font-semibold  text-gray-600'><FaHome className="inline mr-2" />License Details (payment)</h1>
                        </div>
                        <div className='relative -top-6  '>
                            <div className="grid grid-cols-4 md:grid-cols-3 w-full px-4 gap-1">

                                <div className={`form-group col-span-1 `}>
                                    <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>License For</label>
                                    <Field as="select" name="licenseFor" className={`${commonInputStyle} cursor-pointer `}>
                                        <option value="" disabled selected>SELECT</option>
                                        {
                                            licenseFor.map((data) => (
                                                <option value={data.value}>{data.option}</option>
                                            ))
                                        }

                                    </Field>
                                    <span className={`${inputErrorStyle}`}> <ErrorMessage name='licenseFor' />
                                    </span>

                                </div>


                                {/* Notice no fields hidden  */}

                                <div className={`form-group`}>
                                    <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Charge Applied </label>
                                    <Field type="number" name="licenseCharge" className={`${commonInputStyle} cursor-pointer `} readOnly="readOnly" />

                                    <span className={`${inputErrorStyle}`}> <ErrorMessage name='licenseCharge' />
                                    </span>
                                </div>
                                <div className={`form-group`}>
                                    <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Penalty.</label>
                                    <Field type="number" name="penalty" className={`${commonInputStyle} cursor-pointer `} readOnly="readOnly" />

                                    <span className={`${inputErrorStyle}`}><ErrorMessage name='penalty' />
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Denial / Arrer Amount.</label>
                                    <Field type="number" name="denialAmount" className={`${commonInputStyle} cursor-pointer `} />

                                    <span className={`${inputErrorStyle}`}><ErrorMessage name='denialAmount' />
                                    </span>
                                </div>

                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Charge.</label>
                                    <Field type="number" name="totalCharge" className={`${commonInputStyle} cursor-pointer `} />

                                    <span className={`${inputErrorStyle}`}><ErrorMessage name='totalCharge' />
                                    </span>
                                </div>
                                <div className={`${inputContainerStyle}`}>
                                    <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Payment Mode</label>
                                    <Field as="select" name="paymentMode" className={`${commonInputStyle} cursor-pointer `} >
                                        <option value="" disabled selected>SELECT</option>
                                        {
                                            paymentMode?.map((data) => (
                                                <option value={data.value}>{data.option}</option>
                                            ))
                                        }

                                    </Field>

                                    <span className={`${inputErrorStyle}`}><ErrorMessage name='paymentMode' />
                                    </span>
                                </div>
                            </div>
                            {/* <div className="grid grid-cols-3 md:grid-cols-3 gap-3"> */}

                            {/* <div></div> */}
                            <div className="grid grid-cols-1">
                                <div className='md:px-10 text-right '>
                                    <button type="button" onClick={handleBack} className="float-left ml-16 mb-8 mt-4 px-12 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">&#60;&#60; Back </button>
                                    <button type="submit" className="float-right ml-16 mb-8 mt-4 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next&#62;&#62; </button>
                                </div>
                            </div>

                        </div>

                    </Form>
                </Formik>

            </div>

        </>
    )
}

export default LicenseDetails