import { Typography, Box } from '@mui/material';
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
      <Typography variant='h2' style={{ fontWeight: '300', margin: 0 }}>
        About this Account
      </Typography>
      <Typography color='black'>Benefit Portal Url:</Typography>
      <a href='' style={{ color: 'red' }}>
        {'www.KHKokua.com'}
      </a>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Typography color='black'>Benefit Portal Url:</Typography>
      <a href='' style={{ color: 'red' }}>
        {'www.KHKokua.com'}
      </a>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Typography color='black'>
        Account Manager:
        <Typography component='span' style={{ color: '#99999a' }}>
          {'Harmony Diaz'}
        </Typography>
      </Typography>
      <Typography color='black'>
        Consultant:
        <Box component='span' style={{ color: '#99999a' }}>
          {'CBC management'}
        </Box>
      </Typography>
      <Typography color='black' component='span'>
        Account Contact:
        <Typography component='span' style={{ color: '#99999a' }}>
          {'Judy Burke'}
        </Typography>
      </Typography>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Box component='span' style={{ display: 'flex' }}>
        <CallIcon />
        Phone:
        <Typography component='span' style={{ color: '#99999a' }}>
          {` ${'(888) 123-4567'}`}
        </Typography>
      </Box>
      <Box component='span' style={{ display: 'flex' }}>
        <FaxIcon />
        Fax:
        <Typography component='span' style={{ color: '#99999a' }}>
          {`${'(888) 123-4567'}`}
        </Typography>
      </Box>
    </Box>
  );
}
