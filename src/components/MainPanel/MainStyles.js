import { makeStyles } from '@material-ui/core/styles';

const mainStyles = makeStyles((theme) => ({
  MuiTab: {
    '&:hover': {
      borderBottom: '3px solid black',
    },
  },
  filters: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: '10px',
    alignItems: 'center',
  },
  mainBox: {
    paddingTop: '1.5vw',
    paddingBottom: '3.5vw',
    paddingRight: '1.5vw',
    paddingLeft: '1.5vw',
  },
  expand: {
    color: '#66666A',
    padding: '0.5em 1em',
    backgroundColor: '#FCFCFD',
    border: '1px solid #D1D1D7',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
    fontSize: '0.875em',
  },
  collapse: {
    color: '#3D3D3D',
    padding: '0.5em 1em',
    backgroundColor: '#E9E9EF',
    borderRight: '1px solid #D1D1D7',
    borderTop: '1px solid #D1D1D7',
    borderBottom: '1px solid #D1D1D7',
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
    fontSize: '0.875em',
  },
  bounlessSelect: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#d22f2f',
    fontSize: '1.05em',
    outline: 'none',
  },
  ClearSelectContainer: {
    height: '1.5em',
    position: 'relative',

    overflow: 'hidden',
    background:
      'url(https://www.cbcins.com/Datasource2Demo/images/dropdownArrow.svg) no-repeat right',
    backgroundSize: 'auto',
  },
}));

export default mainStyles;
