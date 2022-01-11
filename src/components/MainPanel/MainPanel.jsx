import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import mainStyles from './MainStyles';
import { tabs } from './tabs';
import Activity from './Panels/Activity';
import TabPanel from './Panels/TabPanel';

export default function MainPanel() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mStyles = mainStyles();
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        TabIndicatorProps={{
          sx: {
            backgroundColor: '#3d3d3d',
            height: '5px',
            color: 'black',
          },
        }}
        textColor='black'
      >
        {tabs.map((tab, idx) => (
          <Tab className={mStyles.MuiTab} label={tab.title}></Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Activity />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </Box>
  );
}
