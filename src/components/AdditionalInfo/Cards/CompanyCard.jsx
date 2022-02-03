import cardStyles from './CardsStyle';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
export default function CompanyCard() {
  const cStyle = cardStyles();
  return (
    <Box className={cStyle.card}>
      <Typography sx={{ color: '#33333A', fontWeight: '600', fontFamily:`'Futura PT 2', 'Trebuchet MS', Verdana, Helvetica, sans-serif`}}>
        CORPORATE OFFICE
      </Typography>
      <Typography>19161 Harborgate Way</Typography>
      <Typography>Torrance, CA 90501</Typography>
      <Typography>(310) 533-3250</Typography>
      <a style={{ color: 'red' }} href=''>
        www.KingsHawaiian.com
      </a>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Link to='' style={{ color: 'red' }}>
        View All Contacts
      </Link>
    </Box>
  );
}
