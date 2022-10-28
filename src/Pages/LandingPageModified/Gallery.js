//////////////////////////////////////////////////////////////////////////////////////
//    Author - R U Bharti
//    Version - 1.0
//    Date - 27 Oct 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Gallery 
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

const Gallery = () => {

    let counter = [1, 2, 3, 4, 5, 6,7,8];
    let i;
    return (
        <>

            {/* Container */}
            <div className="flex flex-wrap flex-col justify-center items-center p-4 ">

                {/* Content */}
                <div className=' text-center mb-4 w-max flex flex-col '>

                    <span className='text-center font-bold font-sans text-3xl text-[#37517e]'> GALLERY </span>


                </div>

                {/* Images */}
                <div className=' flex flex-wrap justify-center items-center space-x-4 space-y-4'>
                    {counter.map((item) => (
                        <div className=' w-[17rem] rounded-md hover:shadow-lg  hover:scale-105 transition-all duration-300 bg-violet-400 ml-3 mt-3'>
                            <img src='https://tse2.mm.bing.net/th?id=OIP.Mbdeqhn9kxn0vtle5s6QzAHaEG&pid=Api&P=0' alt="" srcset="" className='h-[13rem] w-[17rem] rounded-md' />
                        </div>
                    ))

                    }





                </div>

            </div>

        </>
    )
}

export default Gallery

/////////////////////////////////////
// Export to: LandingMainPage