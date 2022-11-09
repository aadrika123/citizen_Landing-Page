
import { Navigation } from '@mui/icons-material';
import React, { useState } from 'react';
import NewApplication from '../NewApplication/NewApplication';
import Confirmation from '../tradeComponent/Confirmation';

function DisplayFindings(props) {

    const { renewToggleStatus, renewToggleStatusFun, applicationType, applicationTypeFun, showLoader } = props.values;
    console.log('prop data', props.licenseData);


    const gotoRenewalPage = (value) => {
        console.log(value)
        // alert('Are you sure? \nYour License will be ineffctive after this !' + value);
        renewToggleStatusFun(true);
    }

    let dialogTitle = <div className="w-full text-red-600"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /> </svg></div>;
    const values = {
        buttonName: "Apply Surrender",
        dialogTitle: dialogTitle,
        dialogText: "Do you want to proceed with the Surrender?  Your License will be invalid after the approval.",
        callbackFun: gotoRenewalPage
    }
    console.log("props.licenseData?.status", props.licenseData);

    return (


        <>

            {props.licenseData?.status == true ? (
                <tr className='' key={props.licenseData.id}>
                    <td>{props.licenseData.data.firm_name}</td>
                    <td>{props.licenseData.data.application_no}</td>
                    <td>{props.licenseData.data.license_no ? props.licenseData.data.license_no : '---'}</td>
                    <td>{props.licenseData.data.ward_no ? props.licenseData.data.ward_no : '---'}</td>
                    <td>{props.licenseData.data.address}</td>
                    <td>{props.licenseData.data.valid_upto}</td>
                    <td>
                        {props.licenseData.status ? <Confirmation licenseValues={props.licenseValues} applicationType={applicationType} extraVal={props.licenseData.data.id} vals={values} values={props.values} /> : ''}
                    </td>

                </tr>
            ) :
                <>
                    <br />
                    <tr className='font-semibold text-cyan-500  text-center'>
                        <td className=' py-2' colSpan={5}>
                            {props.licenseData?.message}...
                        </td>
                        {/* <p className='text-center'> {props.licenseData?.message}...</p> */}

                        {/* <td className='border-teal-800 py-2 '>{props.licenseData?.message}... </td> */}
                    </tr>
                </>
            }


        </>


    )
}

export default DisplayFindings