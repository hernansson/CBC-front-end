import MainProfile from './MainProfile';
import AboutAccount from './AboutAccount';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
export default function AccountInfo() {
  return (
    <Box>
      <Box sx={{ borderBottom: '1px solid #D1D1D7', padding: '1vw' }}>
        <MainProfile />
      </Box>
      <Box sx={{ borderBottom: '1px solid #99999A', padding: '1vw' }}>
        <AboutAccount />
      </Box>

      <Box sx={{ color: 'black', padding: '1vw 2vw' }}>
        <span>«</span> Back to Account Search
      </Box>
    </Box>
  );
}
