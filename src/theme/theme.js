import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Futura PT', 'Trebuchet MS', Verdana, Helvetica, sans-serif`
    },

    body1: {
      color: "#737373",
      fontWeight: "400",
      fontSize: "1em",
    },
    h2: {
      fontSize: "1.5em",
      fontFamily: "inherit",
      color: "#000",
      fontWeight: "300",
    },
    mainAccordion: {
      fontFamily: `sans-serif`,
      color: "#000",
      fontSize: "1em",
      fontWeight: 500,
    },
    navBar: {
      color: "#A6A6A6",
      fontWeight: "300",
      fontSize: "0.7em",
    },
    navClient:{
      fontSize:'1.5vw',
      fontWeight:'300',
      paddingRight:'25px'
    }
  },
});
