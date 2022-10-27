import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
// import { getCurrentDate, allowFloatInput } from 'Components/Common/PowerUps/PowerupFunctions'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles'
function DocumentUpload(props) {

    const { colorCode, currentStep, currentStepFun, collectFormDataFun, firmStepFun, firmStep, colorCodeFun } = props.values;

    console.log('firm step is :', firmStep);
    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)

    // const commonInputStyle = `form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md`
    // const inputContainerStyle = `form-group col-span-4 md:col-span-1 mb-6 md:px-4`

    const handleBack = () => {
        firmStepFun(4)
    }

    const validationSchema = yup.object({
        // licenseFor: yup.string().required('Select License For'),
        // licenseCharge: yup.string().required('Select firm type'),
        // firmName: yup.string().required('Select ownership type'),
        // penalty: yup.string().required('Select firm type'),
        // paymentMode: yup.string().required('Select Payment Mode'),



    })

    const initialValues = {
        addressProof: '',
        incomeProof: '',
        applicationForm: '',
        ownerIdProof: '',

    }

    const onSubmit = (values, resetForm) => {
        alert(values);
        console.log('Firm deatils ', values)
        collectFormDataFun('documentDetails',values) //sending BasicDetails data to parent to store all form data at one container
        firmStepFun(6) //forwarding to next form level
        currentStepFun(6)
        colorCodeFun(5)


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
            <div className={`absolute w-full }`} >

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form onChange={handleOnChange}>
                        <div className='h-12  '>
                            <h1 className='relative left-0 mb-2 font-serif font-semibold  text-gray-600'><FaHome className="inline mr-2" />Required Documents</h1>

                        </div>

                        <div className='relative -top-6'>

                            <div className="grid grid-cols-4 md:grid-cols-3 w-full px-4 gap-1 ">

                                <div className={`form-group col-span-1 rounded-lg h-16 `}>
                                    {/* <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>License For</label>
                                    <Field type="file" name="licenseFor" className={`${commonInputStyle} cursor-pointer `} />
                                       
                                    <span className={`${inputErrorStyle}`}> <ErrorMessage name='licenseFor' />
                                    </span> */}
                                    <img src="https://cdn3.iconfinder.com/data/icons/dompicon-flat-file-format/256/file-pdf-format-type-512.png" className='h-16 w-16 inline' alt="" />
                                    <span className="font-bold text-sm text-gray-600">ADRESS PROOF </span>

                                </div>


                                {/* Notice no fields hidden  */}

                                <div className={`form-group px-3 mb-2 `}>
                                    {/* <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Charge Applied </label>
                                    <Field type="number" name="licenseCharge" className={`${commonInputStyle} cursor-pointer `} readOnly="readOnly" /> */}
                                    <div className=' h-16 justify-center '>
                                        <img src="https://trustpulse.com/wp-content/uploads/2020/01/reasons-to-avoid-fake-social-proof.png" alt="" className='h-16 w-36  border-2  border-dashed rounded-lg' />
                                    </div>

                                </div>
                                <div className={`form-group px-4 h-16   `}>
                                    {/* <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Penalty.</label>
                                    <Field type="number" name="penalty" className={`${commonInputStyle} cursor-pointer `} readOnly="readOnly"/> */}


                                    {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label> */}
                                    <input class=" w-full py-2 px-2 h-12 mt-2  text-sm text-gray-900 bg-gray-500 rounded-lg border border-gray-600 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" name='addressProof' />
                                    {/* <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> */}


                                    <span className={`${inputErrorStyle}`}><ErrorMessage name='penalty' />
                                    </span>
                                </div>
                            </div>
                            <hr className='h-0.5 bg-gray-600 mb-3 mt-2' />

                            <div className="grid grid-cols-4 md:grid-cols-3 w-full px-4 gap-1 ">

                                <div className={`form-group col-span-1 rounded-lg h-16 `}>
                                    {/* <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>License For</label>
                                    <Field type="file" name="licenseFor" className={`${commonInputStyle} cursor-pointer `} />
                                       
                                    <span className={`${inputErrorStyle}`}> <ErrorMessage name='licenseFor' />
                                    </span> */}
                                    <img src="https://cdn3.iconfinder.com/data/icons/dompicon-flat-file-format/256/file-pdf-format-type-512.png" className='h-16 w-16 inline' alt="" />
                                    <span className="font-bold text-sm text-gray-600">INCOME PROOF </span>

                                </div>


                                {/* Notice no fields hidden  */}

                                <div className={`form-group px-3 mb-2 `}>
                                    {/* <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Charge Applied </label>
                                    <Field type="number" name="licenseCharge" className={`${commonInputStyle} cursor-pointer `} readOnly="readOnly" /> */}
                                    <div className=' h-16 justify-center '>
                                        <img src="https://trustpulse.com/wp-content/uploads/2020/01/reasons-to-avoid-fake-social-proof.png" alt="" className='h-16 w-36  border-2  border-dashed rounded-lg' />
                                    </div>

                                </div>
                                <div className={`form-group px-4 h-16   `}>
                                    {/* <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Penalty.</label>
                                    <Field type="number" name="penalty" className={`${commonInputStyle} cursor-pointer `} readOnly="readOnly"/> */}


                                    {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label> */}
                                    <input class=" w-full py-2 px-2 h-12 mt-2  text-sm text-gray-900 bg-gray-500 rounded-lg border border-gray-600 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" name='incomeProof' />
                                    {/* <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> */}


                                    <span className={`${inputErrorStyle}`}><ErrorMessage name='penalty' />
                                    </span>
                                </div>
                            </div>
                            <hr className='h-0.5 bg-gray-600 mb-3 mt-2' />

                            <div className="grid grid-cols-4 md:grid-cols-3 w-full px-4 gap-1 ">
                                <div className={`form-group col-span-1 rounded-lg h-16 `}>
                                    <img src="https://cdn3.iconfinder.com/data/icons/dompicon-flat-file-format/256/file-pdf-format-type-512.png" className='h-16 w-16 inline' alt="" />
                                    <span className="font-bold text-sm text-gray-600">APPLICATION FORM </span>

                                </div>


                                <div className={`form-group px-3 mb-2 `}>
                                    <div className=' h-16 justify-center '>
                                        <img src="https://trustpulse.com/wp-content/uploads/2020/01/reasons-to-avoid-fake-social-proof.png" alt="" className='h-16 w-36  border-2  border-dashed rounded-lg' />
                                    </div>

                                </div>
                                <div className={`form-group px-4 h-16   `}>
                                    <input class=" w-full py-2 px-2 h-12 mt-2  text-sm text-gray-900 bg-gray-500 rounded-lg border border-gray-600 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" name='applicationForm' />
                                    <span className={`${inputErrorStyle}`}><ErrorMessage name='penalty' />
                                    </span>
                                </div>
                            </div>
                            <hr className='h-0.5 bg-gray-600 mb-3 mt-2' />

                            <div className="grid grid-cols-4 md:grid-cols-3 w-full px-4 gap-1 ">
                                <div className={`form-group col-span-1 rounded-lg h-16 `}>
                                    <img src="https://cdn3.iconfinder.com/data/icons/dompicon-flat-file-format/256/file-pdf-format-type-512.png" className='h-16 w-16 inline' alt="" />
                                    <span className="font-bold text-sm text-gray-600">OWNER ID </span>

                                </div>


                                {/* Notice no fields hidden  */}

                                <div className={`form-group px-3 mb-2 `}>
                                    {/* <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Charge Applied </label>
                                        <Field type="number" name="licenseCharge" className={`${commonInputStyle} cursor-pointer `} readOnly="readOnly" /> */}
                                    <div className=' h-16 justify-center '>
                                        <img src="https://trustpulse.com/wp-content/uploads/2020/01/reasons-to-avoid-fake-social-proof.png" alt="" className='h-16 w-36  border-2  border-dashed rounded-lg' />
                                    </div>

                                </div>
                                <div className={`form-group px-4 h-16   `}>
                                    {/* <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Penalty.</label>
                                        <Field type="number" name="penalty" className={`${commonInputStyle} cursor-pointer `} readOnly="readOnly"/> */}


                                    {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label> */}
                                    <input class=" w-full py-2 px-2 h-12 mt-2  text-sm text-gray-900 bg-gray-500 rounded-lg border border-gray-600 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" name='ownerIdProof' />
                                    {/* <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> */}


                                    <span className={`${inputErrorStyle}`}><ErrorMessage name='penalty' />
                                    </span>
                                </div>
                            </div>
                            <hr className='h-0.5 bg-gray-600  mt-2' />
                            <div className='grid grid-cols-1'>
                                <div className='md:px-10 text-right amber'>
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

export default DocumentUpload