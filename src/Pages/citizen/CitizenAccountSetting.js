//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 17 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenAccountSetting
//    DESCRIPTION - CitizenAccountSetting Component is for citizen Profile detail
//    Api    - Api integrated on 18 Aug 2022
//////////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios';
import TestNav from '../../components/testDelete/TestNav';

function CitizenAccountSetting() {

    const updateDataSchema = Yup.object().shape({
        full_name: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        guardian_name: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        // mobile_no: Yup.string()
        //     .required('Required')
        //     .phone("IN"),


    });

    const [fetchData, setfetchData] = useState()

    // state where update input field is hidden  
    const [updateLbl, setupdateLbl] = useState('hidden')


    //onclick it shows the input field for updation 
    const handleShowLabel = () => {
        (updateLbl == 'hidden') ? setupdateLbl('') : setupdateLbl('hidden');
    }
    const bearerTokenInit = localStorage.getItem('token');


    //method  to get loged citizen data
    const getData = () => {

        axios({
            method: "GET",
            url: "http://192.168.0.166/api/my-profile-details",
            headers: {
                Authorization: `Bearer ${bearerTokenInit}`,
                Accept: 'application/json',
            }
        })
            .then(function (response) {
                console.log("getdata DIRECT......", response.data);
                setfetchData(response.data.data)

            });
    }


    useEffect(() => {
        getData()
    }, [])


    //method  to update  citizen data
    const modifyData = (values) => {
        axios({
            method: "PUT",
            url: "http://192.168.0.166/api/edit-my-profile",
            data: values,
            headers: {
                Authorization: `Bearer ${bearerTokenInit}`,
                Accept: 'application/json',
            }
        })
            .then(function (response) {
                console.log(" Submitted......", response);

            })
            .catch(function (response) {

                console.log("Failed", response);

            });
    }




    return (
        <>
        <TestNav/>
            <Formik
                initialValues={{ ulb_name: '', mobile: '', name: '', guardian_name: '', email: '', armed_force: '', specially_abled: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        modifyData(values)
                        setSubmitting(false);
                        // console.log("Data values :- ",values)

                    }, 100);
                }}
            >
                {/* citizen profile detail */}
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div classNameName='w-full  bg-white'>
                            <div className="bg-white  overflow-hidden ">
                                <Link to="/appliedLicenseTbl">
                                    <div className='float-right p-4'>
                                        <span className="text-center inline-block animate-pulse drop-shadow-lg p-1.5 px-2 rounded-lg bg-red-400 text-black text-sm">view your applied licenses
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 float-right" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information
                                        <button onClick={handleShowLabel} className="flex p-1 -mt-1  float-right bg-cyan-500 rounded-xl hover:rounded-3xl hover:bg-cyan-600 transition-all duration-300 text-white drop-shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                    </h3>
                                    <span className="mt-1 max-w-2xl text-sm text-gray-500 ">Basic details of the applicant. </span>
                                </div>
                                <hr />

                                <div className="px-4  mr-6 bg-white mt-7  m-auto ">

                                    <div className="grid grid-cols-6 gap-6 px-4 mt-4">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="" className="block text-sm font-medium text-gray-700">ULB :-
                                                <span className="text-gray-600 font-normal text-md leading-4 my-1"> {fetchData?.ulb_name}</span>
                                                <div className="mt-2">
                                                    <div className={`${updateLbl} relative z-0 mb-1`}>
                                                        <input
                                                            className="block py-1.5 -mt-4 w-full text-md text-green-700 bg-transparent border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-semibold"
                                                            type="text"
                                                            name="ulb_name"
                                                            placeholder=''
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.ulb_name}
                                                        />
                                                        <label for="" className="absolute text-xs text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Update</label>

                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="" className="block text-sm font-medium text-gray-700">MOBILE NO :-
                                                <span className="text-gray-600 font-normal text-md leading-4 my-1"> {fetchData?.mobile} </span>
                                                <div className="mt-2">
                                                    <div className={`${updateLbl} relative z-0 mb-1`}>
                                                        <input
                                                            className="block py-1.5 -mt-4 w-full text-md text-green-700 bg-transparent border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-semibold"
                                                            type="text"
                                                            name="mobile"
                                                            placeholder=''
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.mobile}

                                                        />
                                                        <label for="" className="absolute text-xs text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Update</label>

                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="" className="block text-sm font-medium text-gray-700">GUARDIAN NAME :-
                                                <span className="text-gray-600 font-normal text-md leading-4 my-1">{fetchData?.name}</span>
                                                <div className="mt-2">
                                                    <div className={`${updateLbl} relative z-0 mb-1`}>
                                                        <input
                                                            className="block py-1.5 -mt-4 w-full text-md text-green-700 bg-transparent border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-semibold"
                                                            type="text"
                                                            name="name"
                                                            placeholder=''
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.name}

                                                        />
                                                        <label for="" className="absolute text-xs text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Update</label>

                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="" className="block text-sm font-medium text-gray-700">EMAIL :-
                                                <span className="text-gray-600 font-normal text-md leading-4 my-1">{fetchData?.email}</span>
                                                <div className="mt-2">
                                                    <div className={`${updateLbl} relative z-0 mb-1`}>
                                                        <input
                                                            className="block py-1.5 -mt-4 w-full text-md text-green-700 bg-transparent border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-semibold"
                                                            type="text"
                                                            name="email"
                                                            placeholder=''
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}

                                                        />
                                                        <label for="" className="absolute text-xs text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Update</label>

                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="" className="block text-sm font-medium text-gray-700">FULL NAME:-
                                                <span className="text-gray-600 font-normal text-md leading-4 my-1">{fetchData?.name}</span>
                                                <div className="mt-2">
                                                    <div className={`${updateLbl} relative z-0 mb-1`}>
                                                        <input
                                                            className="block py-1.5 -mt-4 w-full text-md text-green-700 bg-transparent border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-semibold"
                                                            type="text"
                                                            name="name"
                                                            placeholder=''
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.name}

                                                        />
                                                        <label for="" className="absolute text-xs text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Update</label>

                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex col-span-6 sm:col-span-3">
                                            <div className='flex-1'>
                                                <img src='https://assets-global.website-files.com/5f689f82910c6b4f1ffb855b/613b1f91b195318100f7d27e_aadhar%20card%402x-min.jpg' className='h-24 w-24' />
                                            </div>
                                            <div className='flex-1 mt-7 mr-9'>
                                                <label for="file-upload" className={`${updateLbl} relative cursor-pointer bg-white font-medium text-indigo-600 hover:text-indigo-500  `}>
                                                    <input type="file" />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="" className="block text-sm font-medium text-gray-700">DATE-OF-BIRTH :-
                                                <span className="text-gray-600 font-normal text-md leading-4 my-1">16-08-2022</span>
                                                <div className="mt-2">
                                                    <div className={`${updateLbl} relative z-0 mb-1`}>
                                                        <input
                                                            className="block py-1.5 -mt-4 w-full text-md text-green-700 bg-transparent border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-semibold"
                                                            type="text"
                                                            name="dob"
                                                            placeholder=''
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.dob}
                                                        />
                                                        <label for="" className="absolute text-xs text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Update</label>

                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex col-span-6 sm:col-span-3">
                                            <div className='flex-1'>
                                                <img src='https://www.am22tech.com/wp-content/uploads/2020/09/nabc-assam-guwahati-sample.jpg' className='h-24 w-24' />
                                            </div>
                                            <div className='flex-1 mt-7 mr-9'>
                                                <label for="file-upload" className={`${updateLbl} relative cursor-pointer bg-white font-medium text-indigo-600 hover:text-indigo-500  `}>
                                                    <input type="file" />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="" className="block text-sm font-medium text-gray-700">ARMED-FORCE:-
                                                <span className="text-gray-600 font-normal text-md leading-4 my-1">YES</span>
                                                <div className="mt-2">
                                                    <div className={`${updateLbl} relative z-0 mb-1`}>
                                                        <input
                                                            className="block py-1.5 -mt-4 w-full text-md text-green-700 bg-transparent border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-semibold"
                                                            type="text"
                                                            name="armed_force"
                                                            placeholder=''
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.armed_force}
                                                        />
                                                        <label for="" className="absolute text-xs text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Update</label>

                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex col-span-6 sm:col-span-3">
                                            <div className='flex-1'>
                                                <img src='https://data.unhcr.org/images/documents/big_4cda85d892a5c0b5dd63b510a9c83e9c9d06e739.jpg' className='h-24 w-24' />
                                            </div>
                                            <div className='flex-1 mt-7 mr-9'>
                                                <label for="file-upload" className={`${updateLbl} relative cursor-pointer bg-white font-medium text-indigo-600 hover:text-indigo-500  `}>
                                                    <input type="file" />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="" className="block text-sm font-medium text-gray-700">SPECIALLY- ABLED :-
                                                <span classNameName="text-gray-600 font-normal text-md leading-4 my-1">YES</span>
                                                <div className="mt-2">
                                                    <div className={`${updateLbl} relative z-0 mb-1`}>
                                                        <input
                                                            className="block py-1.5 -mt-4 w-full text-md text-green-700 bg-transparent border-0 border-b-2 border-blue-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer font-semibold"
                                                            type="text"
                                                            name="specially_abled"
                                                            placeholder=''
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.specially_abled}
                                                        />
                                                        <label for="" className="absolute text-xs text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1  origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Update</label>

                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex col-span-6 sm:col-span-3">
                                            <div className='flex-1'>
                                                <img src='https://data.unhcr.org/images/documents/big_4cda85d892a5c0b5dd63b510a9c83e9c9d06e739.jpg' className='h-24 w-24' />
                                            </div>
                                            <div className='flex-1 mt-7 mr-9'>
                                                <label for="file-upload" className={`${updateLbl} relative cursor-pointer bg-white font-medium text-indigo-600 hover:text-indigo-500  `}>
                                                    <input type="file" />
                                                </label>
                                            </div>
                                        </div>


                                        <div className=''>
                                            <button type='submit' className={` ${updateLbl} min-w-auto w-32 h-10 bg-green-500  -mt-2 ml-2 rounded-xl hover:bg-green-600 text-white font-semibold transition-transform hover:-translate-y-2 ease-in-out`}>
                                                submit
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
            
        </>
    )
}

export default CitizenAccountSetting