import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';
export default function CompanyCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '1vw',
      }}
    >
      <span style={{ color: '#33333A', fontWeight: '600' }}>
        CORPORATE OFFICE
      </span>
      <span>19161 Harborgate Way</span>
      <span>Torrance, CA 90501</span>
      <span>(310) 533-3250</span>
      <a href=''>www.KingsHawaiian.com</a>
      <p style={{ margin: 0 }}>&nbsp;</p>
      <a href='' style={{ color: 'red' }}>
        View All Contacts
      </a>
    </Box>
  );
}
