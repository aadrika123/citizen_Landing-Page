 //////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - TimeLine
//    DESCRIPTION - TimeLine Component is for Application tracling timeline of citizen
//////////////////////////////////////////////////////////////////////////////////////

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Back Office',
    description: `Verified`,
  },
  {
    label: 'Dealing Assistant ',
    description:
      'verified',
  },
  {
    label: 'Trade Tax Daroga',
    description: `Verifying...`,
  },
  {
    label: 'Section Head ',
    description:
      '',
  },
  {
    label: 'Executive Officer',
    description: ``,
  },
];

export default function TimeLine() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div className='text-center mt-6 text-lg font-serif font-semibold  text-gray-600'>
        <h1 className=''>APPLICATION TRACK </h1>
      </div>
      <Box sx={{ maxWidth: 400, marginLeft: 8, marginTop: 4 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption"></Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                {/* <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box> */}
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
      <div>
        <img src='https://img.freepik.com/free-vector/maturity-stage-online-service-platform-project-life-cycle-period-business-project-implementation-development-online-tutorial-consultation-plan-vector-flat-illustration_613284-968.jpg?w=740&t=st=1659425145~exp=1659425745~hmac=f3cd75e36a44133073a007eb8db61e15411661ec014840f5cd53177e43e8faf8' />
      </div>
    </>
  );
}
