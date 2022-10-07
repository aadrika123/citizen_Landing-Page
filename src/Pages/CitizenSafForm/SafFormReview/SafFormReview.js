import { useState, useRef } from 'react'
import { BiAddToQueue } from 'react-icons/bi'
import pointer from '../../../components/Media/pointer.png'
import area from '../../../components/Media/radar.png'
import tax from '../../../components/Media/tax.png'
import occupancy from '../../../components/Media/occupancy.png'
import folder from '../../../components/Media/folders.png'
import { FcBusinessman } from 'react-icons/fc'
import { FcFlashOn } from 'react-icons/fc'
import { GoPrimitiveDot } from 'react-icons/go'
import building from '../../../components/Media/building.png'
import home from '../../../components/Media/home.png'
import Modal from 'react-modal';
import chat from '../../../components/Media/chat.png'
import './animateModal.css'
import { BsArrowLeftShort } from 'react-icons/bs'
// import MatrixFactor from './RateChart/MatrixFactor3'
import RentalRate1 from './RateChart/RentalRate1'
import UsageFactor2 from './RateChart/UsageFactor2'
import RentalRate2 from './RateChart/RentalRate2'
import CircleRate3 from './RateChart/CircleRate3'
import OccupancyFactor3 from './RateChart/OccupancyFactor3'
import MatrixFactor3 from './RateChart/MatrixFactor3'
import CalculationFactor3 from './RateChart/CalculationFactor3'
import OccupancyFactor2 from './RateChart/OccupancyFactor2'
import CitizenTaxCard from './CitizenTaxCard'
import { useNavigate } from 'react-router-dom'
import {TbEdit} from 'react-icons/tb'
import {MdOutlineUpload} from 'react-icons/md'
import {MdViewInAr} from 'react-icons/md'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        border: 'none'
    }
};
// Modal.setAppElement('#root');
// Modal.setAppElement('#modal');


function SafFormReview(props) {
    const [rateChartText, setRateChartText] = useState('')

    const [modalIsOpen, setIsOpen] = useState(false);
    const [taxDescriptionState, setTaxDescriptionState] = useState(false)
    const navigate = useNavigate()
    const toggleTaxDescription = () => {
        setTaxDescriptionState(!taxDescriptionState)

        // console.log('scroll top position ',document.documentElement.scrollTop)
    }

    console.log('form review data...', props?.formReviewData)

    function openModal(chartText) {
        setIsOpen(true);
        setRateChartText(chartText)
    }
    function closeModal() {
        // document.getElementById('root').style.filter = 'none'
        setIsOpen(false);
        setRateChartText('')
    }


    return (
        <>
            <div className={` block p-4 mt-4 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto  overflow-x-auto`}>
                <h1 className='px-2 font-semibold mt-0 bg-gray-400 text-center text-white font-serif py-2 text-lg shadow-lg border border-white mb-10'>Review and submit your form details.</h1>

                <div className='mt-4'>
                    <div>
                        <h1 className='px-1 font-semibold font-serif text-xs'><img src={folder} alt="pin" className='w-5 inline' /> Basic Details</h1>


                        <div className='bg-green-50 rounded-lg shadow-lg py-6'>
                            <div className="flex space-x-10 pl-4 ">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Ward No.</div>
                                    <div className='font-bold text-sm'>{props?.formReviewData?.basicDetails?.wardNo}</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>New Ward No</div>
                                    <div className='font-semibold text-sm'>{props?.formReviewData?.basicDetails?.newWardNo}</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Ownership Type</div>
                                    <div className='font-semibold text-sm'>{props?.formReviewData?.basicDetails?.ownerShiptype}</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Property Type</div>
                                    <div className='font-bold text-sm'>{props?.formReviewData?.basicDetails?.propertyType} BUILDING</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Zone</div>
                                    <div className='font-bold text-sm'>{props?.formReviewData?.basicDetails?.zone}</div>
                                </div>
                            </div>

                            <div className="flex space-x-10  pl-4 mt-4">
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Property has Mobile Tower(s) ?</div>
                                    <div className='font-bold text-sm'>{props?.formReviewData?.basicDetails?.mobileTowerStatus}</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Property has Hoarding Board(s) ?</div>
                                    <div className='font-semibold text-sm'>{props?.formReviewData?.basicDetails?.hoardingStatus}</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Is property a Petrol Pump ?</div>
                                    <div className='font-semibold text-sm'>{props?.formReviewData?.basicDetails?.petrolPumpStatus}</div>
                                </div>
                                <div className='flex-1 text-xs'>
                                    <div className='text-gray-500'>Rainwater harvesting provision ?</div>
                                    <div className='font-bold text-sm'>{props?.formReviewData?.basicDetails?.waterHarvestingStatus}</div>
                                </div>
                                <div className='flex-1 text-xs'>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Property  details */}
                    <h1 className='px-1 font-semibold font-serif text-xs mt-10'><img src={home} alt="pin" className='w-5 inline' /> Property Address & Details</h1>
                    <div className='bg-green-50 rounded-lg shadow-lg py-6'>
                        <div className="flex space-x-10 pl-4 ">
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Khata No.</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.propertyAddressDetails?.khataNo}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Plot No</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.propertyAddressDetails?.plotNo}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Village/Mauja Name</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.propertyAddressDetails?.village_mauja}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Area of Plot</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.propertyAddressDetails?.plotArea}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Road Width</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.propertyAddressDetails?.roadWidth}</div>
                            </div>
                        </div>

                        <div className="flex space-x-10  pl-4 mt-4">
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>City</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.propertyAddressDetails?.city}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>District</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.propertyAddressDetails?.district}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>State</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.propertyAddressDetails?.state}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Pin</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.propertyAddressDetails?.pin}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Locality</div>
                                <div className='font-bold text-sm'>N{props?.formReviewData?.propertyAddressDetails?.locality}o</div>
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
                                <div className='font-bold text-sm'>Y{props?.formReviewData?.propertyAddressDetails?.c_city}es</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>District</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.propertyAddressDetails?.c_district}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>State</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.propertyAddressDetails?.c_state}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Pin</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.propertyAddressDetails?.c_pin}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Locality</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.propertyAddressDetails?.c_locality}</div>
                            </div>
                        </div>
                    </div>

                    {/* electricity details */}


                    <h1 className='px-1 font-semibold font-serif text-xs mt-6'><FcFlashOn className="text-xl inline" /> Electricity & Water Details</h1>
                    <div className='bg-green-50 rounded-lg shadow-lg py-6'>
                        <div className="flex space-x-10 pl-4 ">
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Electricity K. No</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.electricityWaterDetails?.electricityKNo}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>ACC No.</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.electricityWaterDetails?.accNo}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>BIND/BOOK No.</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.electricityWaterDetails?.bindBookNo}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Electricity Consumer Category</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.electricityWaterDetails?.electrictyConsumerNo}</div>
                            </div>
                            <div className='flex-1 text-xs'>

                            </div>
                        </div>


                        <div className="flex space-x-10  pl-4 mt-4">
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Building Plan Approval No.</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.electricityWaterDetails?.bpApprovalNo}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Building Plan Approval Date</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.electricityWaterDetails?.bpApprovalDate}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Water Consumer No.</div>
                                <div className='font-semibold text-sm'>{props?.formReviewData?.electricityWaterDetails?.waterConsumerNo}</div>
                            </div>
                            <div className='flex-1 text-xs'>
                                <div className='text-gray-500'>Water Connection Date</div>
                                <div className='font-bold text-sm'>{props?.formReviewData?.electricityWaterDetails?.waterConnectionDate}</div>
                            </div>
                            <div className='flex-1 text-xs'>

                            </div>
                        </div>
                    </div>





                    {/* owner details */}
                    <div className='mt-8'>
                        <h1 className='px-1 font-semibold font-serif text-xs'><FcBusinessman className='inline text-xl' /> Owner Details</h1>

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

                                {props?.formReviewData?.ownerDetails?.map((owner, index) => (
                                    <>
                                        <tr className="bg-white shadow-lg border-b border-gray-200">
                                            <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.ownerName}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.gender}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.dob}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.guardianName}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.relation}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.mobileNo}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.aadhar}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.pan}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.email}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.isArmedForce}</td>
                                            <td className="px-2 py-2 text-sm text-left">{owner?.isSpeciallyAbled}</td>

                                        </tr>
                                    </>
                                ))}


                            </tbody>
                        </table>
                    </div>

                    {/* floor details */}
                    <div className='mt-8'>
                        <h1 className='px-1 font-semibold font-serif text-xs'><img src={building} alt="building image" className='inline w-4' /> Floor Details</h1>

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
                                {props?.formReviewData?.floorDetails.map((floor, index) => (
                                    <>
                                        <tr className="bg-white shadow-lg border-b border-gray-200">
                                            <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                            <td className="px-2 py-2 text-sm text-left">{floor?.useType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{floor?.constructionType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{floor?.occupancyType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{floor?.constructionType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{floor?.buildupArea}</td>
                                            <td className="px-2 py-2 text-sm text-left">{floor?.dateFrom}</td>
                                            <td className="px-2 py-2 text-sm text-left">{floor?.dateUpto}</td>

                                        </tr>
                                    </>
                                ))}


                            </tbody>
                        </table>
                    </div>






                    {/* application tax description view */}
                    <div className={` block p-4 mt-20 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg  md:w-full mx-auto overflow-x-auto mb-40`}>
                        <h1 className='px-2 font-semibold mt-0 bg-green-100 text-center text-black font-serif py-2 text-lg shadow-lg border border-white'>Calculated Holding Tax</h1>

                        <div className="grid grid-cols-3 mt-8 md:px-20">
                            <div className='px-4 py-4 text-sm'>

                                <div>.......<span className='text-sm text-black font-semibold font-mono ml-2'>....</span></div>
                                <div>.........<span className='text-sm text-black font-semibold font-mono ml-2'>.......</span></div>
                                <div>............<span className='text-sm text-black font-semibold font-mono ml-2'>......</span></div>
                                <div>......<span className='text-sm text-black font-semibold font-mono ml-2'>..........</span></div>

                            </div>
                            <div className=''><CitizenTaxCard time="yearly" tax="200" /></div>
                            <div><CitizenTaxCard time="quaterly" tax="50" /></div>
                        </div>

                    </div>

                    {/* toggle Tax description */}
                    {taxDescriptionState && <div className=''>
                        {/* tax 1 */}
                        <div className='mt-8' >
                            <div className='px-1 flex  font-serif text-xs underline'><div className='bg-gray-800 w-4 h-4 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white'>1</div> Tax Description of Annual Rental Value - As Per Old Rule (Effect Upto <div className='font-semibold'>31-03-2016</div> )</div>
                            {/* Tax description */}
                            <div className={` block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto`}>

                                <div>
                                    <div>
                                        <table className='min-w-full leading-normal mt-2'>
                                            <thead className='font-bold text-left text-sm bg-amber-100 text-gray-600'>
                                                <tr>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Usage Type</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Rental Rate</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Built Up Area (in Sq. Ft)</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effect From</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">ARV</th>


                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">

                                                <>
                                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                                        <td className="px-2 py-2 text-sm text-left">1</td>
                                                        <td className="px-2 py-2 text-sm text-left">2,241.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">200.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">1.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">0.075%</td>

                                                        <td className="px-2 py-2 text-sm text-left"><span className='bg-amber-200 px-2 py-1 rounded-lg shadow-lg border border-white'>268.92</span></td>

                                                    </tr>
                                                </>

                                            </tbody>
                                        </table>
                                    </div>

                                    <div>
                                        <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs'>Below taxes are calculated on quarterly basis( Property Tax / 4 ).</h1>

                                        <table className='min-w-full leading-normal mt-2'>
                                            <thead className='font-bold text-left text-sm bg-amber-100 text-gray-600'>
                                                <tr>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effect From</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">ARV</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Holding Tax</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Water Tax</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Latrine/Conservancy Tax</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Education Cess</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Health Cess</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Quarterly Tax</th>


                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">

                                                <>
                                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                                        <td className="px-2 py-2 text-sm text-left">1</td>
                                                        <td className="px-2 py-2 text-sm text-left">Quarter : 1 Financial Year : 2022-2023</td>
                                                        <td className="px-2 py-2 text-sm text-left">254.88</td>
                                                        <td className="px-2 py-2 text-sm text-left">63.72</td>
                                                        <td className="px-2 py-2 text-sm text-left">31.86%</td>
                                                        <td className="px-2 py-2 text-sm text-left">31.86%</td>
                                                        <td className="px-2 py-2 text-sm text-left">31.86%</td>
                                                        <td className="px-2 py-2 text-sm text-left">31.86%</td>
                                                        <td className="px-2 py-2 text-sm text-left"><span className='bg-amber-200 px-2 py-1 rounded-lg shadow-lg border border-white'>95.58</span></td>


                                                    </tr>
                                                </>

                                            </tbody>
                                        </table>
                                    </div>
                                    {/* tax description toggle button */}

                                    {/* Tax description */}
                                    <div className='mt-10 bg-amber-100 pb-6'>
                                        {/* formula text */}
                                        <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs bg-white'>Tax Description</h1>
                                        <div className='flex font-mono text-xs bg-amber-100 py-2 px-1 text-gray-900'>
                                            <div className='flex-initial px-2 font-bold'>Annual Rental Value (ARV)</div>
                                            <div className='flex-initial px-2'>=</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Builtup Area</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Rental Rate</div>
                                        </div>

                                        <div className='flex-initial px-3 text-xs'>(After calculating the A.R.V. the rebates are allowed in following manner : -Holding older than 25 years (as on 1967-68) - 10% Own occupation)</div>


                                        {/* Calculation Rates*/}

                                        <div className='flex font-mono text-xs bg-amber-100 px-1 mt-3'>
                                            <div onClick={() => openModal('rental_rate1')} className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={pointer} alt="icon-image" /> View Rental Rate</span></div>

                                        </div>

                                        {/* Usage Types percenatage*/}
                                        <h1 className='px-4 font-semibold mt-8 text-gray-600 text-xs underline'>Usage Type tax %</h1>
                                        <div className='flex font-serif text-xs bg-amber-100 px-1 mt-2'>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Residential - <span className='font-mono text-sm font-semibold'>30%</span></span></div>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Commercial - <span className='font-mono text-sm font-semibold'>15%</span></span></div>


                                        </div>
                                        {/* Other taxes percenatage*/}
                                        <h1 className='px-4 font-semibold mt-8 text-gray-600 text-xs underline'>Other Taxes %</h1>
                                        <div className='flex font-serif text-xs bg-amber-100 px-1 mt-2'>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Holding tax - <span className='font-mono text-sm font-semibold'>30%</span></span></div>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Latrine tax - <span className='font-mono text-sm font-semibold'>15%</span></span></div>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Water tax  - <span className='font-mono text-sm font-semibold'>15%</span></span></div>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Health cess - <span className='font-mono text-sm font-semibold'>15%</span></span></div>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Education cess - <span className='font-mono text-sm font-semibold'>15%</span></span></div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* tax 2 */}

                        <div className='mt-16' id="scr">
                            <h1 className='px-1 flex  font-serif text-xs underline'><div className='bg-gray-800 w-4 h-4 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white'>2</div>Tax Description Annual Rental Value - As ARV Rule (Effect From 01-04-2016 to 31-03-2022)</h1>
                            {/* Tax description */}
                            <div className={` block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto`}>

                                <div>

                                    <div>

                                        <table className='min-w-full leading-normal mt-2'>
                                            <thead className='font-bold text-left text-sm bg-amber-100 text-gray-600'>
                                                <tr>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Capital Value Rate</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Buildup Area</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Occupancy Factor</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Tax Percentage</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Calculation Factor</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Matrix Factor</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effect From</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Property Tax</th>

                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">

                                                <>
                                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                                        <td className="px-2 py-2 text-sm text-left">1</td>
                                                        <td className="px-2 py-2 text-sm text-left">2,241.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">200.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">1.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">0.075%</td>
                                                        <td className="px-2 py-2 text-sm text-left">1.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">0.80</td>
                                                        <td className="px-2 py-2 text-sm text-left">Quarter : 1 Financial Year : 2022-2023</td>
                                                        <td className="px-2 py-2 text-sm text-left"><span className='bg-amber-200 px-2 py-1 rounded-lg shadow-lg border border-white'>268.92</span></td>

                                                    </tr>
                                                </>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs'>Total Quarterly Tax Details ((ARV X 2%) / 4).</h1>

                                        <table className='min-w-full leading-normal mt-2'>
                                            <thead className='font-bold text-left text-sm bg-amber-100 text-gray-600'>
                                                <tr>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effect From</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Property Tax </th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Holding Tax </th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Additional Tax</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Quarterly Tax (Total)</th>


                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">

                                                <>
                                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                                        <td className="px-2 py-2 text-sm text-left">1</td>
                                                        <td className="px-2 py-2 text-sm text-left">Quarter : 1 Financial Year : 2022-2023</td>
                                                        <td className="px-2 py-2 text-sm text-left">254.88</td>
                                                        <td className="px-2 py-2 text-sm text-left">63.72</td>
                                                        <td className="px-2 py-2 text-sm text-left">31.86%</td>
                                                        <td className="px-2 py-2 text-sm text-left"><span className='bg-amber-200 px-2 py-1 rounded-lg shadow-lg border border-white'>95.58</span></td>


                                                    </tr>
                                                </>

                                            </tbody>
                                        </table>
                                    </div>
                                    {/* tax description toggle button */}

                                    {/* Tax description */}
                                    <div className='mt-10 bg-amber-100 pb-6'>
                                        {/* formula text */}
                                        <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs bg-white'>Tax Description</h1>
                                        <div className='flex font-mono text-xs bg-amber-100 py-3 px-1 text-gray-900'>
                                            <div className='flex-initial px-2 font-bold'>Annual Rental Value (ARV)</div>
                                            <div className='flex-initial px-2'>=</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Carpet Area</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Usage Factor</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Occupancy Factor</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Tax Percentage</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Rental Rate</div>

                                        </div>
                                        {/* Calculation Rates*/}

                                        <h1 className='px-4 font-semibold mt-4 text-gray-600 text-xs'>Rates</h1>
                                        <div className='flex font-mono text-xs bg-amber-100 px-1'>
                                            <div onClick={() => openModal('usageFactor_rate2')} className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={pointer} alt="icon-image" /> View Usage Factor </span></div>
                                            <div onClick={() => openModal('occupancyFactor_rate2')} className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={pointer} alt="icon-image" /> View Occupancy Factor</span></div>
                                            <div onClick={() => openModal('rental_rate2')} className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={pointer} alt="icon-image" /> View Rental Rate</span></div>
                                        </div>

                                        {/* Usage Types percenatage*/}
                                        <h1 className='px-4 font-semibold mt-8 text-gray-600 text-xs underline'>Carpet Area</h1>
                                        <div className='flex font-serif text-xs bg-amber-100 px-1 mt-2'>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Carpet area for residential - <span className='font-mono text-sm font-semibold'>70% of builtup area</span></span></div>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Carpet area for commercial - <span className='font-mono text-sm font-semibold'>80% of builtup area</span></span></div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* tax 3 */}
                        <div className='mt-16'>
                            <h1 className='px-1 flex  font-serif text-xs underline'><div className='bg-gray-800 w-4 h-4 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white'>3</div>Tax Description of Capital Value - As Per Current Rule (Effect From 01-04-2022)</h1>
                            {/* Tax description */}
                            <div className={` block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto`}>

                                <div>
                                    <div>
                                        <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs'>For Building</h1>

                                        <table className='min-w-full leading-normal mt-2'>
                                            <thead className='font-bold text-left text-sm bg-amber-100 text-gray-600'>
                                                <tr>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Capital Value Rate</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Buildup Area</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Occupancy Factor</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Tax Percentage</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Calculation Factor</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Matrix Factor</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effect From</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Property Tax</th>

                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">

                                                <>
                                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                                        <td className="px-2 py-2 text-sm text-left">1</td>
                                                        <td className="px-2 py-2 text-sm text-left">2,241.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">200.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">1.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">0.075%</td>
                                                        <td className="px-2 py-2 text-sm text-left">1.00</td>
                                                        <td className="px-2 py-2 text-sm text-left">0.80</td>
                                                        <td className="px-2 py-2 text-sm text-left">Quarter : 1 Financial Year : 2022-2023</td>
                                                        <td className="px-2 py-2 text-sm text-left"><span className='bg-amber-200 px-2 py-1 rounded-lg shadow-lg border border-white'>268.92</span></td>

                                                    </tr>
                                                </>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs'>Below taxes are calculated on quarterly basis( Property Tax / 4 ).</h1>

                                        <table className='min-w-full leading-normal mt-2'>
                                            <thead className='font-bold text-left text-sm bg-amber-100 text-gray-600'>
                                                <tr>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effect From</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Property Tax )</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Holding Tax )</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Additional Tax</th>
                                                    <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Quarterly Tax (Total)</th>


                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">

                                                <>
                                                    <tr className="bg-white shadow-lg border-b border-gray-200">
                                                        <td className="px-2 py-2 text-sm text-left">1</td>
                                                        <td className="px-2 py-2 text-sm text-left">Quarter : 1 Financial Year : 2022-2023</td>
                                                        <td className="px-2 py-2 text-sm text-left">254.88</td>
                                                        <td className="px-2 py-2 text-sm text-left">63.72</td>
                                                        <td className="px-2 py-2 text-sm text-left">31.86%</td>
                                                        <td className="px-2 py-2 text-sm text-left"><span className='bg-amber-200 px-2 py-1 rounded-lg shadow-lg border border-white'>95.58</span></td>


                                                    </tr>
                                                </>

                                            </tbody>
                                        </table>
                                    </div>
                                    {/* tax description toggle button */}

                                    {/* Tax description */}
                                    <div className='mt-10 bg-amber-100 pb-6'>
                                        {/* formula text */}
                                        <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs bg-white'>Tax Description</h1>
                                        <div className='flex font-mono text-xs bg-amber-100 py-3 px-1 text-gray-900'>
                                            <div className='flex-initial px-2 font-bold'>Property Tax</div>
                                            <div className='flex-initial px-2'>=</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Capital Value Rate</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Builtup Area</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Occupancy Factor</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Tax Percentage</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Calculation Factor</div>
                                            <div className='flex-initial px-2'>x</div>
                                            <div className='flex-initial px-2 bg-gray-100 rounded-lg shadow-lg'>Matrix Factor Rate</div>
                                        </div>
                                        {/* Calculation Rates*/}

                                        <h1 className='px-4 font-semibold mt-4 text-gray-600 text-xs'>Rates</h1>
                                        <div className='flex font-mono text-xs bg-amber-100 px-1'>
                                            <div onClick={() => openModal('circle_rate3')} className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={pointer} alt="icon-image" /> View Circle Rate</span></div>
                                            <div onClick={() => openModal('occupancyFactor_rate3')} className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={pointer} alt="icon-image" /> View Occupancy Factor</span></div>
                                            <div onClick={() => openModal('matrixFactor_rate3')} className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={pointer} alt="icon-image" /> View  Matrix Factor Rate</span></div>

                                            <div onClick={() => openModal('calculationFactor_rate3')} className='flex-initial px-2 text-white rounded-lg mt-4'><span className='bg-gray-200 border border-white text-gray-900 px-2 py-2 shadow-lg rounded-lg cursor-pointer hover:bg-white'><img className='w-5 inline' src={pointer} alt="icon-image" /> View Calculation Factor</span></div>
                                        </div>

                                        {/* Usage Types percenatage*/}
                                        <h1 className='px-4 font-semibold mt-8 text-gray-600 text-xs underline'>Usage Type tax %</h1>
                                        <div className='flex font-serif text-xs bg-amber-100 px-1 mt-2'>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Residential - <span className='font-mono text-sm font-semibold'>0.075%</span></span></div>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Commercial - <span className='font-mono text-sm font-semibold'>0.150%</span></span></div>
                                            <div className='flex-initial px-2 text-white rounded-lg'><span className='text-gray-900 px-2 py-2 rounded-lg'> Commercial & greater than 25000 sqft - <span className='font-mono text-sm font-semibold'>0.20%</span></span></div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    }
                </div>

              

                <div className="w-full flex mb-10 mt-4">
                    <div className='md:px-10 flex-1'>
                        <button onClick={() => props.backFun(6)} type="button" className="pl-4 pr-6 py-1 bg-gray-200 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-amber-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"><TbEdit className='inline text-lg' /> Edit</button>
                    </div>
                    <div className='md:px-4 text-center'>
                        <button onClick={toggleTaxDescription} type="button" className="w-full px-6 py-1 bg-gray-200 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-amber-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"><MdViewInAr className='inline text-lg' />{!taxDescriptionState ? 'See tax description' : 'Hide tax description'}</button>
                    </div>
                    <div className='md:px-10 text-right flex-1'>
                        <button onClick={() => props.submitFun()} type="button" className=" px-6 py-1 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit <MdOutlineUpload className='inline text-lg'/></button>


                    </div>

                </div>

                <div className="w-full h-20"></div>

            </div>

            {/* rate modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="relative rounded-xl p-6 border-2 border-gray-200 rounded bg-white">
                    {(rateChartText == 'rental_rate1') && <RentalRate1 />}
                    {(rateChartText == 'usageFactor_rate2') && <UsageFactor2 />}
                    {(rateChartText == 'occupancyFactor_rate2') && <OccupancyFactor2 />}
                    {(rateChartText == 'rental_rate2') && <RentalRate2 />}
                    {(rateChartText == 'circle_rate3') && <CircleRate3 />}
                    {(rateChartText == 'occupancyFactor_rate3') && <OccupancyFactor3 />}
                    {(rateChartText == 'matrixFactor_rate3') && <MatrixFactor3 />}
                    {(rateChartText == 'calculationFactor_rate3') && <CalculationFactor3 />}
                </div>
            </Modal>
        </>
    )
}

export default SafFormReview