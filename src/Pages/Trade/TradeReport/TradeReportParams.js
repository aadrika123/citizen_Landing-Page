import React, { useState } from 'react'
// import {inputContainerStyle} from '../tradeComponent/CommonStyles'
import axios from 'axios';
import TradeLoader from '../tradeComponent/TradeLoader';


function TradeReportParams() {
    const inputStyle = "w-full border rounded-md px-3 py-1.5  hover:bg-amber-50 cursor-pointer text-sm font-mono";
    const labelStyle = "text-xs m-1  font-semibold";
    const [reportType, setreportType] = useState(0);            // REPORT TYPE IF PRIMARY OR SECONDARY
    const [keys, setkeys] = useState(["key1", "key2", "key3"]); // SET ARRAY KEYS FOR RENDERING DYNAMIC TABLE COLUMNS
    const [reportData, setreportData] = useState([])
    const [loaderShow, setloaderShow] = useState('hidden');
    const [show, setshow] = useState(false);

    const primary = [
        { name: "COLLECTION SUMMARY", alias: "CLS" },
        { name: "WARD WISE COLLECTION", alias: "WWC" },
        { name: "COLLECTION REPORT", alias: "CLR" },
        { name: "WARD WISE ALL LICENSE REPORT", alias: "WLR" },
        { name: "TEAM SUMMARY", alias: "TMS" },
        { name: "VALID AND EXPIRED LICENSE", alias: "VEL" },
        { name: "USER WISE PENDING", alias: "UWP" }
    ];

    const secondary = [
        { name: "DAILY COLLECTION REGISTER", alias: "DCR" },
        { name: "DAILY COLLECTION CLEAR REGISTER", alias: "DCC" },
        { name: "DENIAL REPORT", alias: "DCR" }
    ];

    const VEL = [
        {
            application_no: "APN203546754",
            license_no: "RAN12053647",
            ward_no: "12A",
            firm_owner_name: "Mr Firm Owner",

        },
        {
            application_no: "APN203546896",
            license_no: "RAN12053458",
            ward_no: "15A",
            firm_owner_name: "Mr Secondary Owner",

        },
    ];


    const getArrayKeys = (arr) => {
        return Object.keys(arr[0]);
    }
    const handleChange = (e) => {
        // alert(e.target.value)
        let reportType = e.target.value;
        setreportType(reportType)
        console.log("primary", reportType);
    }

    const getReport = () => {
        setshow(true);
        axios.get('http://localhost:3333/vel')
            .then(function (response) {
                console.log("response ", response.data)
                setreportData(response.data);
                setTimeout(()=>{
                    setshow(false);
                },500)
                
               
            })
            .catch(function (error) {
                console.log(error);
                setshow(false);
            })
        setkeys(getArrayKeys(VEL));
    }

    const showLoader = (value) => {
        console.log('loader is called with value ', value)
        setshow(value);
    }

    return (
        <>
            <TradeLoader show={show} />
            <div className='w-full ' id="container">
                <div className='w-full h-12 bg-cyan-300 mt-2 mb-2 rounded-lg'>

                    <h1 className='uppercase font-bold text-gray-700 px-4 py-0.5 '>
                        <img src='https://cdn-icons-png.flaticon.com/512/3029/3029337.png' className='h-7  mt-2'></img>
                        <p className='ml-8 -mt-6'>Trade Report Params</p>
                    </h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-col-5 md:grid-cols-5 w-full gap-2' id="">
                    <div className='col-span-1 lg:col-span-2 md:col-span-2'>
                        <p htmlFor="reportType" className={`${labelStyle}`}>REPORT TYPE</p>
                        <select name="reportType" id="reportType" className={`${inputStyle}`} onChange={handleChange}>
                            <option value="0">PRIMARY</option>
                            <option value="1">SECONDARY</option>
                        </select>
                    </div>
                    <div className='col-span-1 lg:col-span-2 md:col-span-2'>
                        <p htmlFor="reportName" className={`${labelStyle}`}>REPORT NAME</p>
                        <select name="reportName" id="reportName" className={`${inputStyle}`} onChange={getReport}>
                            <option value="">SELECT</option>

                            {reportType == 0 && primary?.map((item, index) => (

                                <option value={item.alias} key={index}>{item.name} </option>
                            ))}
                            {reportType == 1 && secondary?.map((item, index) => (

                                <option value={item.alias} key={index}>{item.name} </option>
                            ))}

                        </select>
                    </div>
                    <div className="col-span-1 text-center">
                        <p> &emsp;</p>
                        <button className='px-4 py-1.5 w-72 lg:w-full bg-cyan-500 text-gray-50 text-sm font-mono focus:bg-cyan-800 hover:bg-cyan-600 rounded-lg'>SEARCH</button>
                    </div>
                </div>


                {/* react table area */}
                <div className='w-full  mt-8 rounded-lg border-gray-600 '>
                    <table className="w-full table-auto mx-auto font-mono  text-sm text-center ">
                        <thead className="bg-amber-200">
                            <tr className="capitalize">
                                <th>#</th>
                                {keys?.map((columns) => (
                                    <th>{columns.replace(/_/g, " ")}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>

                            {reportData?.map((item, index) => (
                                <tr className={`hover:bg-amber-50 ${(index + 1) % 2 == 0 ? 'bg-slate-200' : 'bg-slate-100'}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.application_no} </td>
                                    <td>{item.license_no} </td>
                                    <td>{item.ward_no} </td>
                                    <td>{item.firm_owner_name} </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TradeReportParams