 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Footer
//    DESCRIPTION - Footer Component is for footer section
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { BsTelephone, BsFillPersonFill } from 'react-icons/bs'
import { HiOutlineMail, HiMail } from 'react-icons/hi'
import { MdModeComment } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'

function Footer() {
  return (
    <>
      {/* <footer class="text-gray-600 body-font  bg-white ">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
         
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-sm">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800 text-smtext-sm">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">JHARKHAND
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank"></a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer> */}

<footer class="text-gray-600 body-font  bg-slate-100 border pt-4 pb-4">

<div class="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

  {/* <div class="flex-grow flex justify-around flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"> */}
  <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid-rows-2 md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

    {/* Address */}
    {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4"> */}
    <div class="w-full px-8">
      <h2 class="title-font text-gray-900 tracking-widest text-md border-b-2 text-center font-bold mb-3">ADDRESS</h2>
      <p className='text-sm'>
        JUIDCO Building,
        Line Tank Road, Kutchery Chowk,
        Ranchi, Jharkhand, 834001.
      </p>
    </div>

    {/* Contact */}
    {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4"> */}
    <div class="w-full px-8">
      <h2 class="title-font text-gray-900 tracking-widest text-md font-bold mb-3 border-b-2 text-center">CONTACT US</h2>
      <nav class="list-none mb-10 text-sm text-center">
        <li>
          <a className='flex space-x-2 pl-6 pb-2' href="tel:+">
            <span><BsTelephone fontSize='medium' /></span>
            <span>0651 222 5878</span>
          </a>
        </li>
        <li>
          <a className='flex space-x-2 pl-6' href="mailto:">
            <span><HiOutlineMail fontSize='medium' /></span>
            <span>juidcolimited@gmail.com</span>
          </a>
        </li>
      </nav>
    </div>

    {/* Suggestion */}
    {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4 row-span-2"> */}
    <div class="w-full px-8 row-span-2 mb-4">
      <h2 class="title-font text-gray-900 tracking-widest text-md font-bold mb-3 border-b-2 text-center">SUGGESTION</h2>
      <form>
        <div className='flex space-x-2 '>
          <label htmlFor="" className='text-2xl'><BsFillPersonFill fontSize='' /></label>
          <input type="text" name="name" id="" placeholder='Your Name' className='focus:outline-none rounded-md shadow-md px-4 text-sm py-1.5 mb-2 w-full' />
        </div>
        <div className='flex space-x-2 '>
          <label htmlFor="" className='text-2xl'><HiMail /></label>
          <input type="email" name="email" id="" placeholder='Your Email' className='focus:outline-none rounded-md shadow-md px-4 text-sm py-1.5 mb-2 w-full' />
        </div>
        <div className='flex space-x-2 '>
          <label htmlFor="" className='text-2xl'><MdModeComment /></label>
          <textarea name="message" id="" cols="30" rows="4" placeholder=' Your Message' className='focus:outline-none rounded-md shadow-md px-4 text-sm py-1.5 mb-2 w-full' />
        </div>
        <div className='ml-8'>
          <button type="submit" className='text-sm bg-[#58D0E7] rounded-md px-4 py-1.5 text-white text-center hover:bg-[#50bed4] shadow-md flex space-x-2 justify-center w-full'> <span className='text-xl'><FaTelegramPlane /></span><span>Send Message</span></button>
        </div>
      </form>
    </div>

    <div class="w-full px-8 text-sm flex flex-col space-y-2 mb-4">
      <span>
        All Rights Reserved by JAP-IT,
        Government of Jharkhand, India.</span>
      <span>

        GIGW Compliance
      </span>
    </div>

    <div class="w-full px-8 text-sm flex flex-col space-y-2 mb-4">
      <span>Version 2.0</span>
      <span>Developed & Maintained by Aadrika</span>
    </div>

  </div>

</div>
</footer>
    </>
  )
}

export default Footer