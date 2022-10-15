import { useState } from 'react'
// import newSvg from './new.svg'
// import re from './re.svg'
// import mu from './mu.svg'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TiArrowBack } from 'react-icons/ti'
import { TbSearch } from 'react-icons/tb'
import { FcHome } from 'react-icons/fc'
import axios from 'axios'

import LandingNav from '../../Pages/Landing/LandingNav'
import SideNav from '../../Pages/citizen/SideNav'
import ApplicationListTable from './ApplicationListCard'
import ApplicationListCard from './ApplicationListCard'
import BackComponent from './BackComponent'
import { Link, useNavigate } from 'react-router-dom'
import CitizenNavbar from './CitizenNavbar'

function CitizenSafEntryScreenTest() {

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
    return (
        <>
            <div>


                <div className='fixed z-50 w-full'><CitizenNavbar /></div>
                <div >


                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12  '>
                <div className='col-span-9 mt-20 p-6'>
                    <div className=''>
                        <Link to='/citizenDashboard'>
                            <BackComponent />
                        </Link>
                    </div>
                    <ApplicationListCard />

                </div>


                            {/******************** FAQ ******************************/}

                <div className='col-span-3 mt-20'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                        <div className=''>
                            <div className="space-y-2 p-4">
                                <h1 className='text-center -mt-4 font-semibold bg-teal-500 p-0 text-lg'>FAQ ?</h1>
                                {faqs.map((item, i) => (
                                    <div>{i}</div>,
                                    <details className="rounded-lg  shadow-lg bg-white">
                                        <summary className="px-3 py-1 cursor-pointer font-semibold bg-sky-200 h-8 rounded-lg text-gray-700 text-sm">{item.title}</summary>
                                        <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-gray-500 text-xs">{item.body}</p>
                                    </details>
                                ))}
                            </div>

                        </div>


                        {/*  notify card*/}
                        <div className='p-2 mt-4'>
                            <h1 className='text-center -mt-4 font-semibold bg-teal-500 text-lg'>NOTIFICATION</h1>
                            <div className=''>
                                <div className="space-y-2 p-4">
                                    <div class="bg-green-500 text-white  border-green-800   border-l-8  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-12 p-2">
                                        <div class="flex items-center rounded-lg  cursor-pointer">
                                            <div class="ml-3.5">
                                                <span class="text-sm leading-none  text-white">you have successfully registered for saf </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='-mt-6'>
                                <div className="space-y-2 p-4">
                                    <div class="bg-teal-500 text-white  border-teal-800   border-l-8  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-12 p-2">
                                        <div class="flex items-center rounded-lg  cursor-pointer">
                                            <div class="ml-3.5">
                                                <span class="text-sm leading-none  text-white">you have successfully registered for saf </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='-mt-6'>
                                <div className="space-y-2 p-4">
                                    <div class="bg-cyan-500 text-white  border-cyan-800   border-l-8  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-12 p-2">
                                        <div class="flex items-center rounded-lg  cursor-pointer">
                                            <div class="ml-3.5">
                                                <span class="text-sm leading-none  text-white">you have successfully registered for saf </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CitizenSafEntryScreenTest