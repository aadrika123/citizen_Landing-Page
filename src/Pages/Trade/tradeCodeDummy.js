import React, { useState } from 'react'
import { Formik, Field } from 'formik'

function Trade() {
    const [formIndex, setformIndex] = useState(1)
    const [animateForm1, setanimateForm1] = useState('translate-x-0');
    const [animateForm2, setanimateForm2] = useState('translate-x-full');

    const handleback = () => {
        // formIndex == 1 ? '' : setformIndex(formIndex - 1)
        // alert('back '+ formIndex)
    }

    const handlenext = (index) => {

        // formIndex >= 1? '' : setformIndex(formIndex + 1)
        setanimateForm1('-translate-x-full');
        setanimateForm2('translate-x-0 -mt-36');
        alert('next '+ formIndex)
    }

    // useEffect(() => {
    //     if()
    // }, [formIndex])

    return (
       <>
         <Formik
            initialValues={{ applyWith: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <>
                    <div className='h-2/3'>
                        <form onSubmit={handleSubmit}>
                            <div className='transition-all relative m-auto '>
                                <div className={`${animateForm1} pl-20  transition-all relative`}>
                                    <h1 className='text-2xl font-bold text-cyan-400'> LICENSE DETAILS</h1>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className='  px-2'>
                                            <div class="mb-4 ">
                                                <div className='h-12  pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold " for="username">
                                                        APPLY WITH
                                                    </label>
                                                </div>
                                                <Field as="select"
                                                    className="shadow border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                                    id="applyWith"
                                                    type="text"
                                                    placeholder="applyWith"
                                                    onChange={handleChange}
                                                    value={values.applyWith}
                                                >
                                                    <option value="">SELECT</option>
                                                    <option value="1"> NOTICE NO </option>
                                                    <option value="2"> NEW APPLICATION </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='  px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12 pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <Field
                                                    as="select"
                                                    className="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                                                    id="firmType"
                                                    type="text"
                                                    name="firmType"
                                                    placeholder="Username"
                                                    onChange={handleChange}
                                                    value={values.firmType}
                                                >
                                                    <option value="">SELECT</option>
                                                    <option value="1"> PROPRIETORSHIP </option>
                                                    <option value="2"> PARTNERSHIP </option>
                                                    <option value="3"> PVT LTD </option>
                                                    <option value="4"> PUBLIC LTD </option>
                                                    <option value="5"> OTHER </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='  px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12 pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <Field as="select" class="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="">SELECT</option>
                                                    <option value="applyNew"> OWN PROPERTY </option>
                                                    <option value="applyNew"> ON RENT </option>
                                                    <option value="applyNew"> ON LEASE </option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${animateForm2} pl-20  transition-all relative`}>
                                    <h1 className='text-3xl'> FIRM DETAILS </h1>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className=' px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12 pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <Field as="select" class="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="">SELECT</option>
                                                    <option value="applyNew"> NOTICE NO </option>
                                                    <option value="applyNew"> NEW APPLICATION </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className=' px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12 pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <Field as="select" class="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="">SELECT</option>
                                                    <option value="applyNew"> PROPRIETORSHIP </option>
                                                    <option value="applyNew"> PARTNERSHIP </option>
                                                    <option value="applyNew"> PVT LTD </option>
                                                    <option value="applyNew"> PUBLIC LTD </option>
                                                    <option value="applyNew"> OTHER </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='  px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12 pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <Field as="select" class="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="">SELECT</option>
                                                    <option value="applyNew"> OWN PROPERTY </option>
                                                    <option value="applyNew"> ON RENT </option>
                                                    <option value="applyNew"> ON LEASE </option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pl-20 translate-x-full transition-all relative'>
                                    <h1 className='text-3xl'> OWNER DETAILS </h1>
                                    <div class="grid grid-cols-3 gap-4">
                                        <div className=' px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12 pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <Field as="select" class="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="applyNew"> NOTICE NO </option>
                                                    <option value="applyNew"> NEW APPLICATION </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='  px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12 pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <Field as="select" class="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="applyNew"> PROPRIETORSHIP </option>
                                                    <option value="applyNew"> PARTNERSHIP </option>
                                                    <option value="applyNew"> PVT LTD </option>
                                                    <option value="applyNew"> PUBLIC LTD </option>
                                                    <option value="applyNew"> OTHER </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='  px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12 pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <Field as="select" class="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="applyNew"> OWN PROPERTY </option>
                                                    <option value="applyNew"> ON RENT </option>
                                                    <option value="applyNew"> ON LEASE </option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='pl-20 -translate-x-full transition-all relative'>
                                    <h1 className='text-3xl'>NATURE OF BUSINESS</h1>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className='  px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12 pt-5 pl-2'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <hr className='bg-green-500 mb-3' />
                                                <Field as="select" class="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="applyNew"> NOTICE NO </option>
                                                    <option value="applyNew"> NEW APPLICATION </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='  px-2'>

                                            <div className="mb-4">
                                                <div className=' h-12'>
                                                    <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        FIRM TYPE
                                                    </label>
                                                </div>
                                                <Field as="select" className="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="applyNew"> PROPRIETORSHIP </option>
                                                    <option value="applyNew"> PARTNERSHIP </option>
                                                    <option value="applyNew"> PVT LTD </option>
                                                    <option value="applyNew"> PUBLIC LTD </option>
                                                    <option value="applyNew"> OTHER </option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className='  px-2'>
                                            <div className="mb-4">
                                                <div className=' h-12'>
                                                    <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                                                        OWNERSHIP TYPE OF BUSINESS PREMISES
                                                    </label>
                                                </div>
                                                <Field as="select" className="shadow appearance-none border rounded w-full h-8 py-1 px-2 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                                                    <option value="applyNew"> OWN PROPERTY </option>
                                                    <option value="applyNew"> ON RENT </option>
                                                    <option value="applyNew"> ON LEASE </option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                    
                </>
            )}
        </Formik>
        <div className=' h-24 p-2 bg-yellow-600 hover:bg-red-600'>
                        <button className=' border-purple-600 border-2 text-purple-600 float-left px-6 py-1 ml-4 mb-4 rounded-lg ' onClick={handleback}>Back</button>
                        {/* <button className=' bg-white hover:bg-cyan-300 border-2 border-cyan-800 text-cyan-800 float-right px-6 py-1 mr-4 mb-4 rounded-lg' onClick={handlenext}>Next button</button> */}
                        <button className='bg-red-600 hover:bg-blue-600' onClick={handlenext}>Next button</button>
                    </div>
       </>
    );
}

export default Trade