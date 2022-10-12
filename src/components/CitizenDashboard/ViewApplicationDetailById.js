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
// import LandingNav from '../Landing/LandingNav';
import TimeLine from '../../components/TimeLine';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LandingNav from '../../Pages/Landing/LandingNav';

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
       <LandingNav/>

            {/* displaying particular selected license full detail table */}

            <div class="grid grid-cols-5 gap-5 bg-white">
                <div class=" bg-white mt-2 ml-2 col-span-1">
                    <TimeLine />

                </div>
                <div className="col-span-4 ">

                    <form >
                       
                        <div >

                            <div className=' '>
                                <div className='flex mt-2'>
                                    <img className='mx-3 ' alt="" width="40vw" />
                                    <h1 className='text-gray-700 text-lg  px-2 mt-1'> REVIEW APPLICATION</h1>
                                </div>

                                <div className=' bg-white my-6 border-r-2 border-blue-700 rounded-md shadow-lg '>
                                   
                                   <div className=''>
                                   <h1 className='text-md text-gray-800 font-semibold px-2 py-0 shadow-md '> 
                                    <span className=''><img src='https://cdn-icons-png.flaticon.com/512/8054/8054673.png' className='h-8'/>
                                    </span> 
                                    
                                    <p className='ml-9 -mt-6'>APPLIED LICENSE DETAIL</p>
                                    </h1>
                                   </div>

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