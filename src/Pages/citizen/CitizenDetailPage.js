//////////////////////////////////////////////////////////////////////////////////////
//    Author - Swati Sharma
//    Version - 1.0
//    Date - 8 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - CitizenDetailPage
//    DESCRIPTION - CitizenDetailPage Component is contaning citizen account detail tabs which has included components     {CitizenAccountSetting, CitizenAppliedLicenseDetail, CitizenNotification }
//////////////////////////////////////////////////////////////////////////////////////

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CitizenAppliedLicenseDetailTbl from './CitizenAppliedLicenseDetailTbl';
import CitizenViewDetail from './CitizenLicenseFullDetail';
import CitizenNotification from './CitizenNotification';
import SideNav from './SideNav';
import LandingNav from '../Landing/LandingNav';
import CitizenAccountSetting from './CitizenAccountSetting';
import CitizenApplicationByModule from './CitizenApplicationByModule';
import { border } from '@mui/system';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CitizenDetailPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <LandingNav />

      <div className=''>
        <div className=''>
          {/* <SideNav /> */}
        </div>

        {/* citizen Account tabs  */}


        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 p-4 '>
          <div className='mt-24'>
          <img src='https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=740&t=st=1664544018~exp=1664544618~hmac=51668f4b12e09769de5bc0e454876b1f9e103159e52b93fc5cc40b70fbd109ad'/>
          </div>
          <div className='col-span-3 '>
            <Box sx={{ width: 'full', margin: 'auto', }}>
              <Box sx={{   width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                  <Tab label="Account" {...a11yProps(0)} />
                  <Tab label="Applied Applications" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <CitizenAccountSetting />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <CitizenApplicationByModule />
              </TabPanel>

            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
