import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import navStyles from '../NavStyles';
import SearchForm from './SearchForm';
export default function SideSearch({ open, setOpen, anchorRef }) {
  const nStyles = navStyles();
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
        style={{ zIndex: '1', width: '40%' }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: (placement = 'right top'),
            }}
          >
            <Paper style={{ background: 'transparent' }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList sx={{ paddingTop: '0px', paddingBottom: '0px' }}>
                  <SearchForm />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
}
