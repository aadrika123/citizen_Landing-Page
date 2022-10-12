import React, { useEffect, useRef } from 'react'
import Modal from 'react-modal';
import { HiCurrencyRupee } from 'react-icons/hi';
import axios from 'axios';
import { FiUpload } from 'react-icons/fi';


function WaterDocUploadModel(props) {

    const initialRender = useRef(true);

    useEffect(() => {

        if (initialRender.current) {
            initialRender.current = false;
        } else {
            setIsOpen(true)
        }
    }, [props.openModel])

    const bearer = window.localStorage.getItem('token')
    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }

    const patyNowBtn = () => {
        console.log("Paymetn Done Applicauiob ID", props.appIdModel)
        setIsOpen(false)


        axios.post(`http://192.168.0.166/api/water/water-payment`, {
            'applicationId': props.appIdModel
        }, header)
            .then(function (response) {
                console.log("Payment Done", response)
                props.fetchApplication()

            })
            .catch(function (error) {
                console.log("Payment Updating Failed", error);
            })

    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '30%',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0px'
        },
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    const saveFileSelected = (e) => {
        console.log("Updated", e.target.files[0]);
        // setFileSelected(e.target.files[0]);
    };

    const docList =
    [
        { 'docid': 1, 'docName': 'Permanent Address Proof', 'docUrl': '/dd', 'docStatus': 'Not Uploaded' },
        { 'docid': 2, 'docName': 'Local Address Proof', 'docUrl': '/dd', 'docStatus': 'Uploaded' },
        // { 'docid': 3, 'docName': 'Specially Abled Proof', 'docUrl': '/dd', 'docStatus': 'Uploaded' },
        // { 'docid': 4, 'docName': 'Armed Force Document', 'docUrl': '/dd', 'docStatus': 'Not Uploaded' },
    ]

    return (

        <>
            <div>
                <button onClick={openModal}>Upload Doc Modal</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >


                    <div className='bg-white shadow-xl'>

                        <div className="md:inline-block min-w-full overflow-hidden hidden">
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
                            <div className='my-5 flex justify-center'>
                                <div className='mx-2'><button onClick={closeModal} className='bg-blue-600 hover:bg-blue-700 px-5 py-2 shadow-xl rounded-md text-white text-base'>Back</button></div>
                                {/* <div className='mx-2'><button onClick={() => { props.back() }} className='bg-blue-600 hover:bg-blue-700 px-5 py-2 shadow-xl rounded-md text-white text-base'>Back</button></div> */}
                                <div className='mx-2'><button className='bg-green-600 hover:bg-green-700 px-5 py-2 shadow-xl rounded-md text-white text-base float-right'>Submit</button></div>
                            </div>
                        </div>
                    </div>



                </Modal>
            </div>
        </>
    )
}

export default WaterDocUploadModel

