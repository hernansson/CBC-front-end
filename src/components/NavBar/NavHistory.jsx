import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import useStyles from './NavStyles';
import { useState, useRef, useContext } from 'react';
import SideGroupMenu from './SideGroupMenu/SideGroupMenu';
import CategoryContext from '../../context/CategoryContext';
export default function NavHistory() {
  const { getMenu } = useContext(CategoryContext);
  const menu = getMenu();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <Box
        onMouseEnter={handleToggle}
        style={{ display: 'flex', alignItems: 'center' }}
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
            <img
              src='https://www.cbcins.com/Datasource2Demo/images/light_double_arrow.png'
              alt='ArrowDown'
            />
          </>
        )}
      </Box>
      <SideGroupMenu
        open={open}
        setOpen={setOpen}
        anchorRef={anchorRef}
        menu={menu.restMenu}
      />
    </>
  );
}
