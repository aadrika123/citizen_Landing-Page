//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AboutJharkhand
//    DESCRIPTION - AboutJharkhand  is section  containing brief about jharkhand in landingPage


////////////////////////////TO BE DELETED//////////////////////////////////////////////////////////

import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Link, useNavigate } from "react-router-dom";
import JuidcoContentHead from './JuidcoContentHead';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function AboutJharkhand() {

    return (
        <>
      
            <div className='bg-[#f3f5fa] '>
                <div className='container  mx-auto'>
                <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 '>
                    <div class=" ">
                        <JuidcoContentHead />
                    </div>
                </div><br />
              
               </div>
            </div>
        </>
    )
}

export default AboutJharkhand