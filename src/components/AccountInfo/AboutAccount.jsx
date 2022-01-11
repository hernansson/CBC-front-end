import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import CallIcon from '@mui/icons-material/Call';
import FaxIcon from '@mui/icons-material/Fax';
export default function AboutAccount() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: '1vw',
      }}
    >
      <h2 variant='h2' style={{ fontWeight: '300', margin: 0 }}>
        About this Account
      </h2>
      <Box component='span'>Benefit Portal Url:</Box>
      <a href='' style={{ color: 'red' }}>
        {'www.KHKokua.com'}
      </a>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Box component='span'>Benefit Portal Url:</Box>
      <a href='' style={{ color: 'red' }}>
        {'www.KHKokua.com'}
      </a>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Box component='span'>
        Account Manager:
        <Box component='span' style={{ color: '#99999a' }}>
          {'Harmony Diaz'}
        </Box>
      </Box>
      <Box component='span'>
        Consultant:
        <Box component='span' style={{ color: '#99999a' }}>
          {'CBC management'}
        </Box>
      </Box>
      <Box component='span'>
        Account Contact:
        <Box component='span' style={{ color: '#99999a' }}>
          {'Judy Burke'}
        </Box>
      </Box>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Box component='span' style={{ display: 'flex' }}>
        <CallIcon />
        Phone:
        <Box component='span' style={{ color: '#99999a' }}>
          {` ${'(888) 123-4567'}`}
        </Box>
      </Box>
      <Box component='span' style={{ display: 'flex' }}>
        <FaxIcon />
        Fax:
        <Box component='span' style={{ color: '#99999a' }}>
          {`${'(888) 123-4567'}`}
        </Box>
      </Box>
    </Box>
  );
}
