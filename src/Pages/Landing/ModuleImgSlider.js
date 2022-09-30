import React, { useContext } from 'react';
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
import JuidcoContentHead from './JuidcoContentHead';
import one from '../../assets/gallery/one.png'
import { contextVar } from '../../components/ContextVar';
import property from '../../assets/gallery/property.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const images = [
    {
        // label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:'https://assets-news.housing.com/news/wp-content/uploads/2020/11/24190402/What-is-an-immovable-property-FB-1200x700-compressed.jpg',
    },
    {
        // label: 'Bird',
        imgPath:
           'https://www.econlib.org/wp-content/uploads/2001/11/international-trade-1.jpg',
    },
    {
        // label: 'Bali, Indonesia',
        imgPath:
            'https://priyadogra.com/wp-content/uploads/2021/06/goverment-certificatins.jpg',
    },
    {
        // label: 'Goč, Serbia',
        imgPath:
            'https://static.toiimg.com/thumb/msid-67535325,width-400,resizemode-4/67535325.jpg',
    },
    {
        // label: 'Goč, Serbia',
        imgPath:one},
];

function ModuleImgSlider() {





    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
  

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
        <Box sx={{ maxWidth: '100%', flexGrow: 1 , maxHeight: '100%' }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 1,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >

                <Typography></Typography>


            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >

                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    maxHeight:'100%', 
                                    display: 'block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    width: '100%',
                                    height: '90%'
                                }}

                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                        {/* <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                    className="z-10"
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
                    </div>
                ))}
            </AutoPlaySwipeableViews>

        </Box>
    );
}

export default ModuleImgSlider;
