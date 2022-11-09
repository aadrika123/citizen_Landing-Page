import React from 'react'
// import '../../../Components/Common/successcheck.css'
import PaymentReceipt from './ViewPaymentReceipt';

function SuccessScreen(props) {

    const { colorCode, currentStep, currentStepFun, collectFormDataFun, firmStepFun, firmStep, colorCodeFun } = props.values;
    const applicationNo = 'APN' + Math.floor(Math.random() * 100000000) + 1;
    //random number
    const { successData, successFun } = props.successData;


    const handleCopy = () => {
        navigator.clipboard.writeText(applicationNo);
        document.getElementById('copyapn').innerHTML = "&#10004;";
        document.getElementById('copyapn').style.backgroundColor = "green";
        document.getElementById('copyapn').style.color = "white";
    }

    console.log('firm step is', firmStep);
    
    return (
        <>
            <div className={`absolute w-full}`} >

                <div className='flex '>
                    <div className='w-full flex-1 mb-2'>
                        <div className="bg-white ml-24  h-24  w-40 ">
                            <div className="success-checkmark">
                                <div className="check-icon">
                                    <span className="icon-line line-tip"></span>
                                    <span className="icon-line line-long"></span>
                                    <div className="icon-circle"></div>
                                    <div className="icon-fix"></div>
                                </div>
                            </div>
                        </div>

                        <h1 className='text-green-600 text-lg ml-24'>Application Submitted Successfully...</h1>

                    </div>

                    <div className='w-full pt-10 px-4 flex-1 mb-2'>
                        <PaymentReceipt successData={successData?.data} paymentData={props.paymentData} />
                        <button className=' bg-teal-500 hover:bg-teal-600 text-white w-full py-1  rounded-xl '>
                            View Application
                        </button>
                        {/* <h1 className='text-green-600 clear-both text-lg'>Application Submitted Successfully</h1> */}

                    </div>
                </div>

                <h1 className='text-teal-800  text-xl font-bold px-4 ml-16 mt-8'> Your Application No :
                    <small className=' underline px-3 '> {successData?.message}</small>
                    <small className='px-4 '><button id='copyapn' onClick={handleCopy} className=' bg-gray-300 px-4 py-1 text-gray-600 text-xs focus:text-white  rounded'> COPY TO CLIPBOARD</button></small>
                </h1>
                {
                    /* <button className='bg-teal-500 px-3 py-2' onClick={handleCopywindow}>
                        receipt window
                    </button> */
                }
            </div>

        </>
    )
}

export default SuccessScreen