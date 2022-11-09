import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { getCurrentDate, allowFloatInput } from 'Components/Common/PowerUps/PowerupFunctions'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles';
// import TradeLoader from '../tradeComponent/TradeLoader'
import { TRADE } from '../tradeComponent/TradeApiListFile';
import axios from 'axios';
import { convertApplicationTypeToString } from '../tradeComponent/UsefulFunctions';
function LicenseDetails(props) {

    const { colorCode, currentStep, currentStepFun, collectFormDataFun, firmStepFun, firmStep, colorCodeFun, allFormData, showLoader, finalSubmit } = props.values;

    console.log('props values :', props.values);
    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false);


    let token = JSON.parse(window.localStorage.getItem('token'));
    const header = {
        headers: {
            Authorization: `Bearer ${token} `,
            Accept: 'application/json',
        }
    }

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
    };

    // function convertApplicationTypeToString(val) {
    //     // alert(val)
    //     // let type = '';
    //     if (val === 1) { settype("NEWLICENSE") }
    //     if (val === 2) { settype("RENEWAL") }
    //     if (val === 3) { settype("AMENDMENT") }
    //     if (val === 4) { settype("SURRENDER") }

    //     return type;
    // }

    const getLicenseCharge = (value) => {
        showLoader(true)
        let data = [];
        data['licenseFor'] = value;
        data['firmEstdDate'] = allFormData.firmDetails?.firmEstdDate;
        data['natureOfBusiness'] = allFormData.firmDetails?.natureOfBusiness;
        data['areaSqft'] = allFormData.firmDetails?.areaSqft;
        data['applicationType'] = convertApplicationTypeToString(props.values?.applicationType);
        data['tocStatus'] = allFormData.firmDetails?.tocStatus;
        console.log('charge calculation data', Object.assign({}, data))

        axios.post(TRADE.GET_CHARGE, Object.assign({}, data), header)
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
        formik.setFieldValue("denialAmount", values.arear_amount);
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