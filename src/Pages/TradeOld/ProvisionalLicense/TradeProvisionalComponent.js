import React from 'react'
import logo from '../TradeAssests/logo.png'
import QrCode from '../tradeComponent/QrCode';

import ReactToPrint from 'react-to-print-advanced';
import PropTypes from "prop-types";



class TradeProvisionalComponent extends React.Component {
    render() {
        return (
            <div className='border-2 w-[40rem] p-3 mx-auto mt-12 border-gray-700' id="printableArea">
                <div className='mx-auto border-2 border-dashed  border-red-700 bg-white text-red-700 overflow-auto'>
                    <div className="text-sm font-sans text-justify " >
                        <div className=' font-normal py-2 px-2' styles={{ backgroundImage: `url(${logo})` }}>
                            <img src={logo} alt="" className='h-16 w-16 mx-auto' />
                            <img src={logo} alt="" className=' w-72 h-72 absolute z-10 bg-transparent opacity-20 mt-[10rem] ml-40 rounded-full' />
                            <h1 className='font-bold text-sm text-center'> RANCHI MUNICIPAL CORPORATION </h1>
                            <h1 className='font-bold text-sm text-center'> Provisional Municipal Trade License </h1>
                            <div className='mx-auto text-center'>
                                <p className=' py-1 my-1'> (This Certificate relates to Section 155 (i) and 455 (i) Under Jharkhand Municipal Act of 2011) </p>
                            </div>
                            <div className='w-full px-1.5'>
                                {/* license details */}
                                <table className='table-auto mx-auto w-full  text-sm text-red-700'>
                                    <tbody>
                                        <tr>
                                            <td>Application No : <span className='font-semibold'>APN080121984 </span> </td>
                                            <td>Provisional License No : <span className='font-semibold'>RMC8092822121984 </span></td>
                                        </tr>
                                        <tr>
                                            <td> <span className='font-semibold'>  </span> </td>
                                            <td>Apply Date :<span className='font-semibold'>28-09-2022 </span> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Owner Details */}
                            <div>
                                <div className="grid grid-cols-3 ">
                                    <div className='col-span-2 px-1.5'>
                                        <p className='py-0.5'> Mr/Mrs :
                                            <span className='font-semibold'> Trismu Tirkey
                                            </span>
                                        </p>
                                        <p className='py-0.5'> in the Area :
                                            <span className='font-semibold'> Ranchi Municipal Corporation Municipal
                                            </span>
                                        </p>
                                        <p className='py-0.5'> Firm / organization name :
                                            <span className='font-semibold'> Demo Organisation Name
                                            </span>
                                        </p>
                                        <p className='py-0.5'> Ward No :
                                            <span className='font-semibold'> 1A
                                            </span>
                                        </p>
                                        <p className='py-0.5'> Business Address :
                                            <span className='font-semibold'> Business Address
                                            </span>
                                        </p>
                                        <p className='py-0.5'> For defined Fee :
                                            <span className='font-semibold'> 2500.00
                                            </span>
                                        </p>
                                        <p className='py-0.5'> Having receipt no :
                                            <span className='font-semibold'> TRANML2822886820220952
                                            </span>
                                        </p>
                                        <p className='py-0.5'> Establishment Date :
                                            <span className='font-semibold'> 28-09-2022
                                            </span>
                                        </p>
                                        <p className='py-0.5'> Valid Upto :
                                            <span className='font-semibold'> 28-09-2023
                                            </span>
                                        </p>
                                        <p className='py-0.5'> Subject to the following terms, license is granted.
                                        </p>
                                    </div>
                                    <div className='col-span-1 mx-auto mt-1'>
                                        <QrCode size="80" url="http://192.168.0.173:3000/trade-provisional-license" />
                                    </div>
                                </div>
                            </div>

                            {/* reciept footer */}
                            <div className=' mt-4 px-1  text-justify text-red-700'>
                                <p className='py-0.5'>1. Business will run according to licence issued. </p>
                                <p className='py-0.5'>2. Prior Permission from local body is necessary if business is changed.
                                </p>
                                <p className='py-0.5'>3. Information to local body is necessary for extension of area. </p>
                                <p className='py-0.5'>4. Prior information to local body regarding winding of business is necessary. </p>
                                <p className='py-0.5'>5. Application for renewal of license is necessary one month before expiry of license.
                                </p>
                                <p className='py-0.5'>6. In the case of delay penalty will be levied according to section 459 of Jharkhand Municipal Act 2011.
                                </p>
                                <p className='py-0.5'>7. Illegal Parking in front of firm in non-permissible</p>
                                <p className='py-0.5'>8. Sufficient number of containers for disposing-garbage and refuse shall be made available within.
                                </p>
                                <p className='py-0.5'>9. The premises and the licensee will co-operate with the ULB for disposal of such waste. </p>
                                <p className='py-0.5'>10. SWM Rules, 2016 and Plastic Waste Management Rules 2016 shall be adhered to in words as well as
                                    spirit. </p>
                                <p className='py-0.5'>11. This provisional license is valid for 20 days from the date of apply . In case of no-objection from <b> Ranchi
                                    Municipal Corporation</b>, The license shall be deemed approved. </p>
                                <p className='py-0.5'>12. The final license can be downloaded from www.ranchimunicipal.net </p>

                            </div>
                            <div className=' mt-4 mb-4 px-2  text-justify text-red-700'>
                                <p>For More Details Please Visit : For Details Please Visit : udhd.jharkhand.gov.in</p>
                                <p>OR Call us at 1800 8904115 or 0651-3500700</p>

                                <p>Note : This is a computer generated License. This License does not require a physical signature.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TradeProvisionalComponent