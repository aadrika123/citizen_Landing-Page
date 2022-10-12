import React from 'react'

function CitizenNotification() {
    return (
        <>
            <div class="p-4">
                <div class="bg-green-500 text-white  border-green-800   border-l-8  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-16 p-2">
                    <div class="flex items-center rounded-lg  cursor-pointer">
                        <div class="ml-3.5">
                            <span class="text-sm leading-none  text-white">you have successfully registered for saf </span>
                            {/* <p class="text-xs leading-4 pt-2 italic ">"This is the comment..."</p> */}

                        </div>
                    </div>
                </div>
                <div class="bg-red-400 text-white border-red-800   border-l-8  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-16 p-2 mt-1">
                    <div class="flex items-center rounded-lg  cursor-pointer">
                        <div class="ml-3.5">
                            <span class="text-sm leading-none  ">Water Tax due date 16/12/2022</span>
                            {/* <p class="text-xs leading-4 pt-2 italic ">"This is the comment..."</p> */}

                        </div>
                    </div>
                </div>
                <div class="bg-cyan-500 text-white  border-cyan-800   border-l-8  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-16 p-2 mt-1">
                    <div class="flex items-center rounded-lg  cursor-pointer">
                        <div class="ml-3.5">
                            <span class="text-sm leading-none  text-white">you have successfully registered for saf </span>
                            {/* <p class="text-xs leading-4 pt-2 italic ">"This is the comment..."</p> */}

                        </div>
                    </div>
                </div>
                <div class="bg-amber-500 text-white  border-amber-800   border-l-8  rounded-md shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear h-16 p-2 mt-1">
                    <div class="flex items-center rounded-lg  cursor-pointer">
                        <div class="ml-3.5">
                            <span class="text-sm leading-none  ">you have successfully registered for saf </span>
                            {/* <p class="text-xs leading-4 pt-2 italic ">"This is the comment..."</p> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CitizenNotification