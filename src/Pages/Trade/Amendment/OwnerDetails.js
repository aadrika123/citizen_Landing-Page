
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Anshuman
//    Version - 1.0
//    Date - 19 july 2022
//    Updated On - 13/Aug/2022 - API Integrated
//    Revision - 1
//    Project - JUIDCO
//    Component  - Trade (closed)
//    DESCRIPTION - New application (OwnerDetails) Component
//////////////////////////////////////////////////////////////////////////////////////


import { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { getCurrentDate, allowFloatInput } from 'Components/Common/PowerUps/PowerupFunctions'
import { inputContainerStyle, commonInputStyle, inputErrorStyle, inputLabelStyle } from '../tradeComponent/CommonStyles'
import DifferenceIcon from '@mui/icons-material/Difference';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

function OwnerDetails(props) {

    const { applicationType, colorCode, currentStep, currentStepFun, collectFormDataFun, firmStepFun, firmStep, colorCodeFun } = props.values;

    console.log('firm step is :', firmStep);
    const [mobileTowerStatusToggle, setMobileTowerStatusToggle] = useState(false)
    const [hoardingStatusToggle, setHoardingStatusToggle] = useState(false)
    const [petrolPumpStatusToggle, setPetrolPumpStatusToggle] = useState(false)
    const [formToggleStatus, setformToggleStatus] = useState(true)
    const [ownerDataVisibility, setownerDataVisibility] = useState(false)
    const [AddMore, setAddMore] = useState(false);
    const [MultipleOwnerDetails, setMultipleOwnerDetails] = useState([])



    const handleRemove = (index) => {
        // alert('remove filter', key);
        console.log('key ', index);
        setMultipleOwnerDetails(current =>
            current.filter(ct => {
                if (current.indexOf(ct) == index) {
                    console.log('value matched at ', index)
                } else {
                    // alert('current index of ct ',current.indexOf(ct))
                    return ct
                }
            }),
        );
    }

    console.log('Multiple owner details ', MultipleOwnerDetails)
    const validationSchema = yup.object({
        businessOwnerName: yup.string().required('Enter Business Owner Name'),
        guardianName: yup.string().required('Enrter Guardian Name'),
        mobileNo: yup.string().length(10).required('Enter Mobile No.'),
        email: yup.string().required('Enter Email'),
        // natureOfBusiness: yup.string().required('Select Nature of Business'),



    })

    const initialValues = applicationType == 1 ? {
        // mykey: '',
        businessOwnerName: '',
        // newWardNo: '2021/04/12',
        guardianName: '',
        mobileNo: '',
        email: '',
        natureOfBusiness: '',
    } : {
        //   mykey: '',
        businessOwnerName: '',
        // newWardNo: '2021/04/12',
        guardianName: '',
        mobileNo: '9112121212',
        email: 'demo@dummymail.com',
        natureOfBusiness: '',
    }

    const formik = useFormik(
        {
            initialValues: initialValues,
            onSubmit: (values, resetForm) => {
                alert(values);
                setformToggleStatus(false)
                setownerDataVisibility(true)
                setMultipleOwnerDetails([...MultipleOwnerDetails, values]);
                // console.log('myindexkey ', indexkey);
                setAddMore(true);

            }
            , validationSchema
        });

    const handleMultipleSubmit = () => {
        // alert('Final submission of the form ')
        console.log('Final submission of the form ', MultipleOwnerDetails)
        if (applicationType == 1 && MultipleOwnerDetails.length == 0) {
            alert('Atleast One Owner is required !');
        } else {
            collectFormDataFun('ownerDetails', MultipleOwnerDetails,0) //sending BasicDetails data to parent to store all form data at one container
            firmStepFun(4) //forwarding to next form level
            currentStepFun(4)
            colorCodeFun(3)

        }
    }

    const handleBack = () => {
        firmStepFun(2)
    }

    const nautreOfBusinessOptions = [
        { option: 'Cleaning Services', value: 1 },
        { option: 'Banking', value: 2 },
        { option: 'School', value: 2 },
        { option: 'Hotel', value: 2 },

    ];
    const FirmTypeOptions = [
        { option: 'Proprietorship', value: 1 },
        { option: 'Partnership', value: 2 },
        { option: 'Pvt Ltd', value: 3 },
        { option: 'Public Ltd', value: 4 },
        { option: 'Other', value: 5 },
    ];
    const PremiseOwnershipTypeOptions = [
        { option: 'Own Property', value: 1 },
        { option: 'On Rent', value: 2 },
        { option: 'On Lease', value: 3 },
    ];

    const handleOnChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        { name === 'applyWith' && (value === '1' ? setMobileTowerStatusToggle(true) : setMobileTowerStatusToggle(false)) }
        // { name === 'hoardingStatus' && (value === 'yes' ? setHoardingStatusToggle(true) : setHoardingStatusToggle(false)) }
        // { name === 'petrolPumpStatus' && (value === 'yes' ? setPetrolPumpStatusToggle(true) : setPetrolPumpStatusToggle(false)) }


    };

    const handleOwnerShow = () => {
        alert(formToggleStatus);
        { formToggleStatus == false ? setformToggleStatus(true) : setformToggleStatus(false) }
    }

    // const handleAddMore = () => {
    //     { ownerDataVisibility == false ? setownerDataVisibility(true) : setownerDataVisibility(false) }
    //     setMultipleOwnerDetails()
    // }
    return (
        <>
            <div className={`absolute w-full`} >
                <div className='w-full text-center'>
                    <button type='submit' className={`${AddMore ? '' : 'hidden'} bg-green-600 px-4 py-2 rounded-lg`} onClick={handleOwnerShow}> Add More Owners <DifferenceIcon /> </button>
                </div>
                {/* <Formik initialValues={initialValues} validationSchema={validationSchema}  > */}
                <form onChange={handleOnChange} onSubmit={formik.handleSubmit} >

                    <div className='h-12'>
                        <h1 className=' font-serif font-semibold  text-gray-600'>
                            <FaHome className="inline mr-2" />Owner Details</h1>
                    </div>
                    {applicationType == 1 ?
                        <>
                            <div className={`${formToggleStatus ? '' : 'hidden'}`}>
                                <div className="grid grid-cols-3 w-full md:grid-cols-3 gap-2">
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Owner Name *</label>
                                        <input type="text" name="businessOwnerName" className={`${commonInputStyle} cursor-pointer `} placeholder="Ex: John Doe" value={formik.values.businessOwnerName} onChange={formik.handleChange} />

                                        <span className={`${inputErrorStyle}`}>
                                            {formik.touched.businessOwnerName && formik.errors.businessOwnerName ? formik.errors.businessOwnerName : null}
                                        </span>

                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Guardian Name</label>
                                        <input type="text" name="guardianName" className={`${commonInputStyle} cursor-pointer `} value={formik.values.guardianName} onChange={formik.handleChange} />

                                        <span className={`${inputErrorStyle}`}>
                                            {formik.touched.guardianName && formik.errors.guardianName ? formik.errors.guardianName : null}
                                        </span>
                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Mobile No.</label>
                                        <input type="number" name="mobileNo" className={`${commonInputStyle} cursor-pointer `} value={formik.values.mobileNo} onChange={formik.handleChange} />

                                        <span className={`${inputErrorStyle}`}>
                                            {formik.touched.mobileNo && formik.errors.mobileNo ? formik.errors.mobileNo : null}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Email.</label>
                                        <input type="email" name="email" className={`${commonInputStyle} cursor-pointer `} value={formik.values.email} onChange={formik.handleChange} />

                                        <span className={`${inputErrorStyle}`}>
                                            {formik.touched.email && formik.errors.email ? formik.errors.email : null}
                                        </span>
                                    </div>


                                    <div className='p-4'>
                                        <button type="submit" onClick={() => setAddMore(true)} className=" mt-4 px-10 py-1.5  bg-indigo-600 text-white font-bold text-xs leading-tight  rounded  hover:bg-indigo-700 hover:text-white hover:shadow-lg focus:bg-indigo-700 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:text-white active:shadow-lg transition duration-150 ease-in-out">confirm <GroupAddIcon />  </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2">
                                <div className=' text-left'>
                                    <button type="button" onClick={handleBack} className=" mt-4 px-12 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">&#60;&#60; Back </button>
                                </div>
                                <div className=' text-right'>
                                    <button type={MultipleOwnerDetails.length === 0 ? 'submit' : 'button'} onClick={handleMultipleSubmit} className=" mb-8 mt-4 px-6 mr-8 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next&#62;&#62; </button>
                                </div>
                            </div>

                        </> : <>
                            <div className={`${formToggleStatus ? '' : 'hidden'}`}>
                                <div className="grid grid-cols-3 w-full md:grid-cols-3 gap-2">
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Owner Name *</label>
                                        <input type="hidden" name="businessOwnerName" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="bg-gray-400 px-3 py-2 rounded-lg"> Demo businessOwnerName</div>

                                    </div>
                                    {/* <input type="hidden" name='mykey' value={} /> */}
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small> Guardian Name</label>
                                        <input type="hidden" name="guardianName" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="bg-gray-400 px-3 py-2 rounded-lg"> Demo guardian Name</div>
                                    </div>
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Mobile No.</label>
                                        <input type="text" name="mobileNo" className={`${commonInputStyle} cursor-pointer `} value="1234567890" readOnly />
                                        {/* <div className="bg-gray-400 px-3 py-2 rounded-lg"> 9112121212</div> */}

                                    </div>
                                </div>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-1">
                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Email.</label>
                                        <input type="email" name="email" className={`${commonInputStyle} cursor-pointer `} value="demo@dummymail.com" readOnly />
                                        {/* <div className="bg-gray-400 px-3 py-2 rounded-lg"> demo@dummymail.com</div> */}
                                    </div>

                                    <div className={`${inputContainerStyle}`}>
                                        <label className={`${inputLabelStyle} text-xs`}><small className=" mt-1 text-sm font-semibold text-red-600 inline ">*</small>Nature of Business</label>
                                        <input type="hidden" name="natureOfBusiness" className={`${commonInputStyle} cursor-pointer `} readOnly />
                                        <div className="bg-gray-400 px-3 py-2 rounded-lg"> Cleaning, Cutting, Processing raw materials</div>

                                    </div>

                                    <div className='p-4'>
                                        {/* <button type="submit" onClick={() => setAddMore(true)} className=" mt-4 px-10 py-1.5  bg-indigo-600 text-white font-bold text-xs leading-tight  rounded  hover:bg-indigo-700 hover:text-white hover:shadow-lg focus:bg-indigo-700 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:text-white active:shadow-lg transition duration-150 ease-in-out">Add <GroupAddIcon />  </button> */}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2">
                                <div className=' text-left'>
                                    <button type="button" onClick={handleBack} className=" mt-4 px-12 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">&#60;&#60; Back </button>
                                </div>
                                <div className=' text-right'>
                                    <button type={MultipleOwnerDetails.length === 0 ? 'submit' : 'button'} onClick={handleMultipleSubmit} className=" mb-8 mt-4 px-6 mr-8 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next&#62;&#62; </button>
                                </div>
                            </div>
                        </>}
                </form>
                {/* </Formik> */}
                <div className={`${ownerDataVisibility ? '' : 'hidden'}  h-56 mr-8 `}>
                    <table class="table-auto text-slate-700 w-full mx-auto ">
                        <thead>
                            <tr className="border-b-2 text-left text-slate-700">
                                <th>Owner Name</th>
                                <th>Guardian Name</th>
                                <th>Mobile No.</th>
                                <th>Email.</th>
                                {/* <th>Nature Of Business.</th> */}
                                <th>Action.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MultipleOwnerDetails?.map((item, index) => (
                                    <tr className="hover:bg-gray-300 text-slate-600 font-semibold" key={index}>
                                        <td className='border-r'>
                                            {item.businessOwnerName}
                                        </td>
                                        <td className='border-r'>
                                            {item.guardianName}</td>
                                        <td className='border-r'>
                                            {item.mobileNo}</td>
                                        <td className='border-r'>
                                            {item.email}</td>
                                        {/* <td className='border-r'>
                                            {item.natureOfBusiness}</td> */}
                                        <td className='border-r'>
                                            {/* <BorderColorIcon color="primary" /> | <DeleteIcon color="secondary" /> */}

                                            <button type='button' className='text-red-400' onClick={() => handleRemove(index)}>
                                                <DeleteIcon color="secondary" />
                                            </button>
                                            {/* {index} */}
                                        </td>
                                    </tr>

                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default OwnerDetails