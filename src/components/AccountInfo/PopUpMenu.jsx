import * as React from 'react';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { mainProfileMenu } from '../../constants/menu';
import { Link } from 'react-router-dom';
import { ListItemIcon, Typography } from '@mui/material';
export default function PopUpMenu({ open, setOpen, anchorRef }) {
  const handleClose = (event) => {
    setOpen(false);
  };

  const prevOpen = React.useRef(open);

  return (
    <Stack direction='row' spacing={2}>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: '2', width: '15%' }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: (placement = 'right top'),
            }}
          >
            <Paper style={{ backgroundColor: 'rgba(0,0,0,.80)' }}>
              <MenuList>
                {mainProfileMenu.map((menuItem, idx) => (
                  <MenuItem
                    component={Link}
                    to={menuItem.link}
                    key={idx}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'red',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'white',
                        paddingRight: '5px',
                      }}
                    >
                      {menuItem.title}
                    </Typography>
                    {
                      <ListItemIcon sx={{ paddingRight: '10px' }}>
                        <ExitToAppIcon sx={{ color: 'white' }} />
                      </ListItemIcon>
                    }
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
}
