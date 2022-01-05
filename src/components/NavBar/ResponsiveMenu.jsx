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
export default function ResponsiveMenu({ handleProfileMenuOpen }) {
  const navStyles = useStyles();
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
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
      <Typography>Jessica Poller</Typography>

      <IconButton
        size='small'
        aria-label='show 4 new mails'
        color='inherit'
        sx={{ flexDirection: 'column' }}
      >
        <SettingsIcon />
        Settings
      </IconButton>
      <IconButton size='small' color='inherit' sx={{ flexDirection: 'column' }}>
        <MeetingRoomIcon />
        Logout
      </IconButton>
      <Divider
        orientation='vertical'
        sx={{
          borderColor: 'white',
          borderWidth: '1px',
          height: '45px',
        }}
      />
      <IconButton size='small' color='inherit' sx={{ flexDirection: 'column' }}>
        <SearchOutlinedIcon />
        Search
      </IconButton>
      <IconButton size='small' color='inherit' sx={{ flexDirection: 'column' }}>
        <MenuIcon />
        Menu
      </IconButton>
    </Box>
  );
}
