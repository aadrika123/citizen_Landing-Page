//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SearchBox
//    DESCRIPTION - SearchBox Component is for selecting ulb 
//////////////////////////////////////////////////////////////////////////////////////


import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { contextVar } from '../../components/ContextVar'


function SearchBox() {

    // const [searchOpen, setsearchOpen] = useState('hidden')

    // const searchToggle = () => {
    //     searchOpen == 'hidden' ? setsearchOpen('') : setsearchOpen('hidden')
    // }
    const vals = useContext(contextVar)

    const [selectUlb, setselectUlb] = useState([])

    useEffect(() => {
        axios.get('http://192.168.0.166/api/get-all-ulb')
            .then(function (response) {
                // handle success
                console.log("ulbid ", response.data);
                setselectUlb(response.data)
            })

    }, [])

    const handleChange = (e) => {

        let ulbids = e.target.value;
        console.log('ulbids : ', ulbids);
        axios.get('http://localhost:3333/Select/' + ulbids)
            .then(function (response) {
                // handle success
                console.log("ulbidnews ", response.data.news);
                vals.ulbdatafun(response.data)
            })
        e.preventDefault()
    }

    const handleSearch = (e) =>{
        alert('you searched for',e.target.value)
    }

    return (
        <>
            <div>
                <div className=' relative inline-block text-left z-50 '>
                    {/* <button >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button> */}


                    <div class={` flex lg: w-80 h-8`} >
                        <select class="flex-shrink-0  inline-flex items-center py-1 px-0 text-sm font-medium  text-gray-600 bg-gray-100 border border-gray-300 rounded-l-full hover:bg-gray-100  dark:bg-gray-500 dark:hover:bg-gray-100  dark:text-white dark:border-gray-600 w-28" onChange={handleChange} >
                            <option >select ulb</option>
                            {selectUlb.map((items) => (
                                <option value={items.id}>{items.ulb_name}</option>
                            ))}
                        </select> 
                        <div class="relative w-full">
                            <input onBlur={()=>handleSearch} type="search" id="search-dropdown" class=" p-1.5 w-full  text-sm text-gray-900 bg-gray-50 rounded-r-full border-l-gray-50 border-l-1 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-600 dark:text-white h-8" placeholder="Search ..." required />
                            <button type="submit" class="absolute top-0 right-0 p-1.5 h-8 text-sm font-medium text-black bg-gray-50  rounded-r-full border border-bg-gray-50  hover:bg-gray-50  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-50  dark:hover:bg-gray-50  dark:focus:bg-gray-50 ">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBox