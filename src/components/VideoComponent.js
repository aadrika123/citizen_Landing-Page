import React from 'react'
import welcomeVid from '../assets/welcomevid.mp4'

function VideoComponent() {
    return (
        <>
            <div className='w-100%'>
                {/* controls */}
                <video className='w-full h-3/4' autoplay="true" loop  muted>
                    <source src={welcomeVid} type="video/mp4"  />
                </video>
            </div>
        </>
    )
}

export default VideoComponent