import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import accountStyles from './AccountStyles';
import IconButton from '@mui/material/IconButton';
import { dashboardList } from '../../constants/menu';
import { Link } from 'react-router-dom';

export default function MainProfile() {
  const accStyles = accountStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        rowGap: '2vw',
        paddingLeft: '1vw',
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
          className={accStyles.logo}
          src='https://www.cbcins.com/Datasource2Demo/images/KH_s_2color_CMYK_onwhite.png'
          alt='logo'
        />
        <Typography>
          Account Admin
          <span style={{ color: '#D9202A' }}>»</span>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '1vw' }}>
        <Box className={accStyles.accountImg}>
          <img
            src='https://www.cbcins.com/Datasource2Demo/images/JessicaPotter2.jpg'
            alt='ProfileImage'
          />
        </Box>
        <Box>
          <img
            className={accStyles.dashboard}
            src='https://www.cbcins.com/Datasource2Demo/images/DashboardIcon.svg'
            alt='dashboard'
          />
          <Typography variant='body2'>My Dashboard</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {dashboardList.map((dashItem) => (
          <Link to='/'>
            <div className={accStyles.iconButton}>
              <img
                className={accStyles.icon}
                src={dashItem.icon}
                alt=''
                onMouseOver={(e) => (e.currentTarget.src = dashItem.iconRed)}
                onMouseLeave={(e) => (e.currentTarget.src = dashItem.icon)}
              />
            </div>

            <Typography>{dashItem.title}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
