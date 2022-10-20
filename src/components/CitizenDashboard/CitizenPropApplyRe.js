//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 20 oct 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenPropApplyRe
//    DESCRIPTION - CitizenPropApplyRe Component TO BE REMOVE COMPONENTNO FURTHER USE( DISCARD COMPONENT)
//////////////////////////////////////////////////////////////////////////////////////


import { useState } from 'react'
// import newSvg from './new.svg'
// import re from './re.svg'
// import mu from './mu.svg'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TiArrowBack } from 'react-icons/ti'
import { TbSearch } from 'react-icons/tb'
import { FcHome } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import LandingNav from '../../Pages/Landing/LandingNav'
import SideNav from '../../Pages/citizen/SideNav'
import BackComponent from './BackComponent'


function CitizenPropApplyRe() {

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
                <div className='fixed z-50 w-full'> <LandingNav /></div>
                <div >
                    <div className='absolute left-0 top-0'><SideNav /></div>

                </div>
            </div>

            <div className='p-4'>


                <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 '>
                    <div className=' col-span-10 p-2 '>
                        <h1 className="text-gray-700 text-2xl  font-medium  text-center mt-16 text-gray-600">HOLDING NO. : 23456789087654</h1>
                    </div>
                    <div className=' col-span-2 p-2'>
                        <img src='https://img.freepik.com/free-vector/house-sale-surrounded-by-nature_23-2148656901.jpg?w=740&t=st=1665658443~exp=1665659043~hmac=18b064a33a57574e3c7630e7776afe15acd888ae373ac829b60fa3ad93a290f2' className='h-32 mt-6  ' />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12'>

                    <div className='col-span-9 -mt-8'>

                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4 '>
                            <div className=''>
                                {/* <div className={` ${newStatus} p-4 md:p-5`} onClick={() => navigate('/safform/new')} > */}
                                <div className={`${(asstypeStatus == 're' || asstypeStatus == 'both')}p-4  md:p-5`} onClick={() => navigate('/safform/re')}>

                                    <div class="hover:shadow-xl hover:bg-emerald-600  rounded-lg sm:w-full w-full h-30 p-4 bg-emerald-500 relative overflow-hidden">
                                        <img alt="moto" src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" class="absolute -right-2 -bottom-6 h-16 w-16 mb-4 " />
                                        <div class="w-4/6">
                                            <p class=" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10">
                                                RE-ASSIGNMENT
                                            </p>
                                            <p class="text-gray-800 text-xs">
                                                Apply for re-assignment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                {/* <div className={` ${reStatus} p-4  md:p-5 `} onClick={() => ('Enter Holding No.', assStatus('re'))}> */}
                                <div className={`${(asstypeStatus == 'mu' || asstypeStatus == 'both')}p-4 md:p-5`} onClick={() => navigate('/safform/mu')}>
                                    <div class="hover:shadow-xl hover:bg-amber-500  rounded-lg sm:w-full w-full p-4 p-4 bg-amber-400 relative overflow-hidden">
                                        <img alt="moto" src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" class="absolute -right-2 -bottom-6 h-16 w-16 mb-4  " />
                                        <div class="w-4/6">
                                            <p class=" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10">
                                                MUTATION
                                            </p>
                                            <p class="text-gray-800 text-xs">
                                                Apply for mutation
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                {/* <div className={` ${mutationStatus} p-4  md:p-5 `} onClick={() => ('Enter Holding No.', assStatus('mu'))}> */}

                                <div className={`${(asstypeStatus == 'obj' || asstypeStatus == 'both')}p-4 md:p-5`} onClick={() => navigate('/citizenobjection')}>
                                    <div class="hover:shadow-xl hover:bg-purple-600 rounded-lg sm:w-full w-full p-4 p-4 bg-purple-500 relative overflow-hidden">
                                        <img alt="moto" src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" class="absolute -right-2 -bottom-6 h-16 w-16 mb-4 " />
                                        <div class="w-4/6">
                                            <p class=" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10">
                                                OBJECTION
                                            </p>
                                            <p class="text-gray-800 text-xs">
                                                Apply for objection
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-4 -mt-8 '>
                            <div className=''>
                                <div className={`${objectionStatus} p-4 md:p-5  `} onClick={() => ('Enter Holding No.', assStatus('obj'))}>

                                    <div class="hover:shadow-xl hover:bg-green-500 rounded-lg sm:w-full w-full p-4 bg-green-400 relative overflow-hidden  ">
                                        <img alt="moto" src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" class="absolute -right-2 -bottom-6 h-16 w-16 mb-4 " />
                                        <div class="w-4/6">
                                            <p class=" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10">
                                                WATER HARVESTING
                                            </p>
                                            <p class="text-gray-800 text-xs">
                                                Apply for water harvesting
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=''>
                                <div className={`${objectionStatus} p-4 md:p-5  `} onClick={() => ('Enter Holding No.', assStatus('obj'))}>

                                    <div class="hover:shadow-xl hover:bg-green-500 rounded-lg sm:w-full w-full p-4 bg-green-400 relative overflow-hidden  ">
                                        <img alt="moto" src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" class="absolute -right-2 -bottom-6 h-16 w-16 mb-4 " />
                                        <div class="w-4/6">
                                            <p class=" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10">
                                                CONCESSION
                                            </p>
                                            <p class="text-gray-800 text-xs">
                                                Apply for concession
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='p-4'>
                            <Link to='/citizenDashboard'>
                                <BackComponent />
                            </Link>
                        </div>

                    </div>
                    <div className='col-span-3 '>
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
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CitizenPropApplyRe