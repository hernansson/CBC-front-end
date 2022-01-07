import { makeStyles } from '@material-ui/core/styles';

const accountStyles = makeStyles((theme) => ({
  accountImg: {
    width: '5vw',
    height: '5vw',
    borderRadius: '3vw',
    border: '2px solid #D9202A',
    overflow: 'hidden',
    display: 'flex',
  },
  dashboard: {
    height: '4.25vw ',
    width: 'auto',
  },
  iconButton: {
    border: '1px solid black',
    borderRadius: '3vw',
    height: '2.71vw',
    width: '2.71vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '1.23vw',
    width: '1.23vw',
  },
  logo: {
    width: '15vw',
  },
}));

export default accountStyles;
