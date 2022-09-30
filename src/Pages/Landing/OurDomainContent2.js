//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - OurDomainContent2
//    DESCRIPTION - OurDomainContent2 Component containing domains in landingPage
//////////////////////////////////////////////////////////////////////////////////////


import { useState } from 'react'
import prop_img from './prop.jpg'
import bm from './bm.jpg'
import ModuleImgSlider from './ModuleImgSlider'

function OurDomainContent2() {
    const [contentStyle, setcontentStyle] = useState('-left-40')
    return (
        <>

            {/* <div className="grid grid-cols-12">
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/real-estate-searching_52683-46407.jpg?w=740&t=st=1659594868~exp=1659595468~hmac=93d688f9e341442af8050c8b1adf543da1d76b1df5a277be34dd28bc3fd39b28' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>

                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Property</h1>
                        </div>


                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200 " onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/successful-partnership-negotiation-partners-handshaking_335657-2453.jpg?w=740&t=st=1659593504~exp=1659594104~hmac=6242bdcc25cd27e6b5368c09ea84aee84da3653dc98d1cf4510569b9fc971eb6' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Trade</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/bloggers-advertising-referrals-young-people-with-gadgets-loudspeakers-announcing-news-attracting-target-audience-vector-illustration-marketing-promotion-communication_74855-8244.jpg?t=st=1659594287~exp=1659594887~hmac=285b3c4de1ec111a568628448d0959932602161df6bf010cfc3aad47c6d1f269' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-10'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200 border-t border-white">
                            <h1 className="title-font text-sm font-medium text-gray-800">Advertisement</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/building-concept-illustration_114360-4469.jpg?w=740&t=st=1659600603~exp=1659601203~hmac=73157c68dcc27ee3db479dcbe336ccb090081c43f9f6d0dabb4122c730c323d2' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Building Plans & Approval</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/vector-clean-shiny-blue-drop-with-circles-water-close-up-front-view_1284-48012.jpg?w=740&t=st=1659594024~exp=1659594624~hmac=c260f1254b7d3695a9a0b4ed4ff4c7d0c96a497d9c97c37690617008ff35dcde' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Water</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-2 col-span-4 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/trash-waste-concept-with-food-glass-paper-realistic_1284-33139.jpg?w=740&t=st=1659358143~exp=1659358743~hmac=5785d86f7fef6d711f0f05f10ba7542bfdf377f613982f971e62285a0bac9a51' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-slate-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Solid Waste & Management</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>

                    </div>
                </div>
                <div className="p-2 col-span-12 h-40">

                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg relative cursor-pointer hover:scale-110 transition-all duration-200" onMouseEnter={() => setcontentStyle('left-10')} onMouseLeave={() => setcontentStyle('-left-40')}>
                        <img className='absolute w-full h-full top-0 left-0' src='https://img.freepik.com/free-vector/vintage-achievement-certificate-template-vector-professional-design-beige_53876-157582.jpg?w=740&t=st=1659594660~exp=1659595260~hmac=fda76c07c9c807c69ab10368ab5d76205a7ff780e84cbff975ebb2431f62dece' alt="" />
                        <div className='w-full h-full bg-gray-900 absolute top-0 left-0 opacity-0'></div>
                        <div className="w-full py-1 text-center z-50 absolute bottom-0 left-50 bg-indigo-200">
                            <h1 className="title-font text-sm font-medium text-gray-800">Birth & Death Certificate</h1>
                            <div className="flex items-center flex-wrap ">
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
            <div className='mt-2'>
                <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6  divide-x divide-sky-200 border-2 border-gray-200 bg-white">
                    <div className='' >
                        <img src='https://cdn-icons-png.flaticon.com/512/1256/1256276.png?w=740&t=st=1664455364~exp=1664455964~hmac=e718e3b23f9c52dc996f4bc11d53ea50b420ae924ac3c26075d9391ed07bacac' className='h-12 w-12 mx-auto p-1   rounded-lg text-gray-400 s' title='property' />
                        {/* <p className='text-xs text-center text-gray-500'>Property</p> */}
                    </div>
                    <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/1255/1255711.png?w=740&t=st=1664455415~exp=1664456015~hmac=91dcdef5332be61c327d8ddc800c32f2a1f44f53ffc785fdf2ced9f9c5eca87f' className='h-12 w-12 mx-auto p-1 rounded-lg' title='water' />
                        {/* <p className='text-xs text-center text-gray-500'>Water</p> */}
                    </div>
                    <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/1191/1191643.png?w=740&t=st=1664455734~exp=1664456334~hmac=18d39167c71310448d83350e8a350b7ba0b10aff368ab0b40d14c5dc29f1b46f' className='h-12 w-12 mx-auto p-1  rounded-lg' title='Trade' />
                        {/* <p className='text-xs text-center text-gray-500'>Trade</p> */}
                    </div>
                    <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/1073/1073159.png?w=740&t=st=1664455570~exp=1664456170~hmac=70d855c083007d3f70583834f0fc4172f0465a7182849573032f8e0847d06d96' className='h-12 w-12 mx-auto p-1 rounded-lg ' title='Advertisement' />
                        {/* <p className='text-xs text-center text-gray-500'>Advertisement</p> */}
                    </div>
                    <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/128/864/864034.png?uid=R75839436&ga=GA1.2.679888497.1658218961' className='h-12 w-12 mx-auto p-1   rounded-lg' title='Building Plans' />
                        {/* <p className='text-xs text-center text-gray-500'>Building Plans</p> */}
                    </div>
                    <div className=''>
                        <img src='https://cdn-icons-png.flaticon.com/512/1256/1256486.png?w=740&t=st=1664455859~exp=1664456459~hmac=cc4d84bf9496901ad94aa7a1699410e420de70d51feef84093a8ca6d30ac1e6d' className='h-12 w-12 mx-auto p-1 rounded-lg' title='Birth&Death Certificate' />
                        {/* <p className='text-xs text-center text-gray-500'>Birth&Death Certificate</p> */}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1  p-2 ">
                    <div className='  rounded-lg'><ModuleImgSlider /></div>
                </div>
            </div>

        </>
    )
}

export default OurDomainContent2