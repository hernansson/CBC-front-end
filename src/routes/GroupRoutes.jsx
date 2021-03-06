import { Route } from 'react-router-dom';
import AccountHomeLG from '../components/pages/AccountHomeLG/AccountHomeLG';
import AccountHomeSG from '../components/pages/AccountHomeSG/AccountHomeSG';
import LeaveSystem from '../components/pages/LeaveSystem/LeaveSystem';

export const groupRoutes = [
  <Route path='largegroup' element={<AccountHomeLG />} />,
  <Route path='smallgroup' element={<AccountHomeSG />} />,
  <Route path='leaves' element={<LeaveSystem />} />,
];
