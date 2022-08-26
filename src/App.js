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
import CitizenWelcome from './Pages/citizen/CitizenWelcome';
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

function App() {
  // const [ulbId, setulbId] = useState(0);
  // const [ulbData, setulbData] = useState({
  //   "news": [
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand News Jharkhand News",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     }
  //   ],
  //   "events": [
  //     {
  //       "header": "Jharkhand events",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand events",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     }
  //   ],
  //   "notice": [
  //     {
  //       "header": "Jharkhand notice",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     },
  //     {
  //       "header": "Jharkhand notice",
  //       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nemo error modi delectus rerum qui explicabo ipsa quam. Fuga voluptas nostrum nobis quam vero accusantium expedita aspernatur corrupti officia doloremque odio delectus ratione, facilis nam, esse molestias quo? Accusantium consectetur odio magni optio minus, officia deserunt voluptatem saepe possimus cupiditate!",
  //       "date": "09/04/2022",
  //       "isArchived": 1,
  //       "ulbid": 1,
  //       "id": 1
  //     }
  //   ],
  //   "images": [
  //     {

  //       "imgPath": "https://media.istockphoto.com/photos/patratu-valley-ranchi-beautiful-place-in-jharkhand-picture-id1323460129?b=1&k=20&m=1323460129&s=170667a&w=0&h=JfpWzEX_Rba9QY934SeAhiHPbnntttCsuHn0lk3qQS0=",
  //       "id": 1
  //   },
  //   {

  //       "imgPath":" https://media.istockphoto.com/photos/swami-vivekananda-memorial-at-sunrise-located-at-ranchi-jharkhand-picture-id1325410596?b=1&k=20&m=1325410596&s=170667a&w=0&h=9CEIBzAv5eOz4Bk617fZGzDl0cF0O6J8z5677hSkiY8=",
  //       "id": 2
  //   },
  //   {

  //       "imgPath": " https://images.moneycontrol.com/static-mcnews/2018/06/1280px-Ranchi_9238.jpg?impolicy=website&width=770&height=431",
  //       "id": 3
  //   },
  //   {

  //       "imgPath": " https://upload.wikimedia.org/wikipedia/commons/4/4c/Jharkhand_Legislative_Assembly_%28Jharkhand_Vidhan_Sabha%29_%28%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A1_%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE%29.png",
  //       "id": 4
  //   }
  //   ]
  // })
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
            <Route path="/apply" element={<Protected Component={CitizenWelcome} />} />
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
            <Route path="/citizenProperty" element={<Protected Component={CitizenSafEntryScreen} />} />
            <Route path="/citizenProperty/citizenSafApply" element={<CitizenSafEntryScreen />} />
            <Route path="/citizenselfdetailform" element={<Protected Component={CitizenSelfAdvtDetailForm} />} />
            <Route path='/safform/:assType' element={<Protected Component={CitizenSafApplicationFormIndex} />} />
            <Route path='/citizenobjection' element={<CitizenObjectionFormIndex />} />
            <Route path='/citizenTaxCal' element={<CitizenTaxCalculator />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/demo" element={<Protected Component={Demo} />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="*" element={<Protected />} /> */}
          </Routes>
        </div>
      </contextVar.Provider >


    </>
  );
}

export default App;
