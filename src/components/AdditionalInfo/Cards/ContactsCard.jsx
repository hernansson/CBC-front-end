import { Box, Typography } from '@material-ui/core';
import cardStyles from './CardsStyle';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

export default function ContactsCard() {
  const cStyle = cardStyles();

  //Ideally a list of contacts and map it
  return (
    <Box className={cStyle.card}>
      <Box sx={{ textAlign: 'left' }}>
        <Typography
          component='span'
          style={{ fontWeight: 600 }}
        >{`Lani Baker`}</Typography>
        <Box
          component='span'
          sx={{ color: '#99999a' }}
        >{` | Sr. Manager, Benefits & Compensation`}</Box>
      </Box>
      <Box component='span' sx={{ display: 'flex' }}>
        <CallIcon />
        <Box component='span' style={{ color: '#99999a' }}>
          {`Phone: ${'0080650560'}`}
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <EmailIcon />
        <Box component='span' style={{ color: '#99999a' }}>
          {`Contact Email: `}
        </Box>
      </Box>
      <Box component='span' style={{ color: 'red' }}>
        {` ${'Lani.Baker@kingshawaiian.com'}`}
      </Box>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Box sx={{ textAlign: 'left' }}>
        <Typography
          component='span'
          style={{ fontWeight: 600 }}
        >{`Marlene Sanchez`}</Typography>
        <Box component='span' sx={{ color: '#99999a' }}>{` | SHR Analyst`}</Box>
      </Box>
      <Box component='span' sx={{ display: 'flex' }}>
        <CallIcon />
        <Box component='span' style={{ color: '#99999a' }}>
          {`Phone: ${'0080650560'}`}
        </Box>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <EmailIcon />
        <Box component='span' style={{ color: '#99999a' }}>
          {`Contact Email: `}
        </Box>
      </Box>
      <Box component='span' style={{ color: 'red' }}>
        {` ${'Marlene.Sanchez@kingshawaiian.com'}`}
      </Box>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Link to='' style={{ color: 'red' }}>
        View All Contacts
      </Link>
    </Box>
  );
}
