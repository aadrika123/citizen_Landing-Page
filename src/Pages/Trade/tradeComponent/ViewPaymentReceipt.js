import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import SlipBody from './SlipBody';
import ReactToPrint from 'react-to-print-advanced';
import { useEffect } from 'react';
// import PropTypes from "prop-types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function PaymentReceipt(props) {
    const [open, setOpen] = React.useState(false);
    const printArea = (area) => {
        window.open();
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(() => {
    //     handlePrint()
    // }, [])

    // const handlePrint = () => {
    //     const btnRef = document.getElementById("clickButton");
    //     console.log("btn ref ", btnRef);
    // }
console.log("prop data for receipt print ",props);


    const componentRef = React.useRef();
    return (
        <div>
            <button onClick={handleClickOpen} className=' bg-indigo-500 hover:bg-indigo-600 text-white w-full py-1 rounded-xl mb-2 block text-xs font-mono'>
                VIEW PAYMENT RECEIPT
            </button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth="true"
                maxWidth="sm"
            >
                {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}> */}
                {/* </BootstrapDialogTitle> */}
                <DialogContent dividers className=' border-0'>
                    <div>
                        <ReactToPrint
                            trigger={() => <button id='clickButton'>Print this out!</button>}
                            content={() => componentRef.current}
                            copyStyles={true}
                        />
                        <SlipBody ref={componentRef} successData={props.successData} paymentData={props.paymentData}/>
                    </div>
                </DialogContent>

            </BootstrapDialog>
        </div>
    );
}
