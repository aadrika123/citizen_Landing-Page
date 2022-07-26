//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 06 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - DocumetUploadForm.js
//    DESCRIPTION -DocumetUploadForm
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi';



function DocumentUploadForm(props) {

    const [isArmed, setIsArmed] = useState(0);
    const [isSpeciallyAbled, setIsSpeciallyAbled] = useState(0);

    console.log("Is Armed", isArmed, "Is Specially", isSpeciallyAbled)

    const handleFormBacktbtn = () => {
        props.fun1(1)
    }
    const saveFileSelected = (e) => {
        console.log("Updated", e.target.files[0]);
        // setFileSelected(e.target.files[0]);
    };
    //  {console.log("isArmed",props.formData.isArmed)}

    const docList =
        [
            { 'docid': 1, 'docName': 'Permanent Address Proof', 'docUrl': '/dd', 'docStatus': 'Not Uploaded' },
            { 'docid': 2, 'docName': 'Local Address Proof', 'docUrl': '/dd', 'docStatus': 'Uploaded' },
            // { 'docid': 3, 'docName': 'Specially Abled Proof', 'docUrl': '/dd', 'docStatus': 'Uploaded' },
            // { 'docid': 4, 'docName': 'Armed Force Document', 'docUrl': '/dd', 'docStatus': 'Not Uploaded' },
        ]

    isSpeciallyAbled == 1 ? docList[2] = { 'docid': 3, 'docName': 'Specially Abled Proof NEW', 'docUrl': '/dd', 'docStatus': 'Uploaded' } : delete docList[2]
    isArmed == 1 ? docList[3] = { 'docid': 4, 'docName': 'Armed Force Document', 'docUrl': '/dd', 'docStatus': 'Not Uploaded' } : delete docList[3]


    // props.formData && props.formData.isSpecially === "No" && delete docList[2]
    // props.formData && props.formData.isArmed === "No" && delete docList[3]

    // console.log("New Doc List", docList)

    const handleUploadDocNxtBtn = () => {
        props.fun2(1)
        props.updatedDocList(docList)
    }

    return (
        <>
            <div className='bg-white shadow-xl'>
                <div className=''>
                    <div className='p-3 ml-5'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-8'>
                                <p className='mt-2'><span className='font-semibold px-3'>1.</span> Do you belong to Armed Forces ? <small className=''>( If 'Yes' you will get 5 % rebate. )</small> </p>
                                <p className='mt-2'><span className='font-semibold px-3'>2.</span>Do you belong Specially Abled category ? <small className=''>( If 'Yes' you will get 5 % rebate. )</small> </p>
                            </div>
                            <div className='col-span-4'>
                                <div className='mt-2'>
                                    <select
                                        onChange={(e) => setIsArmed(e.target.value)}
                                        className=' outline-blue-600 border border-gray-400 w-32 h-7 pl-2 rounded-sm shadow-md'
                                    >
                                        <option defaultValue value="0">No</option>
                                        <option value="1">Yes</option>
                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <select
                                        onChange={(e) => setIsSpeciallyAbled(e.target.value)}
                                        className='outline-blue-600 border border-gray-400 w-32 h-7 pl-2 rounded-sm shadow-md'
                                    >
                                        <option defaultValue value="0">No</option>
                                        <option value="1">Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex' >

                        </div>
                    </div>
                </div>
                <div className="inline-block min-w-full overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead className='bg-sky-100'>
                            <tr className='font-semibold '>
                                <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                    #
                                </th>
                                <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                    Document Name
                                </th>
                                <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                    Document Type
                                </th>
                                <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                    View
                                </th>
                                <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase">
                                    Status
                                </th>
                                <th scope="col" className="px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                                    Upload
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                docList.map((e, i = 1) => (
                                    <tr>
                                        <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {i + 1}
                                            </p>
                                        </td>
                                        <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {e.docName}
                                            </p>
                                        </td>
                                        <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                <select className=' outline-blue-600 border border-gray-400'>
                                                    <option>Select Documet</option>
                                                    <option value="B">Aadhar</option>
                                                    <option value="C">PAN</option>
                                                    <option value="C">Rasan Card</option>
                                                    <option value="C">Kishan Credit Card</option>
                                                </select>
                                            </p>
                                        </td>
                                        <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm" > {/*onClick={() => props.openModal('http://192.168.0.16:822/RMCDMC/public/assets/img/pdf_logo.png')}*/}
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <a href="#" className="block relative">
                                                        <img alt="profil" src="http://192.168.0.16:822/RMCDMC/public/assets/img/pdf_logo.png" className="mx-auto object-cover rounded-none h-10 w-10 " />
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-center text-black font-semibold">
                                                {e.docStatus == "Not Uploaded" && <p className='bg-red-400 rounded-xl  py-0.5'>{e.docStatus}</p>}
                                                {e.docStatus == "Uploaded" && <p className='bg-green-400 rounded-xl py-0.5'>{e.docStatus}</p>}
                                            </p>
                                        </td>

                                        <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                            <span className="relative inline-block ">
                                                <span aria-hidden="true" className="absolute inset-0 "></span>
                                                <span className="relative ">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                        id="contained-button-file"
                                                        // onInput={()=>{saveFileSelected(); ()=>test("dipu");}}
                                                        onInput={saveFileSelected}
                                                    // onChange={() => importFile(e.docName)}
                                                    />
                                                    <label className='bg-blue-500 hover:bg-blue-600 hover:ring-1 hover:ring-blue-800 rounded-sm hover:rounded-md hover:shadow-2xl shadow-lg cursor-pointer flex pl-4 pr-5 py-2  text-white font-semibold' htmlFor="contained-button-file"><FiUpload size={16} className='mt-0 ml-0 mr-2 font-semibold' />Upload</label>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    <div className='grid grid-cols-2 my-5 mx-10'>
                        <div className='col-span-1'><button onClick={handleFormBacktbtn} className='bg-blue-600 hover:bg-blue-700 px-5 py-2 shadow-xl rounded-md text-white text-base'>Back</button></div>
                        <div className='col-span-1'><button onClick={handleUploadDocNxtBtn} className='bg-green-600 hover:bg-green-700 px-5 py-2 shadow-xl rounded-md text-white text-base float-right'>Save and Next</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocumentUploadForm

/*
Exported to -
1. Register.js
*/