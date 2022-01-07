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
      <h2
        variant='h2'
        style={{ fontSize: '1.875vw', fontWeight: '300', margin: 0 }}
      >
        About this Account
      </h2>
      <span>Benefit Portal Url:</span>
      <a href='' style={{ color: 'red' }}>
        www.KHKokua.com
      </a>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <span>Benefit Portal Url:</span>
      <a href='' style={{ color: 'red' }}>
        www.KHKokua.com
      </a>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <span>
        Account Manager:
        <span style={{ color: '#99999a' }}>{'Harmony Diaz'}</span>
      </span>
      <span>
        Consultant:
        <span style={{ color: '#99999a' }}>{'CBC management'}</span>
      </span>
      <span>
        Account Contact:
        <span style={{ color: '#99999a' }}>{'Judy Burke'}</span>
      </span>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <span style={{ display: 'flex' }}>
        <CallIcon />
        Phone:
        <span style={{ color: '#99999a' }}>{'Judy Burke'}</span>
      </span>
      <span style={{ display: 'flex' }}>
        <FaxIcon />
        Fax:
        <span style={{ color: '#99999a' }}>{'Judy Burke'}</span>
      </span>
    </Box>
  );
}
