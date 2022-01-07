import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SubNavBar from './components/SubNavBar/SubNavBar';
import { groupRoutes } from './routes/GroupRoutes';
import Home from './components/pages/Home/Home';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <SubNavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {groupRoutes}
      </Routes>
    </div>
  );
}

export default App;
