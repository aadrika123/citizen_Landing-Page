//////////////////{*****}//////////////////////////////////////////
// >Author - swati sharma
// >Version - 1.0
// >Date - 7 oct 2022
// >Revision - 1
// >Project - JUIDCO
// >Component  - CitizenPropFloorDetails
// >DESCRIPTION - CitizenPropFloorDetails Component
//////////////////{*****}//////////////////////////////////////////



import { useState, useEffect, useContext } from 'react'
import { FaUserNurse } from 'react-icons/fa'
import { BiAddToQueue } from 'react-icons/bi'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { TbEdit } from 'react-icons/tb'
import { allowFloatInput, getCurrentDate } from '../../components/Common/PowerUps/PowerupFunctions'
import { TiDelete } from 'react-icons/ti'
import { contextVar } from '../../components/Common/Context/Context'

function CitizenPropFloorDetails(props) {

    const [ownerCount, setOwnerCount] = useState([1])
    const [floorList, setfloorList] = useState([])
    const [editStatus, setEditStatus] = useState(false) //to check edit or add of form
    const [editIndex, setEditIndex] = useState() //to carry the index to edit if edistatus is true
    const [AddFloorForm, setAddFloorForm] = useState('-translate-y-full -top-[400px]')
    const seleOptions = [
        { option: 'one', value: 1 },
        { option: 'two', value: 2 },
        { option: 'three', value: 3 },
        { option: 'four', value: 4 },
        { option: 'five', value: 5 },
        { option: 'six', value: 6 },
    ]
    const { notify } = useContext(contextVar)


    const validationSchema = yup.object({
        floorNo: yup.string().required('Select floor no.').max(50, 'Enter maximum 50 characters'),
        useType: yup.string().required('Select use type'),
        occupancyType: yup.string().required('Select occupancy type'),
        constructionType: yup.string().required('Select construction type'),
        buildupArea: yup.string().required('Enter builtup Area'),
        dateFrom: yup.date().required('Select from date'),
        dateUpto: yup.date()

    })
    const formik = useFormik({
        initialValues: {
            floorNo: '',
            useType: '',
            occupancyType: '',
            constructionType: '',
            buildupArea: '',
            dateFrom: '',
            dateUpto: ''
        },

        onSubmit: (values, resetForm) => {
            if (editStatus) {
                editfloorList(values)
                return
            }
            let tempFloorList = [...floorList, values] //taking copy of array adding latest values since setstate does not update immediatly
            setfloorList([...floorList, values])
            // props.collectFormDataFun('floorDetails',tempFloorList) //sending FloorDetails data to parent to store all form data at one container
            toggleForm()
        }
        , validationSchema
    })


    const editfloorList = () => {
        let tempfloorList = [...floorList]  //copying the array
        console.log('edit index is ', editIndex)

        tempfloorList[editIndex] = formik.values  //updating value of editindex
        console.log('tmep owner list', tempfloorList)
        props.collectFormDataFun('floorDetails', tempfloorList) //sending FloorDetails data to parent to store all form data at one container
        setfloorList(tempfloorList) //setting value in origin ownlist array
        setEditStatus(false) //seting edit status false after successfull edit
        toggleForm()
    }

    const toggleForm = () => {
        if (AddFloorForm === 'translate-y-0 top-[100px]') {
            setAddFloorForm('-translate-y-full -top-[400px]')
        } else {
            setAddFloorForm('translate-y-0 top-[100px]')
        }
        // (AddFloorForm == 'translate-y-0 top-40' && setAddFloorForm('-translate-y-full -top-80'))
        // (AddFloorForm == '-translate-y-full -top-80' && setAddFloorForm('translate-y-0 top-40'))
    }

    //funtion to remove owner from floorList via index
    const removeFloor = (index) => {
        //use concept of proper callback here
        setfloorList(current =>
            current.filter((ct, cIndex) => {
                return cIndex != index
            }),
        );

        // sending updated data to parent function
        // props.collectFormDataFun('floorDetails',tempFloorList)
    }


    useEffect(() => {
        props.collectFormDataFun('floorDetails', floorList)
    }, [floorList])

    //function to edit owner from owner list via index
    const editFloor = (index) => {
        setEditStatus(true)
        setEditIndex(index)
        let tempfloorList = [...floorList]
        formik.resetForm()

        formik.initialValues.floorNo = tempfloorList[index].floorNo
        formik.initialValues.useType = tempfloorList[index].useType
        formik.initialValues.occupancyType = tempfloorList[index].occupancyType
        formik.initialValues.constructionType = tempfloorList[index].constructionType
        formik.initialValues.buildupArea = tempfloorList[index].buildupArea
        formik.initialValues.dateFrom = tempfloorList[index].dateFrom
        formik.initialValues.dateUpto = tempfloorList[index].dateUpto

        toggleForm()
    }
    const checkMinimumFloor = () => {
        if (floorList.length === 0) {
            notify('Add minimum one floor', 'warn')
        } else {
            props.nextFun(5)
        }
    }



    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        //input restrict validation
        { name == 'buildupArea' && formik.setFieldValue("buildupArea", allowFloatInput(value, formik.values.buildupArea, 20)) }
    }
    return (
        <>
            <div className="absolute top-0">
                <h1 className='mt-6 mb-2 font-serif font-semibold absolute text-gray-600'><FaUserNurse className="inline mr-2" />Floor Details </h1>

                <div className={`${AddFloorForm} transition-all relative block p-4 w-full md:py-6 rounded-lg shadow-lg bg-white md:w-full mx-auto absolute top-14 bg-blue-100 z-50`}>
                    {/* <h1 className='bg-red-100 md:px-2 md:ml-8 md:mr-8'>Form 2</h1> */}
                    <button onClick={toggleForm}><TiDelete className='absolute top-5 right-5 text-red-500 text-3xl hover:scale-125' /></button>
                    <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                        <div className="grid grid-cols-1 md:grid-cols-5">
                            <div className={`grid col-span-5 grid-cols-1 md:grid-cols-5`}>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold ">
                                        <small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Floor No</label>
                                    <select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                        aria-describedby="emailHelp" >
                                        {
                                            props?.preFormData?.floor_type.map((data) => (
                                                <option key={`floorName${data.id}`} value={data.id}>{data.floor_name}</option>
                                            ))
                                        }

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.floorNo && formik.errors.floorNo ? formik.errors.floorNo : null}</span>

                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Usage Type</label>
                                    <select {...formik.getFieldProps('useType')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" >
                                        {
                                            props?.preFormData?.usage_type.map((data) => (
                                                <option key={`usageType${data.id}`} value={data.id}>{data.usage_type}</option>
                                            ))
                                        }

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.useType && formik.errors.useType ? formik.errors.useType : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Occupancy Type</label>
                                    <select {...formik.getFieldProps('occupancyType')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md">
                                        {
                                            props?.preFormData?.occupancy_type.map((data) => (
                                                <option key={`OccupancyType${data.id}`} value={data.id}>{data.occupancy_type}</option>
                                            ))
                                        }

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.occupancyType && formik.errors.occupancyType ? formik.errors.occupancyType : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Construction Type</label>
                                    <select {...formik.getFieldProps('constructionType')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                        placeholder="Enter guardian name" >
                                        {
                                            props?.preFormData?.construction_type.map((data) => (
                                                <option key={`constructionType${data.id}`} value={data.id}>{data.construction_type}</option>
                                            ))
                                        }

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.constructionType && formik.errors.constructionType ? formik.errors.constructionType : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Built Up Area (in Sq. Ft)</label>
                                    <input {...formik.getFieldProps('buildupArea')} type="text" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md" />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.buildupArea && formik.errors.buildupArea ? formik.errors.buildupArea : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>From Date</label>
                                    <input {...formik.getFieldProps('dateFrom')} type="date" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" placeholder='Enter dateFrom no' />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.dateFrom && formik.errors.dateFrom ? formik.errors.dateFrom : null}</span>
                                </div>
                                <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Upto Date (Leave blank for current date)</label>
                                    <input {...formik.getFieldProps('dateUpto')} type="date" className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                        placeholder="Enter dateUpto no." />
                                    <span className="text-red-600 absolute text-xs">{formik.touched.dateUpto && formik.errors.dateUpto ? formik.errors.dateUpto : null}</span>
                                </div>

                                <div className=" flex justify-center items-end">
                                    <div className='md:px-10'>
                                        <button type="submit" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{editStatus ? 'Update' : 'Add'}</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </form>
                </div>
                <div className={`${AddFloorForm == 'translate-y-0 top-[100px]' ? 'hidden' : 'block'} p-4 w-full md:py-4 rounded-lg shadow-lg bg-white md:w-full mx-auto absolute top-14 `}>
                    <div className="grid grid-cols-1 md:grid-cols-5 ">


                        <div className="col-span-5 grid grid-cols-3">
                            <div className='md:px-10'>
                                <button onClick={() => props.backFun(5)} type="button" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Back</button>
                            </div>
                            <div className='md:px-4 text-center'>
                                <button onClick={toggleForm} type="button" className=" px-6 py-2.5 bg-sky-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-400 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Add Floor <BiAddToQueue className=' hidden md:inline font-semibold text-sm md:text-lg' /></button>
                            </div>
                            <div className='md:px-10 text-right'>
                                <button onClick={checkMinimumFloor} type="button" className=" px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>

                            </div>

                        </div>
                    </div>

                </div>
                <div className={`${AddFloorForm == 'translate-y-0 top-[100px]' ? 'hidden' : 'block'} p-4 mt-20 w-full md:py-4 md:px-0 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto absolute top-14 overflow-x-auto`}>

                    <table className='min-w-full leading-normal'>
                        <thead className='font-bold text-left text-sm bg-sky-50'>
                            <tr>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">#</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Floor No</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">User Type</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Occupancy Type</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Construction Type</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Builtup Area</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">From Date</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Upto Date</th>
                                <th className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {
                                floorList?.map((data, index) => (
                                    <>
                                        <tr key={`floorlist${index}`} className="bg-white shadow-lg border-b border-gray-200">
                                            <td className="px-2 py-2 text-sm text-left">{index + 1}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.floorNo}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.useType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.occupancyType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.constructionType}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.buildupArea}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.dateFrom}</td>
                                            <td className="px-2 py-2 text-sm text-left">{data.dateUpto}</td>
                                            <td className="px-2 py-2 text-sm text-left"><TbEdit onClick={() => editFloor(index)} className='inline text-green-500 font-semibold text-lg cursor-pointer hover:text-green-700 relative hover:scale-150' /><RiDeleteBack2Line onClick={() => removeFloor(index)} className='inline ml-2 text-red-400 font-semibold text-lg cursor-pointer hover:text-red-700 relative hover:scale-150' /></td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="col-span-5 grid grid-cols-3 mt-10 absolute bottm-0 right-0">
                    <div className='md:px-10'>

                    </div>
                    <div className='md:px-4 text-center'>
                        {/* <button onClick={toggleForm} type="button" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Add Floor <BiAddToQueue className=' hidden md:inline font-semibold text-sm md:text-lg' /></button> */}
                    </div>
                    <div className='md:px-10 text-right'>
                        {/* {props.submitStatus && <button onClick={props.submitFun} type="button" className=" px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>} */}

                    </div>

                </div>
            </div>
        </>
    )
}

export default CitizenPropFloorDetails