import React from 'react'
// import folder from 'Components/Media/folders.png'
import { useState } from 'react'
import { RiBuilding2Fill } from 'react-icons/ri'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { allowFloatInput, allowCharacterInput, allowCharacterCommaInput, allowNumberInput, allowCharacterSpecialInput, allowCharacterNumberInput, getCurrentDate, getBeforeDate, getAfterDate, allowCharacterNumberSpaceInput, allowCharacterNumberSpaceCommaInput, allowCharacterSpaceCommaInput } from '../../../components/Common/PowerUps/PowerupFunctions'
import rupee from '../../../components/Media/rupee.png'
import { useNavigate } from 'react-router-dom'

function SafFormPayment(props) {

  const navigate = useNavigate()
  console.log('saf submit response data at payment...',props.safSubmitResponse)

  const [formHide, setFormHide] = useState(false)
  const [paymentMode, setPaymentMode] = useState('cash')
  const [advanceStatus, setadvanceStatus] = useState(false)
  const validationSchema = yup.object({

    paymentUptoYear: yup.string().required('Select payment upto year'),
    paymentUptoQuarter: yup.string().required('Enter payment upto quarter'),
    paymentMode: yup.string().required('select payment mode'),

    remarks: yup.string().required('Enter remarks'),
    bankName: yup.string().required('Enter bank name'),
    branchName: yup.string().required('Enter branch name'),
    cheque_dd_no: yup.string().required('enter cheque/dd no'),
    cheque_dd_date: yup.string().required('Select date'),

    payAdvance: yup.string(),
    advanceAmount: yup.string().required('Enter advance amount'),


  })
  const formik = useFormik({
    initialValues: {
      paymentUptoYear: '',
      paymentUptoQuarter: '',
      paymentMode: '',

      remarks: '',
      bankName: '',
      branchName: '',
      cheque_dd_no: '',
      cheque_dd_date: '',
      payAdvance: '',
      advanceAmount: '',


    },

    onSubmit: (values, resetForm) => {
      console.log('electricity ', values)
      props.collectFormDataFun('electricityWaterDetails', values) //sending ElectricityWaterDetails data to parent to store all form data at one container
      props.nextFun(1) //forwarding to next form level
    }
    , validationSchema
  })

  const toggleForm = (e) => {
    console.log('checkbox is changing ', e.target.checked)
    setFormHide(e.target.checked)
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value


    { (name == 'paymentMode') && setPaymentMode(value) }
    { (name == 'payAdvance') && setadvanceStatus(e.target.checked) }
    //allow restricted inputs
    { name == 'buildingName' && formik.setFieldValue("buildingName", allowCharacterSpaceCommaInput(value, formik.values.buildingName, 10)) }
    { name == 'buildingOfficeName' && formik.setFieldValue("buildingOfficeName", allowCharacterSpaceCommaInput(value, formik.values.buildingOfficeName, 100)) }
    { name == 'holdingNo' && formik.setFieldValue("holdingNo", allowCharacterNumberInput(value, formik.values.holdingNo, 20)) }
    { name == 'plotArea' && formik.setFieldValue("plotArea", allowFloatInput(value, formik.values.plotArea, 20)) }
    { name == 'buildingAddress' && formik.setFieldValue("buildingAddress", allowCharacterNumberSpaceCommaInput(value, formik.values.buildingAddress, 200)) } //(currentValue,oldValue,max,isCapital)
  }
  return (
    <div className={` block p-4 mt-4 w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto  overflow-x-auto mb-20 `}>
      <h1 className='px-2 font-semibold mt-0 bg-sky-100 text-center text-gray-700 font-serif py-2 text-lg shadow-lg border border-white'>SAF Payment</h1>



      <div className=" block p-4 w-full md:py-6 rounded-lg bg-white mx-auto ">
        <h1 className='mb-2 font-serif text-gray-600'><img src={rupee} alt="rupee-image" className='w-5 inline' /> Demand Amount - <span className='font-sans font-semibold text-lg'>2000</span></h1>
        <form onSubmit={formik.handleSubmit} onChange={handleChange} className="bg-green-100 shadow-lg p-4 relative">
          <div className="grid grid-cols-12">




            <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
              <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Payment Upto Year</label>
              <select {...formik.getFieldProps('paymentUptoYear')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                placeholder="Enter new ward no." >
                <option value="0" >ward 1</option>
                <option value="1" >ward 2</option>
              </select>
              <span className="text-red-600 absolute text-xs">{formik.touched.paymentUptoYear && formik.errors.paymentUptoYear ? formik.errors.paymentUptoYear : null}</span>
            </div>
            <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
              <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Payment Upto Quarter</label>
              <select {...formik.getFieldProps('paymentUptoQuarter')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                placeholder="Enter new ward no." >
                <option value="0" >ward 1</option>
                <option value="1" >ward 2</option>
              </select>
              <span className="text-red-600 absolute text-xs">{formik.touched.paymentUptoQuarter && formik.errors.paymentUptoQuarter ? formik.errors.paymentUptoQuarter : null}</span>
            </div>
            <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
              <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Payment Mode</label>
              <select {...formik.getFieldProps('paymentMode')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                placeholder="Enter new ward no." >
                <option value="cash" >Cash</option>
                <option value="cheque" >Cheque</option>
                <option value="dd" >DD</option>
              </select>
              <span className="text-red-600 absolute text-xs">{formik.touched.paymentMode && formik.errors.paymentMode ? formik.errors.paymentMode : null}</span>
            </div>


            <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
              <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Remarks</label>
              <input {...formik.getFieldProps('remarks')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                placeholder="Enter new ward no." />
              <span className="text-red-600 absolute text-xs">{formik.touched.remarks && formik.errors.remarks ? formik.errors.remarks : null}</span>
            </div>

            {/* toggle inputs of payment mode */}
            {
              (paymentMode == 'cheque' || paymentMode == 'dd') && <>
                <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
                  <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Bank Name</label>
                  <input {...formik.getFieldProps('bankName')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                    placeholder="Enter new ward no." />
                  <span className="text-red-600 absolute text-xs">{formik.touched.bankName && formik.errors.bankName ? formik.errors.bankName : null}</span>
                </div>
                <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
                  <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Branch Name</label>
                  <input {...formik.getFieldProps('branchName')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                    placeholder="Enter new ward no." />
                  <span className="text-red-600 absolute text-xs">{formik.touched.branchName && formik.errors.branchName ? formik.errors.branchName : null}</span>
                </div>
                <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
                  <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Cheque/DD No</label>
                  <input {...formik.getFieldProps('cheque_dd_no')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                    placeholder="Enter new ward no." />
                  <span className="text-red-600 absolute text-xs">{formik.touched.cheque_dd_no && formik.errors.cheque_dd_no ? formik.errors.cheque_dd_no : null}</span>
                </div>
                <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
                  <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Cheque/DD Date</label>
                  <input {...formik.getFieldProps('cheque_dd_date')} type="date" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                    placeholder="Enter new ward no." />
                  <span className="text-red-600 absolute text-xs">{formik.touched.cheque_dd_date && formik.errors.cheque_dd_date ? formik.errors.cheque_dd_date : null}</span>
                </div>
              </>
            }

            {/* pay advance */}
            <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
              <input {...formik.getFieldProps('payAdvance')} id="checked-checkbox" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 cursor-pointer" />
              <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pay Advance</label>
              <span className="text-red-600 absolute text-xs">{formik.touched.payAdvance && formik.errors.payAdvance ? formik.errors.payAdvance : null}</span>
            </div>

            {advanceStatus && <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
              <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>advance amount</label>
              <input {...formik.getFieldProps('advanceAmount')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                placeholder="Enter new ward no." />
              <span className="text-red-600 absolute text-xs">{formik.touched.advanceAmount && formik.errors.advanceAmount ? formik.errors.advanceAmount : null}</span>
            </div>}

            {/* line break */}
            <div className='col-span-12'></div>

            {/* text details */}
            <div className='bg-white shadow-lg col-span-12 grid grid-cols-12 pt-6 mb-4 border border-gray-200'>
              <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
                <span>Rebate :</span> <span className='font-mono font-semibold'>0</span>
              </div>
              <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
                <span>Late Assessment Penalty :</span> <span className='font-mono font-semibold'>0</span>
              </div>
              <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
                <span>Special Rebate :</span> <span className='font-mono font-semibold'>0</span>
              </div>
              <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
                <span>1% Penalty Rebate :</span> <span className='font-mono font-semibold'>0</span>
              </div>
              <div className="form-group mb-6 col-span-12 md:col-span-6 md:px-4">
                <div className='bg-sky-100 w-2/3 text-center rounded-lg shadow-lg py-1'><span>Total Amount :</span> <span className='font-mono font-semibold'>2000</span></div>
              </div>
            </div>


            <div className="col-span-12 grid grid-cols-2">

              <div className=''>
                <button onClick={()=>props.backFun(8)} type='button' className=" px-6 py-2.5 bg-gray-200 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">Back</button>
              </div>
              <div className='md:pl-10 text-right'>
                {!formHide && <button type='submit' className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Pay Tax</button>}
              </div>

            </div>
          </div>

        </form>
      </div>


    </div>
  )
}

export default SafFormPayment