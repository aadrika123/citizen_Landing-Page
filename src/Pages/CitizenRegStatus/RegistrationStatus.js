import React, { useState } from 'react'
import EnterPhoneForRegStstus from './EnterPhoneForRegStstus'
import OtpVerify from './OtpVerify'
import NewOtpVerify from './NewotpVerify'
import AfterOTPSuccess from './AfterOTPSuccess'

function RegistrationStatus() {
  const [mobile, setMobile] = useState()
  const [enterMobilePage, setEnterMobilePage] = useState(true)
  const [otpVerifyPage, setOtpVerifyPage] = useState(false)
  const [afterOPTSuccessed, setAfterOPTSuccessed] = useState(false)


  const userMobileNo=(mobile)=>{
    setMobile(mobile)
  }

  const next = () => {
    setEnterMobilePage(false)
    setOtpVerifyPage(true)
    setAfterOPTSuccessed(false)
  }

  const afterOPTSuccess = () => {
    setEnterMobilePage(false)
    setOtpVerifyPage(false)
    setAfterOPTSuccessed(true)
  }


  const chnageNumber = () => {
    setEnterMobilePage(true)
    setOtpVerifyPage(false)
    otpVerifyPage(false)
  }

  return (
    <>
      {enterMobilePage && <EnterPhoneForRegStstus userMobileNo={userMobileNo} next={next}/>}
      {otpVerifyPage && <OtpVerify mobile={mobile} chnageNumber={chnageNumber} afterOPTSuccess={afterOPTSuccess} />}
      {/* { mobile && <NewOtpVerify mobile={mobile} chnageNumber={chnageNumber} />} */}
      {afterOPTSuccessed && <AfterOTPSuccess mobile={mobile} /> }
    </>
  )
}

export default RegistrationStatus


/*
Exported To 
1. App.js
*/