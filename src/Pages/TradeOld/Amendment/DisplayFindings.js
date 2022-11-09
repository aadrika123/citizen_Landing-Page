
import { Navigation } from '@mui/icons-material';
import React, { useState } from 'react';
import NewApplication from '../NewApplication/NewApplication';
import Confirmation from '../tradeComponent/Confirmation';

function DisplayFindings(props) {

    const { renewToggleStatus, renewToggleStatusFun, applicationType, applicationTypeFun } = props.values;
    // const [confirmed, setconfirmed] = useState(false);
    console.log('prop data', props.licenseData);
    const gotoRenewalPage = (value) => {
        // console.log(value)
        alert('Renewal page is In progress !' + value);
        renewToggleStatusFun(true);
    }
    let dialogTitle = <div className="w-full text-red-600"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mx-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /> </svg></div>;
    const values = {
        buttonName: "Apply Amendment",
        dialogTitle: dialogTitle,
        dialogText: "I want to proceed with the Amendment.",
        callbackFun: gotoRenewalPage
    }

    return (
        <>

            {props.licenseData.length != 0 ? props.licenseData?.map((item) => (
                <tr className='' key={item.id}>
                    <td>{item.firm_name}</td>
                    <td>{item.application_no}</td>
                    <td>{item.license_no}</td>
                    <td>{item.ward_no}</td>
                    <td>{item.address}</td>
                    <td>{item.valid_upto}</td>
                    <td>
                        {item.id == 0 ? '' : <Confirmation extraVal={item.id} values={values} />}
                    </td>

                </tr>
            )) : 'No Data Found !'
            }
        </>


    );
}

export default DisplayFindings