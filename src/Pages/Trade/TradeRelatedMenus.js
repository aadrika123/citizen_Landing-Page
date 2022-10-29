//////////////////////////////////////////////////////////////////////////////////////
//    Author - Anshuman
//    Version - 1.0
//    Date - 09 July 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Related Menus
//    DESCRIPTION - Related Menus for userPermission | Includes - Horizontal Tabs
//////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from 'react'
import MailboxSidebar from './MailboxComponent/MailboxSidebar';
import NewApplication from './NewApplication/NewApplication';
// import { contextVar } from '.././../Components/Context/Context';
import axios from 'axios';
import ApplicationList from './NewApplication/ApplicationList';
import Renewal from './Renewal/Renewal';
import Surrender from './Surrender/Surrender';
import Amendment from './Amendment/Amendment';
import UpdateApplicationMain from './tradeComponent/UpdateApplicationMain';
import { TRADE, HEADER } from './tradeComponent/TradeApiListFile';
import CircularProgress from '@mui/material/CircularProgress';
import { ThreeCircles } from 'react-loader-spinner';
import TradeLoader from './tradeComponent/TradeLoader';
import { convertApplicationTypeToString } from './tradeComponent/UsefulFunctions';
import FaqComponent from '../../components/FaqComponent';
import CitizenSidebarDash from '../../components/CitizenDashboard/CitizenComponent/CitizenSidebarDash';
function TradeRelatedMenus() {
    const [tabIndex, settabIndex] = useState(0)     //state to store current tab index
    const [idApi, setidApi] = useState(0)
    const [updateData, setupdateData] = useState(
        {
            category: "Not Authenticated",
            created_at: "2022-08-02 05:37:55",
            created_by: "Anshu Kumar",
            created_on: "2022-06-29 00:00:00",
            description: "abc",
            discontinued: false,
            end_point: "test2",
            id: 3,
            post_condition: "None",
            pre_condition: "Authentication is required",
            remarks: "",
            request_payload: "Token Only",
            response_payload: "username,password,userid",
            revision_no: 1,
            tags: "tag5,tag6",
            updated_at: "2022-08-02 05:37:55",
            usage: "For Saving API Keys",
            version: "Version 1.0",
        });

    // application type state
    const [applicationType, setapplicationType] = useState();

    // state to store master-data
    const [getSelectFieldData, setgetSelectFieldData] = useState([]);

    const [pointerEvent, setpointerEvent] = useState('pointer-events-none opacity-50');
    const [loaderShow, setloaderShow] = useState('hidden');
    const [show, setshow] = useState(false);

    // LICENSE DATA FOR RENEWAL AMENDMENT OR SURRENDER 
    const [licenseDataForRAS, setlicenseDataForRAS] = useState([]);

    let loginType = 1;

    const setapplicationTypeFun = (index) => {
        setapplicationType(index);
    }

    const tabs = [
        { title: "New ", tabIndex: 0 },
        { title: "Renewal", tabIndex: 1 },
        { title: "Surrender", tabIndex: 2 },
        { title: "Amendment", tabIndex: 3 },
        // loginType == 0 && { title: "Application List", tabIndex: 4 },
    ]
    const tabSwitch = (index) => {
        //tabSwitch function receive tabIndex to switch between tabs called from Sidebar menu
        settabIndex(index)      //updating the tab index to recent value
        console.log('index called ', index)
    }

    const handleIdApi = (apiId, index) => {
        alert('api id ' + apiId + ' index ' + index)

        axios.get(`http://192.168.0.16:8000/api/get-api-by-id/${apiId}`)
            .then(function (response) {
                console.log('data from api ', response);
                setupdateData(response.data)

            })
            .then(function (error) {
                console.log(error)
            })

        setidApi(apiId);
        tabSwitch(index)
        console.log('id api is called ', apiId)
    }

    // function to get master data for select fields in New Trade application form
    const getSelectFieldDataFun = () => {
        showLoader(true)
        console.log("api url", HEADER)
        axios.get(TRADE.MASTER_DATA_API + convertApplicationTypeToString(applicationType), HEADER)
            .then(function (response) {

                setgetSelectFieldData(response.data.data);
                setpointerEvent('');    //readonly fields
                showLoader(false)
            })
            .catch(function (error) {
                console.log(error);
                console.log(error)
                showLoader(false)
            })
    }

    // Calling the function to get master-data
    useEffect(() => {
        getSelectFieldDataFun();
    }, [])

    // set loader visibility
    const showLoader = (value) => {
        console.log('loader is called with value ', value)
        setshow(value);
    }

    //sets searched license data to be applied on the renewal, amedment and surrender process
    const setLicenseDataForRasFun = (values) => {
        console.log("searched license data", values);
        setlicenseDataForRAS(values);
    }
    const licenseValues = {
        licenseDetailsFun: setLicenseDataForRasFun,
        licenseData: licenseDataForRAS
    }
    const faqs = [
        {
            id: 1,
            title: 'How to Apply ?',
            body: 'Step 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Step 2. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 2,
            title: 'How  avail Armed Forces ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 3,
            title: 'Who is Specially Abled ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 4,
            title: 'This is heading for this ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 5,
            title: 'This is heading for this ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        },
        {
            id: 6,
            title: 'This is heading for this ?',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
        }
    ]

    return (
        <>

            <TradeLoader show={show} />

            <div className='flex'>
                <div className='bg-white w-[24rem] h-screen overflow-y-scroll'>
                    <FaqComponent faqs={faqs} />
                    <CitizenSidebarDash />
                </div>
                <div className=' w-full border '>
                    {/* <h1 className='font-bold text-blue-800 text-2xl m-3 text-center underline'>TRADE MENU LIST</h1> */}
                    <div className='grid grid-cols-4'>
                        <MailboxSidebar tabs={tabs} fun={tabSwitch} />
                    </div>
                    <div className={` grid grid-cols-12 rounded-lg mt-4 shadow-xl broder-2  border-sky-200 bg-gray-200`}>

                        <div className={`bg-white col-span-12 lg:col-span-12 md:col-span-12`}>
                            {/**component to show New License Application Screen */}
                            {tabIndex == 0 && <div className='  overflow-y-scroll' style={{ 'height': '90vh' }}> <NewApplication fieldData={getSelectFieldData} showLoader={showLoader} applicationType="1" title="NewApplication" /> </div>}

                            {/** component to show Renewal Screen fieldData={getSelectFieldData} */}
                            {tabIndex == 1 && <div className='col-span-12 sm:col-span-10 shadow-lg overflow-y-scroll' style={{ 'height': '90vh' }}><Renewal licenseValues={licenseValues} showLoader={showLoader} applicationType="2" title="Renewal" /></div>}

                            {/* component to show Surrender Screenm */}
                            {tabIndex == 2 && <div className='col-span-12 sm:col-span-10 shadow-lg  overflow-y-scroll' style={{ 'height': '90vh' }}><Surrender licenseValues={licenseValues} showLoader={showLoader} applicationType="4" title="Surrender" /></div>}

                            {/** component to show  Role-Users */}
                            {tabIndex == 3 && <div className='col-span-12 sm:col-span-10 shadow-lg  overflow-y-scroll' style={{ 'height': '90vh' }}><Amendment licenseValues={licenseValues} title="Amendment" applicationType="3" /></div>}

                            {/** component to show  Application */}
                            {(tabIndex == 4 && loginType == 0) && <div className='col-span-12 sm:col-span-10 shadow-lg  overflow-y-scroll' style={{ 'height': '90vh' }}><ApplicationList applicationTypeFun={setapplicationTypeFun} applicationType={applicationType} fun={tabSwitch} title="list" /></div>}

                            {/** component to show  Application */}
                            {tabIndex == 5 && <div className='col-span-12 sm:col-span-10 shadow-lg  overflow-y-scroll' style={{ 'height': '90vh' }}><UpdateApplicationMain applicationType={applicationType} applicationTypeFun={setapplicationTypeFun} fun={tabSwitch} title="viewApplication" /></div>}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TradeRelatedMenus
/**
 * Exported to :
 * 1. Cms.js
 * 
 *  
 */


