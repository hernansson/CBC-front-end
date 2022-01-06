import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Typography } from '@material-ui/core';
import { kingsHawaiianMenu } from '../../constants/menu';

export default function SubNavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
        <Toolbar style={{ padding: '0rem 1rem', paddingLeft: '0px' }}>
          <MenuItem>
            <IconButton color='inherit' size='large'>
              <FolderOpenIcon />
            </IconButton>
            <Typography variant='h5'>{`King's Hawaiian`}</Typography>
          </MenuItem>
          {kingsHawaiianMenu.map((menuItem) => (
            <MenuItem>
              <IconButton>
                <img src={menuItem.icon} alt='Icon' />
              </IconButton>
              <Typography>{menuItem.title}</Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
