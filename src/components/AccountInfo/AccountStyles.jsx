import { makeStyles } from '@material-ui/core/styles';

const accountStyles = makeStyles((theme) => ({
  accountImg: {
    width: '5rem',
    height: '5rem',
    borderRadius: '3rem',
    border: '2px solid #D9202A',
    overflow: 'hidden',
    display: 'flex',
  },
  dashboard: {
    height: '4.25rem',
    width: 'auto',
  },
  iconButton: {
    border: '1px solid black',
    borderRadius: '3rem',
    height: '3rem',
    width: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.20s ease-in-out',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  icon: {
    height: '2rem',
    width: '2rem',
  },
  logo: {
    width: '15rem',
  },
}));

export default accountStyles;
