//////////////////{*****}//////////////////////////////////////////
// >Author - swati sharma
// >Version - 1.0
// >Date - 7 oct 2022
// >Revision - 1
// >Project - JUIDCO
// >Component  - CitizenPropSafApplicationFormIndex
// >DESCRIPTION - CitizenPropSafApplicationFormIndex Component
//////////////////{*****}//////////////////////////////////////////


import { useState, useEffect, useContext } from 'react'
import CitizenPropBasicDetail from './CitizenPropBasicDetail'
import CitizenPropFormStatusTimeline from './CitizenPropFormStatusTimeline'
import CitizenPropElectricityWaterDetails from './CitizenPropElectricityWaterDetails'
import CitizenPropPropertyAddressDetails from './CitizenPropPropertyAddressDetails'
import CitizenPropOwnerDetails from './CitizenPropOwnerDetails'
import CitizenPropFloorDetails from './CitizenPropFloorDetails'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImUpload2 } from 'react-icons/im'
import FormSubmitResponse from '../../components/Common/ResponseScreen/FormSubmitResponse'
import { TbWebhook } from 'react-icons/tb'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
// import { QuerySafApplyMasterData } from 'Components/ApiQueries/QuerySafApplyMasterData'
import { contextVar } from '../../components/Common/Context/Context'
import axios from 'axios'
import SafFormReview from '../CitizenSafForm/SafFormReview/SafFormReview'
import SafFormDemand from '../CitizenSafForm/SafFormReview/SafFormDemand'
import SafFormPayment from '../CitizenSafForm/SafFormReview/SafFormPayment'
// import api_getPostSafFormData from 'Components/ApiList/api_getPostSafFormData'
import CitizenApplyApiList from '../../components/CitizenApplyApiList'
// import RoundLoader from 'Components/TestDelete/RoundLoader'

function CitizenPropSafApplicationFormIndex() {

    const { api_getMasterData, api_postNewAssissment } = CitizenApplyApiList()

    const navigate = useNavigate()

    //////////////////{***✅ formindex specifies type of form like basicdetails at index 1 ...***}//////////////////////////////
    const [formIndex, setFormIndex] = useState(1)

    //////////////////{***slide animation control state for BasicDetails form***}//////////////////////////////
    const [animateform1, setAnimateform1] = useState('translate-x-0 mb-40')

    //////////////////{***slide animation control state for PropertyAddressDetails form***}//////////////////////////////
    const [animateform2, setAnimateform2] = useState('pl-20 translate-x-full')

    //////////////////{***slide animation control state for ElectricityWaterDetails form***}//////////////////////////////
    const [animateform3, setAnimateform3] = useState('pl-20 translate-x-full')

    //////////////////{*** slide animation control state for OwnerDetails form***}//////////////////////////////
    const [animateform4, setAnimateform4] = useState('pl-20 translate-x-full')

    //////////////////{*** slide animation control state for FloorDetails form***}//////////////////////////////
    const [animateform5, setAnimateform5] = useState('pl-20 translate-x-full')

    //////////////////{***slide animation control state for reviewForm page***}//////////////////////////////
    const [animateform6, setAnimateform6] = useState('pl-20 translate-x-full')

    //////////////////{*** slide animation control state for formDemand page***}//////////////////////////////
    const [animateform7, setAnimateform7] = useState('pl-20 translate-x-full')

    //////////////////{***slide animation control state for payment page***}//////////////////////////////
    const [animateform8, setAnimateform8] = useState('pl-20 translate-x-full')

    //////////////////{*** checking full form filled status to toggle final submit button***}//////////////////////////////
    const [submitStatus, setSubmitStatus] = useState(false)
    const [allFormData, setAllFormData] = useState({})
    const [responseScreenStatus, setResponseScreenStatus] = useState('')

    //////////////////{*** assessment type***}//////////////////////////////
    const [assTypeText, setAssTypeText] = useState()

    //////////////////{***state variable to hold all form required data***}//////////////////////////////
    const [preFormData, setPreFormData] = useState()

    //////////////////{***state variable to hold response data after submitting the saf form***}//////////////////////////////
    const [safSubmitResponse, setsafSubmitResponse] = useState()

    //////////////////{***slide animation control state for BasicDetails form***}//////////////////////////////
    const [loader, setloader] = useState(false)

    //> useEffect to extract assessment type from url and set in state
    let { assType } = useParams()
    useEffect(() => {
        { assType == 'new' && (setAssTypeText('New-Assessment')) }
        { assType == 're' && (setAssTypeText('Re-Assessment')) }
        { assType == 'mu' && (setAssTypeText('Mutation')) }
        //// setAssTypeText(assType)
    }, [])

    //>global toast function
    const { notify } = useContext(contextVar)

    console.log('ass type . from main ', assTypeText)



    const backFun = (formIndex) => {
        let tempFormIndex = formIndex
        //> if backward by current form index 2
        if (tempFormIndex == 2) {
            //> go to form index 1 since back from index 2
            setFormIndex(1)
            //> always setstate one index less than current index
            setAnimateform1('translate-x-0 mb-40')
            //> always current index setstate
            setAnimateform2('pl-20 translate-x-full mb-0')
        }
        if (tempFormIndex == 3) {
            setFormIndex(2)
            setAnimateform2('translate-x-0 mb-40')
            setAnimateform3('pl-20 translate-x-full mb-0')
        }
        if (tempFormIndex == 4) {
            setFormIndex(3)
            setAnimateform3('translate-x-0 mb-40')
            setAnimateform4('pl-20 translate-x-full mb-0')
        }
        if (tempFormIndex == 5) {
            setFormIndex(4)
            setAnimateform4('translate-x-0 mb-40')
            setAnimateform5('pl-20 translate-x-full mb-0')
        }
        if (tempFormIndex == 6) {
            setFormIndex(5)
            setAnimateform5('translate-x-0 mb-40')
            setAnimateform6('pl-20 translate-x-full mb-0')
        }
        if (tempFormIndex == 7) {
            setFormIndex(6)
            setAnimateform6('translate-x-0 mb-40')
            setAnimateform7('pl-20 translate-x-full mb-0')
        }
        if (tempFormIndex == 8) {
            setFormIndex(7)
            setAnimateform7('translate-x-0 mb-40')
            setAnimateform8('pl-20 translate-x-full mb-0')
        }


    }
    const nextFun = (formIndex) => {
        let tempFormIndex = formIndex
        //> forward by current form index 1
        if (tempFormIndex == 1) {
            //> go to form index 2 since forward from index 1
            setFormIndex(2)
            //> always current index setstate
            setAnimateform1(' -translate-x-full right-80 mb-0')
            //> always setstate one index greater than current index
            setAnimateform2('pl-0 translate-x-0 mb-40')
        }
        if (tempFormIndex == 2) {
            setFormIndex(3)
            setAnimateform2('-translate-x-full right-80 mb-0')
            setAnimateform3('pl-0 translate-x-0 mb-40')
        }
        if (tempFormIndex == 3) {
            setFormIndex(4)
            setAnimateform3('-translate-x-full right-80 mb-0')
            setAnimateform4('pl-0 translate-x-0 mb-40')
        }
        if (tempFormIndex == 4) {
            setFormIndex(5)
            setAnimateform4('-translate-x-full right-80 mb-0')
            setAnimateform5('pl-0 translate-x-0 mb-40')
        }
        if (tempFormIndex == 5) {
            setFormIndex(6)
            setAnimateform5('-translate-x-full right-80 mb-0')
            setAnimateform6('pl-0 translate-x-0 mb-40')
        }
        if (tempFormIndex == 6) {
            setFormIndex(7)
            setAnimateform6('-translate-x-full right-80 mb-0')
            setAnimateform7('pl-0 translate-x-0 mb-40')
        }
        if (tempFormIndex == 7) {
            setFormIndex(8)
            setAnimateform7('-translate-x-full right-80 mb-0')
            setAnimateform8('pl-0 translate-x-0 mb-40')
        }

    }


    //
    const submitButtonToggle = () => {
        //> submit form
        console.log('final form ready to submit...', allFormData)
        //>skipping form submit for now
        submitSafForm()
        // navigate('/saf-demand')

    }

    const submitSafForm = () => {
        //> activating loader
        setloader(true)
        // let token = JSON.parse(window.localStorage.getItem('token'))
        let token = '905|BuD1uGp6HK7G9nTFYa557IFj6U6A1AB86uc4ODzB'
        console.log('token at basic details is ...', token)
        const header = {
            headers:
            {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            }
        }

        const requestBody = {
            // basic details
            ward: allFormData.basicDetails.wardNo,
            newWard: allFormData.basicDetails.newWardNo,
            ownershipType: allFormData.basicDetails.ownerShiptype,
            propertyType: allFormData.basicDetails.propertyType,
            zone: allFormData.basicDetails.zone,
            isMobileTower: allFormData.basicDetails.mobileTowerStatus,
            towerArea: allFormData.basicDetails.mobileTowerArea,
            towerInstallationDate: allFormData.basicDetails.mobileTowerDate,
            isHoardingBoard: allFormData.basicDetails.hoardingStatus,
            hoardingArea: allFormData.basicDetails.hoardingArea,
            hoardingInstallationDate: allFormData.basicDetails.hoardingDate,
            isPetrolPump: allFormData.basicDetails.petrolPumpStatus,
            undergroundArea: allFormData.basicDetails.petrolPumpArea,
            petrolPumpCompletionDate: allFormData.basicDetails.petrolPumpDate,
            isWaterHarvesting: allFormData.basicDetails.waterHarvestingStatus,

            // electricityandWaterDetails
            electricityConnection: allFormData.electricityWaterDetails.electricityKNo,
            electricityCustNo: allFormData.electricityWaterDetails.electrictyConsumerNo,
            electricityAccNo: allFormData.electricityWaterDetails.accNo,
            electricityBindBookNo: allFormData.electricityWaterDetails.bindBookNo,
            buildingPlanApprovalNo: allFormData.electricityWaterDetails.bpApprovalNo,
            buildingPlanApprovalDate: allFormData.electricityWaterDetails.bpApprovalDate,
            waterConnNo: allFormData.electricityWaterDetails.waterConsumerNo,
            waterConnDate: allFormData.electricityWaterDetails.waterConnectionDate,

            // propertyAddressDetails
            khataNo: allFormData.propertyAddressDetails.khataNo,
            plotNo: allFormData.propertyAddressDetails.plotNo,
            villageMaujaName: allFormData.propertyAddressDetails.village_mauja,
            roadType: allFormData.propertyAddressDetails.roadWidth,
            areaOfPlot: allFormData.propertyAddressDetails.plotArea,
            propAddress: allFormData.propertyAddressDetails.locality,
            propCity: allFormData.propertyAddressDetails.city,
            propDist: allFormData.propertyAddressDetails.district,
            propPinCode: allFormData.propertyAddressDetails.pin,

            corrAddress: allFormData.propertyAddressDetails.c_locality,
            corrCity: allFormData.propertyAddressDetails.c_city,
            corrDist: allFormData.propertyAddressDetails.c_district,
            corrPinCode: allFormData.propertyAddressDetails.c_pin,

            //owner
            owner: allFormData.ownerDetails,

            //floor
            floor: allFormData.floorDetails

        }
        console.log('form request body....', requestBody)

        // return
        axios.post(`${api_postNewAssissment}/NewAssessment`, requestBody, header)
            .then(function (response) {
                setloader(false)
                console.log('response after pushing saf data', response)
                setsafSubmitResponse(response.data)
                // notify(`Saf form submitted successfully with application no ${response?.data?.data?.safNo}`, 'success')
                nextFun(6)

            })
            .catch(function (error) {
                console.log('errorrr.... ', error);
            })
    }

    const collectAllFormData = (key, formData) => {
        console.log('prev of all Data', allFormData)
        //// setAllFormData({...allFormData,formData}) //this is going to replace upcoming data since has same formData key all the time
        setAllFormData({ ...allFormData, [key]: formData })

        //> changing submitStatus if lenght of floor is greater than 0
        if (key == 'floorDetails') {
            { formData.length > 0 ? setSubmitStatus(true) : setSubmitStatus(false) }
        }
    }

    // let assesmentType = 'New Assessment'

    useEffect(() => {

        // let token = window.localStorage.getItem('token')
        let token = '905|BuD1uGp6HK7G9nTFYa557IFj6U6A1AB86uc4ODzB'
        console.log('token at basic details is ...', token)
        const header = {
            headers:
            {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            }
        }

        axios.get(`${api_getMasterData}/NewAssessment`, header)
            .then(function (response) {
                console.log('saf master data ....', response.data.data)
                setPreFormData(response.data.data)
            })
            .catch(function (error) {
                console.log('errorrr.... ', error);
            })
    }, [])

    if (responseScreenStatus == 'success') {
        return (
            <>
                <FormSubmitResponse />
            </>
        )
    }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-auto container lg:px-[29rem] md:px-24 p-1'>
         
                    <img src='https://cdn-icons-png.flaticon.com/512/4115/4115893.png' className='h-8 lg:h-9 md:h-8' />
                    <h1 className='text-xl lg:text-3xl md:text-xl ml-12 -mt-8  font-semibold text-gray-700'>
                        {assTypeText}
                    </h1>
              

            </div>

            <div className='grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 gap-8  p-4 -mt-9  '>
                <div className='col-span-1 mt-12  '>
                    {formIndex < 7 && <div className="flex flex-col mt-0">

                        <CitizenPropFormStatusTimeline active={formIndex == 1 && true} index="1" level="Basic Details" verificationStatus={formIndex >= 2 && true} last={false} />
                        <CitizenPropFormStatusTimeline active={formIndex == 2 && true} index="2" level="Property Details" verificationStatus={formIndex >= 3 && true} last={false} />
                        <CitizenPropFormStatusTimeline active={formIndex == 3 && true} index="3" level="Electricity & Water" verificationStatus={formIndex >= 4 && true} last={false} />
                        <CitizenPropFormStatusTimeline active={formIndex == 4 && true} index="4" level="Owner Details" verificationStatus={formIndex >= 5 && true} last={false} />
                        <CitizenPropFormStatusTimeline active={formIndex == 5 && true} index="5" level="Floor Details" verificationStatus={formIndex >= 6 && true} last={true} />
                    </div>}

                </div>

                <div className='col-span-7 '>
                    {/* {loader && <RoundLoader />} */}
                    <ToastContainer position="top-right"
                        autoClose={2000} />
                    {formIndex < 7 && <>
                        <div className={`${animateform1} transition-all relative`}><CitizenPropBasicDetail preFormData={preFormData} collectFormDataFun={collectAllFormData} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>
                        {/*//> collectDataFun to receive form data on every save&next */}
                        {/*//> submitFun to activate final submit button when all forms are filled */}
                        {/*//> toastFun to activate toast notification via receiving toast message */}
                        {/*//> backFun to go back from any specific form level */}
                        {/*//> nextFun to go next from any specific form level */}
                        <div className={`${animateform2} transition-all relative`}><CitizenPropPropertyAddressDetails preFormData={preFormData} collectFormDataFun={collectAllFormData} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>
                        <div className={`${animateform3} transition-all relative`}><CitizenPropElectricityWaterDetails preFormData={preFormData} collectFormDataFun={collectAllFormData} backFun={backFun} nextFun={nextFun} /></div>
                        <div className={`${animateform4} transition-all relative`}><CitizenPropOwnerDetails preFormData={preFormData} assType={assTypeText} collectFormDataFun={collectAllFormData} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>
                        <div className={`${animateform5} transition-all relative`}><CitizenPropFloorDetails preFormData={preFormData} collectFormDataFun={collectAllFormData} submitStatus={submitStatus} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>
                        {formIndex == 6 && <div className={`${animateform6} transition-all relative`}><SafFormReview formReviewData={allFormData} collectFormDataFun={collectAllFormData} submitFun={submitButtonToggle} submitStatus={submitStatus} toastFun={notify} backFun={backFun} nextFun={nextFun} /></div>}
                    </>}
                    {/*//> after successfully form submit show safformdemand page */}
                    {formIndex == 7 && <div className={`${animateform7} transition-all relative`}><SafFormDemand submitStatus={submitStatus} toastFun={notify} backFun={backFun} nextFun={nextFun} safSubmitResponse={safSubmitResponse} /></div>}

                    {/*//> payment page */}
                    {formIndex == 8 && <div className={`${animateform8} transition-all relative`}><SafFormPayment backFun={backFun} safSubmitResponse={safSubmitResponse} /></div>}
                </div>
            </div>

        </>
    )
}

export default CitizenPropSafApplicationFormIndex