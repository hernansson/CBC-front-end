import { Route } from 'react-router-dom';
import AccountHomeLG from '../pages/AccountHomeLG/AccountHomeLG';
import AccountHomeSG from '../pages/AccountHomeSG/AccountHomeSG';
import LeaveSystem from '../pages/LeaveSystem/LeaveSystem';

export const groupRoutes = [
  <Route path='largegroup' element={<AccountHomeLG />} />,
  <Route path='smallgroup' element={<AccountHomeSG />} />,
  <Route path='leaves' element={<LeaveSystem />} />,
];
