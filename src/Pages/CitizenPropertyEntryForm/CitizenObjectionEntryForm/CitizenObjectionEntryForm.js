import { useState, useEffect } from 'react'
import { RiBuilding2Fill } from 'react-icons/ri'
import { useFormik, Field } from 'formik'
import * as yup from 'yup'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { allowFloatInput } from '../CitizenPowerupFunctions';
import { getCurrentDate } from '../CitizenPowerupFunctions'
import axios from 'axios';

function CitizenObjectionEntryForm(props) {

    const [harvestingStatus, setHarvestingStatus] = useState(false)
    const [roadWidthStatus, setroadWidthStatus] = useState(false)
    const [propertyTypeStatus, setpropertyTypeStatus] = useState(false)
    const [plotAreaStatus, setplotAreaStatus] = useState(false)
    const [mobileTowerStatus, setmobileTowerStatus] = useState(false)
    const [petrolPumpStatus, setpetrolPumpStatus] = useState(false)
    const [hoardingStatus, sethoardingStatus] = useState(false)
    const [floorStatus, setfloorStatus] = useState(false)
    const [mobileTowerObjValueStatus, setmobileTowerObjValueStatus] = useState('')
    const [petrolPumpObjValueStatus, setpetrolPumpObjValueStatus] = useState('')
    const [hoardingObjValueStatus, sethoardingObjValueStatus] = useState('')
    const [responseScreenStatus, setResponseScreenStatus] = useState('')


    const validationSchema = yup.object({
        harvestingToggleStatus: yup.boolean(),
        roadWidthToggleStatus: yup.boolean(),
        propertyTypeToggleStatus: yup.boolean(),
        plotAreaToggleStatus: yup.boolean(),
        mobileTowerToggleStatus: yup.boolean(),
        hoardingToggleStatus: yup.boolean(),
        floorToggleStatus: yup.boolean(),

        harvestingObjValue: yup.string().when('harvestingToggleStatus', {
            is: true,
            then: yup.string().required('Field is required')
        }),

        petrolPumpObjValue: yup.string().when('harvestingToggleStatus', {
            is: true,
            then: yup.string().required('Field is required')
        }),
        roadWidthObjValue: yup.string().when('roadWidthToggleStatus', {
            is: true,
            then: yup.string().required('Field is required')
        }),
        propertyTypeObjValue: yup.string().when('propertyTypeToggleStatus', {
            is: true,
            then: yup.string().required('Field is required')
        }),
        plotAreaObjValue: yup.string().when('plotAreaToggleStatus', {
            is: true,
            then: yup.string().required('Field is required')
        }),
        mobileTowerObjValue: yup.string().when('mobileTowerToggleStatus', {
            is: true,
            then: yup.string().required('Field is required')
        }),
        hoardingObjValue: yup.string().when('hoardingToggleStatus', {
            is: true,
            then: yup.string().required('Field is required')
        }),

        // harvestingObjValue: yup.string().required('Enter ACC no'),
        // roadWidthObjValue: yup.string().required('Enter ACC no'),
        // propertyTypeObjValue: yup.string().required('Enter bind/book no.'),
        // plotAreaObjValue: yup.string().required('Enter building plan approval no.'),
        // mobileTowerObjValue: yup.string().required('Select building plan approval date'),
        // hoardingObjValue: yup.string().required('Enter water consumer no.'),

        objFormDoc: yup.string().required('Enter water consumer no.'),
        objevidenceDoc: yup.string().required('Enter water consumer no.'),
        objRemarks: yup.string().required('Enter water consumer no.'),

    })

    const bearerTokenInit = localStorage.getItem('token');
    const handleSubmiBtn = () => {

        let ObjectionFormData = {
            "saf_dtl_id": 2,

            "harvestingObjValue": formik.values.harvestingObjValue,
            "roadWidthObjValue": formik.values.roadWidthObjValue,
            "propertyTypeObjValue": formik.values.propertyTypeObjValue,
            "plotAreaObjValue": formik.values.plotAreaObjValue,
            "mobileTowerObjValue": formik.values.mobileTowerObjValue,
            "isPetrolPump": formik.values.petrolPumpObjValue,
            "hoardingObjValue": formik.values.hoardingObjValue,
            "FloorDetailValues": "yes",
            "objectionFormDoc": formik.values.objFormDoc,
            "evidenceDoc": formik.values.objevidenceDoc,
            "Remark": formik.values.objRemarks,
            "mobileTowerObjArea": "556",//formik.values.mobileTowerArea,
            "mobileTowerObjDate": formik.values.mobileTowerDate,
            "hoardingObjArea": formik.values.hoardingObjArea,
            "hoardingObjDate": formik.values.HoardingBoardDate,



            "harvestingToggleStatus": formik.values.harvestingToggleStatus,
            "roadWidthToggleStatus": formik.values.roadWidthToggleStatus,
            "propertyTypeToggleStatus": formik.values.propertyTypeToggleStatus,
            "ploatAreaToggleStatus": formik.values.plotAreaToggleStatus,
            "mobileTowerToggleStatus": formik.values.mobileTowerToggleStatus,
            "petrolPumpToggleStatus": formik.values.petrolPumpToggleStatus,
            "hoardigToggleStatus": formik.values.hoardingToggleStatus,
            "floorToggleStatus": formik.values.floorToggleStatus,

        }
        console.log('before submitting to api ...', ObjectionFormData)

        axios({
            method: "post",
            url: "http://192.168.0.166/api/property-objection/2",
            data: ObjectionFormData,
            headers: {
                Authorization: `Bearer ${bearerTokenInit}`,
                Accept: 'application/json',
            }
        })
            .then(function (response) {
                console.log("Objection form uploaded......", response);
                console.log("Check ==== ", response.data.status)
                if (response.data.status) {
                    setResponseScreenStatus('success')
                } else if (!response.data.status) {
                    console.log("objection form Not submitted ==== ", response.data.status)
                    alert("form Not Submiteed..")
                } else {
                    alert("Somethig Went Wrong.")
                }

                // console.log("Message", response.data);
                // setRegMsg(response.data);
                // regComplated()
            })
            .catch(function (response) {
                // console.log("Failed", response.response.data.ulb[0]);
                console.log("Failed", response);
                // console.log("Message", response.message);
                // setRegMsg(response.message);
                // setRegMsg(response.response.data.ulb[0]);
            });

    }
    const formik = useFormik({
        initialValues: {
            harvestingToggleStatus: false,
            roadWidthToggleStatus: false,
            propertyTypeToggleStatus: false,
            plotAreaToggleStatus: false,
            mobileTowerToggleStatus: false,
            petrolPumpToggleStatus: false,
            hoardingToggleStatus: false,
            floorToggleStatus: false,

            harvestingObjValue: '',
            roadWidthObjValue: '',
            propertyTypeObjValue: '',
            plotAreaObjValue: '',
            mobileTowerObjValue: '',
            hoardingObjValue: '',

            mobileTowerArea: '',
            petrolPumpArea: '',
            hoardingObjArea: '',

            mobileTowerDate: getCurrentDate(),
            petrolPumpDate: getCurrentDate(),
            HoardingBoardDate: getCurrentDate(),


            objFormDoc: '',
            objevidenceDoc: '',
            objRemarks: '',

         

            
            //   floor inputs will be dynamic, think it
        },


        onSubmit: (values, resetForm) => {
            alert("save")
            console.log('objection ', values)
            handleSubmiBtn()

        }
        , validationSchema
    })




    const floorList = [
        { floorNo: '2', usageType: 'Residential', occupancyType: 'Tenanted', constructionType: 'pucca', area: 200, from_date: '2022-05-21', uptoDate: '2022-06-01' }
    ]


    const handleChange = (e) => {
        let name = e.target.name
        let checkValue = e.target.checked
        let value = e.target.value
        console.log('switched is clicked ', e.target.name)
        console.log('switched is clicked ', e.target.checkValue)
        console.log('switched is clicked ', e.target.value)

        //toggling the visibility of specific objection sections
        { name === 'harvestingToggleStatus' && (checkValue === true ? setHarvestingStatus(true) : setHarvestingStatus(false)) }
        { name === 'roadWidthToggleStatus' && (checkValue === true ? setroadWidthStatus(true) : setroadWidthStatus(false)) }
        { name === 'propertyTypeToggleStatus' && (checkValue === true ? setpropertyTypeStatus(true) : setpropertyTypeStatus(false)) }
        { name === 'plotAreaToggleStatus' && (checkValue === true ? setplotAreaStatus(true) : setplotAreaStatus(false)) }
        { name === 'floorToggleStatus' && (checkValue === true ? setfloorStatus(true) : setfloorStatus(false)) }
        { name === 'hoardingToggleStatus' && (checkValue === true ? sethoardingStatus(true) : sethoardingStatus(false)) }
        { name === 'mobileTowerToggleStatus' && (checkValue === true ? setmobileTowerStatus(true) : setmobileTowerStatus(false)) }
        { name === 'petrolPumpToggleStatus' && (checkValue === true ? setpetrolPumpStatus(true) : setpetrolPumpStatus(false)) }
        { name === 'mobileTowerObjValue' && (value === '1' ? setmobileTowerObjValueStatus('1') : setmobileTowerObjValueStatus('')) }
        { name === 'petrolPumpObjValue' && (value === '1' ? setpetrolPumpObjValueStatus('1') : setpetrolPumpObjValueStatus('')) }
        { name === 'hoardingObjValue' && (value === '1' ? sethoardingObjValueStatus('1') : sethoardingObjValueStatus('')) }
        //input restrict validation
        { name == 'builtupArea' && formik.setFieldValue("builtupArea", allowFloatInput(value, formik.values.builtupArea, 20)) }
    }

    const [masterTypeData, setmasterTypeData] = useState({});
    useEffect(() => {
        setmasterTypeData(props?.masterTypeData)
        console.log('master data property ', props?.masterTypeData?.property_master)

        console.log('master data floor ', props?.masterTypeData?.floor_master)
        return
        console.log('master floor id ', props?.masterTypeData?.prop_floors)
     
    }, [props.masterTypeData])


    return (
        <>

            <h1 className='mt-6 mb-2 font-serif font-semibold absolute text-gray-600'><RiBuilding2Fill className="inline mr-2" />Apply Objection</h1>

            <div className="block p-4 w-full md:py-6 rounded-lg shadow-lg bg-white mx-auto absolute top-14 ">

                <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <FormGroup className='col-span-4 grid grid-cols-4'>
                            {/* harvesting objection content */}


                            <div className="col-span-4 grid grid-cols-4 gap-2">
                                <div className="col-span-4 grid grid-cols-4">
                                    <div className="col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300">
                                        <label className=" text-gray-800 pr-2" > <span className='inline text-gray-700 text-sm font-semibold'>RainWater Harvesting</span></label>
                                        <FormControlLabel control={<Switch
                                            // checked={harvestingStatus}
                                            // name="harvestingSwitch"
                                            // onChange={switchHandleChange}
                                            {...formik.getFieldProps('harvestingToggleStatus')}
                                            inputProps={{ 'aria-label': 'controlled' }} />} label="" />
                                    </div>
                                </div>

                                <div className={`col-span-4 ${harvestingStatus ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-4  mt-2`}>
                                    <div className="form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md">
                                        <label className="form-label inline-block mb-1 text-gray-700 text-sm font-semibold">Objection On: Rainwater Harvesting</label>

                                    </div>
                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">As Per Assessment</label>
                                        <div className='font-bold font-serif'>Yes</div>

                                    </div>

                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>As Per Applicant</label>
                                        <select {...formik.getFieldProps('harvestingObjValue')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        >
                                            <option value="0" selected>No</option>
                                            <option value="1">Yes</option>

                                        </select>
                                        <span className="text-red-600 absolute text-xs">{formik.touched.harvestingObjValue && formik.errors.harvestingObjValue ? formik.errors.harvestingObjValue : null}</span>
                                    </div>

                                </div>
                                {/* roadWidth objection content */}
                                <div className="col-span-4 grid grid-cols-4">
                                    <div className="col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300">
                                        <label className=" text-gray-800 pr-2" > <span className='inline text-gray-700 text-sm font-semibold'>Road Width</span></label>
                                        <FormControlLabel control={<Switch
                                            // checked={roadWidthStatus}
                                            // name="roadWidthSwitch"
                                            // onChange={switchHandleChange}
                                            {...formik.getFieldProps('roadWidthToggleStatus')}
                                            inputProps={{ 'aria-label': 'controlled' }} />} label="" />
                                    </div>
                                </div>


                                <div className={`col-span-4 ${roadWidthStatus ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-4  mt-2`}>
                                    <div className="form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md">
                                        <label className="form-label inline-block mb-1 text-gray-700 text-sm font-semibold">Objection On: Road Width</label>

                                    </div>
                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">As Per Assessment</label>
                                        <div className='font-bold font-serif'>20 ft. - 39 ft. (Main Road)	</div>

                                    </div>


                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>As Per Applicant</label>
                                        <select {...formik.getFieldProps('roadWidthObjValue')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        >
                                            <option value="0" selected>No</option>
                                            <option value="1">Yes</option>
                                        </select>
                                        <span className="text-red-600 absolute text-xs">{formik.touched.roadWidthObjValue && formik.errors.roadWidthObjValue ? formik.errors.roadWidthObjValue : null}</span>
                                    </div>

                                </div>
                                {/* propertyType objection content */}

                                <div className="col-span-4 grid grid-cols-4">
                                    <div className="col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300">
                                        <label className=" text-gray-800 pr-2" > <span className='inline text-gray-700 text-sm font-semibold'>Property Type</span></label>
                                        <FormControlLabel control={<Switch
                                            // checked={propertyTypeStatus}
                                            // name="propertyTypeSwitch"
                                            // onChange={switchHandleChange}
                                            {...formik.getFieldProps('propertyTypeToggleStatus')}
                                            inputProps={{ 'aria-label': 'controlled' }} />} label="" />
                                    </div>
                                </div>



                                <div className={`col-span-4 ${propertyTypeStatus ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-4  mt-2`}>
                                    <div className="form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md">
                                        <label className="form-label inline-block mb-1 text-gray-700 text-sm font-semibold">Objection On: Property Type</label>

                                    </div>
                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">As Per Assessment</label>
                                        <div className='font-bold font-serif'>FLATS / UNIT IN MULTI STORIED BUILDING</div>

                                    </div>

                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>As Per Applicant</label>
                                        <select {...formik.getFieldProps('propertyTypeObjValue')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        >
                                            {/* <option value="no" selected>No</option>
                                            <option value="yes">Yes</option>
                                             */}
                                            {
                                                masterTypeData?.property_master?.map((data) => (
                                                    <option value={data.id}>{data.type}</option>

                                                ))
                                                // props?.masterTypeData?.property_type.map((data) => (
                                                //     <option value="1">{data.type}</option>

                                                // ))
                                            }
                                        </select>
                                        <span className="text-red-600 absolute text-xs">{formik.touched.propertyTypeObjValue && formik.errors.propertyTypeObjValue ? formik.errors.propertyTypeObjValue : null}</span>
                                    </div>

                                </div>
                                {/* area of plot objection content */}
                                <div className="col-span-4 grid grid-cols-4">
                                    <div className="col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300">
                                        <label className=" text-gray-800 pr-2" > <span className='inline text-gray-700 text-sm font-semibold'>Area of Plot</span></label>
                                        <FormControlLabel control={<Switch
                                            // checked={plotAreaStatus} name="areaPlotSwitch"
                                            //     onChange={switchHandleChange}
                                            {...formik.getFieldProps('plotAreaToggleStatus')}
                                            inputProps={{ 'aria-label': 'controlled' }} />} label="" />
                                    </div>
                                </div>

                                <div className={`col-span-4 ${plotAreaStatus ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-4  mt-2`}>
                                    <div className="form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md">
                                        <label className="form-label inline-block mb-1 text-gray-700 text-sm font-semibold">Objection On: Area of plot</label>
                                    </div>
                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">As Per Assessment</label>
                                        <div className='font-bold font-serif'>2.86</div>

                                    </div>

                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>As Per Applicant</label>
                                        <input {...formik.getFieldProps('plotAreaObjValue')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        />
                                        <span className="text-red-600 absolute text-xs">{formik.touched.plotAreaObjValue && formik.errors.plotAreaObjValue ? formik.errors.plotAreaObjValue : null}</span>
                                    </div>

                                </div>
                                <div className="col-span-4 grid grid-cols-4">
                                    {/* mobile tower objection content */}
                                    <div className="col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300">
                                        <label className=" text-gray-800 pr-2" > <span className='inline text-gray-700 text-sm font-semibold'>Mobile Tower</span></label>
                                        <FormControlLabel control={<Switch
                                            // checked={mobileTowerStatus} name="mobileTowerSwitch"
                                            //     onChange={switchHandleChange}
                                            {...formik.getFieldProps('mobileTowerToggleStatus')}
                                            inputProps={{ 'aria-label': 'controlled' }} />} label="" />
                                    </div>
                                </div>

                                <div className={`col-span-4 ${mobileTowerStatus ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-4  mt-2`}>
                                    <div className="form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md">
                                        <label className="form-label inline-block mb-1 text-gray-700 text-sm font-semibold">Objection On: Mobile Tower</label>

                                    </div>
                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">As Per Assessment</label>
                                        <div className='font-bold font-serif'>No</div>

                                    </div>

                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>As Per Applicant</label>
                                        <select {...formik.getFieldProps('mobileTowerObjValue')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        >
                                            <option value="0" selected>No</option>
                                            <option value="1">Yes</option>
                                        </select>
                                        <span className="text-red-600 absolute text-xs">{formik.touched.mobileTowerObjValue && formik.errors.mobileTowerObjValue ? formik.errors.mobileTowerObjValue : null}</span>
                                    </div>

                                    <div className={` ${mobileTowerObjValueStatus ? 'grid' : 'hidden '}form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4`}>
                                        <div className={` mr-2`}>
                                            <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Area Covered</label>
                                            <input type="text" name='mobileTowerArea' className='bg-slate-50 w-full border' />
                                        </div>
                                        <div className=''>
                                            <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Installation Date</label>
                                            <input type="date" name='mobileTowerArea' className=' w-full border ' />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-4 grid grid-cols-4">
                                    {/* mobile tower objection content */}
                                    <div className="col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300">
                                        <label className=" text-gray-800 pr-2" > <span className='inline text-gray-700 text-sm font-semibold'>Petrol Pump</span></label>
                                        <FormControlLabel control={<Switch
                                            // checked={mobileTowerStatus} name="mobileTowerSwitch"
                                            //     onChange={switchHandleChange}
                                            {...formik.getFieldProps('petrolPumpToggleStatus')}
                                            inputProps={{ 'aria-label': 'controlled' }} />} label="" />
                                    </div>
                                </div>

                                <div className={`col-span-4 ${petrolPumpStatus ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-4  mt-2`}>
                                    <div className="form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md">
                                        <label className="form-label inline-block mb-1 text-gray-700 text-sm font-semibold">Objection On: Petrol Pump</label>

                                    </div>
                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">As Per Assessment</label>
                                        <div className='font-bold font-serif'>No</div>

                                    </div>

                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>As Per Applicant</label>
                                        <select {...formik.getFieldProps('petrolPumpObjValue')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        >
                                            <option value="0" selected>No</option>
                                            <option value="1">Yes</option>
                                        </select>
                                        <span className="text-red-600 absolute text-xs">{formik.touched.petrolPumpObjValue && formik.errors.petrolPumpObjValue ? formik.errors.petrolPumpObjValue : null}</span>
                                    </div>

                                    <div className={` ${petrolPumpObjValueStatus ? 'grid' : 'hidden '}form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4`}>
                                        <div className={` mr-2`}>
                                            <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Area Covered</label>
                                            <input type="text" name='petrolPumpArea' className='bg-slate-50 w-full border' />
                                        </div>
                                        <div className=''>
                                            <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Installation Date</label>
                                            <input type="date" name='petrolPumpArea' className=' w-full border ' />
                                        </div>
                                    </div>
                                </div>


                                {/* hoarding objection content */}
                                <div className="col-span-4 grid grid-cols-4">
                                    <div className="col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300">
                                        <label className=" text-gray-800 pr-2" > <span className='inline text-gray-700 text-sm font-semibold'>Hoarding Board</span></label>
                                        <FormControlLabel control={<Switch
                                            // checked={hoardingStatus} name="hoardingSwitch"
                                            //     onChange={switchHandleChange}
                                            {...formik.getFieldProps('hoardingToggleStatus')}
                                            inputProps={{ 'aria-label': 'controlled' }} />} label="" />
                                    </div>
                                </div>


                                <div className={`col-span-4 ${hoardingStatus ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-4  mt-2`}>
                                    <div className="form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md">
                                        <label className="form-label inline-block mb-1 text-gray-700 text-sm font-semibold">
                                            Objection On: Hording Board</label>
                                    </div>
                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">As Per Assessment</label>
                                        <div className='font-bold font-serif'>No</div>

                                    </div>
                                    <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>As Per Applicant</label>
                                        <select {...formik.getFieldProps('hoardingObjValue')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        >
                                            <option value="0" selected>No</option>
                                            <option value="1">Yes</option>
                                        </select>
                                        <span className="text-red-600 absolute text-xs">{formik.touched.hoardingObjValue && formik.errors.hoardingObjValue ? formik.errors.hoardingObjValue : null}</span>
                                    </div>
                                    <div className={` ${hoardingObjValueStatus ? 'grid' : 'hidden '}form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4`}>
                                        <div className={` mr-2`}>
                                            <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Total Area Covered</label>
                                            <input type="text" name='hordingArea' className='bg-slate-50 w-full border' />
                                        </div>
                                        <div className=''>
                                            <label className="form-label inline-block mb-1 text-gray-600 text-xs font-normal"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Installation Date</label>
                                            <input type="date" name='hordingArea' className=' w-full border ' />
                                        </div>
                                    </div>

                                </div>
                                {/* floor objection content */}
                                <div className="col-span-4 grid grid-cols-4">
                                    <div className="col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300">
                                        <label className=" text-gray-800 pr-2" > <span className='inline text-gray-700 text-sm font-semibold'>Floor Detail</span></label>
                                        <FormControlLabel control={<Switch
                                            // checked={floorStatus} name="floorSwitch"
                                            //     onChange={switchHandleChange}
                                            {...formik.getFieldProps('floorToggleStatus')}
                                            inputProps={{ 'aria-label': 'controlled' }} />} label="" />
                                    </div>
                                </div>
                                <div className={`col-span-4 ${floorStatus ? 'grid' : 'hidden'} grid-cols-1 md:grid-cols-4  mt-2`}>
                                    <div className="form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md">
                                        <label className="form-label inline-block mb-1 text-gray-700 text-sm font-semibold">Objection On: Floor Details</label>
                                    </div>
                                    <div className="col-span-4 overflow-x-auto">
                                        <table className='min-w-full leading-normal'>
                                            <thead className='font-bold text-left text-sm bg-sky-50'>

                                                <tr className="px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs uppercase text-left">
                                                    <th className='py-2 px-2'><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Floor No</th>
                                                    <th className='py-2 px-2'><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Usage Type</th>
                                                    <th className='py-2 px-2'><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Occupancy Type</th>
                                                    <th className='py-2 px-2'><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Construction Type</th>
                                                    <th className='py-2 px-2'><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Built Up Area <small className="block mt-1 text-xs text-gray-600 inline "><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>(in Sq. Ft)</small></th>
                                                    <th className='py-2 px-2'><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>From Date</th>
                                                    <th className='py-2 px-2'>Upto Date <small className="block mt-1 text-xs text-gray-600 inline ">(Leave blank for current date)</small></th>
                                                </tr>

                                            </thead>
                                            <tbody className="text-xs">
                                                {
                                                    // floorList.map((floor) => (
                                                    masterTypeData?.prop_floors?.map((data) => (
                                                        <>
                                                            <tr className="bg-white shadow-lg border-b border-gray-200">


                                                                <td className="px-2 py-2 text-left">{data?.floor_name}</td>
                                                                <td className="px-2 py-2 text-left">{data?.usage_type}</td>
                                                                <td className="px-2 py-2 text-left">{data?.occupancy_type}</td>
                                                                <td className="px-2 py-2 text-left">{data?.construction_type}</td>
                                                                <td className="px-2 py-2 text-left">{data?.builtup_area}</td>
                                                                <td className="px-2 py-2 text-left">{data?.date_from}</td>
                                                                <td className="px-2 py-2 text-left">{data?.date_upto}</td>
                                                            </tr>

                                                            <tr className="bg-white shadow-lg border-b border-gray-200 border-b border-gray-600">
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    {/* <option value="0">0</option>
                                                                    <option value="1">1</option> */}
                                                                    {

                                                                        masterTypeData?.floor_master?.map((data) => (
                                                                            <option value={data.id}>{data.name}</option>
                                                                        ))

                                                                    }
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    {/* <option value="0">0</option>
                                                                    <option value="1">1</option> */}

                                                                    {

                                                                        masterTypeData?.usage_master?.map((data) => (
                                                                            <option value={data.type}>{data.type}</option>
                                                                        ))

                                                                    }
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    {/* <option value="0">0</option>
                                                                    <option value="1">1</option> */}
                                                                    {

                                                                        masterTypeData?.occupency_master?.map((data) => (
                                                                            <option value={data.id}>{data.type}</option>
                                                                        ))

                                                                    }
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><select {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    {/* <option value="0">0</option>
                                                                    <option value="1">1</option> */}
                                                                    {

                                                                        masterTypeData?.constunction_master?.map((data) => (
                                                                            <option value={data.id}>{data.type}</option>
                                                                        ))

                                                                    }
                                                                </select></td>
                                                                <td className="px-2 py-2 text-sm text-left"><input {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"
                                                                >
                                                                    {/* <option value="0">0</option>
                                                                    <option value="1">1</option> */}
                                                                </input></td>
                                                                <td className="px-2 py-2 text-sm text-left"><input {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" type="date"
                                                                >
                                                                    {/* <option value="0">0</option>
                                                                    <option value="1">1</option> */}
                                                                </input></td>
                                                                <td className="px-2 py-2 text-sm text-left"><input {...formik.getFieldProps('floorNo')} className="form-control block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md" type="date"
                                                                >
                                                                    {/* <option value="0">0</option>
                                                                    <option value="1">1</option> */}
                                                                </input></td>
                                                            </tr>
                                                        </>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>


                            </div>

                        </FormGroup>


                        {/* Documents */}
                        <div className={`col-span-4 grid grid-cols-1 md:grid-cols-4  mt-10`}>
                            <div className="form-group col-span-4 mb-6 px-2 md:px-4 bg-green-100 shadow-md">
                                <label className="form-label inline-block mb-1 text-gray-700 text-sm font-semibold">
                                    Documents</label>
                            </div>

                            <div className="form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Objection Form</label>
                                <input {...formik.getFieldProps('objFormDoc')} type="file" className="form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                />
                                <span className="text-red-600 absolute text-xs">{formik.touched.objFormDoc && formik.errors.objFormDoc ? formik.errors.objFormDoc : null}</span>
                            </div>
                            <div className="form-group mb-6 col-span-4 md:col-span-1 md:px-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Evidence Document</label>
                                <input {...formik.getFieldProps('objevidenceDoc')} type="file" className="form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                />
                                <span className="text-red-600 absolute text-xs">{formik.touched.objevidenceDoc && formik.errors.objevidenceDoc ? formik.errors.objevidenceDoc : null}</span>
                            </div>
                            <div className="form-group mb-6 col-span-4 md:col-span-4 md:px-4">
                                <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold"><small className="block mt-1 text-sm font-semibold text-red-600 inline ">*</small>Remarks</label>
                                <input {...formik.getFieldProps('objRemarks')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                />
                                <span className="text-red-600 absolute text-xs">{formik.touched.objRemarks && formik.errors.objRemarks ? formik.errors.objRemarks : null}</span>
                            </div>

                        </div>

                        <div className="col-span-4 grid grid-cols-2 mt-10">

                            <div className='md:px-0'>
                                {/* <button onClick={() => props.backFun(3)} type="button" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Back</button> */}
                            </div>
                            <div className='md:px-10 text-right'>

                                <button type='submit' className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                            </div>

                        </div>
                    </div>

                </form>
            </div>

        </>
    )
}

export default CitizenObjectionEntryForm