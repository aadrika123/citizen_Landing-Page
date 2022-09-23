//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 21 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterIndex.js
//    DESCRIPTION - 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import WaterAfterFormSubmit from './WaterAfterFormSubmit'
import WaterApplicant from './WaterApplicant'
import WaterCitizenForm from './WaterCitizenForm'
import WaterFormReview from './WaterFormReview'

function WaterIndex() {

    const [form1ValueState, setform1ValueState] = useState()
    const [form2ValueState, setform2ValueState] = useState()
    const [form1, setform1] = useState("block")
    const [form2, setform2] = useState("hidden")
    const [reviewData, setReviewData] = useState("hidden")
    const [afterFormSubmitted, setAfterFormSubmitted] = useState("hidden")
    const [fakeUsersData, setfakeUsersData] = useState()

    console.log("Form 1 Data : ", form1ValueState)
    console.log("Form 2 Data : ", form2ValueState)

    const handleForm1Data = (data) => {
        setform1ValueState(data)
        setform1("hidden")
        setform2("block")
        setReviewData("hidden")
        setAfterFormSubmitted("hidden")        
    }
    const handleForm2Data = (data) => {
        setform2ValueState(data)
        setform1("hidden")
        setform2("hidden")
        setReviewData("block")
        setAfterFormSubmitted("hidden")
    }
    const backFrom2 = () => {
        setform1("block")
        setform2("hidden")
        setReviewData("hidden")
        setAfterFormSubmitted("hidden")
    }
    const backFromReview = () => {
        setform1("hidden")
        setform2("block")
        setReviewData("hidden")
        setAfterFormSubmitted("hidden")
    }

    const finalSubmit=()=>{
        const finalData = {
            "TypeofConnection": form1ValueState.connectionType,
            "PropertyType" : form1ValueState.propertyType,
            "ConnectionThrough" : form1ValueState.connectionThrough,
            "ownerType": form1ValueState.ownerType,
            "applicantDetails": form2ValueState
        }

        console.log("Final Data is - ",finalData)

        setform1("hidden")
        setform2("hidden")
        setReviewData("hidden")
        setAfterFormSubmitted("block")

    }

    const fakeUserData=(fakeData)=>{
        setfakeUsersData(fakeData)
    }

    // console.log("form1, form2", form1, form2)

    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 bg-sky-300 md:block hidden'>
                    sidebar
                </div>
                <div className='md:col-span-10 col-span-12'>
                    <p className={form1}> <WaterCitizenForm formValue={handleForm1Data} fakeUserData={fakeUserData} /></p>
                    <p className={form2}> <WaterApplicant formValue={handleForm2Data} back={backFrom2} fakeUsersData={fakeUsersData} /> </p>
                    <p className={reviewData}> <WaterFormReview fakeUsersData={fakeUsersData} formValue={handleForm2Data} back={backFromReview} form1={form1ValueState} form2={form2ValueState} finalSubmit={finalSubmit} handleBackBtn={backFromReview} /> </p>
                    <p className={afterFormSubmitted}> <WaterAfterFormSubmit  /></p>
                </div>
            </div>
        </>
    )
}

export default WaterIndex

/*
Exported to -
1. App.js
*/
