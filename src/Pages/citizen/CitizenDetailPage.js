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

      <div className='flex flex-row'>
        <div className='flex-1'>
          {/* <SideNav /> */}
        </div>

        {/* citizen Account tabs  */}


        <div className='flex-4 border bg-white w-full'>
          <Box sx={{}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ backgroundColor: '#eee' }}>
                <Tab label="Account" {...a11yProps(0)} />
                <Tab label="Applied Applications" {...a11yProps(1)} />
                {/* <Tab label="Notification" {...a11yProps(2)} /> */}
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <CitizenAccountSetting />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CitizenApplicationByModule />
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
              <CitizenNotification />
            </TabPanel> */}
          </Box>
        </div>
      </div>
    </>
  );
}
