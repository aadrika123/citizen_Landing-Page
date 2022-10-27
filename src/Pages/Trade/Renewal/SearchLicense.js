//////////////////////////////////////////////////////////////////////////////////////
//    Author - Anshuman
//    Version - 1.0
//    Date - 19 OCT 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SEARCH APPLICATION FOR RENEWAL
//    DESCRIPTION - Search application for renewal | 
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
// import { getCurrentDate, allowFloatInput } from 'Components/Common/PowerUps/PowerupFunctions'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles'
import DisplayFindings from './DisplayFindings'
import axios from 'axios';
import { TRADE, HEADER } from '../tradeComponent/TradeApiListFile';

function SearchLicense(props) {

    // Destructuring prop values and setting required component states
    const { renewToggleStatus, renewToggleStatusFun, applicationType, applicationTypeFun, showLoader } = props.values;
    const [toggleSwitch, settoggleSwitch] = useState(false)
    const [TableToggle, setTableToggle] = useState(true);

    //setting temporary license data
    const [licenseData, setlicenseData] = useState({
        id: 0,
        firm_name: "",
        application_no: "",
        license_no: "",
        ward_no: null,
        address: "",
        valid_upto: ""

    })

    //validaton Schema for formik form fields
    const validationSchema = yup.object({
        licenseNo: yup.string().required('Enter a valid License No.'),
    })

    // initial form values
    const initialValues = {
        licenseNo: '',
    }

    // form submit event
    const onSubmit = (values, resetForm) => {
        alert(values);
        getLicenseData(values.licenseNo);
        settoggleSwitch(true)
    }

    //for tracking changes in a form field
    const handleOnChange = (event) => {

        let name = event.target.name
        let value = event.target.value

        // { toggleSwitch === true ? settoggleSwitch(true) : settoggleSwitch(false) }

    };

    // SEARCH LICENSE DATA FOR RENEWAL
    const getLicenseData = (licenseNo) => {
        showLoader(true)
        axios.post(TRADE.SEARCH_LICENSE_FOR_APPLY, { licenceNo: licenseNo,applicationType:props.values.applicationType }, HEADER)
            .then(function (response) {
                console.log('license data for renewal ', response);
                setlicenseData(response.data);
                setTableToggle(true);
                setTimeout(() => {
                    showLoader(false);
                }, 500);

            })
            .catch(function (error) {
                setTableToggle(false);
                showLoader(false);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('response data ', error.response.data);
                    console.log('response status ', error.response.status);
                    console.log('response headers ', error.response.headers);

                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })

    }



    return (
        <>
            <div className={`block pl-6 w-full md:py-6`} >
                <h1 className=' mb-2 font-serif font-semibold  text-gray-600'><FaHome className="inline mr-2" />Search License For Renewal</h1>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form onChange={handleOnChange} autoComplete="off">
                        {/* <h1 className='text-2xl text-cyan-400 font-bold pl-4'>Business Details</h1><br /> */}
                        <div className="grid grid-cols-2 md:grid-cols-2 border-b-1 border-dashed border-teal-800 mb-2 ">
                            {/* <div className=""> */}

                            <div className={`${inputContainerStyle}`}>
                                <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>License No</label>
                                <Field type="text" name="licenseNo" className={`${commonInputStyle} cursor-pointer `} placeholder="Enter a license No" />
                                <span className={`${inputErrorStyle}`}> <ErrorMessage name='licenseNo' />
                                </span>
                            </div>
                            <div className={`${inputContainerStyle}  `}>
                                <button type="submit" n className={`hover:bg-gray-300  bg-[#367ed1] text-white text-xs font-bold w-36 cursor-pointer py-2.5 px-4 rounded-lg mt-7 `} >
                                    SEARCH
                                </button>
                                <span className={`${inputErrorStyle}`}> <ErrorMessage name='licenseNo' />
                                </span>

                            </div>
                        </div>

                    </Form>
                </Formik>
                <div className='bg-gray-100  rounded-md overflow-x-scroll'>
                    <table class="table-auto w-full text-center text-xs">
                        <thead>
                            <tr className=''>
                                <th>Firm Name</th>
                                <th>Application No.</th>
                                <th>License No.</th>
                                <th>Ward No.</th>
                                <th>Address</th>
                                <th>Validity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableToggle ? <DisplayFindings licenseValues={props.licenseValues} values={props.values} licenseData={licenseData} /> : <span id='errorText' className="text-red-500">Data No Found ...</span>}
                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}

export default SearchLicense