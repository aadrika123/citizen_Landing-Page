

import React, { useRef } from 'react';
import logo from '../TradeAssests/logo.png'
import QrCode from './QrCode';


import ReactToPrint from 'react-to-print-advanced';
import PropTypes from "prop-types";

class SlipBody extends React.Component {
    render() {

        const { paymentRecipt, applicationNo, applyLicenseId } = this.props?.successData;

        //transaction data
        const { transaction_no, payment_mode, paid_amount, transaction_date, penalty, rate, delay_fee, denial_fee, paid_amount_in_words } = this.props?.paymentData.transaction;

        //application data
        const { application_no, firm_name, address, mobile, owner_name, provisional_license_no, ward_no } = this.props?.paymentData.application;

        //delay penalty data
        const { amount, head_name } = this.props?.paymentData.penalty[0];

        console.log("===successData=====", this.props?.paymentData.application);
        return (
            <div className="py-4 w-[92%] mx-auto text-xs font-sans text-justify" id="printableArea">
                <div className='border-2 border-gray-800  font-normal py-2 px-2' styles={{ backgroundImage: `url(${logo})` }}>
                    <img src={logo} alt="" className='h-16 w-16 mx-auto' />
                    <img src={logo} alt="" className=' w-72 h-72 absolute z-10 bg-transparent opacity-20 mt-[10rem] ml-40 rounded-full' />
                    <h1 className='font-bold text-xl text-center'> RANCHI MUNICIPAL CORPORATION </h1>
                    <div className=' w-64 mx-auto mt-2 text-center'>
                        <h1 className='border-2 border-gray-800 font-bold  py-1 my-1'> MUNICIPAL LICENSE PAYMENT RECEIPT </h1>
                    </div>
                    <div className='w-full px-1  '>
                        {/* license details */}
                        <table className='table-auto mx-auto w-full'>
                            <tr>
                                <td>Receipt No :<span className='font-semibold'> {transaction_no}</span> </td>
                                <td>Date :<span className='font-semibold'>  {transaction_date}</span></td>
                            </tr>
                            <tr>
                                <td>Department/Section :<span className='font-semibold'>  Municipal License Section</span> </td>
                                <td>Ward No No :<span className='font-semibold'> {ward_no}</span> </td>
                            </tr>
                            <tr>
                                <td>Account Description:<span className='font-semibold'>Municipal License Fee Charges</span> </td>
                                <td> Application No:<span className='font-semibold'> {applicationNo}</span> </td>
                            </tr>
                        </table>
                        {/* Owner Details */}
                        <table className='table-auto mx-auto w-full mt-4 capitalize'>
                            <tr>
                                <td>Firm Name :<span className='font-semibold'> {firm_name}</span> </td>
                            </tr>
                            <tr>
                                <td>Received From Shri.Smt :<span className='font-semibold'> {owner_name}</span> </td>
                            </tr>
                            {/* <tr>
                                <td>Account Description : <span className='font-semibold'> NEQUE SEQU </span></td>
                            </tr> */}
                            <tr>
                                <td>Address : <span className='font-semibold'> {address}</span></td>
                            </tr>
                            <tr>
                                <td>A Sum of Rs :<span className='font-semibold'> {paid_amount} </span> </td>
                            </tr>
                            <tr>
                                <td className='w-80 '>(in words)
                                    <span className='font-semibold border-b-2 border-gray-600 border-dashed'> {paid_amount_in_words}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>towards : <span className='font-semibold'> Municipal License Fee vide {payment_mode}</span> </td>
                            </tr>
                        </table>
                        {/* seperator */}
                        <h1 className='font-bold  mt-4'> N.B.Online Payment/Cheque/Draft/ Bankers Cheque are Subject to realisation </h1>
                        <h1 className='font-bold mt-4  py-1'> MUNICIPAL LICENSE FEE DETAILS </h1>
                        {/* payment details */}
                        <table className='table-auto mx-auto w-[92%] border  border-gray-800'>
                            <tr className='border-b border-gray-800 py-1'>
                                <th className='text-left'> Description </th>
                                <th className='text-left'> Total Amount </th>
                            </tr>
                            <tr className='border-b border-gray-800 py-1'>
                                <td>Municipal License Fee </td>
                                <td>{rate}</td>

                            </tr>
                            <tr className='border-b border-gray-800 py-1'>
                                <td>Delay Fee </td>
                                <td>{delay_fee}</td>

                            </tr>
                            <tr className='border-b border-gray-800 py-1'>
                                <td>Denial Fee </td>
                                <td>{denial_fee}</td>

                            </tr>
                            <tr className='border-b border-gray-800 py-1'>
                                <td>Total</td>
                                <td>{paid_amount}</td>

                            </tr>


                        </table>
                    </div>

                    {/* reciept footer */}
                    <div className=' mt-4 px-2  text-justify'>
                        <div className='text-center'>
                            <QrCode size="60" url="http://smartulb.co.in/"/>
                        </div>
                        <table>
                            <tr className=' py-1 font-mono'>
                                <td>
                                    <p>For Details Please Visit : www.ranchimunicipal.com</p>
                                    <p>Call us at 18008904115 OR 0651-3500700</p>
                                </td>
                                <td>
                                    <p>In Association with</p>
                                    <p>Sri Publication & Stationers Pvt. Ltd.</p>
                                </td>
                            </tr>
                        </table>
                        <div className='mt-8 mb-4 text-center'>
                            <p>**This is a computer-generated receipt and it does not require a signature.** </p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default SlipBody