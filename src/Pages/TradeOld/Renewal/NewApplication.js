import React, { useEffect, useState } from 'react'
import InitialBusinessDetails from './InitialBusinessDetails';
import FirmDetails from './FirmDetails';
import OwnerDetails from './OwnerDetails';
import Timeline from '../tradeComponent/Timeline';
import LicenseDetails from './LicenseDetails';
import DocumentUpload from './DocumentUpload';
import SuccessScreen from '../tradeComponent/SuccessScreen';
import TradeAssetComponent from '../TradeAssests/TradeAssetComponent';
import { TRADE, HEADER } from '../tradeComponent/TradeApiListFile';
import axios from 'axios';
import { convertApplicationTypeToString } from '../tradeComponent/UsefulFunctions';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

function NewApplication(props) {

    const [collectAllFormData, setcollectAllFormData] = useState([]);
    const [FirmStep, setFirmStep] = useState(1)
    const [regCurrentStep, setRegCurrentStep] = useState(1)
    const [colorCode, setcolorCode] = useState(false)

    const [initialBusinessDetails, setinitialBusinessDetails] = useState([])
    const [firmDetails, setfirmDetails] = useState([])
    const [ownerDetails, setownerDetails] = useState([])
    const [licenseDetails, setlicenseDetails] = useState([])
    const [applicationType, setapplicationType] = useState(props.applicationType)
    const [successData, setsuccessData] = useState();
    const [paymentData, setpaymentData] = useState()


    console.log('all form data is: ');
    console.log(collectAllFormData);

    let finalData;
    const handleAllFormData = (key, formData, submitStatus) => {

        // console.log('prev Data', key, formData)
        // console.log("prev data form", allTestData)
        // setAllFormData({...allFormData,formData}) //this is going to replace upcoming data since has same formData key all the time
        // finalData = { ...finalData, [key]: formData };
        finalData = { ...collectAllFormData, [key]: formData }
        // setcollectAllFormData({ ...collectAllFormData, [key]: formData })
        setcollectAllFormData({ ...collectAllFormData, [key]: formData })

        console.log("allformdata 2", finalData);
        if (submitStatus) {
            finalSubmit(finalData)
        }

    }


    // let token = JSON.parse(window.localStorage.getItem('token'))

    const finalSubmit = (dataToSend) => {
        setTimeout(() => {
            console.log("allFormData in state", collectAllFormData)
            console.log("allFormData", dataToSend)
            axios.post(TRADE.MASTER_DATA_API + convertApplicationTypeToString(applicationType), Object.assign({}, dataToSend), HEADER)
                .then(function (response) {
                    console.log("response ", response.data);
                    if (response.data.status) {
                        setsuccessData(response.data);
                        getPaymentDetailsForReceipt(response.data);
                        setFirmStep(5)
                    }
                    else {
                        setFirmStep(4);
                    }
                    // props.showLoader(false);
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Invalid response received");
                    props.showLoader(false);
                })
        }, 500)
    }


    const values = applicationType == 1 ? {
        applicationType: props.applicationType,
        colorCode: colorCode,
        currentStep: regCurrentStep,
        currentStepFun: setRegCurrentStep,
        collectFormDataFun: handleAllFormData,
        firmStepFun: setFirmStep,
        firmStep: FirmStep,
        colorCodeFun: setcolorCode,
        fieldData: props.fieldData,
        allFormData: collectAllFormData,
        showLoader: props.showLoader,
        finalSubmit: finalSubmit
    } : {
        applicationType: props.applicationType,
        colorCode: colorCode,
        currentStep: regCurrentStep,
        currentStepFun: setRegCurrentStep,
        collectFormDataFun: handleAllFormData,
        firmStepFun: setFirmStep,
        firmStep: FirmStep,
        colorCodeFun: setcolorCode,
        allFormData: collectAllFormData,
        showLoader: props.showLoader,
        finalSubmit: finalSubmit,
        licenseData: props.licenseValues.licenseData
    }

    const successValues = {
        successData: successData,
        successFun: setsuccessData
    }
    console.log('values ', values);

    const getPaymentDetailsForReceipt = (data) => {
        console.log("===getting payment data====", data.data.paymentRecipt);
        axios.get(data.data.paymentRecipt)
            .then(function (response) {
                if (response.data.status) {
                    setpaymentData(response.data.data)
                    console.log("===getting payment data thorugh api====", response.data);
                }
            })
            .catch(function (error) {
                console.log("===getting payment data thorugh api erro====", error);
            })
    }

    return (
        <>
            <TradeAssetComponent applicationType={props.applicationType} />
            <div className=" overflow-x-clip">
                {/* Form stepper for New trade License */}
                {FirmStep == 5 ? '' : <Timeline colorCode={colorCode} currentStep={regCurrentStep} />}
                <div className={`mt-8  pl-5 transition-all ${FirmStep == 1 ? 'translate-x-0' : 'translate-x-full'}`}><InitialBusinessDetails values={values} /> </div>
                <div className={`mt-8  pl-5 transition-all ${FirmStep == 2 ? ' translate-x-0  ' : 'translate-x-full'}`}><FirmDetails values={values} /></div>
                <div className={`mt-8  pl-5 transition-all ${FirmStep == 3 ? ' translate-x-0  ' : 'translate-x-full'}`}><OwnerDetails values={values} /></div>
                <div className={`mt-8  pl-5 transition-all ${FirmStep == 4 ? ' translate-x-0  ' : 'translate-x-full'}`}><LicenseDetails values={values} successData={successValues} /></div>
                {/* <div className={`mt-8 transition-all ${FirmStep == 5 ? ' translate-x-0  ' : 'translate-x-full'}`}>
                    <DocumentUpload values={values} />
                </div> */}
                <div className={`mt-8 transition-all ${FirmStep == 5 ? ' translate-x-0  ' : 'translate-x-full'}`}><SuccessScreen values={values} successData={successValues} paymentData={paymentData} /></div>


                {/* <OwnerDetails values={values} />
                    <LicenseDetails values={values} />
                    <DocumentUpload values={values} />
                    <SuccessScreen values={values} /> */}
            </div>
        </>
    )
}

export default NewApplication