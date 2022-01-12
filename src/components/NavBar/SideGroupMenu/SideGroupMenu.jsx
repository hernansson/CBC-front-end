import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

export default function SideGroupMenu({ open, setOpen, anchorRef, menu }) {
  const handleClose = (event) => {
    setOpen(false);
  };
  return (
    <Stack direction='row' spacing={2}>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: '1' }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: (placement = 'right top'),
            }}
          >
            <Paper style={{ backgroundColor: 'rgba(0,0,0,.80)' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onMouseLeave={handleClose}>
                  {menu.map((menuItem, idx) => (
                    <MenuItem
                      onClick={handleClose}
                      component={Link}
                      to={menuItem.path}
                      key={idx}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'black',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <img
                        src='https://www.cbcins.com/Datasource2Demo/images/datasource_cube.png'
                        alt='CubeLogo'
                      />

                      <img
                        src='https://www.cbcins.com/Datasource2Demo/images/Thinarrow1.png'
                        alt='Arrow'
                      />

                      <IconButton>
                        <img src={menuItem.icon} alt={menuItem.category} />
                      </IconButton>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
}
