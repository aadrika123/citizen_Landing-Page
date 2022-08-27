import React, { useState, useEffect } from 'react'

function NewStepper({ colorCode, currentStep }) {

    const [stepOneDone, setStepOneDone] = useState(0)
    const [stepTwoDone, setStepTwoDone] = useState(0)
    const [stepThreeDone, setStepThreeDone] = useState(0)
    const [stepFourDone, setStepFourDone] = useState(0)
    const [lineOne, setLineOne] = useState("border-gray-300")
    const [lineTwo, setLineTwo] = useState("border-gray-300")
    const [lineThree, setLineThree] = useState("border-gray-300")
    const [currentStepColor, setCurrentStepColor] = useState()
    const [currentPage1, setCurrentPage1] = useState("font-medium")
    const [currentPage2, setCurrentPage2] = useState("font-medium")
    const [currentPage3, setCurrentPage3] = useState("font-medium")
    const [currentPage4, setCurrentPage4] = useState("font-medium")
    const [currentPage1Border, setCurrentPage1Border] = useState("")
    const [currentPage2Border, setCurrentPage2Border] = useState("")
    const [currentPage3Border, setCurrentPage3Border] = useState("")
    const [currentPage4Border, setCurrentPage4Border] = useState("")


    console.log("Current Page",currentStep)

    useEffect(() => {

        if(currentStep == 1){
            setCurrentPage1("font-bold bg-white border border-red-200 rounded")
            setCurrentPage1Border("border-dotted")
            setCurrentPage2("font-medium")
            setCurrentPage3("font-medium")
            setCurrentPage4("font-medium")
        }if(currentStep == 2){
            setCurrentPage2("font-bold bg-white border border-red-200 rounded")
            setCurrentPage2Border("border-dotted")
            setCurrentPage1("font-medium")
            setCurrentPage3("font-medium")
            setCurrentPage4("font-medium")
        }if(currentStep == 3){
            setCurrentPage3("font-bold bg-white border border-red-200 rounded")
            setCurrentPage3Border("border-dotted")

            setCurrentPage1("font-medium")
            setCurrentPage2("font-medium")
            setCurrentPage4("font-medium")
        }if(currentStep == 4){
            setCurrentPage4("font-bold bg-white border border-red-200 rounded")
            setCurrentPage4Border("border-dotted")

            setCurrentPage1("font-medium")
            setCurrentPage2("font-medium")
            setCurrentPage3("font-medium")
        }

    }, [currentStep])


    const colorValue = colorCode
    useEffect(() => {

        if (colorValue == 1) {
            setStepOneDone("text-white bg-teal-600");
            setLineOne("border-teal-600")
        } else if (colorValue == 2) {
            setStepOneDone("text-white bg-teal-600");
            setStepTwoDone("text-white bg-teal-600");
            setLineOne("border-teal-600")
            setLineTwo("border-teal-600")
        } else if (colorValue == 3) {
            setStepOneDone("text-white bg-teal-600");
            setStepTwoDone("text-white bg-teal-600");
            setStepThreeDone("text-white bg-teal-600");
            setLineOne("border-teal-600")
            setLineTwo("border-teal-600")
            setLineThree("border-teal-600")
        } else if (colorValue == 4) {
            setStepOneDone("text-white bg-teal-600");
            setStepTwoDone("text-white bg-teal-600");
            setStepThreeDone("text-white bg-teal-600");
            setStepFourDone("text-white bg-teal-600");
            setLineOne("border-teal-600")
            setLineTwo("border-teal-600")
            setLineThree("border-teal-600")
        }

    }, [colorValue])

    return (
        <>
            <div class="mx-12 pt-2 pb-8">
                <div class="flex items-center">
                    <div class="flex items-center text-gray-500 relative">
                        <div class={`${stepOneDone} ${currentPage1Border} rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className={` ${currentPage1} absolute top-0 -ml-10 text-center mt-14 w-32 text-xs uppercase text-teal-600`}>Personal Details</div>
                    </div>
                    <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${lineOne} `}></div>
                    <div class="flex items-center text-gray-500 relative">
                        <div class={` ${stepTwoDone} ${currentPage2Border} rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <line x1="20" y1="8" x2="20" y2="14"></line>
                                <line x1="23" y1="11" x2="17" y2="11"></line>
                            </svg>
                        </div>
                        <div className={` ${currentPage2} absolute top-0 -ml-10 text-center mt-14 w-32 text-xs uppercase text-teal-600`}>Document Upload</div>
                    </div>
                    <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${lineTwo} `}></div>
                    <div class="flex items-center text-gray-500 relative">
                        <div class={` ${stepThreeDone} ${currentPage3Border} rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div className={` ${currentPage3} absolute top-0 -ml-10 text-center mt-14 w-32 text-xs uppercase text-teal-600`}>Verify</div>
                    </div>
                    <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${lineThree} `}></div>
                    <div class="flex items-center text-gray-500 relative">
                        <div class={` ${stepFourDone} ${currentPage4Border} rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database ">
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                            </svg>
                        </div>
                        <div className={` ${currentPage4} absolute top-0 -ml-10 text-center mt-14 w-32 text-xs uppercase text-teal-600`}>Complted</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewStepper