import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewApplication from '../NewApplication/NewApplication';
import TradeAssetComponent from '../TradeAssests/TradeAssetComponent';
import SuccessScreen from '../tradeComponent/SuccessScreen';
import { HEADER, TRADE } from '../tradeComponent/TradeApiListFile';
import { convertApplicationTypeToString } from '../tradeComponent/UsefulFunctions';
import FirmDetails from './FirmDetails';
import InitialBusinessDetails from './InitialBusinessDetails';
import LicenseDetails from './LicenseDetails';
import OwnerDetails from './OwnerDetails';
import SearchLicense from './SearchLicense';
import Timeline from '../tradeComponent/Timeline';

function Surrender(props) {

    const [collectAllFormData, setcollectAllFormData] = useState({});
    const [FirmStep, setFirmStep] = useState(1)
    const [regCurrentStep, setRegCurrentStep] = useState(1)
    const [colorCode, setcolorCode] = useState(false)
    const [renewToggleStatus, setrenewToggleStatus] = useState(false)
    const [applicationType, setapplicationType] = useState(4)
    const [successData, setsuccessData] = useState();
    const [paymentData, setpaymentData] = useState()
    const [initialBusinessDetails, setinitialBusinessDetails] = useState([])
    const [firmDetails, setfirmDetails] = useState([])
    const [ownerDetails, setownerDetails] = useState([])
    const [licenseDetails, setlicenseDetails] = useState([])


    console.log('all form data is: ');
    console.log(collectAllFormData);

    let finalData;
    const handleAllFormData = (key, formData, submitStatus) => {
        console.log('prev Data', collectAllFormData)
        // setAllFormData({...allFormData,formData}) //this is going to replace upcoming data since has same formData key all the time
        finalData = { ...collectAllFormData, [key]: formData }
        setcollectAllFormData({ ...collectAllFormData, [key]: formData })

        // console.log("allformdata 2", finalData);
        if (submitStatus) {
            finalSubmit(finalData)
        }
    }

    const finalSubmit = (dataToSend) => {
        setTimeout(() => {
            console.log("allFormData in state", collectAllFormData)
            console.log("allFormData", dataToSend)
            axios.post(TRADE.MASTER_DATA_API + convertApplicationTypeToString(applicationType), Object.assign({}, dataToSend), HEADER)
                .then(function (response) {
                    console.log("success data ", response.data);
                    if (response.data.status) {
                        setsuccessData(response.data);
                        getPaymentDetailsForReceipt(response.data);
                        setFirmStep(5)
                    }
                    else {
                        alert(response.data.data.message);
                        console.log("success", response.data.message)
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

   

    const values = {
        renewToggleStatus: renewToggleStatus,
        renewToggleStatusFun: setrenewToggleStatus,

        applicationTypeFun: setapplicationType,
        applicationType: props.applicationType,

        showLoader: props.showLoader,

        currentStep: regCurrentStep,
        currentStepFun: setRegCurrentStep,

        collectFormDataFun: handleAllFormData,
        allFormData: collectAllFormData,

        firmStepFun: setFirmStep,
        firmStep: FirmStep,

        colorCode: colorCode,
        colorCodeFun: setcolorCode,

        showLoader: props.showLoader,
        finalSubmit: finalSubmit,
        licenseData: props.licenseValues.licenseData

    }

    const successValues = {
        successData: successData,
        successFun: setsuccessData
    }

    return (
        <>
            <TradeAssetComponent applicationType={props.applicationType} />
            {renewToggleStatus ?
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
                </div>
                : <SearchLicense licenseValues={props.licenseValues} values={values} />
            }
        </>
    )
}

export default Surrender