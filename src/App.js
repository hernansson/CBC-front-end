import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AccountHomeLG from './pages/AccountHomeLG/AccountHomeLG';
import AccountHomeSG from './pages/AccountHomeSG/AccountHomeSG';
import LeaveSystem from './pages/LeaveSystem/LeaveSystem';
import Home from './pages/Home/Home';
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='largegroup' element={<AccountHomeLG />} />
        <Route path='smallgroup' element={<AccountHomeSG />} />
        <Route path='leaves' element={<LeaveSystem />} />
      </Routes>
    </div>
  );
}

export default App;
