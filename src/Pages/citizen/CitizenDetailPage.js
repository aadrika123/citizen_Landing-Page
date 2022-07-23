import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CitizenAccountDetail from './CitizenAccountDetail';
import CitizenAppliedLicenseDetail from './CitizenAppliedLicenseDetail';
import CitizenViewDetail from './CitizenViewDetail';
import CitizenNotification from './CitizenNotification';

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
    <div className='ml-28 max-w-5xl border bg-white '>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Account" {...a11yProps(0)} />
          <Tab label="Applied Licenses" {...a11yProps(1)} />
          <Tab label="Notification" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <CitizenAccountDetail />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CitizenAppliedLicenseDetail />
      </TabPanel>
      <TabPanel value={value} index={2}>
       <CitizenNotification />
      </TabPanel>
    </Box>
    </div>
  );
}
