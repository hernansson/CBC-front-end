import { Box, Button, Typography } from '@mui/material';
import { useState, useRef } from 'react';
import accountStyles from './AccountStyles';
import { dashboardList } from '../../constants/menu';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import PopUpMenu from './PopUpMenu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function MainProfile() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const accStyles = accountStyles();
  return (
    <>
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
          <Typography
            ref={anchorRef}
            onMouseOver={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            Account Admin
            <span style={{ color: '#D9202A' }}>»</span>
            <PopUpMenu open={open} setOpen={setOpen} anchorRef={anchorRef} />
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
            <Button style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                className={accStyles.dashboard}
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    'https://www.cbcins.com/Datasource2Demo/images/DashboardIconRed.svg')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.src =
                    'https://www.cbcins.com/Datasource2Demo/images/DashboardIcon.svg')
                }
                src='https://www.cbcins.com/Datasource2Demo/images/DashboardIcon.svg'
                alt='dashboard'
              />
              <Box sx={{ display: 'flex' }}>
                <Typography style={{ textDecoration: 'underline' }}>
                  My Dashboard
                </Typography>
                <ExitToAppIcon sx={{ color: 'red' }} />
              </Box>
            </Button>
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
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
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
    </>
  );
}
