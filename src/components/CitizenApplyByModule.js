//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 20 oct 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenSafEntryScreenTest
//    DESCRIPTION - CitizenSafEntryScreenTest Component contain application list card of all component
//////////////////////////////////////////////////////////////////////////////////////



import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TiArrowBack } from 'react-icons/ti'
import { TbSearch } from 'react-icons/tb'
import { FcHome } from 'react-icons/fc'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import WaterApplicationListCard from './CitizenDashboard/WaterApplicationListCard'
import CitizenNavbar from './CitizenDashboard/CitizenNavbar'
import BackComponent from './CitizenDashboard/BackComponent'
import ApplicationListCard from './CitizenDashboard/ApplicationListCard'
import TradeApplicationListCard from './CitizenDashboard/TradeApplicationListCard'
import FaqComponent from './FaqComponent'
import CitizenSidebarDash from './CitizenDashboard/CitizenComponent/CitizenSidebarDash'

function CitizenApplyByModule() {

   

    const [newStatus, setnewStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of new-assessment
    const [reStatus, setreStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of re-assessment
    const [mutationStatus, setmutationStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of mutation
    const [objectionStatus, setobjectionStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of objection
    const [dataListStatus, setDataListStatus] = useState(false) //to toggle hide show of data list table after finding the holding data from search holding
    const [holdingData, setholdingData] = useState() //to hold found holding data
    const [asstypeStatus, setasstypeStatus] = useState('both') //to hold found holding data
    const [applyForm, setapplyForm] = useState('hidden')




    const showFormList = () => {
        applyForm == 'hidden' ? setapplyForm('') : setapplyForm('hidden')
    }
    const navigate = useNavigate()
    //function to hide and show and animate assessment options
    const assStatus = (type) => {
        setasstypeStatus(type)
        if (type == 'new') {
            setnewStatus('col-span-12 md:col-span-12 py-0 block')
            setreStatus('w-0 col-span-0 md:col-span-0 hidden')
            setmutationStatus('w-0 col-span-0 md:col-span-0 hidden')
            setobjectionStatus('w-0 col-span-0 md:col-span-0 hidden')
        }
        if (type == 're') {
            setnewStatus('w-0 col-span-0 md:col-span-0 hidden')
            setreStatus('col-span-12 md:col-span-12 py-0 block')
            setmutationStatus('w-0 col-span-0 md:col-span-0 hidden')
            setobjectionStatus('w-0 col-span-0 md:col-span-0 hidden')
        }
        if (type == 'mu') {
            setnewStatus('w-0 col-span-0 md:col-span-0 hidden')
            setreStatus('w-0 col-span-0 md:col-span-0 hidden')
            setmutationStatus('col-span-12 md:col-span-12 py-0 block')
            setobjectionStatus('w-0 col-span-0 md:col-span-0 hidden')
        }
        if (type == 'obj') {
            setnewStatus('w-0 col-span-0 md:col-span-0 hidden')
            setreStatus('w-0 col-span-0 md:col-span-0 hidden')
            setmutationStatus('w-0 col-span-0 md:col-span-0 hidden')
            setobjectionStatus('col-span-12 md:col-span-12 py-0 block')

        }
        if (type == 'back') {
            setDataListStatus(false)
            setnewStatus('col-span-12 md:col-span-4 py-6')
            setreStatus('col-span-12 md:col-span-4 py-6')
            setmutationStatus('col-span-12 md:col-span-4 py-6')
            setobjectionStatus('col-span-12 md:col-span-4 py-6')
        }
    }

    const validationSchema = yup.object({
        holdingNo: yup.string().required('Enter holding no.')
    })
    const formik = useFormik({
        initialValues: {
            holdingNo: ''
        },

        onSubmit: (values, resetForm) => {
            console.log('propertyaddressdetails ', values)
            findHolding()
        }
        , validationSchema
    })

    //function to fetch holding data and set into data table
    const findHolding = () => {
        // let holdingNo = formik.holdingNo
        let holdingNo = 601
        //fetch holding data
        axios.get(`http://localhost:3001/dummyHolding/${holdingNo}`)
            .then(function (response) {
                console.log('serahed data....', response.data)
                setholdingData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

    let module = useParams();
    console.log("useParam .... ", module.module)


    return (
        <>
            <div>
                <div className='relative w-full'>
                    <CitizenNavbar />
                </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12'>
                <div className='col-span-3 overflow-y-scroll h-screen bg-white'>
                    <FaqComponent  />
                    <CitizenSidebarDash />
                </div>
                <div className='col-span-9 p-6'>
                    <div className=''>
                        <Link to='/citizenDashboard/'> <BackComponent /> </Link>
                    </div>


                    {module.module == 'property' && <ApplicationListCard />}
                    {module.module == 'water' && <WaterApplicationListCard />}
                    {module.module == 'trade' && <TradeApplicationListCard />}

                </div>

                {/* /////////////////////////////////////// */}


                {/* //////////////////////////////////////// */}

            </div>
        </>
    )
}

export default CitizenApplyByModule