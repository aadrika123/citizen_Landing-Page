import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TRADE, HEADER } from '../tradeComponent/TradeApiListFile';
import { convertApplicationTypeToString } from '../tradeComponent/UsefulFunctions';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(false);
    const { buttonName, dialogTitle, dialogText, callbackFun } = props.vals;
    const extraVal = props.extraVal;
    const { licenseDetailsFun, licenseData } = props.licenseValues;
    const { showLoader } = props.values;
    const {applicationType} = props.values;
    console.log("getlicense values confirmation ", props.values.applicationType);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        // confirmedFun(true);
        showLoader(true);
        getlicenseDetails(extraVal);

        setTimeout(() => {
            callbackFun(extraVal);
            setOpen(false);
        }, 1000)

    }

    // function to get old license details 
    const getlicenseDetails = (licenceId) => {
        axios.get(TRADE.MASTER_DATA_API + convertApplicationTypeToString(props.values.applicationType) + "/" + licenceId, HEADER)
            .then(function (response) {
                console.log("getlicense values ", response.data);
                if (response.data.status) {
                    licenseDetailsFun(response.data.data);
                    showLoader(false);
                } else {
                    showLoader(false);
                    alert("something went wrong!");
                }
            })
            .catch(function (error) {
                console.log(error);
                showLoader(false);
            })

    }


    return (
        <div>
            <div className='mt-4 mb-4'>
                <Button variant="contained" size="small" onClick={handleClickOpen}>
                    <span className='text-xs'>{buttonName}</span>
                </Button>
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="md"
            >
                <DialogTitle>
                    {dialogTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {dialogText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="warning">Deny</Button>
                    <Button onClick={handleConfirm} variant="contained" color="secondary">Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}