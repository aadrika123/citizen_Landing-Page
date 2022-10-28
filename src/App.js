//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - App
//    DESCRIPTION - App Component
//    Changed - By Dipu (Added Proteched Links)
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import { Routes, Route, Link, Outlet, } from "react-router-dom";
import './App.css';
import NotFound from './components/NotFound';
import CitizenDetailPage from './Pages/citizen/CitizenDetailPage';
import CitizenAppliedLicenseDetailTbl from './Pages/citizen/CitizenAppliedLicenseDetailTbl';
import TestComponent from './components/testDelete/TestComponent';
import ComplainGrivanceMainPage from './components/ComplainGrivanceMainPage'
import CitizenWelcome from './Pages/citizen/CitizenApplyApplication';
import DownloadPage from './components/DownloadPage';
import { contextVar } from './components/ContextVar';
import CitizenLicenseFullDetail from './Pages/citizen/CitizenLicenseFullDetail';
import CitizenSafApplicationFormIndex from './Pages/CitizenPropertyEntryForm/CitizenSafApplicationForm/CitizenSafApplicationFormIndex'
import LandingMainPage from './components/LandingMainPage';
import CitizenMainPage from './components/CitizenMainPage'
import CitizenSelfAdvtDetailForm from './Pages/citizenAdvertisementForm/citizenSelfAdvertisement/CitizenSelfAdvtDetailForm';
import { newsData } from './StaticData'
import Register from './Pages/Registration/Register';
import About from './components/About';
import CitizenSafEntryScreen from './Pages/CitizenPropertyEntryForm/CitizenSafApplicationForm/CitizenSafEntryScreen';
import Login from './Pages/CitizenLogin/Login';
import Logout from './Pages/CitizenLogin/Logout';
import Demo from './Pages/CitizenLogin/Demo'
import Protected from './Pages/CitizenLogin/Protected';

import CitizenChatBot from './components/CitizenChatBot';
import ResetPassword from './Pages/CitizenLogin/ResetPassword';
import CitizenObjectionFormIndex from './Pages/CitizenPropertyEntryForm/CitizenObjectionEntryForm/CitizenObjectionFormIndex';
import CitizenTaxCalculator from './Pages/CitizenPropertyEntryForm/TaxCalculator/CitizenTaxCalculator';
import CitizenApplicationByModule from './Pages/citizen/CitizenApplicationByModule';
import RegistrationStatus from './Pages/CitizenRegStatus/RegistrationStatus';
import WaterIndex from './Pages/water/WaterIndex';
import TestNav from './components/testDelete/TestNav';
import CitizenApplyApplication from './Pages/citizen/CitizenApplyApplication';
import PaymentFormIndex from './Pages/water/PaymentForm/PaymentFormIndex';
import WaterApplicationStatus from './Pages/water/Status/WaterApplicationStatus';
import DocUploadFormIndex from './Pages/water/DocUploadForm/DocUploadFormIndex';
import CitizenSafEntryScreenForm from './Pages/CitizenSafForm/CitizenSafEntryScreenForm';
import CitizenPropSafApplicationFormIndex from './Pages/CitizenSafForm/CitizenPropSafApplicationFormIndex';
import CitizenSafEntryScreenTest from './components/CitizenDashboard/CitizenSafEntryScreenTest';
import ViewApplicationDetailById from './components/CitizenDashboard/ViewApplicationDetailById';
import CitizenPropApplyRe from './components/CitizenDashboard/CitizenPropApplyRe';
import { TramRounded } from '@mui/icons-material';
import Trade from './Pages/Trade/Trade'
import CitizenApplyByModule from './components/CitizenApplyByModule';




function App() {
  
  const [ulbData, setulbData] = useState(newsData)



  return (
    <>
   
      <contextVar.Provider value={{ ulbdatafun: setulbData, ulbdata: ulbData }}>
        <div className={`sm:w-full transition-all  `}>

          <CitizenChatBot />
          <Routes>
            <Route path="/" element={<LandingMainPage />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/downloads" element={<Downloads />} /> */}
            <Route path="/apply" element={<Protected Component={CitizenApplyApplication} />} />
            {/* <Route path="/signup" element={<Protected Component={CitizenRegistrationForm} />} /> */}
            <Route path="/grivancePage" element={<Protected Component={ComplainGrivanceMainPage} />} />
            <Route path="appliedLicenseDetail" element={<Protected Component={CitizenAppliedLicenseDetailTbl} />} />
            <Route path="/test/:userId" element={<CitizenLicenseFullDetail />} />
            <Route path="/citizenDashboard" element={<Protected Component={CitizenMainPage} />} />
            <Route path="/test" element={<TestComponent />} />
            <Route path="/citizenDashboard/citizenAccountSetting" element={<CitizenDetailPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/appliedApplicationByModule" element={<CitizenApplicationByModule/>} />
            <Route path="/appliedLicenseTbl" element={<CitizenAppliedLicenseDetailTbl />} />
            {/* <Route path="/citizenProperty" element={<Protected Component={CitizenSafEntryScreen} />} /> */}
            {/* <Route path="/citizenPropertyApply" element={<Protected Component={CitizenSafEntryScreenForm} />} /> */}


            {/* <Route path="/viewApplicationDetail/CitizenPropEntry" element={<Protected Component={CitizenPropApplyRe} />} /> */}
            <Route path="/citizenApplication/:module" element={<Protected Component={CitizenApplyByModule} />} />


            {/* <Route path="/citizenProperty/citizenSafApply" element={<CitizenSafEntryScreen />} /> */}
            <Route path="/citizenselfdetailform" element={<Protected Component={CitizenSelfAdvtDetailForm} />} />
            <Route path='/safform/:assType' element={<Protected Component={CitizenPropSafApplicationFormIndex} />} />
            <Route path='/viewApplicationDetail' element={<Protected Component={ViewApplicationDetailById} />} />
            <Route path='/citizenobjection' element={<CitizenObjectionFormIndex />} />
            <Route path='/water' element={<WaterIndex />} />
            <Route path='/water/apply' element={<WaterIndex />} />
            <Route path='/water/uploadDocs' element={<DocUploadFormIndex />} />
            <Route path='/water/payment' element={<PaymentFormIndex />} />
            <Route path='/water/status' element={<WaterApplicationStatus />} />
            <Route path='/citizenTaxCal' element={<CitizenTaxCalculator />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registrationStatus" element={<RegistrationStatus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/demo" element={<Protected Component={Demo} />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/citizenTrade" element={<Trade/>} />
            {/* <Route path="*" element={<Protected />} /> */}



          </Routes>
        </div>
      </contextVar.Provider >


    </>
  );
}

export default App;
