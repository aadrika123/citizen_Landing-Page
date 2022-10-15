// import React from 'react'

// function FindHoldingModal() {
//     return (
//         <>
//             {/* <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal" onClick={popUpFindHolding}>
//                 Toggle modal
//             </button> */}

//             <div class={`  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center`} aria-hidden="true">
//                 <div class="relative p-4 w-full max-w-md h-full md:h-auto">
//                     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                         <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
//                             <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                             <span class="sr-only">Close modal</span>
//                         </button>
//                         <div class="p-6 text-center">
//                             <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//                             <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
//                             <button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
//                                 Yes, I'm sure
//                             </button>
//                             <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>



//         </>
//     )
// }

// export default FindHoldingModal


import { useState, useEffect } from 'react'

import { useFormik } from 'formik'
import * as yup from 'yup'
import { TbSearch } from 'react-icons/tb'
import { FcHome } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


function CitizenSafEntryScreen(props) {

    const notify = (message) => {
        toast.dismiss(message)
        toast.info(message)
    }

    const [mutationStatus, setmutationStatus] = useState('col-span-12 md:col-span-4 py-6')// to maintain the hide show state of mutation
    const [dataListStatus, setDataListStatus] = useState(false) //to toggle hide show of data list table after finding the holding data from search holding
    const [holdingData, setholdingData] = useState() //to hold found holding data
    const [asstypeStatus, setasstypeStatus] = useState('both') //to hold found holding data

    const navigate = useNavigate()
    //function to hide and show and animate assessment options
    const assStatus = (type) => {
        setasstypeStatus(type)

        if (type == 'mu') {
            setmutationStatus('col-span-12 md:col-span-12 py-0 block')
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
                console.log('search data....', response.data)
                setholdingData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }

    const handleClose = () => {
        props.fun(false)
    }

    return (
        <>
            <div className=''>
                <div className='  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center bg-gray-600 opacity-95 '>

                    <section className={`${(mutationStatus == 'col-span-12 md:col-span-12 py-0 block') ? 'block' : 'block'} w-11/12 md:w-9/12 mx-auto mt-0 md:mt-32 text-gray-600 bg-white  body-font overflow-hidden p-3   `}>
                        <div className='flex'>
                            <div className='flex-1'>
                                <h1 className="text-gray-900 text-xl title-font font-medium mb-4 flex items-center"><FcHome className="inline" />
                                    <p className='ml-3 '>Find Holding</p>
                                </h1>
                            </div>
                            <div className='flex-1 '>
                                <button className='float-right' onClick={handleClose}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-red-500">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="  grid grid-cols-6">
                                <div className=" flex-1 form-group mb-3 col-span-4 md:col-span-2">
                                    <label className="form-label inline-block mb-1 text-gray-900 text-sm font-semibold "><small className="block mt-1 text-sm font-semibold text-red-600 inline  ">*</small>Holding no.</label>
                                    <input {...formik.getFieldProps('holdingNo')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        placeholder="Enter holding no." />
                                    <span classNameName="text-red-600 absolute text-xs">{formik.touched.holdingNo && formik.errors.holdingNo ? formik.errors.holdingNo : null}</span>
                                </div>
                                <div className="flex-1 form-group mb-2 col-span-1 md:col-span-1 align-bottom">
                                    <label className="form-label inline-block mb-1 text-gray-900 text-sm font-semibold invisible "><small className="block mt-1 text-sm font-semibold text-red-600 inline  ">*</small>Enter Holding no.</label>
                                    <div className='md:px-10 text-right'>
                                        <button onClick={() => setDataListStatus(true)} type="submit" className=" px-6 py-2 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"><TbSearch className="inline text-sm font-bold" />Find</button>
                                    </div>
                                </div>
                            </div>
                        </form>


                        {/* found holding */}
                        <ToastContainer />
                        {
                            dataListStatus && <div className="py-2 overflow-x-auto bg-white">
                                <div className="inline-block min-w-full rounded-lg overflow-hidden bg-white">

                                    <table className="min-w-full leading-normal">
                                        <thead className='font-bold text-left text-sm bg-sky-300'>
                                            <tr >
                                                <th className="px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left">Holding No</th>
                                                <th className="px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left">Owner Name</th>
                                                <th className="px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left">Guardian Name</th>
                                                <th className="px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left">Address</th>
                                                <th className="px-2 py-3 border-b border-gray-200 text-gray-900  text-left text-xs uppercase text-left">Action</th>


                                            </tr>
                                        </thead>

                                        <tbody className="text-sm">
                                            <tr className="bg-white shadow-lg border-b border-gray-200">
                                                <td className="px-2 py-2 text-sm text-left text-gray-900 font-bold">{holdingData?.holdingNo}</td>
                                                <td className="px-2 py-2 text-sm text-left text-gray-900 font-bold">{holdingData?.ownerName}</td>
                                                <td className="px-2 py-2 text-sm text-left text-gray-900 font-bold">{holdingData?.guardianName}</td>
                                                <td className="px-2 py-2 text-sm text-left text-gray-900 font-bold">{holdingData?.Address}</td>

                                                <td className="px-2 py-2 text-sm text-left" onClick={() => notify()}>


                                                    {(asstypeStatus == 'mu' || asstypeStatus == 'both') && <button onClick={() => navigate('/safform/mu')} type="button" className="ml-2 px-2 py-1 bg-orange-300 text-black font-bold hover:text-white text-xs leading-tight  rounded  hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Mutation</button>}

                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        }
                    </section>

                </div>
            </div>


        </>
    )
}

export default CitizenSafEntryScreen