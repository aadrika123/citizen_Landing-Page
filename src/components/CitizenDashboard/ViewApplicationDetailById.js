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
import { Link, useNavigate, useParams } from "react-router-dom";
// import LandingNav from '../Landing/LandingNav';
import TimeLine from '../../components/TimeLine';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LandingNav from '../../Pages/Landing/LandingNav';
import BackComponent from './BackComponent';
import CitizenNavbar from './CitizenNavbar';

function CitizenLicenseFullDetail() {

    let rowTitleStyle = "lg:p-1 p-0 md:p-0 text-gray-500 text-sm"
    let rowInputStye = "lg:p-1 p-0 md:p-0 text-gray-600 text-sm font-semibold"

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
        <CitizenNavbar/>

            {/* displaying particular selected license full detail table */}

            <div class=" grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5  gap-5 bg-white">
                <div class=" bg-white mt-2 ml-2 col-span-1 ">
                    <img src='https://img.freepik.com/free-vector/realty-agent-holding-keys-standing-near-building-isolated-flat-vector-illustration-cartoon-woman-house-sale_74855-8548.jpg?w=740&t=st=1665657219~exp=1665657819~hmac=11498cb70d0eb017f5ee66cbaf57fc5f31e4af1fb27aa59196c008bf88ffdbf7' />

                    <div className=''>
                        <div className={`p-4  md:p-5 `} >
                            <div class="hover:shadow-xl hover:bg-green-500  rounded-lg sm:w-full w-full h-30 p-2 bg-green-300 relative overflow-hidden">
                                <img alt="moto" src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" class="absolute -right-2 -bottom-6 h-12 w-12 mb-4 " />
                                <div class="w-4/6">
                                    <p class=" font-bold mb-2   text-gray-800 text-sm text-start top-3 left-9 sm:left-10">
                                        STATUS : APPROVED
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className={`${(asstypeStatus == 're' || asstypeStatus == 'both')}p-4  md:p-5 -mt-8`} onClick={() => navigate('/safform/re')}>

                            <div class="hover:shadow-xl hover:bg-emerald-600  rounded-lg sm:w-full w-full h-30 p-2 bg-emerald-500 relative overflow-hidden">
                                <img alt="moto" src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" class="absolute -right-2 -bottom-6 h-12 w-12 mb-4 " />
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
                        <div className={`${(asstypeStatus == 'mu' || asstypeStatus == 'both')}p-4 md:p-5 -mt-8 `} onClick={() => navigate('/safform/mu')}>
                            <div class="hover:shadow-xl hover:bg-amber-500  rounded-lg sm:w-full w-full p-2 bg-amber-400 relative overflow-hidden">
                                <img alt="moto" src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" class="absolute -right-2 -bottom-6 h-12 w-12 mb-4  " />
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

                        <div className={`${(asstypeStatus == 'obj' || asstypeStatus == 'both')}p-4 md:p-5 -mt-8`} onClick={() => navigate('/citizenobjection')}>
                            <div class="hover:shadow-xl hover:bg-purple-600 rounded-lg sm:w-full w-full p-2 bg-purple-500 relative overflow-hidden">
                                <img alt="moto" src="https://cdn-icons-png.flaticon.com/128/4205/4205906.png" class="absolute -right-2 -bottom-6 h-12 w-12 mb-4 " />
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



                <div className="col-span-4 ">
                    <div className=' '>
                        <div className=' '>
                            <h1 className=' text-gray-600 font-semibold text-2xl text-center '>APPLICATION REVIEW</h1>
                        </div>
                        <div className=' float-right p-2'>
                            <Link to='/citizenPropertyApply'>
                                <BackComponent />
                            </Link>
                           
                        </div>
                    </div>
                    <div className=' p-2 flex'>
                        <div>
                            <h1 className='flex-1  text-gray-600 font-semibold text-xl'>   <span className='text-green-500'>SAF NO:- SAP12345678987634567</span></h1>
                        </div>
                       
                        <div >

                        </div>

                    </div>

                    {/* Basic  details */}
                    <div>
                        <h1 className='px-1 font-semibold font-serif text-xs'><img src='https://cdn-icons-png.flaticon.com/512/6592/6592963.png' alt="pin" className='w-5 inline' /> Basic Details</h1>
                        <div className='bg-green-50 rounded-lg shadow-lg py-6'>
                            <div className="flex space-x-5 pl-4 ">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Ward No.</div>
                                    <div className='font-bold text-sm'>Ward No.</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>New Ward No</div>
                                    <div className='font-semibold text-sm'>Ward No.</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Ownership Type</div>
                                    <div className='font-semibold text-sm'>Ward No.</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Property Type</div>
                                    <div className='font-bold text-sm'>BUILDING</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Property Type</div>
                                    <div className='font-bold text-sm'>Ward No.</div>
                                </div>
                            </div>

                            <div className="flex space-x-10  pl-4 mt-4">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Property has Mobile Tower(s) ?</div>
                                    <div className='font-bold text-sm'>yes</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Property has Hoarding Board(s) ?</div>
                                    <div className='font-semibold text-sm'>yes</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Is property a Petrol Pump ?</div>
                                    <div className='font-semibold text-sm'>yes</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Rainwater harvesting provision ?</div>
                                    <div className='font-bold text-sm'>yes</div>
                                </div>
                                <div className='flex-1 text-xs'>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Property  details */}
                    <h1 className='px-1 font-semibold font-serif text-xs mt-6'><img src='https://cdn-icons-png.flaticon.com/512/609/609803.png' alt="pin" className='w-5 inline' /> Property Address & Details</h1>
                    <div className='bg-green-50 rounded-lg shadow-lg py-6'>
                        <div className="flex space-x-10 pl-4 ">
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Khata No.</div>
                                <div className='font-bold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Plot No</div>
                                <div className='font-semibold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Village/Mauja Name</div>
                                <div className='font-semibold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Area of Plot</div>
                                <div className='font-bold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Road Width</div>
                                <div className='font-bold text-sm'>Demo</div>
                            </div>
                        </div>

                        <div className="flex space-x-10  pl-4 mt-4">
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>City</div>
                                <div className='font-bold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>District</div>
                                <div className='font-semibold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>State</div>
                                <div className='font-semibold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Pin</div>
                                <div className='font-bold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Locality</div>
                                {/* <div className='font-bold text-sm'>N{props?.formReviewData?.propertyAddressDetails?.locality}o</div> */}
                                <div className='font-bold text-sm'>No</div>
                            </div>
                        </div>

                        <div></div>
                        {/* coressponding address */}
                        <div className="col-span-4 grid grid-cols-5 justify-center items-center mt-4 mb-4">
                            <div className="col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"></div>
                            <div className='flex justify-center items-center'><label className="form-check-label text-gray-800"> <small className="block mt-1 text-xs text-gray-400 inline md:px-4 font-mono text-center">Corresponding Address</small></label></div>
                            <div className="col-span-2 flex justify-center items-center w-full h-[1px] bg-gray-400"></div>
                        </div>

                        <div className="flex space-x-10  pl-4 mt-4">
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>City</div>
                                <div className='font-bold text-sm'>Yes</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>District</div>
                                <div className='font-semibold text-sm'></div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>State</div>
                                <div className='font-semibold text-sm'></div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Pin</div>
                                <div className='font-bold text-sm'></div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Locality</div>
                                <div className='font-bold text-sm'></div>
                            </div>
                        </div>
                    </div>



                    {/* electricity details */}


                    <h1 className='px-1 font-semibold font-serif text-xs mt-6'><img src='https://cdn-icons-png.flaticon.com/512/616/616494.png' alt="pin" className='w-5 inline' /> Electricity & Water Details</h1>
                    <div className='bg-green-50 rounded-lg shadow-lg py-6'>
                        <div className="flex space-x-10 pl-4 ">
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Electricity K. No</div>
                                <div className='font-bold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>ACC No.</div>
                                <div className='font-semibold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>BIND/BOOK No.</div>
                                <div className='font-semibold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Electricity Consumer Category</div>
                                <div className='font-bold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>

                            </div>
                        </div>


                        <div className="flex space-x-10  pl-4 mt-4">
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Building Plan Approval No.</div>
                                <div className='font-bold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Building Plan Approval Date</div>
                                <div className='font-semibold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Water Consumer No.</div>
                                <div className='font-semibold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Water Connection Date</div>
                                <div className='font-bold text-sm'>Demo</div>
                            </div>
                            <div className='flex-1 text-xs'>

                            </div>
                        </div>
                    </div>


                    {/* owner details */}
                    <div className='mt-8'>
                        <h1 className='px-1 font-semibold font-serif text-xs'><img src='https://cdn-icons-png.flaticon.com/512/2029/2029957.png' alt="pin" className='w-5 inline' /> Owner Details</h1>

                        <table className='min-w-full leading-normal mt-2'>
                            <thead className='font-bold text-left text-sm bg-green-50 text-gray-600'>
                                <tr>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Owner Name</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Gender</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">DOB</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Guardian Name</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Relation</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Mobile No.</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Aadhar</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">PAN </th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">email </th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Is-Armed-Force </th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Is-Specially-Abled? </th>

                                </tr>
                            </thead>
                            <tbody className="text-sm">

                                {/* {props?.formReviewData?.ownerDetails?.map((owner, index) => ( */}
                                <>
                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>

                                    </tr>
                                </>
                                {/* ))} */}


                            </tbody>
                        </table>
                    </div>

                    {/* floor details */}
                    <div className='mt-8'>
                        <h1 className='px-1 font-semibold font-serif text-xs'><img src='https://cdn-icons-png.flaticon.com/512/7699/7699994.png' alt="building image" className='inline w-4' /> Floor Details</h1>

                        <table className='min-w-full leading-normal mt-2'>
                            <thead className='font-bold text-left text-sm bg-green-50 text-gray-600'>
                                <tr>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Floor </th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Usage Type</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Occupancy Type</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Construction Type</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Built Up Area</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">From Date</th>
                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Upto Date</th>


                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {/* {props?.formReviewData?.floorDetails.map((floor, index) => ( */}
                                <>
                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>
                                        <td className="px-2 py-2 text-sm text-left">Demo</td>

                                    </tr>
                                </>
                                {/* ))} */}


                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

        </>
    )
}

export default CitizenLicenseFullDetail