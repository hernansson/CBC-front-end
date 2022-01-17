import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SubNavBar from './components/SubNavBar/SubNavBar';
import { groupRoutes } from './routes/GroupRoutes';
import Home from './components/pages/Home/Home';
import { CategoryProvider } from './context/CategoryContext';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  typography: {
    fontFamily: 'Futura PT',
    body3: {
      color: 'red',
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
