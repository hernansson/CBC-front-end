import { makeStyles } from '@material-ui/core/styles';

const cardStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1vw',
  },
  resetPaddings: {
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingBottom: '0px',
    paddingTop: '0px',
  },
}));

export default cardStyles;
