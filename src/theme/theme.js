import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  typography: {
    body1: {
      color: '#737373',
      fontFamily: `'Futura PT', 'Trebuchet MS', Verdana, Helvetica, sans-serif`,
      fontWeight: '300',
      fontSize: '1em',
    },
    h2: {
      fontSize: '1.5em',
      fontFamily: 'inherit',
      color: '#000',
      fontWeight: '300',
    },
    mainAccordion: {
      fontFamily: `sans-serif`,
      color: '#000',
      fontSize: '1em',
      fontWeight: 500,
    },
    navBar: {
      color: '#A6A6A6',
      fontFamily: `'Futura PT', 'Trebuchet MS', Verdana, Helvetica, sans-serif`,
      fontWeight: '300',
      fontSize: '0.7em',
    },
  },
});
