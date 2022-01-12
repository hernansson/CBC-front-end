import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { sideMenu } from '../../../constants/menu';
import { Link } from 'react-router-dom';
import { ListItemIcon, Typography } from '@mui/material';
import navStyles from '../NavStyles';
export default function SideMenu({ open, setOpen, anchorRef }) {
  const nStyles = navStyles();

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
        style={{ zIndex: '1', width: '15%' }}
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
                <MenuList>
                  {sideMenu.map((menuItem, idx) => (
                    <MenuItem
                      component={Link}
                      to={menuItem.path}
                      key={idx}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'red',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <ListItemIcon sx={{ paddingRight: '10px' }}>
                        <img
                          src={menuItem.icon}
                          alt='menuIcon'
                          className={nStyles.sideBarIcon}
                        />
                      </ListItemIcon>
                      <Typography sx={{ color: 'white' }}>
                        {menuItem.title}
                      </Typography>
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
