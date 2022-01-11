import { makeStyles } from '@material-ui/core/styles';

const mainStyles = makeStyles((theme) => ({
  MuiTab: {
    '&:hover': {
      borderBottom: '3px solid black',
    },
  },
}));

export default mainStyles;
