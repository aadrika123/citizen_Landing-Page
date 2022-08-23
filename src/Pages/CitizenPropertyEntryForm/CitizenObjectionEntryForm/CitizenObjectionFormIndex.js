import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImUpload2 } from 'react-icons/im'
import FormSubmitResponse from '../CitizenFormSubmitResponse'
import { TbWebhook } from 'react-icons/tb'
import CitizenObjectionEntryForm from './CitizenObjectionEntryForm';
import LandingNav from '../../Landing/LandingNav';
import axios from 'axios';

function CitizenObjectionFormIndex() {
    const [formIndex, setFormIndex] = useState(1) //formindex specifies type of form like basicdetails at index 1 ...
    const [animateform1, setAnimateform1] = useState('translate-x-0') //slide animation control state for BasicDetails form
    const [submitStatus, setSubmitStatus] = useState(false) //checking full form filled status to toggle final submit button
    const [allFormData, setAllFormData] = useState({})
    const [responseScreenStatus, setResponseScreenStatus] = useState('')


    const [allMasterTypeData, setallMasterTypeData] = useState()


    const bearerTokenInit = localStorage.getItem('token');

    const getallMasterTypeData = () => {
        axios({
            method: "GET",
            url: "http://192.168.0.166/api/property-objection/2",
            headers: {
                Authorization: `Bearer ${bearerTokenInit}`,
                Accept: 'application/json',
            }
        })
            .then(function (response) {
                console.log("getdata DIRECT......", response.data);
                setallMasterTypeData(response.data.data)

            });
    }


    useEffect(() => {
        getallMasterTypeData()
    }, [])



    //     alert("submit")
    //     console.log("OBJECTION DETAIL", allFormData)

    //     let ObjectionFormData = {
    //         "isRainWaterHarvesting": allFormData.harvestingObjValue,
    //         "isRoadWidth": allFormData.roadWidthObjValue,
    //         "isPropertyType": allFormData.propertyTypeObjValue,
    //         "isAreaPlot":allFormData.plotAreaObjValue ,
    //         "isMobileTower": allFormData.mobileTowerObjValue,
    //         "isPetrolPump": allFormData.petrolPumpObjValue,
    //         "isHoardingBoard": allFormData.hoardingObjValue,
    //         "IsfloorDetail":"yes",
    //         "objectionFormDoc": allFormData.objFormDoc,
    //         "evidenceDoc": allFormData.objevidenceDoc,
    //         "Remark": allFormData.objRemarks,

    //         "harvestingToggleStatus": allFormData.harvestingToggleStatus,
    //         "roadWidthToggleStatus": allFormData.roadWidthToggleStatus,
    //         "propertyTypeToggleStatus": allFormData.propertyTypeToggleStatus,
    //         "plotAreaToggleStatus": allFormData.plotAreaToggleStatus,
    //         "mobileTowerToggleStatus":allFormData.mobileTowerToggleStatus ,
    //         "petrolPumpToggleStatus":allFormData.petrolPumpToggleStatus,
    //         "hoardingToggleStatus": allFormData.hoardingToggleStatus,
    //         "floorToggleStatus": allFormData.floorToggleStatus,

    //     }
    //     axios({
    //         method: "post",
    //         url: "http://192.168.0.166/api/property-objection/2",
    //         data: ObjectionFormData,
    //         headers: {
    //             Authorization: `Bearer ${bearerTokenInit}`,
    //             Accept: 'application/json',
    //         }
    //     })
    //         .then(function (response) {
    //             console.log("Objection form uploaded......", response);
    //             console.log("Check ==== ", response.data.status)
    //             if (response.data.status) {
    //                 setResponseScreenStatus('success')
    //             } else if (!response.data.status) {
    //                 console.log("objection form Not submitted ==== ", response.data.status)
    //                 alert("form Not Submiteed..")
    //             } else {
    //                 alert("Somethig Went Wrong.")
    //             }

    //             // console.log("Message", response.data);
    //             // setRegMsg(response.data);
    //             // regComplated()
    //         })
    //         .catch(function (response) {
    //             // console.log("Failed", response.response.data.ulb[0]);
    //             console.log("Failed", response);
    //             // console.log("Message", response.message);
    //             // setRegMsg(response.message);
    //             // setRegMsg(response.response.data.ulb[0]);
    //         });

    // }

    // console.log("objection form data ", allFormData)
    //activating notification if no owner or no floor added
    const notify = (toastData) => {
        toast.dismiss();
        toast.error(toastData)
    };

    //
    const submitButtonToggle = () => {
        setSubmitStatus(true)
    }

    const collectAllFormData = (key, formData) => {
        console.log('objection Data...', formData)
        setAllFormData(formData) //this is going to replace upcoming data since has same formData key all the time
    }
    if (responseScreenStatus == 'success') {
        return (
            <>
                <FormSubmitResponse />
            </>
        )
    }
    return (
        <>
            <div>
                <LandingNav />
            </div>
            <div className='w-10/12 ml-48'>
                <ToastContainer position="top-right"
                    autoClose={2000} />
                <div className='text-right relative top-0 animate__animated animate__fadeInDown'>
                    <span className='bg-sky-100 border-l border-b border-white text-black col-span-12 sm:col-span-2 sm:col-start-11 pl-4 rounded-l shadow-lg font-semibold pr-4'><TbWebhook className='inline' /> Objection Entry</span>
                </div>

                <div className={`${animateform1} transition-all relative`}><CitizenObjectionEntryForm collectFormDataFun={collectAllFormData} masterTypeData={allMasterTypeData} submitFun={submitButtonToggle} toastFun={notify} /></div>
                {/* collectDataFun to receive form data on every save&next */}
                {/* submitFun to activate final submit button when all forms are filled */}
                {/* toastFun to activate toast notification via receiving toast message */}
                {/* backFun to go back from any specific form level */}
                {/* nextFun to go next from any specific form level */}



                {/* {submitStatus && <div onClick={() => setResponseScreenStatus('success')} className="flex items-center justify-center"><button type="submit" className="absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit Form <ImUpload2 className='inline text-xl' /></button></div>} */}
                {/* {submitStatus == false && <div onClick={() => handleSubmiBtn()} className="flex items-center justify-center"><button type="submit" className="absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit Form <ImUpload2 className='inline text-xl' /></button></div>} */}



            </div>
        </>
    )
}

export default CitizenObjectionFormIndex