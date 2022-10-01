import React, { useState, useEffect } from 'react'
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SyncIcon from '@mui/icons-material/Sync';

import { Formik } from 'formik';
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import axios from 'axios';

function TestNav() {


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
                        <div className='container mx-auto'>

                            {/* <div className='md:grid   justify-center items-center rounded-md  '>
                                <h1 className=' text-blue-600 text-2xl font-serif'><u>APPLICANT  INFORMATION</u></h1>
                            </div> */}

                            <div>
                                <div className=' md:grid-cols-1 lg:grid-cols-2 mt-4 p-1 bg-blue-300 shadow-lg   '>
                                    <div className='flex items-center justify-between'>
                                        <div className='font-serif text-md text-black m-1 '> <span className='text-md mx-2'>< HowToRegIcon /></span> Basic Details Of The Applicant </div>
                                        <div className='float-right'>
                                            <button type='submit' className='bg-blue-500  text-white hover:bg-blue-700  rounded-md px-2  py-0 mx-1  relative' onClick={handleShowLabel}><SyncIcon />Update</button>
                                        </div>
                                    </div>


                                    <div className='bg-blue-800'>
                                        <div className='  rounded-md bg-gray-50'>

                                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4'>
                                                <div className=''>
                                                    <label for="" className="block text-sm font-medium text-gray-700">ULB :-</label>
                                                </div>
                                                <div className=''>
                                                    <span className="text-gray-600 font-normal text-md leading-4 my-1"> {fetchData?.ulb_name}</span>
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
                                                <div className=''>
                                                    <label for="" className="block text-sm font-medium text-gray-700">MOBILE NO :-</label>
                                                </div>
                                                <div className=''>
                                                    <span className="text-gray-600 font-normal text-md leading-4 my-1"> {fetchData?.mobile} </span>
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

                                            </div>
                                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4'>
                                                <div className=''>
                                                    <label for="" className="block text-sm font-medium text-gray-700">GUARDIAN NAME :-</label>
                                                </div>
                                                <div className=''>
                                                    <span className="text-gray-600 font-normal text-md leading-4 my-1">{fetchData?.name}</span>
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
                                                <div className=''>
                                                    <label for="" className="block text-sm font-medium text-gray-700">EMAIL :-</label>
                                                </div>
                                                <div className=''>
                                                    <span className="text-gray-600 font-normal text-md leading-4 my-1">{fetchData?.email}</span>

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

                                            </div>
                                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4'>
                                                <div className=''>
                                                    <label for="" className="block text-sm font-medium text-gray-700">FULL NAME:-</label>
                                                </div>
                                                <div className=''>
                                                    <span className="text-gray-600 font-normal text-md leading-4 my-1">{fetchData?.name}</span>

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
                                                <div className=''>
                                                    <label for="" className="block text-sm font-medium text-gray-700">DATE-OF-BIRTH :-</label>
                                                </div>
                                                <div className=''>
                                                    <span className="text-gray-600 font-normal text-md leading-4 my-1">16-08-2022</span>

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
                                                </div>

                                            </div>
                                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4'>
                                                <div className=''>
                                                    <label for="" className="block text-sm font-medium text-gray-700">ARMED-FORCE:-</label>
                                                </div>
                                                <div className=''>
                                                    <span className="text-gray-600 font-normal text-md leading-4 my-1">YES</span>
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



                                                </div>
                                                <div className=''>
                                                    <label for="" className="block text-sm font-medium text-gray-700">SPECIALLY- ABLED :-</label>
                                                </div>
                                                <div className=''>
                                                    <span classNameName="text-gray-600 font-normal text-md leading-4 my-1">YES</span>

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
                                                </div>
                                                <div className='p-2 float-right'>
                                                    <button type='submit' className={` ${updateLbl} min-w-auto w-32 h-10 bg-green-500 rounded-xl hover:bg-green-600 text-white font-semibold transition-transform hover:-translate-y-2 ease-in-out`}>
                                                        submit
                                                    </button>
                                                </div>
                                            </div>



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

export default TestNav