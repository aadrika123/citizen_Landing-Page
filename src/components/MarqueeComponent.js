import React from 'react'
import Marquee from "react-fast-marquee";

function MarqueeComponent() {
    return (
        <>
            <div className='h-9 w-9/12 mx-auto  rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400'>
                <Marquee>
                    NEW :- JUIDCO NEW SOFTWARE
                </Marquee>
            </div>
        </>
    )
}

export default MarqueeComponent