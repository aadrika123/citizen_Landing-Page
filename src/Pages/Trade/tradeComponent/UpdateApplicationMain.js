import React, { useEffect, useState } from 'react'
import UpateInitialBusinessDetails from '../UpdateApplications/UpateInitialBusinessDetails';
import UpdateFirmDetails from '../UpdateApplications/UpdateFirmDetails';
import UpdateLicenseDetails from '../UpdateApplications/UpdateLicenseDetails';
import Timeline from '../tradeComponent/Timeline';
import LicenseDetails from '../UpdateApplications/UpdateLicenseDetails';
import UpdateDocumentUpload from '../UpdateApplications/UpdateDocumentUpload';
import SuccessScreen from '../tradeComponent/SuccessScreen';
import axios from 'axios';
function UpdateApplicationMain(props) {

    const [collectAllFormData, setcollectAllFormData] = useState({});
    const [FirmStep, setFirmStep] = useState(1)
    const [regCurrentStep, setRegCurrentStep] = useState(1)
    const [colorCode, setcolorCode] = useState(false)

    const [initialBusinessDetails, setinitialBusinessDetails] = useState([])
    const [firmDetails, setfirmDetails] = useState([])
    const [ownerDetails, setownerDetails] = useState([])
    const [licenseDetails, setlicenseDetails] = useState([])
    const [applicationType, setapplicationType] = useState([])
    const [licenseData, setlicenseData] = useState([])

    console.log('all form data is: ');
    console.log(collectAllFormData);
    const handleAllFormData = (key, formData) => {
        console.log('prev Data', collectAllFormData)
        // setAllFormData({...allFormData,formData}) //this is going to replace upcoming data since has same formData key all the time
        setcollectAllFormData({ ...collectAllFormData, [key]: formData })
    }

    const licenseDataForUpdate = [
         {
              id: 1,
              application_no: "APN123456874",
              license_no: "RAN1234586855",
              address: "Demo address",
              valid_upto: "2023-08-19",
              addressProof: "",
              applicationForm: "",
              incomeProof: "",
              ownerIdProof: "",
              firmDetails: [
                {
                  area_sqft: 100,
                  firm_name: "Vanila House",
                  business_address: "Demo business addres",
                  business_description: "This a dummy business descriptionn",
                  firm_estd_date: "2022-09-21",
                  holding_no: "123456789012345",
                  landmark: "demo landmar",
                  new_ward_no: "1",
                  pincode: "123456",
                  premises_owner: "mr Premises ownerd",
                  ward_no: 1
                }
              ],
              initialbusinessDetail: [
                {
                  apply_with: "1",
                  firm_type: "1",
                  notice_date: "",
                  notice_no: "1",
                  ownership_type: "1"
                }
              ],
              licenseDetails: [
                {
                  denialAmount: "0",
                  licenseCharge: "300",
                  licenseFor: "1",
                  paymentMode: "1",
                  penalty: "20",
                  totalCharge: "320"
                }
              ],
             
                businessOwnerName: "Mira Fleming",
                email: "qoluzod@mailinator.com",
                guardianName: "Ima Manning",
                mobileNo: 1234567894,
                natureOfBusiness: "1"
              }
    ]

    const values = {
        applicationType: props.applicationType,
        colorCode: colorCode,
        currentStep: regCurrentStep,
        currentStepFun: setRegCurrentStep,
        collectFormDataFun: handleAllFormData,
        firmStepFun: setFirmStep,
        firmStep: FirmStep,
        colorCodeFun: setcolorCode,
        licenseDataForUpdate:licenseDataForUpdate
    }

    const getAllLicenseData = (apply_license_id) =>{
        axios.get('http://localhost:3333/licenseDetails/1')
        .then(function(response){
            console.log('all license data',response.data);
            setlicenseData(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }
   
    return (
        <>
            <div className="  ">
                {/* Form stepper for New trade License */}

                {FirmStep == 6 ? '' : <Timeline colorCode={colorCode} currentStep={regCurrentStep} />}
                <div className={`mt-8 transition-all ${FirmStep == 1 ? 'translate-x-0' : 'translate-x-full'}`}><UpateInitialBusinessDetails values={values} /> </div>
                <div className={`mt-8 transition-all ${FirmStep == 2 ? ' translate-x-0  ' : 'translate-x-full'}`}><UpdateFirmDetails values={values} /></div>
                <div className={`mt-8 transition-all ${FirmStep == 3 ? ' translate-x-0  ' : 'translate-x-full'}`}><UpdateLicenseDetails values={values} /></div>
                <div className={`mt-8 transition-all ${FirmStep == 4 ? ' translate-x-0  ' : 'translate-x-full'}`}><LicenseDetails values={values} /></div>
                <div className={`mt-8 transition-all ${FirmStep == 5 ? ' translate-x-0  ' : 'translate-x-full'}`}><UpdateDocumentUpload values={values} /></div>
                {/* <div className={`mt-8 transition-all ${FirmStep == 6 ? ' translate-x-0  ' : 'translate-x-full'}`}><SuccessScreen values={values} /></div> */}
              
            </div>
        </>
    )
}

export default UpdateApplicationMain