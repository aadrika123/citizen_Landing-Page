
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SliderCard
//    DESCRIPTION - SliderCard Component is in landingpage where important information is displayed 
//////////////////////////////////////////////////////////////////////////////////////

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SectionOurDomain from './SectionOurDomain';
import NewsComponent from './NewsComponent';
import NoticeComponent from './NoticeComponent';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];


const notice = [
  {
    heading: 'IMPORTANT',
    content: <NoticeComponent />,
  },
  {
    heading: 'NOTICE',
    content: <NoticeComponent />,
  },
  //   {
  //     heading:'Newss' ,
  //     content: <SectionOurDomain/>,
  //   },
  //   {
  //     heading:'Newss' ,
  //     content: <SectionOurDomain/>,
  //   },
];

function SliderCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = notice.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className=' w-96 h-[29rem] mt-2  bg-white '>
      <Box sx={{ maxWidth: 300, flexGrow: 1, height: 40 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 40,
            pl: 3,
            pt:3,
            bgcolor: 'background.default',
          }}
        >
          <div className='pb-2 px-8 ml-16 mb-2 '>            
            <span className="text-center inline-block animate-pulse drop-shadow-lg p-1.5 px-2 rounded-lg text-black text-sm">
              <Typography style={{ color: 'red', fontSize: 18, }}>{notice[activeStep].heading}</Typography>
            </span>
          </div>
        </Paper>

        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {notice.map((step, index) => (
            <div key={step.heading}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box sx={{ height: 255, maxWidth: 400, p: 0, }}>
                  {notice[activeStep].content}
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        {/* <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
      </Box>
    </div>
  );
}

export default SliderCard;
