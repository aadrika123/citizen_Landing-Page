//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - LandingMainPage
//    DESCRIPTION - LandingMainPage  is a parent component of all Landing component
//////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from 'react'
import SectionOurDomain from '../Pages/Landing/SectionOurDomain'
import SliderImage from '../Pages/Landing/SliderImage'
import TopNavbar from '../Pages/Landing/TopNavbar'
import Footer from './Footer'
import LandingNav from '../Pages/Landing/LandingNav'
import axios from 'axios'
import AboutJharkhand from '../Pages/Landing/AboutJharkhand'
import LeadersGallery from '../Pages/Landing/LeadersGallery'
import MarqueeComponent from './MarqueeComponent'
import ImageGallery from '../Pages/Landing/ImageGallery'
import Logo from './Logo'
import VideoComponent from './VideoComponent'
import TestNav from './testDelete/TestNav'
import SmallScreenMenu from '../Pages/Landing/SmallScreenMenu'
import SectionService from '../Pages/LandingPageModified/SectionService'
import SectionAboutJharkhand from '../Pages/LandingPageModified/SectionAboutJharkhand'
import Gallery from '../Pages/LandingPageModified/Gallery'

function LandingMainPage() {

    // const [newsList, setNewsList] = useState([])

    // const getUlbData = (ulbId) => {
    //     axios.get(`http://localhost:3333/news?ulbid=${ulbId}`)
    //     .then(function (response) {
    //         console.log('news data via select ', response);
    //         setNewsList(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })

    // }
    return (
        <>
            <div>

                <div className='fixed w-full z-50'><LandingNav /></div>
                {/* <div className='fixed z-50 ml-6'><Logo /></div> */}
                <VideoComponent />
                {/* <div className=''><SliderImage /></div> */}
                <div><SmallScreenMenu/></div>
                {/* <div className=''><MarqueeComponent /></div> */}
                {/* <div><SectionOurDomain /></div>
                 */}
                           <SectionService/>
                           <SectionAboutJharkhand/>
                           {/* <Gallery/> */}
                {/* <div> <AboutJharkhand /></div> */}

                <div><LeadersGallery /></div>
                <div><Footer /> </div>
            </div>
        </>
    )
}

export default LandingMainPage