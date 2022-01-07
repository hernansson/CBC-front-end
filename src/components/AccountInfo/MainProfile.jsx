import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import accountStyles from './AccountStyles';
export default function MainProfile() {
  const accStyles = accountStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          columnGap: '2vw',
        }}
      >
        <img
          src='https://www.cbcins.com/Datasource2Demo/images/KH_s_2color_CMYK_onwhite.png'
          alt='logo'
        />
        <Typography>
          Account Admin
          <span style={{ color: '#D9202A' }}>»</span>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box className={accStyles.accountImg}>
          <img
            src='https://www.cbcins.com/Datasource2Demo/images/JessicaPotter2.jpg'
            alt='ProfileImage'
          />
        </Box>
        <Box>
          <img
            src='https://www.cbcins.com/Datasource2Demo/images/DashboardIcon.svg'
            alt='dashboard'
          />
          <Typography variant='body2'>My Dashboard</Typography>
        </Box>
      </Box>
    </Box>
  );
}
