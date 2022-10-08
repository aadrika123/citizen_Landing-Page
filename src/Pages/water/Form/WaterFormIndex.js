//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 21 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterFormIndex.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
// import LandingNav from '../Landing/LandingNav'
import WaterAfterFormSubmit from './WaterAfterFormSubmit'
import WaterApplicant from './WaterApplicant'
import WaterCitizenForm from './WaterCitizenForm'
import WaterFormReview from './WaterFormReview'
import { FaHome } from 'react-icons/fa';
import Stepper from './Stepper'
import WaterApplySidebar from '../WaterApplySidebar'
import axios from 'axios'

function WaterFormIndex(props) {

    const bearer = window.localStorage.getItem('token')
    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }
    console.log("Token in WaterFormIndex ", bearer)

    const [form1ValueState, setform1ValueState] = useState()  // This will store the data of first form
    const [form2ValueState, setform2ValueState] = useState() // this will store data of secound form
    const [form1, setform1] = useState("block")  // show hide form 1 when next and back button is clicked.
    const [form2, setform2] = useState("hidden") //show hide form 2 (Applicant Detais) when next and back button is clicked.
    const [reviewData, setReviewData] = useState("hidden") //show hide Review Page when next and back button is clicked.
    const [afterFormSubmitted, setAfterFormSubmitted] = useState("hidden") // If this is set to block than Final screen will shown
    const [fakeUsersData, setfakeUsersData] = useState() // this state used for set data
    const [applicationNo, setApplicationNo] = useState() //After form successfully submitted. An application no will be generated.


    console.log("Form 1 Data : ", form1ValueState)
    console.log("Form 2 Data : ", form2ValueState)

    const backToWaterDash = () => {
        props.back();
    }

    const handleForm1Data = (data) => {  // it handles insitial form data
        setform1ValueState(data)
        setform1("hidden")
        setform2("block")
        setReviewData("hidden")
        setAfterFormSubmitted("hidden")
    }
    const handleForm2Data = (data) => { // it handles form 2 (Applicant Details Data)
        setform2ValueState(data)
        setform1("hidden")
        setform2("hidden")
        setReviewData("block")
        setAfterFormSubmitted("hidden")
    }
    const backFrom2 = () => { // handle form 2 (Applicant Details Data) Back Button
        setform1("block")
        setform2("hidden")
        setReviewData("hidden")
        setAfterFormSubmitted("hidden")
    }
    const backFromReview = () => { // call when user click on back buttin form Review Screen
        setform1("hidden")
        setform2("block")
        setReviewData("hidden")
        setAfterFormSubmitted("hidden")
    }

    const finalSubmit = () => { // This is called when Final submit button is clicked on review page.

        const finalData = { // This is array to store all the data at same place.
            // "categoryType": form1ValueState.categoryType,
            "connectionTypeId": "1021",
            // "propertyType": form1ValueState.propertyType,
            "propertyTypeId": "2",
            // "typeofConnection": form1ValueState.connectionType,

            "ownerType": form1ValueState.ownerType,
            "proofDocumentId": "3",
            // "proofDocumentId": form1ValueState.connectionThrough,
            "category": "BPL",
            // "pipelineTypeId": form1ValueState.pipelineType,
            "pipelineTypeId": "1",
            "holdingNo": form1ValueState.holdingNo,
            // "wardId": form1ValueState.wardNo,
            "wardId": "5",
            "areaSqft": form1ValueState.totalArea,
            "address": form1ValueState.address,
            "landmark": form1ValueState.landmark,
            "pin": form1ValueState.PINCode,
            "flatCount": "5",
            "elecKNo": form1ValueState.khataNo,
            "elecBindBookNo": form1ValueState.bindBookNo,
            "elecAccountNo": form1ValueState.accountNo,
            "elecCategory": form1ValueState.electricityCategoryType,

            // "SAFNo": form1ValueState.SAFNo,
            "owners": form2ValueState.applicant   // this is array data of form 2 (Applicant Details)
        }
        console.log("Final Data is - ", finalData)
        console.log("HEADER in WaterFormIndex ", header)

        axios.post('http://192.168.0.166/api/water/crud/new-connection',finalData, header)
            .then((res) => (
                console.log("Data Saved", res),
                setApplicationNo(res.data.data),
                setform1("hidden"),
                setform2("hidden"),
                setReviewData("hidden"),
                setAfterFormSubmitted("block")  // After final form summition success screen will be visible
            ))
            .catch((err) => {
                console.log("Error", err)
            })
    }

    const fakeUserData = (fakeData) => { // Get this data when user enters SAF No/ Holding No.
        setfakeUsersData(fakeData)
    }

    // console.log("form1, form2", form1, form2)

    return (
        <>
            <h1 className='ml-5 -mt-8 font-sans font-bold absolute text-gray-600'><FaHome className="inline mr-2" />Water Connection Application Form</h1>
            <div className='m-5 my-12 border border-gray-300 rounded-md shadow-lg'>
                <p className={form1}> <WaterCitizenForm formValue={handleForm1Data} fakeUserData={fakeUserData} backToWaterDash={backToWaterDash} /></p>
                <p className={form2}> <WaterApplicant formValue={handleForm2Data} back={backFrom2} fakeUsersData={fakeUsersData} /> </p>
                <p className={reviewData}> <WaterFormReview fakeUsersData={fakeUsersData} formValue={handleForm2Data} back={backFromReview} form1={form1ValueState} form2={form2ValueState} finalSubmit={finalSubmit} handleBackBtn={backFromReview} /> </p>
                <p className={afterFormSubmitted}> <WaterAfterFormSubmit applicationNo={applicationNo} /></p>
            </div>
        </>
    )
}

export default WaterFormIndex

/*
Exported to -
1. WaterApplyListBlocks.js
*/
