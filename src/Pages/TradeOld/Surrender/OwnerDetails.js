
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
// import { getCurrentDate, allowFloatInput } from 'Components/Common/PowerUps/PowerupFunctions'
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

    const initialValues = {
        //   mykey: '',
        businessOwnerName: '',
        // newWardNo: '2021/04/12',
        guardianName: '',
        mobileNo: '',
        email: '',
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
            collectFormDataFun('ownerDetails', MultipleOwnerDetails, 0) //sending BasicDetails data to parent to store all form data at one container
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
                    <table className='table-auto w-full text-center'>
                        <thead>
                            <tr className='bg-slate-100 text-gray-600 text-xs h-8 hover:bg-amber-200 uppercase'>
                                <th> Owner Name</th>
                                <th> Guardian Name</th>
                                <th> Address</th>
                                <th> Mobile</th>
                                <th> Document Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.values.licenseData?.ownerDtl.map((item) => (
                                <tr className='border-t-2 hover:bg-slate-50 text-sm hover:shadow-lg text-center'>
                                    <td>{item.owner_name ? item.owner_name : <span className='text-red-500'>N/A</span>} <input type="hidden" name="businessOwnerName[]" value={item.owner_name} />  </td>
                                    <td>{item.guardian_name ? item.guardian_name : <span className='text-red-500'>N/A</span>} <input type="hidden" name="guardianName[]" value={item.guardianName} /> </td>
                                    <td>{item.address ? item.address : <span className='text-red-500'>N/A</span>}  <input type="hidden" name="address[]" value={item.address} /></td>
                                    <td>{item.mobile ? item.mobile : <span className='text-red-500'>N/A</span>}  <input type="hidden" name="mobileNo[]" value={item.mobile} /></td>
                                    <td>{item.emailid ? item.emailid : <span className='text-red-500'>N/A</span>} <input type="hidden" name="email[]" value={item.emailid} /></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <div className="grid grid-cols-2 mt-8">
                        <div className=' text-left'>
                            <button type="button" onClick={handleBack} className=" mt-4 px-12 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">&#60;&#60; Back </button>
                        </div>
                        <div className=' text-right'>
                            <button type='submit' onClick={handleMultipleSubmit} className=" mb-8 mt-4 px-6 mr-8 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next&#62;&#62; </button>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}

export default OwnerDetails