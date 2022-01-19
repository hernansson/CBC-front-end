import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import mainStyles from './MainStyles';
import { tabs } from './tabs';
import Activity from './Panels/Activity/Activity';
import TabPanel from './Panels/TabPanel';
import { TextFieldFocus } from '../StyledComponents/TextFieldFocusColor';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function MainPanel() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [expandedPanels, setExpandedPanels] = useState(null);
  const expandAllPanels = () => {
    const expandAll = expandedPanels.map((panel) => ({ active: true }));
    setExpandedPanels(expandAll);
  };
  const collapseAllPanels = () => {
    const expandAll = expandedPanels.map((panel) => ({ active: false }));
    setExpandedPanels(expandAll);
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
          focuscolor='black'
          size='small'
          type='search'
          label='Search Activities'
          sx={{ width: '12rem', backgroundColor: 'white' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon sx={{ color: 'red' }} />
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <span onClick={expandAllPanels} className={mStyles.expand}>
            Expand all
          </span>
          <span onClick={collapseAllPanels} className={mStyles.collapse}>
            Collapse All
          </span>
        </Box>
      </Box>
      <Box>&nbsp;</Box>
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
          sx={{
            alignItems: 'left',
            borderBottom: '1px solid black',
            height: '1rem',
          }}
        >
          {tabs.map((tab, idx) => (
            <Tab
              className={mStyles.MuiTab}
              label={tab.title}
              sx={{
                textTransform: 'none',
                fontSize: '1em',
              }}
              key={idx}
            />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          <Activity
            expandedPanels={expandedPanels}
            setExpandedPanels={setExpandedPanels}
          />
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
