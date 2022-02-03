import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Typography } from '@mui/material';
import { kingsHawaiianMenu } from '../../constants/menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

export default function SubNavBar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleTab = (link, title) => {
    navigate(link, { state: [{ link, title }] });
  };

  return (
    <AppBar
      position='relative'
      sx={{
        backgroundColor: 'rgba(0,0,0,0.75)',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar style={{ padding: '0rem 1rem', paddingLeft: '0px' }}>
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            alignItems: 'center',
            backgroundColor: '#D9202A'
          }}
        >
          <IconButton color='inherit' size='large'>
            <FolderOpenIcon />
          </IconButton>
          <Typography
            style={{ width: 'max-content' }}
            variant='navClient'
          >{`King's Hawaiian`}</Typography>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons
          allowScrollButtonsMobile
          TabIndicatorProps={{
            sx: {
              height: '0px',
            },
          }}
          textColor='black'
          sx={{ height: '48px', alignItems: 'center' }}
        >
          {kingsHawaiianMenu.map((menuItem, idx) => (
            <Tab
              onClick={() => handleTab(menuItem.path, menuItem.title)}
              iconPosition={'start'}
              icon={<img src={menuItem.icon} />}
              label={menuItem.title}
              sx={{
                '&:hover': {
                  backgroundColor: '#D9202A',
                },
                transition: 'all 0.2s ease-in-out',
                textTransform: 'none',
                fontWeight:'300',
                
              }}
              key={idx}
            ></Tab>
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
