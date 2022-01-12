import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import mainStyles from './MainStyles';
import { tabs } from './tabs';
import Activity from './Panels/Activity/Activity';
import TabPanel from './Panels/TabPanel';
import TextField from '@mui/material/TextField';
import { TextFieldFocus } from '../StyledComponents/TextFieldFocusColor';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function MainPanel() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mStyles = mainStyles();
  return (
    <Box className={mStyles.mainBox}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TextFieldFocus
          focusColor='black'
          size='small'
          type='search'
          label='Search Activities'
          sx={{ width: '12rem' }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <span className={mStyles.expand}>Expand all</span>
          <span className={mStyles.collapse}>Collapse All</span>
        </Box>
      </Box>
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
          sx={{ alignItems: 'left' }}
        >
          {tabs.map((tab, idx) => (
            <Tab className={mStyles.MuiTab} label={tab.title} s></Tab>
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
    </Box>
  );
}
