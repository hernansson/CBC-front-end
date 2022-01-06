import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link, useLocation } from 'react-router-dom';
import { generalMenu } from './generalMenu';
import useStyles from './NavStyles';
export default function NavHistory() {
  const location = useLocation();
  const group = generalMenu.find(
    (e) => e.path === location.pathname.replace('/', '').toLocaleLowerCase()
  );

  const navStyles = useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link to='/'>
        <img
          src='https://www.cbcins.com/Datasource2Demo/images/datasource_cube.png'
          alt='CubeLogo'
        />
      </Link>
      {group && (
        <>
          <IconButton>
            <div>
              <img
                src='https://www.cbcins.com/Datasource2Demo/images/Thinarrow1.png'
                alt='Arrow'
              />
            </div>
          </IconButton>
          <IconButton>
            <div>
              <img src={group.icon} alt='LargeGroup' />
            </div>
          </IconButton>
          <div className={navStyles.hoverArrowAnimation}>
            <IconButton>
              <img
                src='https://www.cbcins.com/Datasource2Demo/images/light_double_arrow.png'
                alt='ArrowDown'
              />
            </IconButton>
          </div>
        </>
      )}
    </Box>
  );
}
