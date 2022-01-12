import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profileImg: {
    width: '2.5vw',
    height: '2.5vw',
    borderRadius: '3vw',
    border: '2px solid #D9202A',
    overflow: 'hidden',
    display: 'flex',
    marginRight: '-15px',
  },
  hoverArrowAnimation: {
    cursor: 'pointer',
    pointerEvents: 'auto',
    height: '100%',
    backgroundImage:
      'url(https://www.cbcins.com/Datasource2Demo/images/Rectangle%20876.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center -90px',
    transition: 'all 200ms ease',

    '&:hover': {
      backgroundPosition: 'center 0px',
    },
  },
  sideBarIcon: {
    height: '35px',
    width: '38px',
  },
}));

export default useStyles;
