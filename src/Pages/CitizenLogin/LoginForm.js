//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 08 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LoginForm.js
//    DESCRIPTION - Citizen Login Form
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { MdVerified } from 'react-icons/md';
import * as Yup from 'yup';
import "yup-phone";
import Tooltip from "@material-ui/core/Tooltip";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({


    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(6, 'Minimum six character !')
        .max(50, 'Too Long!')
        .required('Required'),
    // .matches(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, 'Password can only contain Latin letters.')

});

const LoginForm = (props) => {

    const navigate = useNavigate();
    const [showMsg, setShowMsg] = useState()


    const handleLogin = (values) => {
        axios
            .post("http://192.168.0.166/api/login", {
                email: values.email,
                password: values.password
            })
            .then((res) => {
                localStorage.setItem("token", res.data.data)

                navigate("/citizenDashboard")
                // changeLogin(1)
                // console.log(res.data.status)
                console.log(res)
                setShowMsg(res.data.status)
                
            })
            .catch(err => {
                console.log(err)
                // console.log("MessGe", err.response.data.message)
                // console.log("---", err.response.data)
                setShowMsg(err.response.data.message)
            })
    }

    return (
        <div>
            <Formik
                initialValues={{ ulb: '', email: '', password: '' }}
                validationSchema={SignupSchema}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        handleLogin(values)
                        // console.log("Login Data", values)
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
                    <div className='border border-t-0 shadow-md bg-blue-50'>
                        <form onSubmit={handleSubmit}>
                            <div className='grid bg-white px-10 '>
                                <div className='my-3 relative'>
                                    <div className='text-gray-600 static mb-1 font-semibold'>Email Address <span className='text-red-500 font-bold'>*</span></div>
                                    <input
                                        type="text"
                                        name="email"
                                        className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-sm'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email ? (
                                        <div className='text-red-600 text-sm absolute'>{errors.email}</div>
                                    ) : null}
                                </div>

                                <div className='my-3 relative'>
                                    <div className='text-gray-600 static mb-1 font-semibold'>Password <span className='text-red-500 font-bold'>*</span></div>
                                    <input
                                        type="password"
                                        name="password"
                                        className='border border-gray-400 outline-blue-500 text-base rounded-md pl-2 h-10 w-72 shadow-sm'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password ? (
                                        <div className='text-red-600 text-sm absolute'>{errors.password}</div>
                                    ) : null}
                                </div>
                                <div className='relative justify-center'>
                                    <div className='text-red-600 text-sm font-semibold absolute '> <span className=''> {showMsg}</span></div>
                                </div>
                                <div className='text-center mt-5'>                                    
                                       <p> Don't have Account ? <Link to="/register" className='text-blue-600 font-semibold'> Create New </Link></p>
                                       <p><Link to="/reset-password" className='text-blue-600 font-semibold'>Reset Password </Link></p>
                                </div>
                             
                                <div className='my-5 self-center justify-self-center'>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className='bg-green-600 hover:bg-green-700 px-5 py-2 shadow-xl h-10 w-72  rounded-md text-white text-lg font-semibold'>
                                        Login
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

export default LoginForm

/*
Exported to -
1. Login.js
*/

