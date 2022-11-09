//////////////////{*****}//////////////////////////////////////////
// >Author - swati sharma
// >Version - 1.0
// >Date - 7 oct 2022
// >Revision - 1
// >Project - JUIDCO
// >Component  - CitizenPropElectricityWaterDetails
// >DESCRIPTION - CitizenPropElectricityWaterDetails Component
//////////////////{*****}//////////////////////////////////////////

import { useState } from 'react'
import { RiBuilding2Fill } from 'react-icons/ri'
import { GiWaterTank } from 'react-icons/gi'
import { BsLightningChargeFill } from 'react-icons/bs'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { allowCharacterNumberInput, allowCharacterNumberSpaceInput, getCurrentDate } from '../../components/Common/PowerUps/PowerupFunctions'

function CitizenPropElectricityWaterDetails(props) {

    const [formHide, setFormHide] = useState(false)
    const validationSchema = yup.object({
        elecToggleCheckbox: yup.boolean(),
        electricityKNo: yup.string(),
        accNo: yup.string(),
        bindBookNo: yup.string(),
        electrictyConsumerNo: yup.string(),
        bpApprovalNo: yup.string(),
        bpApprovalDate: yup.string(),
        waterConsumerNo: yup.string(),
        waterConnectionDate: yup.string(), 

    })
    const formik = useFormik({
        initialValues: {
            elecToggleCheckbox: false,
            electricityKNo: '',
            accNo: '',
            bindBookNo: '',
            electrictyConsumerNo: '',
            bpApprovalNo: '',
            bpApprovalDate: getCurrentDate(),
            waterConsumerNo: '',
            waterConnectionDate: getCurrentDate(),
        },

        onSubmit: (values, resetForm) => {
            console.log('electricity ', values)
            //>sending ElectricityWaterDetails data to parent to store all form data at one container
            props.collectFormDataFun('electricityWaterDetails', values)
            //>forwarding to next form level
            props.nextFun(3)
        }
        , validationSchema
    })

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        { name == 'elecToggleCheckbox' && setFormHide(e.target.checked) }
        //>input restrict validation
        { name == 'electricityKNo' && formik.setFieldValue("electricityKNo", allowCharacterNumberSpaceInput(value, formik.values.electricityKNo, 100)) }
        { name == 'accNo' && formik.setFieldValue("accNo", allowCharacterNumberSpaceInput(value, formik.values.accNo, 100)) }
        { name == 'bindBookNo' && formik.setFieldValue("bindBookNo", allowCharacterNumberSpaceInput(value, formik.values.bindBookNo, 100)) }
        { name == 'bpApprovalNo' && formik.setFieldValue("bpApprovalNo", allowCharacterNumberSpaceInput(value, formik.values.bpApprovalNo, 100)) }
        { name == 'waterConsumerNo' && formik.setFieldValue("waterConsumerNo", allowCharacterNumberSpaceInput(value, formik.values.waterConsumerNo, 100)) }
    }
    return (
        <>
            <h1 className='mt-6 mb-2 font-serif font-semibold absolute text-gray-600'><RiBuilding2Fill className="inline mr-2" />Electricity & Water Details</h1>

            <div className="block p-4 w-full md:py-6 rounded-lg shadow-lg bg-white mx-auto absolute top-14">

                <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="col-span-4 px-4 text-sm font-serif mt-4 mb-4 font-semibold"><BsLightningChargeFill className="inline" />Electricity Details</div>
                        <div className="form-group col-span-4 form-check mb-2 md:px-4">
                            <input {...formik.getFieldProps('elecToggleCheckbox')} type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                            <label className="form-check-label text-gray-800" > <span className='inline text-red-400 text-sm font-semibold'>Note : </span><small className="block mt-1 text-xs text-gray-600 inline ">In case, there is no Electric Connection. You have to upload Affidavit Form-I. (Please Tick)</small></label>


                        </div>
                        <div className={`col-span-4 ${formHide ? 'hidden' : 'grid'} grid-cols-1 md:grid-cols-4  `}>
                            <div className="form-group col-span-4 md:col-span-1 mb-2 md:px-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Electricity K. No</label>
                                <input {...formik.getFieldProps('electricityKNo')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    placeholder="Enter new ward no." />
                                <span className="text-red-600 absolute text-xs">{formik.touched.electricityKNo && formik.errors.electricityKNo ? formik.errors.electricityKNo : null}</span>
                            </div>
                            <div className="col-span-4 text-red-400 font-semibold pl-28 font-mono text-lg mb-0 mt-0">or</div>
                            <div className="form-group mb-6 col-span-4 md:col-span-1 md:px-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">ACC No.</label>
                                <input {...formik.getFieldProps('accNo')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    placeholder="Enter new ward no." />
                                <span className="text-red-600 absolute text-xs">{formik.touched.accNo && formik.errors.accNo ? formik.errors.accNo : null}</span>
                            </div>
                            <div className="form-group mb-6 col-span-4 md:col-span-1 md:px-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">BIND/BOOK No.</label>
                                <input {...formik.getFieldProps('bindBookNo')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    placeholder="Enter new ward no." />
                                <span className="text-red-600 absolute text-xs">{formik.touched.bindBookNo && formik.errors.bindBookNo ? formik.errors.bindBookNo : null}</span>
                            </div>
                            <div className="form-group mb-6 col-span-4 md:col-span-1 md:px-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Electricity Consumer Category</label>
                                <select {...formik.getFieldProps('electrictyConsumerNo')} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    placeholder="Enter new ward no." >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </select>
                                <span className="text-red-600 absolute text-xs">{formik.touched.electrictyConsumerNo && formik.errors.electrictyConsumerNo ? formik.errors.electrictyConsumerNo : null}</span>
                            </div>
                        </div>
                        <div className="col-span-4"><hr /></div>
                        <div className="col-span-4 px-4 text-sm font-serif mt-4 mb-4 font-semibold"><GiWaterTank className="inline" />Water Details</div>
                        {/* //><div className='col-span-4'></div> */}
                        <div className="form-group mb-6 col-span-4 md:col-span-1 md:px-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Building Plan Approval No.</label>
                            <input {...formik.getFieldProps('bpApprovalNo')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                placeholder="Enter new ward no." />
                            <span className="text-red-600 absolute text-xs">{formik.touched.bpApprovalNo && formik.errors.bpApprovalNo ? formik.errors.bpApprovalNo : null}</span>
                        </div>
                        <div className="form-group mb-6 col-span-4 md:col-span-1 md:px-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Building Plan Approval Date</label>
                            <input {...formik.getFieldProps('bpApprovalDate')} type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                            />
                            <span className="text-red-600 absolute text-xs">{formik.touched.bpApprovalDate && formik.errors.bpApprovalDate ? formik.errors.bpApprovalDate : null}</span>
                        </div>
                        <div className="form-group mb-6 col-span-4 md:col-span-1 md:px-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Water Consumer No.</label>
                            <input {...formik.getFieldProps('waterConsumerNo')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                placeholder="Enter new ward no." />
                            <span className="text-red-600 absolute text-xs">{formik.touched.waterConsumerNo && formik.errors.waterConsumerNo ? formik.errors.waterConsumerNo : null}</span>
                        </div>
                        <div className="form-group mb-6 col-span-4 md:col-span-1 md:px-4">
                            <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Water Connection Date</label>
                            <input {...formik.getFieldProps('waterConnectionDate')} type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                            />
                            <span className="text-red-600 absolute text-xs">{formik.touched.waterConnectionDate && formik.errors.waterConnectionDate ? formik.errors.waterConnectionDate : null}</span>
                        </div>


                        <div className="col-span-4 grid grid-cols-2">

                            <div className='md:px-10'>
                                <button onClick={() => props.backFun(3)} type="button" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Back</button>
                            </div>
                            <div className='md:px-10 text-right'>
                                <button type='submit' className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save & Next</button>

                            </div>

                        </div>

                        <div className='w-full h-20'></div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default CitizenPropElectricityWaterDetails