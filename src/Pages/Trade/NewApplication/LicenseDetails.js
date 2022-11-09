import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles';
// import TradeLoader from '../tradeComponent/TradeLoader'
import { TRADE, HEADER } from '../tradeComponent/TradeApiListFile';
import axios from 'axios';
import { convertApplicationTypeToString } from '../tradeComponent/UsefulFunctions';
function LicenseDetails(props) {

    const { colorCode, currentStep, currentStepFun, collectFormDataFun, firmStepFun, firmStep, colorCodeFun, allFormData, showLoader, finalSubmit } = props.values;

    console.log('props values :', props.values);
    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false);
    const [paymentToggelStatus, setpaymentToggelStatus] = useState(false);


    const validationSchema = yup.object({
        licenseFor: yup.string().required('Select License For'),
        // licenseCharge: yup.string().required('Select firm type'),
        // firmName: yup.string().required('Select ownership type'),
        // penalty: yup.string().required('Select firm type'),
        bankName: yup.string().when("paymentMode", { is: (paymentMode) => paymentMode == "CHEQUE" || paymentMode == "DD", then: yup.string().required('Bank Name is required') }),
        chequeNo: yup.string().when("paymentMode", { is: (paymentMode) => paymentMode == "CHEQUE" || paymentMode == "DD", then: yup.string().required('Cheque No is required') }),
        chequeDate: yup.string().when("paymentMode", { is: (paymentMode) => paymentMode == "CHEQUE" || paymentMode == "DD", then: yup.string().required('Cheque Date is required') }),
        branchName: yup.string().when("paymentMode", { is: (paymentMode) => paymentMode == "CHEQUE" || paymentMode == "DD", then: yup.string().required('Cheque Date is required') }),


    })

    const initialValues = {
        // wardNo: '',
        licenseFor: '',
        // newWardNo: '2021/04/12',
        licenseCharge: '0',
        penalty: '0',
        denialAmount: '0',
        totalCharge: '0',
        paymentMode: '',
        bankName: '',
        chequeNo: '',
        chequeDate: '',
        branchName: ''

    }
    const formik = useFormik(
        {
            initialValues: initialValues,
            onSubmit: (values, resetForm) => {
                // alert(values);
                console.log('Firm Details ', values);
                let conf = window.confirm("Are you sure ?\n Your license will be processed");
                if (conf) {
                    showLoader(true);
                    //sending BasicDetails data to parent to store all form data at one container
                    collectFormDataFun('licenseDetails', values, 1)
                    //forwarding to next form level
                    // currentStepFun(5)
                    // colorCodeFun(4)
                    // finalSubmit();
                    setTimeout(() => {
                        showLoader(false);
                        // firmStepFun(4)
                    }, 1000);
                }
            }
            , validationSchema
        });


    const handleBack = () => {
        firmStepFun(3)
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
        { option: 'CASH', value: 'CASH' },
        { option: 'CHEQUE', value: 'CHEQUE' },
        { option: 'DEMAND DRAFT', value: 'DD' }
    ];

    const handleOnChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        { name === 'applyWith' && (value === '1' ? setMobileTowerStatusToggle(true) : setMobileTowerStatusToggle(false)) }
        { name === 'licenseFor' && getLicenseCharge(value) }
        { name === 'paymentMode' && (value == 'CASH') ? setpaymentToggelStatus(false) : setpaymentToggelStatus(true) }
    };

    const getLicenseCharge = (value) => {
        showLoader(true)
        let data = [];
        data['licenseFor'] = value;
        data['firmEstdDate'] = allFormData.firmDetails?.firmEstdDate;
        data['natureOfBusiness'] = allFormData.firmDetails?.natureOfBusiness;
        data['areaSqft'] = allFormData.firmDetails?.areaSqft;
        data['applicationType'] = convertApplicationTypeToString(props.values?.applicationType);
        data['tocStatus'] = allFormData.firmDetails?.tocStatus;
        if (allFormData.initialBusinessDetails?.notice_date != null) {
            data['noticeDate'] = allFormData.initialBusinessDetails?.notice_date;
        }

        console.log('charge calculation data', Object.assign({}, data))

        axios.post(TRADE.GET_CHARGE, Object.assign({}, data), HEADER)
            .then(function (response) {
                console.log('license Charge ', response.data);
                if (response.data.status) {
                    setformValues(response.data.data)
                    setTimeout(() => {
                        showLoader(false)
                    }, 500)
                } else {
                    alert("Unable to get license charge !");
                    showLoader(false)
                }
            })
            .catch(function (error) {
                console.log(error);
                showLoader(false)
            });
        // formik.values.totalCharge = 500;
        // formik.values.penalty = 200;
        // formik.values.licenseCharge = 300;

    }

    const setformValues = (values) => {
        alert(values);
        formik.setFieldValue("licenseCharge", values.rate);
        formik.setFieldValue("denialAmount", (values.arear_amount + values.notice_amount));
        formik.setFieldValue("totalCharge", values.total_charge);
        formik.setFieldValue("penalty", values.penalty);
    }

    return (
        <>

            <div className={`absolute w-full`} >
                {/* <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}> */}
                <form onChange={handleOnChange} onSubmit={formik.handleSubmit}>
                    {/* <h1 className='text-2xl text-cyan-400 font-bold pl-4'>Business Details</h1><br /> */}
                    <div className='h-12'>
                        <h1 className='relative left-0 mb-2 font-serif font-semibold  text-gray-600'><FaHome className="inline mr-2" />License Details (payment)</h1>
                    </div>
                    <div className='relative -top-6  '>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className="text-sm font-semibold text-red-600 inline ">*</small>License For</label>
                                <select name="licenseFor" className={`${commonInputStyle}  cursor-pointer `} value={formik.values.licenseFor} onChange={formik.handleChange}>
                                    <option value="" disabled selected>SELECT</option>
                                    {
                                        licenseFor.map((data) => (
                                            <option value={data.value}>{data.option}</option>
                                        ))
                                    }

                                </select>
                                <span className={`${inputErrorStyle}`}>  {formik.touched.licenseFor && formik.errors.licenseFor ? formik.errors.licenseFor : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small> Charge Applied </label>
                                <input type="number" name="licenseCharge" className={`${commonInputStyle} pointer-events-none bg-gray-100 `} readOnly="readOnly" value={formik.values.licenseCharge} onChange={formik.handleChange} />

                                <span className={`${inputErrorStyle}`}>  {formik.touched.licenseCharge && formik.errors.licenseCharge ? formik.errors.licenseCharge : null}
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className="text-sm font-semibold text-red-600 inline ">*</small>Penalty.</label>
                                <input type="number" name="penalty" className={`${commonInputStyle} pointer-events-none bg-gray-100 `} readOnly="readOnly" value={formik.values.penalty} />
                                <span className={`${inputErrorStyle}`}>  {formik.touched.penalty && formik.errors.penalty ? formik.errors.penalty : null}

                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Denial / Arrer Amount.</label>
                                <input type="number" name="denialAmount" className={`${commonInputStyle} pointer-events-none bg-gray-100   `} value={formik.values.denialAmount} onChange={formik.handleChange} />

                                <span className={`${inputErrorStyle}`}>  {formik.touched.denialAmount && formik.errors.denialAmount ? formik.errors.denialAmount : null}
                                </span>
                            </div>

                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Total Charge.</label>
                                <input type="number" name="totalCharge" className={`${commonInputStyle} pointer-events-none bg-gray-100 `} value={formik.values.totalCharge} onChange={formik.handleChange} />

                                <span className={`${inputErrorStyle}`}>  {formik.touched.totalCharge && formik.errors.totalCharge ? formik.errors.totalCharge : null}
                                </span>

                            </div>
                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Payment Mode</label>
                                <select name="paymentMode" className={`${commonInputStyle} cursor-pointer `} value={formik.values.paymentMode} onChange={formik.handleChange}  >
                                    <option value="" disabled selected>SELECT</option>
                                    {
                                        paymentMode?.map((data) => (
                                            <option value={data.value}>{data.option}</option>
                                        ))
                                    }

                                </select>
                                <span className={`${inputErrorStyle}`}>  {formik.touched.paymentMode && formik.errors.paymentMode ? formik.errors.paymentMode : null}
                                </span>
                            </div>
                        </div>
                        <div className={`${paymentToggelStatus ? '' : 'hidden'}`}>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
                                <div className={`${inputContainerStyle}`}>

                                    <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Cheque/DD Date</label>
                                    <input type="date" name="chequeDate" className={`${commonInputStyle} `} value={formik.values.chequeDate} onChange={formik.handleChange} min={JSON.stringify(new Date()).slice(1, 11)} />

                                    <span className={`${inputErrorStyle}`}>  {formik.touched.chequeDate && formik.errors.chequeDate ? formik.errors.chequeDate : null}
                                    </span>

                                </div>
                                <div className={`${inputContainerStyle}`}>

                                    <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Cheque/DD No.</label>
                                    <input type="number" name="chequeNo" className={`${commonInputStyle} `} value={formik.values.chequeNo} onChange={formik.handleChange} />

                                    <span className={`${inputErrorStyle}`}>  {formik.touched.chequeNo && formik.errors.chequeNo ? formik.errors.chequeNo : null}
                                    </span>
                                </div>
                                <div className={`${inputContainerStyle}`}>

                                    <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Bank Name</label>
                                    <input type="text" name="bankName" className={`${commonInputStyle}  `} value={formik.values.bankName} onChange={formik.handleChange} />

                                    <span className={`${inputErrorStyle}`}>  {formik.touched.bankName && formik.errors.bankName ? formik.errors.bankName : null}
                                    </span>
                                </div>
                                <div className={`${inputContainerStyle}`}>

                                    <label className={`${inputLabelStyle} text-xs`}><small className=" text-sm font-semibold text-red-600 inline ">*</small>Branch Name</label>
                                    <input type="text" name="branchName" className={`${commonInputStyle}  `} value={formik.values.branchName} onChange={formik.handleChange} />

                                    <span className={`${inputErrorStyle}`}>  {formik.touched.branchName && formik.errors.branchName ? formik.errors.branchName : null}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className='md:px-10 text-right '>
                                <button type="button" onClick={handleBack} className="float-left ml-16 mb-8 mt-4 px-12 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">&#60;&#60; Back </button>
                                <button type="submit" className="float-right ml-16 mb-8 mt-4 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit&#62;&#62; </button>
                            </div>
                        </div>

                    </div>

                </form>
                {/* </Formik> */}

            </div>

        </>
    )
}

export default LicenseDetails