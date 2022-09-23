import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray, useFormik  } from 'formik';
import { TiDelete } from 'react-icons/ti';
import { SiAddthis } from 'react-icons/si';

const initialValues = {

    applicant: [
        {
            ApplicantName: '',
            GuardianName: '',
            phone: '',
            email: '',
        },
    ],
};

const WaterApplicant = (props) => {
    const [test, setTest] = useState()

    let safData = props.fakeUsersData;

    // safData && resetForm();
    // if(!safData){
    //     resetForm();
    // }


    const handleAddNewApplicant = () => {
        console.log("Add Btn cliekd")
    }

    console.log("fakeUsersData in Water Applicant", safData)

    const goBack = () => {
        props.back()
    }

    const submitFormData = (formValue) => {
        props.formValue(formValue);
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    // submitFormData(values);
                    // useFormik.resetForm()
                    // await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, resetForm }) => (
                    <Form>
                        <FieldArray name="applicant">
                            {({ insert, remove, push }) => (
                                <div className='border border-black m-5 pb-5 bg-red-50'>
                                    <div className='flex bg-gray-600 text-white md:justify-start justify-center md:pl-5 pl-2 py-2 font-semibold text-lg md:text-base border-b-2 border-red-300 shadow-lg'>Applicant Details
                                        {!safData && <p className='mr-8 ml-auto'> <SiAddthis size={25} onClick={() => push({ ApplicantName: '', GuardianName: '', phone: '', email: '', })} className="cursor-pointer" /> </p>}
                                    </div>
                                    {values.applicant.length > 0 &&
                                        values.applicant.map((friend, index) => (
                                            <div className="md:flex md:mx-5" key={index}>
                                                <div className="m-1">
                                                    <p className='text-lg md:text-base md:font-medium font-normal' htmlFor={`applicant.${index}.ApplicantName`}>Name</p>
                                                    <Field
                                                        className="placeholder:text-black px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl"
                                                        name={`applicant.${index}.ApplicantName`}
                                                        type="text"
                                                        disabled={safData}
                                                        placeholder={safData?.Name}
                                                    />
                                                    <p className='text-red-600 text-sm absolute'><ErrorMessage name={`applicant.${index}.ApplicantName`} /></p>
                                                </div>
                                                <div className='m-1'>
                                                    <label className='text-lg md:text-base md:font-medium font-normal'>Guardian Name </label>
                                                    <Field
                                                        className="placeholder:text-black px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl"
                                                        type="text"
                                                        name={`applicant.${index}.GuardianName`}
                                                        disabled={safData}
                                                        placeholder={safData?.FatherName}
                                                        // value={safData?.FatherName}
                                                    />
                                                    <p className='text-red-600 text-sm absolute'><ErrorMessage name={`applicant.${index}.GuardianName`} /></p>
                                                </div>

                                                <div className='m-1'>
                                                    <label className='text-lg md:text-base md:font-medium font-normal'>Mobile No </label>
                                                    <Field
                                                        className="placeholder:text-black px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl"
                                                        type="text"
                                                        name={`applicant.${index}.phone`}
                                                        disabled={safData}
                                                        placeholder={safData?.Mobile}
                                                    />
                                                    <p className='text-red-600 text-sm absolute'><ErrorMessage name={`applicant.${index}.phone`} /></p>
                                                </div>

                                                <div className="m-1">
                                                    <p className='text-lg md:text-base md:font-medium font-normal'>Email</p>
                                                    <Field
                                                        className="placeholder:text-black px-2 my-1 border w-80 md:w-60 h-10 md:h-8 outline-blue-600 border-black rounded-sm shadow-xl"
                                                        name={`applicant.${index}.email`}
                                                        type="email"
                                                        disabled={safData}
                                                        // value={safData?.Email}
                                                        placeholder={safData?.Email}
                                                    />
                                                    <p className='text-red-600 text-sm absolute'><ErrorMessage name={`applicant.${index}.email`} /></p>
                                                </div>
                                                {values.applicant.length > 1 &&
                                                    <div className="md:mt-8  hover:bg-gray-300 h-8 md:w-10 w-8 rounded-full">
                                                        <button className='' type="button" onClick={() => remove(index)} >
                                                            < TiDelete color='red' size={30} />
                                                        </button>
                                                    </div>
                                                }
                                            </div>
                                        ))}
                                    {/* <button type="button" className="bg-green-500 p-1 mx-2 shadow-lg" onClick={() => push({ ApplicantName: '', GuardianName: '', phone: '', email: '', })} >Add New </button> */}
                                </div>
                            )}
                        </FieldArray>
                        <div className='grid col-span-12 justify-items-center'>
                            <div>
                                <button className='bg-green-500 px-4 py-1 rounded-sm shadow-md hover:shadow-2xl hover:bg-green-400' type="submit">Save and Next</button>
                                <button onClick={goBack} className='bg-red-500 px-4 py-1 mx-2 rounded-sm hover:shadow-2xl hover:bg-red-600 shadow-lg' type='button'>Go Back</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

// ReactDOM.render(<Inviteapplicant />, document.getElementById('root'));


export default WaterApplicant
