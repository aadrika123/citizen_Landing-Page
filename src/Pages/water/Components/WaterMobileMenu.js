//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 30 Sep 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterMobileMenu.js
//    DESCRIPTION -
//////////////////////////////////////////////////////////////////////////////////////
import React from "react";

const WaterMobileMenu = () => {


    return (
        <>
            <div className=" relative">
                <div className="absolute w-1/3 h-screen bg-gray-300 z-50">
                    <div className="ml-2">
                        <p className="cursor-pointer">Dashboard</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WaterMobileMenu;

/*
Exported to -
1. WaterIndex.js
*/
