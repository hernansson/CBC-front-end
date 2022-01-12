import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SubNavBar from './components/SubNavBar/SubNavBar';
import { groupRoutes } from './routes/GroupRoutes';
import Home from './components/pages/Home/Home';
import { CategoryProvider } from './context/CategoryContext';
function App() {
  return (
    <div className='App'>
      <CategoryProvider>
        <NavBar />
        <SubNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          {groupRoutes}
        </Routes>
      </CategoryProvider>
    </div>
  );
}

export default App;
