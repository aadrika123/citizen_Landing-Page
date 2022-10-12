import React, { useEffect, useRef } from 'react'
import Modal from 'react-modal';
import { HiCurrencyRupee } from 'react-icons/hi';
import axios from 'axios';

function WaterPaymentModel(props) {

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
            right: 'auto',
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

    return (

        <>
            <div>
                {/* <button onClick={openModal}>Open Modal</button> */}
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className='bg-red-200 shadow-lg rounded-sm'>
                        <div className='bg-indigo-200 border-b-2 py-1 pl-3 font-semibold border-red-400 shadow-md flex'><HiCurrencyRupee size={20} className='mt-1 mr-1' /> Payment</div>
                        <div className='grid grid-cols-12 px-8 py-3 leading-8'>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-6 font-semibold'>
                                        <p>Name</p>
                                        <p>Ward No</p>
                                        <p>Owner Type</p>
                                        <p>Property Type</p>
                                        <p>Category Type</p>
                                    </div>
                                    <div className='col-span-6'>
                                        <p>Dipu Kumar Singh</p>
                                        <p>43 A</p>
                                        <p>Tenet</p>
                                        <p>Commercial</p>
                                        <p>II / III</p>
                                    </div>
                                </div>
                            </div>
                            <div className='md:col-span-6 col-span-12'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-6 font-semibold'>
                                        <p>Name</p>
                                        <p>Ward No</p>
                                    </div>
                                    <div className='col-span-6'>
                                        <p>Dipu Kumar Singh</p>
                                        <p>43 A</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-12 md:mt-4 mt-10'>
                                <div className='flex justify-center'>
                                    <button onClick={closeModal} className='mx-2 bg-red-600 hover:bg-red-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-lg  rounded-sm shadow-xl'>Back</button>
                                    <button onClick={patyNowBtn} className='mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-3 py-1 text-lg  rounded-sm shadow-xl'>Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </Modal>
            </div>
        </>
    )
}

export default WaterPaymentModel