import { useState } from 'react';
import { Link } from 'react-router-dom';
import FindHoldingModal from './FindHoldingModal';




function ApplicationListCard() {
    let titleStyle = "text-xs p-1 text-gray-600";
    let inputStyle = "text-sm font-semibold text-gray-800";


    let ApplicationList = [1, 2, 3];


    const [findHolding, setfindHolding] = useState(false)

    const popUpFindHolding = () => {
       
        findHolding ? setfindHolding(false) : setfindHolding(true)
    }

    return (
        <>
            <div className='flex mb-8  px-4'>
                <div className='flex-1 '>
                    <h1 className='font-bold text-2xl text-gray-600 float-left'>MY PROPERTIES LIST</h1>
                </div>
                <div className=' '>

                    <button className='float-right bg-amber-200 py-1 px-2 text-sm font-semibold rounded-md shadow-lg' type='button' onClick={popUpFindHolding}>
                        MUTATION
                    </button>

                </div>
                <div className=' '>
                    <Link to='/safform/new'>
                        <button className='float-left bg-amber-200 py-1 px-2 ml-2 text-sm font-semibold rounded-md shadow-lg'>
                            APPLY NEW-ASSESSMENT
                        </button>
                    </Link>
                </div>
            </div>


            {/******************** POPUP MODAL FOR FINDING HOLDING FOR MUTATION ******************************/}
            <div>
                {findHolding ? <FindHoldingModal fun={setfindHolding} />: '' }
            </div>


            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 '>
                {/*  card listing */}
                {
                    ApplicationList.map((item) => (
                        <>
                            <div className='col-span-4 '>
                                <div className='border  w-80  p-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500 mx-auto'>
                                    <div className='flex px-4'>
                                        <div className='flex-1 '>
                                            <img src='https://cdn-icons-png.flaticon.com/512/609/609803.png' className='h-6' />
                                        </div>
                                        <div className='flex-1 '>
                                            <h1 className='font-bold text-md text-amber-400 float-right'>APPROVED</h1>
                                        </div>
                                    </div>

                                    <div className='bg-white rounded-lg p-1  mt-2'>
                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}> HOLDING NO :
                                                <span className={`${inputStyle}`}> 123456789012345678901234</span></div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}>SAF NO :
                                                <span className={`${inputStyle}`}> SAF34567898904567890</span></div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}>WARD NO :
                                                <span className={`${inputStyle}`}> 2</span></div>
                                        </div>
                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}>ASSESSMENT TYPE :
                                                <span className={`${inputStyle}`}> New-Assessment</span></div>
                                        </div>

                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle}`}>APPLY DATE :
                                                <span className={`${inputStyle}`}>12/10/2022</span></div>
                                        </div>

                                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                                            <div className={`${titleStyle} `}>PROPERTY TYPE:
                                                <span className={`${inputStyle} `}> Flats/unit in multi stored building</span></div>
                                        </div>



                                    </div>

                                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-6'>
                                        {/* <div className=''>
                                        <div className='bg-green-400 rounded-full text-center text-xs py-2'>
                                            APPROVED
                                        </div>
                                    </div> */}
                                        <div className=''>
                                            <div className='bg-sky-400 hover:bg-sky-600 rounded-md text-center text-xs py-2 shadow-lg'>
                                                PAYMENT
                                            </div>
                                        </div>
                                        <Link to='/viewApplicationDetail'>
                                            <div className=''>
                                                <div className='bg-teal-400 hover:bg-teal-600 rounded-md text-center text-xs py-2 shadow-lg'>

                                                    VIEW
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }


            </div>
        </>
    )
}

export default ApplicationListCard