//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenLicenseFullDetail
//    DESCRIPTION - CitizenLicenseFullDetail Component is displaying particular selected license full detail table
//////////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import LandingNav from '../Landing/LandingNav';
import TimeLine from '../../components/TimeLine';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

function CitizenLicenseFullDetail() {

    let rowTitleStyle = "lg:p-1 p-0 md:p-0 text-gray-500 text-sm"
    let rowInputStye = "lg:p-1 p-0 md:p-0 text-gray-600 text-sm font-semibold"

    const [dastaList, setDastaList] = useState()

    const { userId } = useParams();
    // console.log("id" , userId)
    useEffect(() => {

        axios.get(`http://localhost:3333/licenseTable?id=${userId}`)
            .then(function (response) {
                // handle success
                console.log('data of licence ', response.data);
                setDastaList(response.data[0])
            })
            .catch(function (error) {
                console.log(error)
            })
        // setDastaList(data.data)
    }, [])

    return (
        <>
            <LandingNav />

            {/* displaying particular selected license full detail table */}

            <div class="grid grid-cols-5 gap-5 bg-white">
                <div class=" bg-white mt-2 ml-2 col-span-1">
                    <TimeLine />

                </div>
                <div className="col-span-4 ">

                    <form >
                        {/* <div className=''>
                            <div class="px-4  mr-6 bg-white mt-7  m-auto ">
                                <div className='bg-slate-500 rounded  w-full h-8'>
                                    <h1 className='text-sm font-serif p-2 px-4 text-white'> APPLIED LICENSE DETAIL</h1>
                                </div>
                                <div class="grid grid-cols-6 gap-6 px-4 mt-2">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="block text-xs font-medium text-gray-700">Application No:-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1"> {dastaList?.applicationNo} </span>
                                        </label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last-name" class="block text-xs font-medium text-gray-700">Application Type :-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1">{dastaList?.applicationNo}</span>
                                        </label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="email-address" class="block text-xs font-medium text-gray-700">Firm Name :-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1">{dastaList?.firmName} </span>
                                        </label>

                                    </div>

                                    <div class="col-span-6 sm:col-span-3">

                                        <label for="mobile" class="block text-xs font-medium text-gray-700">Ownership Type :-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1">{dastaList?.ownershipType}</span>
                                        </label>

                                    </div>

                                    <div class="col-span-6 sm:col-span-3">

                                        <label for="mobile" class="block text-xs font-medium text-gray-700">Applied Date :-
                                            <span className="text-green-600 font-bold text-xs leading-8  "> {dastaList?.appliedDate}</span>
                                        </label>

                                    </div>
                                </div>
                            </div>
                            <div class="px-4 mt-2  mr-6 bg-white   m-auto ">
                                <div className='bg-slate-500 rounded  w-full h-8'>
                                    <h1 className='text-sm font-serif p-2 px-4 text-white'> APPLIED LICENSE DETAIL</h1>
                                </div>
                                <div class="grid grid-cols-6 gap-6 px-4 mt-2">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="block text-xs font-medium text-gray-700">Application No:-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1"> {dastaList?.applicationNo} </span>
                                        </label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last-name" class="block text-xs font-medium text-gray-700">Application Type :-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1">{dastaList?.applicationNo}</span>
                                        </label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="email-address" class="block text-xs font-medium text-gray-700">Firm Name :-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1">{dastaList?.firmName} </span>
                                        </label>

                                    </div>

                                    <div class="col-span-6 sm:col-span-3">

                                        <label for="mobile" class="block text-xs font-medium text-gray-700">Ownership Type :-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1">{dastaList?.ownershipType}</span>
                                        </label>

                                    </div>

                                    <div class="col-span-6 sm:col-span-3">

                                        <label for="mobile" class="block text-xs font-medium text-gray-700">Applied Date :-
                                            <span className="text-green-600 font-bold text-xs leading-8  "> {dastaList?.appliedDate}</span>
                                        </label>

                                    </div>
                                </div>
                            </div>
                            <div class="px-4  mr-6 bg-white mt-2  m-auto ">
                                <div className='bg-slate-500 rounded  w-full h-8'>
                                    <h1 className='text-sm font-serif p-2 px-4 text-white'> APPLIED LICENSE DETAIL</h1>
                                </div>
                                <div class="grid grid-cols-6 gap-6 px-4 mt-2">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="block text-xs font-medium text-gray-700">Application No:-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1"> {dastaList?.applicationNo} </span>
                                        </label>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last-name" class="block text-xs font-medium text-gray-700">Application Type :-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1">{dastaList?.applicationNo}</span>
                                        </label>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="email-address" class="block text-xs font-medium text-gray-700">Firm Name :-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1">{dastaList?.firmName} </span>
                                        </label>

                                    </div>

                                    <div class="col-span-6 sm:col-span-3">

                                        <label for="mobile" class="block text-xs font-medium text-gray-700">Ownership Type :-
                                            <span className="text-green-600 font-bold text-xs leading-4 my-1">{dastaList?.ownershipType}</span>
                                        </label>

                                    </div>

                                    <div class="col-span-6 sm:col-span-3">

                                        <label for="mobile" class="block text-xs font-medium text-gray-700">Applied Date :-
                                            <span className="text-green-600 font-bold text-xs leading-8  "> {dastaList?.appliedDate}</span>
                                        </label>

                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div >

                            <div className=''>
                                <div className='flex mt-2'>
                                    <img className='mx-3 ' alt="" width="40vw" />
                                    <h1 className='text-gray-700 text-lg  px-2 mt-1'>APPLICATION</h1>
                                </div>

                                <div className=' bg-blue-50 my-6 border-r-2 border-blue-700 rounded-md shadow-lg '>
                                    <h1 className='text-md text-gray-800 font-semibold px-2 py-0 shadow-md shadow-blue-300'><span className='px-2 '><InventoryOutlinedIcon fontSize='medium' />
                                    </span > APPLIED LICENSE DETAIL</h1>

                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  px-10 py-1 mt-4 pb-1 rounded-md  '>


                                        {/* <div className='grid grid-cols-2 md:w-[auto] lg:w-[30vw] sm:w-auto'> */}
                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Application No:-  </div>
                                            <div className={`${rowInputStye}`}>{dastaList?.applicationNo}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Application Type :- </div>
                                            <div className={`${rowInputStye}`}>{dastaList?.applicationNo}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>Firm Name:-</div>
                                            <div className={`${rowInputStye}`}>{dastaList?.firmName}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Ownership Type :-</div>
                                            <div className={`${rowInputStye}`}>{dastaList?.ownershipType}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>Applied Date :-</div>
                                            <div className={`${rowInputStye}`}>{dastaList?.appliedDate}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>E-Mail :-</div>
                                            <div className={`${rowInputStye}`}>
                                                deepakkumarkeshri123@gmail.com
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>Armed Force     -</div>
                                            <div className={`${rowInputStye}`}>Yes</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Specially Abled -</div>
                                            <div className={`${rowInputStye}`}>No</div>
                                        </div>


                                    </div>
                                </div>
                                <div className=' bg-blue-50 my-6 border-r-2 border-blue-700 rounded-md shadow-lg '>
                                    <h1 className='text-md text-gray-800 font-semibold px-2 py-0 shadow-md shadow-blue-300'><span className='px-2 '><InventoryOutlinedIcon fontSize='medium' />
                                    </span > APPLIED LICENSE DETAIL</h1>

                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  px-10 py-1 mt-4 pb-1 rounded-md  '>


                                        {/* <div className='grid grid-cols-2 md:w-[auto] lg:w-[30vw] sm:w-auto'> */}
                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Application No:-  </div>
                                            <div className={`${rowInputStye}`}>{dastaList?.applicationNo}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Application Type :- </div>
                                            <div className={`${rowInputStye}`}>{dastaList?.applicationNo}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>Firm Name:-</div>
                                            <div className={`${rowInputStye}`}>{dastaList?.firmName}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Ownership Type :-</div>
                                            <div className={`${rowInputStye}`}>{dastaList?.ownershipType}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>Applied Date :-</div>
                                            <div className={`${rowInputStye}`}>{dastaList?.appliedDate}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>E-Mail :-</div>
                                            <div className={`${rowInputStye}`}>
                                                deepakkumarkeshri123@gmail.com
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>Armed Force     -</div>
                                            <div className={`${rowInputStye}`}>Yes</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Specially Abled -</div>
                                            <div className={`${rowInputStye}`}>No</div>
                                        </div>


                                    </div>
                                </div>
                                <div className=' bg-blue-50 my-6 border-r-2 border-blue-700 rounded-md shadow-lg '>
                                    <h1 className='text-md text-gray-800 font-semibold px-2 py-0 shadow-md shadow-blue-300'><span className='px-2 '><InventoryOutlinedIcon fontSize='medium' />
                                    </span > APPLIED LICENSE DETAIL</h1>

                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  px-10 py-1 mt-4 pb-1 rounded-md  '>


                                        {/* <div className='grid grid-cols-2 md:w-[auto] lg:w-[30vw] sm:w-auto'> */}
                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Application No:-  </div>
                                            <div className={`${rowInputStye}`}>{dastaList?.applicationNo}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Application Type :- </div>
                                            <div className={`${rowInputStye}`}>{dastaList?.applicationNo}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>Firm Name:-</div>
                                            <div className={`${rowInputStye}`}>{dastaList?.firmName}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Ownership Type :-</div>
                                            <div className={`${rowInputStye}`}>{dastaList?.ownershipType}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>Applied Date :-</div>
                                            <div className={`${rowInputStye}`}>{dastaList?.appliedDate}</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>E-Mail :-</div>
                                            <div className={`${rowInputStye}`}>
                                                deepakkumarkeshri123@gmail.com
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                            <div className={`${rowTitleStyle}`}>Armed Force     -</div>
                                            <div className={`${rowInputStye}`}>Yes</div>
                                        </div>

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                            <div className={`${rowTitleStyle}`}>Specially Abled -</div>
                                            <div className={`${rowInputStye}`}>No</div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>

            </div>

        </>
    )
}

export default CitizenLicenseFullDetail