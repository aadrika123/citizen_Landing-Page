import React, { useEffect, useState } from 'react';
import NewApplication from '../NewApplication/NewApplication';
import SuccessScreen from '../tradeComponent/SuccessScreen';
import SearchLicense from './SearchLicense';
// import OpenRenewalForms from './OpenRenewalForms';

function Amendment() {

    const [collectAllFormData, setcollectAllFormData] = useState({});
    const [FirmStep, setFirmStep] = useState(1)
    const [regCurrentStep, setRegCurrentStep] = useState(1)
    const [colorCode, setcolorCode] = useState(false)
    const [renewToggleStatus, setrenewToggleStatus] = useState(false)
    const [applicationType, setapplicationType] = useState(3)

    console.log('renewToggleStatus', renewToggleStatus);
    const handleAllFormData = (key, formData) => {
        console.log('prev Data', collectAllFormData)
        // setAllFormData({...allFormData,formData}) //this is going to replace upcoming data since has same formData key all the time
        setcollectAllFormData({ ...collectAllFormData, [key]: formData })
    }
    const values = {
        renewToggleStatus: renewToggleStatus,
        renewToggleStatusFun: setrenewToggleStatus,
        applicationType: applicationType,
        applicationTypeFun: setapplicationType
    }
    return (
        <>
            {/* {FirmStep == 6 ? '' : <Timeline colorCode={colorCode} currentStep={regCurrentStep} />} */}
           
           {renewToggleStatus==true ? <NewApplication applicationType={applicationType}/>:<SearchLicense values={values} />} 
            
        </>
    )
}

export default Amendment