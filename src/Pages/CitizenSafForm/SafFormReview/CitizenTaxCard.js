import React from 'react'
// import tax from '../../../../components/Media/tax.png'
// import year from '../../../../components/Media/year.png'


function CitizenTaxCard(props) {
    return (
        <>
                <div className="container h-auto w-auto">
                    <div className="flex items-center justify-center h-full">
                        <div className="bg-white shadow-2xl p-6 py-1 rounded-2xl border-2 border-green-400 relative">
                        {/* <div className='absolute top-0 left-0 w-8 h-8 bg-sky-200 rounded-full flex justify-center items-center border border-white shadow-lg'>
                            <img className='inline w-4' src={year} alt="tax" />
                            </div> */}
                            <div className="flex flex-col">
                                {/* <div>
                                    <h2 className="font-bold text-gray-600 text-center">  <img className='inline w-8' src={tax} alt="tax" /> Property tax</h2>
                                </div> */}
                                <div className="my-6">
                                    <div className="flex flex-row space-x-4 items-center">
                                        <div id="icon">
                                            {/* <img className='inline w-12' src={tax} alt="tax" /> */}
                                        </div>
                                        <div id="temp">
                                            <h4 className="text-4xl font-semibold">{props.tax}<span className='font-normal text-sm'>Rs</span></h4>
                                            <p className="text-xs text-gray-500">{props.time}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <div>
                            {/* <h2 className="text-gray-600 text-center text-sm"> 
                          Property tax</h2> */}
                        </div>
                </div>
        </>
    )
}

export default CitizenTaxCard