//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 05 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - register.js
//    DESCRIPTION - Citizen Registration Form
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
// import rightImg from './tick-tick-verified.gif'
// import rightImg from './checkmark-transparent.gif'
import { MdVerified } from 'react-icons/md';
import * as Yup from 'yup';
import "yup-phone";
import Tooltip from "@material-ui/core/Tooltip";
import axios from 'axios';
import { useQuery } from 'react-query'

// const panRegEx = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

const SignupSchema = Yup.object().shape({
    full_name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    guardian_name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),

    ulb: Yup.string()
        // .matches([``], 'Please Select ULB')
        .required('Required'),
    gender: Yup.string()
        .required('Required'),
    password: Yup.string()
        .min(6, 'Minimum six character !')
        .max(50, 'Too Long!')
        .required('Required'),
    // .matches(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, 'Password can only contain Latin letters.')
    // password: Yup.string().required("This field is required"),

    confirmPassword: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
        .when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
            )
        })

    // mobile_no: Yup.string()
    //     .required('Required')
    //     .phone("IN"),
    // aadhar: Yup.string()
    //     .min(12, 'Too Short')
    //     .max(12, "Too Long")
    //     .required('Required'),
    // pan_no: Yup.string()
    //     // .min(5, 'Too Short')
    //     // .max(10, "Too Long")
    //     .required('Required')
    //     .matches(panRegEx, "Enter Valid PAN No"),


});

const RegistrationForm = (props) => {


    const { isLoading, data, isError, error } = useQuery("registrationULBLIstFromAPI", () => {
        return axios.get('http://192.168.0.166/api/get-all-ulb');
    });


    // console.log("List of UBS", data)

    // useEffect(() => {
    //     axios({
    //         method: 'get',
    //         url: 'http://192.168.0.166/api/get-all-ulb',
    //     })
    //         .then(function (res) {
    //             setUlbList(res)
    //             console.log("Messgae ULB Test", ulbList)
    //         })
    //         .catch(function (error) {
    //             console.log("Error =>>", error)
    //         })
    // }, [])

    // console.log("Axios Respinse---", ulbList)


    // setTimeout(() => {
    //     ulbList.data.map((e) => (
    //         console.log("===", e.id, e.ulb_name)
    //     ))
    // }, 100);


    // ulbList.data.map((e)=>(
    //    console.log("===",e.id)
    // ))


    const handleFormNextbtn = (values) => {
        props.fun(1)
        props.regFormData(values)
    }

    return (
        <div>

            <Formik
                initialValues={{ ulb: '', full_name: '', guardian_name: '', mobile_no: '', dob: '', email: '', password: '', confirmPassword: '' }}
                validationSchema={SignupSchema}
                // validate={values => {
                //     const errors = {};
                //     if (!values.mobile_no) {
                //         errors.email = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //         errors.email = 'Invalid email address';
                //     }
                //     return errors;
                // }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        handleFormNextbtn(values)
                        // console.log("Initail Data", values)                        
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <div className='bg-blue-50'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid md:grid-cols-2 grid-cols-1 bg-white px-10'>
                                <div className='col-span-1 md:ml-5'>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Select ULB<span className='text-red-500 font-bold'>*</span></div>
                                        <select
                                            name="ulb"
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.ulb}
                                        >
                                            <option value="" >Select Your ULB</option>
                                            {!isLoading ?
                                                data.data.map((data) => (
                                                    <option value={data.id}>{data.ulb_name}</option>
                                                )) : ''
                                            }
                                        </select>
                                        {errors.ulb && touched.ulb ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.ulb}</div>
                                        ) : null}
                                    </div>

                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Guardian Name<span className='text-red-500 font-bold'>*</span></div>
                                        <input
                                            type="text"
                                            name="guardian_name"
                                            placeholder='Guardian Name'
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.guardian_name}
                                        />
                                        {errors.guardian_name && touched.guardian_name ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.guardian_name}</div>
                                        ) : null}
                                    </div>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Mobile No<span className='text-red-500 font-bold'>*</span></div>
                                        <input
                                            type="number"
                                            name="mobile_no"
                                            placeholder='Mobile No'
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mobile_no}
                                        />
                                        {errors.mobile_no && touched.mobile_no ? (
                                            <div className='text-red-600 text-sm absolute'>Enter Valid phone Number*</div>
                                        ) : null}
                                    </div>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Date of Birth <span className='text-red-500 font-bold'>*</span></div>
                                        <input
                                            type="date"
                                            name="dob"
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.dob}
                                        />
                                        {errors.dob && touched.dob ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.dob}</div>
                                        ) : null}
                                    </div>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Password <span className='text-red-500 font-bold'>*</span></div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder='*******'
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        {errors.password && touched.password ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Is Armed forces ? <span className='text-red-500 font-bold'>*</span>
                                            <label className='ml-2'>
                                                <Field type="radio" name="isArmed" value="Yes" /> Yes
                                            </label>
                                            <label className='ml-2'>
                                                <Field type="radio" name="isArmed" value="No" /> No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Full Name <span className='text-red-500 font-bold'>*</span></div>
                                        <input
                                            type="text"
                                            name="full_name"
                                            placeholder='Applicant Name'
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.full_name}
                                        />
                                        {errors.full_name && touched.full_name ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.full_name}</div>
                                        ) : null}
                                    </div>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Email Address <span className='text-red-500 font-bold'>*</span></div>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder='Email Address'
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Aadhar No</div>
                                        <input
                                            type="number"
                                            name="aadhar"
                                            placeholder='Aadhar No'
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.aadhar}
                                        />
                                        {errors.aadhar && touched.aadhar ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.aadhar}</div>
                                        ) : null}
                                    </div>
                                    {/* <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>PAN No</div>
                                        <input
                                            type="text"
                                            name="pan_no"
                                            placeholder='PAN No'
                                            className='border border-gray-400 outline-blue-500 text-base rounded-sm pl-2 h-10 w-72 shadow-sm'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.pan_no}
                                        />
                                        {errors.pan_no && touched.pan_no ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.pan_no}</div>
                                        ) : null}
                                    </div> */}

                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Gender<span className='text-red-500 font-bold'>*</span></div>
                                        <select
                                            // type="select"
                                            name="gender"
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.gender}
                                        >
                                            <option value="" >Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.gender && touched.gender ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.gender}</div>
                                        ) : null}
                                    </div>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Confirm Password <span className='text-red-500 font-bold'>*</span></div>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder='*******'
                                            className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-md'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}
                                        />
                                        {errors.confirmPassword && touched.confirmPassword ? (
                                            <div className='text-red-600 text-sm absolute'>{errors.confirmPassword}</div>
                                        ) : null}
                                    </div>
                                    <div className='my-5 relative'>
                                        <div className='text-gray-600 static mb-1 font-semibold'>Is Specially Abled ? <span className='text-red-500 font-bold'>*</span>
                                            {/* <input className='ml-2' type="radio" value="Yes" name="isSpecially" /> Yes */}
                                            <label className='ml-2'>
                                                <Field type="radio" name="isSpecially" value="Yes" /> Yes
                                            </label>
                                            <label className='ml-2'>
                                                <Field type="radio" name="isSpecially" value="No" /> No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='grid justify-center'>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className='bg-green-600 hover:bg-green-700 px-5 py-2 shadow-xl rounded-md text-white text-base float-right'>
                                        Save and Next
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default RegistrationForm

/*
Exported to -
1. Register.js
*/
