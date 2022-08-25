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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



// const images = [
//     {
//         // label: 'San Francisco – Oakland Bay Bridge, United States',
//         imgPath:
//             'https://upload.wikimedia.org/wikipedia/commons/4/4c/Jharkhand_Legislative_Assembly_%28Jharkhand_Vidhan_Sabha%29_%28%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A1_%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE%29.png',
//     },
//     {
//         // label: 'Bird',
//         imgPath:
//             'https://media.istockphoto.com/photos/swami-vivekananda-memorial-at-sunrise-located-at-ranchi-jharkhand-picture-id1325410596?b=1&k=20&m=1325410596&s=170667a&w=0&h=9CEIBzAv5eOz4Bk617fZGzDl0cF0O6J8z5677hSkiY8=',
//     },
//     {
//         // label: 'Bali, Indonesia',
//         imgPath:
//             'https://images.moneycontrol.com/static-mcnews/2018/06/1280px-Ranchi_9238.jpg?impolicy=website&width=770&height=431',
//     },
//     {
//         // label: 'Goč, Serbia',
//         imgPath:
//             'https://upload.wikimedia.org/wikipedia/commons/4/4c/Jharkhand_Legislative_Assembly_%28Jharkhand_Vidhan_Sabha%29_%28%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A1_%E0%A4%B5%E0%A4%BF%E0%A4%A7%E0%A4%BE%E0%A4%A8%E0%A4%B8%E0%A4%AD%E0%A4%BE%29.png',
//     },
//     {
//         // label: 'Goč, Serbia',
//         imgPath:one},
// ];

function SliderImage() {


    const vals = useContext(contextVar)

    console.log('vals from context ', vals.ulbdata)


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = vals.ulbdata?.images.length;

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

                <Typography>{vals.ulbdata?.images[activeStep].label}</Typography>


            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >

                {vals.ulbdata?.images.map((step, index) => (
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

export default SliderImage;
