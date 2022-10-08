import { useState } from 'react'
import folder from '../../../components/Media/folders.png'
import rupee from '../../../components/Media/rupee.png'
import rupee2 from '../../../components/Media/rupee2.png'
import brief from '../../../components/Media/brief.png'
import pay2 from '../../../components/Media/pay2.png'
import { useNavigate } from 'react-router-dom'
import CitizenTaxCard from './CitizenTaxCard'
import { BiCheck } from 'react-icons/bi'
import check from '../../../components/Media/check.png'
import { MdContentCopy } from 'react-icons/md'
// import copy from "copy-to-clipboard";
import { TiArrowBack } from 'react-icons/ti'
import { MdViewInAr } from 'react-icons/md'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function SafFormDemand(props) {
  const [taxDescriptionState, setTaxDescriptionState] = useState(false)
  const navigate = useNavigate()
  console.log('saf submit response data at safformdemand...', props.safSubmitResponse)
  const toggleTaxDescription = () => {
    setTaxDescriptionState(!taxDescriptionState)

    // console.log('scroll top position ',document.documentElement.scrollTop)
  }

  return (
    <div className={` block p-4 mt-4 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto  overflow-x-auto `}>
      {/* <h1 className='px-2 font-semibold mt-0 bg-green-400 text-center text-white font-serif py-2 text-lg shadow-lg border border-white'>Saf Demand</h1> */}
      <h1 className='px-2 font-semibold mt-0 bg-green-400 text-center text-white font-serif py-2 text-lg shadow-lg border border-white'><BsFillCheckCircleFill className='text-white inline text-3xl' /> Your form has been submitted successfully</h1>

      <div className='mt-4'>

        {/* <div className="grid grid-cols-3 mt-8 bg-yellow-100 py-6"> */}
        <div className="grid grid-cols-3 mt-8">
          <div className='px-4 py-4 text-sm'>
            {/* <div>SAF No. :<span onClick={(e) => copy(props?.safSubmitResponse?.data?.safNo)} className='text-sm text-black font-semibold font-mono ml-2 bg-amber-100 px-2 py-1 rounded-lg cursor-pointer hover:bg-amber-200'>{props?.safSubmitResponse?.data?.safNo} <span><MdContentCopy className='inline' /></span> </span></div> */}
            <div>SAF No. :<span  className='text-sm text-black font-semibold font-mono ml-2 bg-amber-100 px-2 py-1 rounded-lg cursor-pointer hover:bg-amber-200'>{props?.safSubmitResponse?.data?.safNo} <span><MdContentCopy className='inline' /></span> </span></div>
            <div>Ward No. :<span className='text-sm text-black font-semibold font-mono ml-2'>20</span></div>
            <div>Apply date :<span className='text-sm text-black font-semibold font-mono ml-2'>......</span></div>
            <div>......<span className='text-sm text-black font-semibold font-mono ml-2'>..........</span></div>

          </div>
          <div className=''><CitizenTaxCard time="yearly" tax="200" /></div>
          <div className=''><CitizenTaxCard time="quaterly" tax="50" /></div>
        </div>


        {taxDescriptionState && <>
          <div className='mt-10'>
            <h1 className='px-1 font-semibold font-serif text-xs'><img src={rupee} alt="pin" className='w-5 inline' /> Tax Details</h1>
            {/* <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs'>Floor Details</h1> */}

            <table className='min-w-full leading-normal mt-2'>
              <thead className='font-bold text-left text-sm bg-green-50 text-gray-600'>
                <tr>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">ARV</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Effected From</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Holding Tax</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Water Tax</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Conservancy/Latrine Tax</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Education Cess</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Health Cess</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Additional Tax</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Quarterly Tax</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Status</th>

                </tr>
              </thead>
              <tbody className="text-sm">

                <>
                  <tr className="bg-white shadow-lg border-b border-gray-200">
                    <td className="px-2 py-2 text-sm text-left">1</td>
                    <td className="px-2 py-2 text-sm text-left">2,241.00</td>
                    <td className="px-2 py-2 text-sm text-left">Quarter : 4 / Year : 2010-2011</td>
                    <td className="px-2 py-2 text-sm text-left">1.00</td>
                    <td className="px-2 py-2 text-sm text-left">0.075%</td>
                    <td className="px-2 py-2 text-sm text-left">1.00</td>
                    <td className="px-2 py-2 text-sm text-left">0.80</td>
                    <td className="px-2 py-2 text-sm text-left">0.80</td>
                    <td className="px-2 py-2 text-sm text-left">0.80</td>
                    <td className="px-2 py-2 text-sm text-left"><span className='bg-green-200 px-2 py-1 rounded-lg shadow-lg border border-white'>268.92</span></td>
                    <td className="px-2 py-2 text-sm text-left">Old</td>


                  </tr>
                </>

              </tbody>
            </table>
          </div>


          {/* due detail list */}
          <div className='mt-10'>
            <h1 className='px-1 font-semibold font-serif text-xs'><img src={rupee2} alt="pin" className='w-6 inline' /> Due Detail</h1>
            {/* <h1 className='px-2 font-semibold mt-4 text-gray-600 text-xs'>Floor Details</h1> */}


            {/* due details */}
            <div className=''>
              <div className="flex space-x-10 bg-green-50 rounded-lg pl-4 py-6 shadow-lg">

                <div className='flex-1 text-xs'>
                  <div className='font-bold text-sm'>2000</div>
                  <div>Total Dues</div>
                </div>
                <div className='flex-1 text-xs'>
                  <div className='font-semibold text-sm'>Quarter 4 / Year 2010-2011</div>
                  <div>Dues From</div>
                </div>
                <div className='flex-1 text-xs'>
                  <div className='font-semibold text-sm'>Quarter 4 / Year 2022-2023</div>
                  <div>Dues Upto</div>
                </div>
                <div className='flex-1 text-xs'>
                  <div className='font-bold text-sm'>49</div>
                  <div>Total Dues</div>
                </div>
              </div>
            </div>


            {/* demand details */}
            <h1 className='px-1 font-semibold font-serif text-xs mt-10'><img src={brief} alt="pin" className='w-5 inline' /> Demand Overview</h1>
            <table className='min-w-full leading-normal'>
              <thead className='font-bold text-left text-sm bg-green-50 text-gray-600'>
                <tr>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">#</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Quarter / Year</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Holding Tax</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Water Harvesting Tax</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Demand</th>
                  <th className="px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left">Adjust Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm">

                <>
                  <tr className="bg-white shadow-lg border-b border-gray-200">
                    <td className="px-2 py-2 text-sm text-left">1</td>
                    <td className="px-2 py-2 text-sm text-left">1 / 2010-2011</td>
                    <td className="px-2 py-2 text-sm text-left">21.7</td>
                    <td className="px-2 py-2 text-sm text-left">0</td>
                    <td className="px-2 py-2 text-sm text-left">21.70</td>
                    <td className="px-2 py-2 text-sm text-left">0.00</td>
                  </tr>
                  <tr className="bg-white shadow-lg border-b border-gray-200">
                    <td className="px-2 py-2 text-sm text-left">1</td>
                    <td className="px-2 py-2 text-sm text-left">1 / 2010-2011</td>
                    <td className="px-2 py-2 text-sm text-left">21.7</td>
                    <td className="px-2 py-2 text-sm text-left">0</td>
                    <td className="px-2 py-2 text-sm text-left">21.70</td>
                    <td className="px-2 py-2 text-sm text-left">0.00</td>
                  </tr>
                  <tr className="bg-white shadow-lg border-b border-gray-200">
                    <td className="px-2 py-2 text-sm text-left">1</td>
                    <td className="px-2 py-2 text-sm text-left">1 / 2010-2011</td>
                    <td className="px-2 py-2 text-sm text-left">21.7</td>
                    <td className="px-2 py-2 text-sm text-left">0</td>
                    <td className="px-2 py-2 text-sm text-left">21.70</td>
                    <td className="px-2 py-2 text-sm text-left">0.00</td>
                  </tr>
                  <tr className="bg-white shadow-lg border-b border-gray-200">
                    <td className="px-2 py-2 text-sm text-left">1</td>
                    <td className="px-2 py-2 text-sm text-left">1 / 2010-2011</td>
                    <td className="px-2 py-2 text-sm text-left">21.7</td>
                    <td className="px-2 py-2 text-sm text-left">0</td>
                    <td className="px-2 py-2 text-sm text-left">21.70</td>
                    <td className="px-2 py-2 text-sm text-left">0.00</td>
                  </tr>
                </>

              </tbody>
            </table>


          </div>
        </>}
      </div>
      <div className="w-full flex mb-10 mt-10">
        <div className='md:px-10 flex-1'>
          <button onClick={() => props.backFun(7)} type="button" className="pl-4 pr-6 py-1 bg-gray-200 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-amber-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"><TiArrowBack className='inline text-lg' /> Back</button>
        </div>
        <div className='md:px-4 text-center'>
          <button onClick={toggleTaxDescription} type="button" className="w-full px-6 py-1 bg-gray-200 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-amber-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"><MdViewInAr className='inline text-lg' />{!taxDescriptionState ? 'View demand details' : 'Hide demand details'}</button>
        </div>
        <div className='md:px-10 text-right flex-1'>
          <button onClick={() => props.nextFun(7)} type="button" className=" px-6 py-1 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Pay Now <img src={pay2} alt="pay image" className='inline w-5' /></button>


        </div>

      </div>

      <div className='mt-40'></div>
    </div>
  )
}

export default SafFormDemand