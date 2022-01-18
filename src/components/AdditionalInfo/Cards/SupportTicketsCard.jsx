import { Box } from '@material-ui/core';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import cardStyles from './CardsStyle';
export default function SupportTicketsCard() {
  const cStyle = cardStyles();
  return (
    <Box className={cStyle.card}>
      <Typography>For future Development</Typography>

      <p style={{ margin: 0 }}>&nbsp;</p>
      <Link to='' style={{ color: 'red' }}>
        View All Contacts
      </Link>
    </Box>
  );
}
