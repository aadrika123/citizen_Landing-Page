//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 05 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Registration Sidebar
//    DESCRIPTION - Citizen Registration Form Sidebar
//////////////////////////////////////////////////////////////////////////////////////
import { data } from "autoprefixer";
import React from "react";
import { FaQuestion } from 'react-icons/fa';

function RegistrationSidebar() {

  const faqs = [
    {
      id: 1,
      title: 'How to Apply ?',
      body: 'Step 1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Step 2. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
    },
    {
      id: 2,
      title: 'How  avail Armed Forces ?',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
    },
    {
      id: 3,
      title: 'Who is Specially Abled ?',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
    },
    {
      id: 4,
      title: 'This is heading for this ?',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
    },
    {
      id: 5,
      title: 'This is heading for this ?',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
    },
    {
      id: 6,
      title: 'This is heading for this ?',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, quas dolore fugit laborum consequatur ducimus harum blanditiis est incidunt laudantium.'
    }
  ]

  return (
    <div className="flex items-center justify-center">
      <div className="container flex flex-col justify-center md:p-2">
        <div className="bg-white">
          <div className="border bg-red-100 rounded-sm py-1">
            <h2 className="text-2xl font-semibold flex justify-center">FAQ <FaQuestion size={18} className="mt-2 ml-2" /></h2>
          </div>
          <p className="mt-4 mb-8 text-gray-600 text-center"> Registration Reladed Query </p>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div>{i}</div>,
              <details className="rounded-sm ring-1 ring-blue-500 shadow-md bg-gray-100">
                <summary className="px-4 py-2 cursor-pointer font-semibold bg-sky-50">{item.title}</summary>
                <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-gray-600">{item.body}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSidebar

/*
Exported to -
1. Register.js
*/