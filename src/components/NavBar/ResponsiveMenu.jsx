import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Typography from '@mui/material/Typography';
import useStyles from './NavStyles';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useRef } from 'react';
import SideMenu from './SideMenu/SideMenu';
import SideSearch from './SideSearch/SideSearch';
export default function ResponsiveMenu({ handleProfileMenuOpen }) {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const anchorSideMenu = useRef(null);
  const anchorSearch = useRef(null);

  const handleToggleSideMenu = () => {
    setOpenSideMenu((prevOpen) => !prevOpen);
  };
  const handleToggleSearch = () => {
    setOpenSearch((prevOpen) => !prevOpen);
  };
  const navStyles = useStyles();
  return (
    <>
      <IconButton
        size='large'
        edge='end'
        aria-label='account of current user'
        aria-haspopup='true'
        onClick={handleProfileMenuOpen}
        color='inherit'
      >
        <div className={navStyles.profileImg}>
          <img
            src='https://www.cbcins.com/Datasource2Demo/images/JessicaPotter2.jpg'
            alt='ProfileImage'
          />
        </div>
      </IconButton>

      <IconButton
        size='large'
        aria-label='show 17 new notifications'
        color='inherit'
      >
        <Badge badgeContent={17} color='error'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Typography>{'Jessica Poller'}</Typography>
      <Box className={navStyles.generalHover}>
        <IconButton
          size='small'
          aria-label='show 4 new mails'
          color='inherit'
          sx={{ flexDirection: 'column' }}
        >
          <SettingsIcon />
          Settings
        </IconButton>
      </Box>
      <Box className={navStyles.generalHover}>
        <IconButton
          size='small'
          color='inherit'
          sx={{ flexDirection: 'column' }}
        >
          <MeetingRoomIcon />
          Logout
        </IconButton>
      </Box>
      <Divider
        orientation='vertical'
        sx={{
          borderColor: 'white',
          borderWidth: '1px',
          height: '45px',
        }}
      />
      <Box className={navStyles.generalHover}>
        <IconButton
          ref={anchorSearch}
          onClick={handleToggleSearch}
          size='small'
          color='inherit'
          sx={{ flexDirection: 'column' }}
        >
          <SearchOutlinedIcon />
          Search
        </IconButton>
      </Box>
      <Box className={navStyles.generalHover}>
        <IconButton
          ref={anchorSideMenu}
          onClick={handleToggleSideMenu}
          size='small'
          color='inherit'
          sx={{ flexDirection: 'column' }}
        >
          <MenuIcon />
          Menu
        </IconButton>
      </Box>
      <SideMenu
        open={openSideMenu}
        setOpen={setOpenSideMenu}
        anchorRef={anchorSideMenu}
      />
      <SideSearch
        open={openSearch}
        setOpen={setOpenSearch}
        anchorRef={anchorSearch}
      />
    </>
  );
}
