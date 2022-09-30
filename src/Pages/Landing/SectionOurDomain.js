
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SectionOurDomain
//    DESCRIPTION - SectionOurDomain Component is section landingPage
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'

import KnowledageTab from './KnowledageTab'
import OurDomainContent2 from './OurDomainContent2'
import SliderCard from './SliderCard'
import ModuleImgSlider from '../Landing/ModuleImgSlider'

function SectionOurDomain(props) {

    let newsData = props.newsData
    console.log("news", props.newsData)

    return (
        <>

            {/* <div class=" w-full mx-auto bg-white border shadow-md p-4 mt-3 overflow-y-scroll mb-28 ">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    <div className=''>
                        <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-3">
                        <div className=''>
                            <img src='https://cdn-icons-png.flaticon.com/512/1256/1256276.png?w=740&t=st=1664455364~exp=1664455964~hmac=e718e3b23f9c52dc996f4bc11d53ea50b420ae924ac3c26075d9391ed07bacac' className='h-14 w-14 mx-auto p-1 border shadow-lg rounded-lg'/>
                        </div>
                        <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/1255/1255711.png?w=740&t=st=1664455415~exp=1664456015~hmac=91dcdef5332be61c327d8ddc800c32f2a1f44f53ffc785fdf2ced9f9c5eca87f' className='h-14 w-14 mx-auto p-1 border shadow-lg rounded-lg' />
                        </div>
                        <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/1191/1191643.png?w=740&t=st=1664455734~exp=1664456334~hmac=18d39167c71310448d83350e8a350b7ba0b10aff368ab0b40d14c5dc29f1b46f' className='h-14 w-14 mx-auto p-1 border shadow-lg rounded-lg'/>
                        </div>
                        <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/1073/1073159.png?w=740&t=st=1664455570~exp=1664456170~hmac=70d855c083007d3f70583834f0fc4172f0465a7182849573032f8e0847d06d96' className='h-14 w-14 mx-auto p-1 border shadow-lg rounded-lg '/>
                        </div>
                        <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/128/864/864034.png?uid=R75839436&ga=GA1.2.679888497.1658218961' className='h-14 w-14 mx-auto p-1 border shadow-lg rounded-lg' />
                        </div>
                        <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/1256/1256486.png?w=740&t=st=1664455859~exp=1664456459~hmac=cc4d84bf9496901ad94aa7a1699410e420de70d51feef84093a8ca6d30ac1e6d' className='h-14 w-14 mx-auto p-1  border shadow-lg rounded-lg'/> 
                        </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-3 p-1 ">
                        <div className=' border shadow-lg rounded-lg'><ModuleImgSlider /></div>
                        
                        </div>
                    </div>
                    <div className='bg-red-700'>rtfjuhiko</div>
                    <div className='bg-red-500'>rtfjuhiko</div>
                </div>
            </div> */}

            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 container mx-auto py-4">
                <div className=' mx-auto  border  p-2 shadow-md hover:scale-105 transition-all transform duration-500'>
                    <KnowledageTab newsData={props.newsData} />
                </div>
                <div className=' mx-auto  border  p-2 shadow-md hover:scale-105 transition-all transform duration-500'>
                    <OurDomainContent2 />
                </div>
                <div className='mx-auto  border  p-2 shadow-md hover:scale-105 transition-all transform duration-500' >
                    <SliderCard />
                </div>
            </div>

        </>
    )
}

export default SectionOurDomain