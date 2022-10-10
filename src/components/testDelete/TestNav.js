import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
// import infoDesk from '../Images/infoDesk.png'

function DetailList1() {

    let rowTitleStyle = "lg:p-1 p-0 md:p-0 text-gray-500 text-sm"
    let rowInputStye = "lg:p-1 p-0 md:p-0 text-gray-600 text-sm font-semibold"
    return (
        <>

            <div class="container mx-auto">

                {/* Content */}
                <div >

                    <div className=''>
                        {/* <div className='flex border-b-2 border-b-blue-400 bg-[#828ed6] px-1 py-0  shadow-lg'>
                            <img className='mx-3 ' alt="" width="40vw" />
                            <h1 className='text-blue-400 text-lg  px-2 mt-1'>INFORMATION</h1>
                        </div> */}

                        <div className=' bg-blue-50 my-6 border-r-2 border-blue-700 rounded-md shadow-lg '>
                            <h1 className='text-md text-gray-800 font-semibold px-2 py-0 shadow-md shadow-blue-300'><span className='px-2 '><InventoryOutlinedIcon fontSize='medium' />
                            </span >Information<span className='text-red-600'>*</span></h1>

                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  px-10 py-1 mt-4 pb-1 rounded-md  '>


                                {/* <div className='grid grid-cols-2 md:w-[auto] lg:w-[30vw] sm:w-auto'> */}
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                    <div className={`${rowTitleStyle}`}>Application No:-  </div>
                                    <div  className={`${rowInputStye}`}>23424</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                    <div className={`${rowTitleStyle}`}>Application Type :- </div>
                                    <div  className={`${rowInputStye}`}>Deepak Ansari</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                    <div className={`${rowTitleStyle}`}>Firm Name:-</div>
                                    <div  className={`${rowInputStye}`}>Deepika Tondon</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                    <div className={`${rowTitleStyle}`}>Ownership Type :-</div>
                                    <div  className={`${rowInputStye}`}>10-10-1998</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                    <div className={`${rowTitleStyle}`}>Applied Date :-</div>
                                    <div  className={`${rowInputStye}`}>9087584578</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                    <div className={`${rowTitleStyle}`}>E-Mail :-</div>
                                    <div  className={`${rowInputStye}`}>
                                        deepakkumarkeshri123@gmail.com
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                    <div className={`${rowTitleStyle}`}>Armed Force     -</div>
                                    <div className={`${rowInputStye}`}>Yes</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                    <div className={`${rowTitleStyle}`}>Specially Abled -</div>
                                    <div  className={`${rowInputStye}`}>No</div>
                                </div>


                            </div>
                        </div>



                    </div>

                    {/* </div>
          </div> */}
                </div>
                 <div >

                    <div className=''>
                        {/* <div className='flex border-b-2 border-b-blue-400 bg-[#828ed6] px-1 py-0  shadow-lg'>
                            <img className='mx-3 ' alt="" width="40vw" />
                            <h1 className='text-blue-400 text-lg  px-2 mt-1'>INFORMATION</h1>
                        </div> */}

                        <div className=' bg-blue-50 my-6 border-r-2 border-blue-700 rounded-md shadow-lg '>
                            <h1 className='text-md text-gray-800 font-semibold px-2 py-0 shadow-md shadow-blue-300'><span className='px-2 '><InventoryOutlinedIcon fontSize='medium' />
                            </span >Information<span className='text-red-600'>*</span></h1>

                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  px-10 py-1 mt-4 pb-1 rounded-md  '>


                                {/* <div className='grid grid-cols-2 md:w-[auto] lg:w-[30vw] sm:w-auto'> */}
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                    <div className={`${rowTitleStyle}`}>Application No:-  </div>
                                    <div  className={`${rowInputStye}`}>23424</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                    <div className={`${rowTitleStyle}`}>Application Type :- </div>
                                    <div  className={`${rowInputStye}`}>Deepak Ansari</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                    <div className={`${rowTitleStyle}`}>Firm Name:-</div>
                                    <div  className={`${rowInputStye}`}>Deepika Tondon</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                    <div className={`${rowTitleStyle}`}>Ownership Type :-</div>
                                    <div  className={`${rowInputStye}`}>10-10-1998</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                    <div className={`${rowTitleStyle}`}>Applied Date :-</div>
                                    <div  className={`${rowInputStye}`}>9087584578</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                    <div className={`${rowTitleStyle}`}>E-Mail :-</div>
                                    <div  className={`${rowInputStye}`}>
                                        deepakkumarkeshri123@gmail.com
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                                    <div className={`${rowTitleStyle}`}>Armed Force     -</div>
                                    <div className={`${rowInputStye}`}>Yes</div>
                                </div>

                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                                    <div className={`${rowTitleStyle}`}>Specially Abled -</div>
                                    <div  className={`${rowInputStye}`}>No</div>
                                </div>


                            </div>
                        </div>



                    </div>

                    {/* </div>
          </div> */}
                </div>

            </div>
            {/* <div className='shadow-md border-blue-200 border-r-2 rounded-r-lg rounded-l-lg'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                    <div className='bg-blue-400 col-span-4 rounded-t-lg'>
                        <h1 className='text-md text-blue-800 font-semibold px-2 py-0 '><span className='px-2 '><InventoryOutlinedIcon fontSize='medium' />
                        </span >Information<span className='text-red-600'>*</span></h1>
                    </div>

                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-2'>
                    <div className={`${rowTitleStyle}`}>Application No:-</div>
                    <div className={`${rowInputStye}`}>demo name</div>
                    <div className={`${rowTitleStyle}`}>Application Type :-</div>
                    <div className={`${rowInputStye}`}> demo name</div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-2 -mt-4'>
                    <div className={`${rowTitleStyle}`}>Firm Name:-</div>
                    <div className={`${rowInputStye}`}>demo name</div>
                    <div className={`${rowTitleStyle}`}>Ownership Type :-</div>
                    <div className={`${rowInputStye}`}> demo name </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-2 -mt-4'>
                    <div className={`${rowTitleStyle}`}>Applied Date :-</div>
                    <div className={`${rowInputStye}`}>demo name</div>
                    <div className={`${rowTitleStyle}`}>Application No:-</div>
                    <div className={`${rowInputStye}`}> demo name</div>
                </div>
            </div> */}
        </>

    )
}

export default DetailList1