import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SubNavBar from './components/SubNavBar/SubNavBar';
import { groupRoutes } from './routes/GroupRoutes';
import Home from './components/pages/Home/Home';
import { CategoryProvider } from './context/CategoryContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
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
function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CategoryProvider>
          <NavBar />
          <div className='bodyContent'>
            <Routes>
              <Route path='/' element={<Home />} />
              {groupRoutes}
            </Routes>
          </div>
        </CategoryProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
