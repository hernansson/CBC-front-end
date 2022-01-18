import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import useStyles from './NavStyles';
import { useState, useRef, useContext } from 'react';
import SideGroupMenu from './SideGroupMenu/SideGroupMenu';
import CategoryContext from '../../context/CategoryContext';

export default function GroupSelector() {
  const { getMenu } = useContext(CategoryContext);
  const menu = getMenu();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const nStyles = useStyles();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <Box
        ref={anchorRef}
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
        sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
      >
        <Link to='/'>
          <img
            src='https://www.cbcins.com/Datasource2Demo/images/datasource_cube.png'
            alt='CubeLogo'
          />
        </Link>
        {menu.active && (
          <>
            <img
              src='https://www.cbcins.com/Datasource2Demo/images/Thinarrow1.png'
              alt='Arrow'
            />
            <img src={menu.active.icon} alt='LargeGroup' />
            <Box
              display={{ xs: 'none', md: 'flex' }}
              className={[
                nStyles.arrow,
                !open ? nStyles.hoverInactive : nStyles.hoverActive,
              ]}
            >
              <img
                style={{ width: '40px' }}
                src='https://www.cbcins.com/Datasource2Demo/images/light_double_arrow.png'
                alt='ArrowDown'
              />
            </Box>
          </>
        )}
        <SideGroupMenu
          open={open}
          setOpen={setOpen}
          anchorRef={anchorRef}
          menu={menu.restMenu}
        />
      </Box>
    </>
  );
}
