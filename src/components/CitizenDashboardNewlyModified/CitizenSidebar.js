import React from 'react'

function CitizenSidebar() {
    return (
        <>
            <div className='bg-white rounded-md shadow-[#e6fbfa] shadow-inner p-8 h-screen'>
                <div className='flex p-2'>
                    <div className='flex-1 -ml-24  opacity-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right text-[#294f91]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                    </div>
                    <div className='flex-1 text-md  ml-1 float-left text-[#294f91] '>
                        <span>Home</span>
                    </div>
                </div>
                <div className='flex p-2'>
                    <div className='flex-1 -ml-24 text-[#294f91]  opacity-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right text-[#294f91]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>
                    <div className='flex-1 text-md  ml-1 float-left text-[#294f91] '>
                        <span>Dashboard</span>
                    </div>
                </div>
                <div className='flex p-2'>
                    <div className='flex-1 -ml-24 text-[#294f91]  opacity-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right text-[#294f91]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>

                    </div>
                    <div className='flex-1 text-md  ml-1 float-left text-[#294f91] '>
                        <span>FAQ?</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CitizenSidebar