import { Box } from '@material-ui/core';
import cardStyles from './CardsStyle';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export default function CompanyCard() {
  const cStyle = cardStyles();
  return (
    <Box className={cStyle.card}>
      <Box component='span' style={{ color: '#33333A', fontWeight: '600' }}>
        CORPORATE OFFICE
      </Box>
      <Box component='span'>19161 Harborgate Way</Box>
      <Box component='span' an>
        Torrance, CA 90501
      </Box>
      <Box component='span'>(310) 533-3250</Box>
      <a href=''>www.KingsHawaiian.com</a>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <Link to='' style={{ color: 'red' }}>
        View All Contacts
      </Link>
    </Box>
  );
}
