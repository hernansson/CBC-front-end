import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import cardStyles from './CardsStyle';
export default function SupportTicketsCard() {
  const cStyle = cardStyles();
  return (
    <Box className={cStyle.card}>
      <Box component={'span'} sx={{ color: '#737373' }}>
        For future Development
      </Box>

      <p style={{ margin: 0 }}>&nbsp;</p>
      <Link to='' style={{ color: 'red' }}>
        View All Contacts
      </Link>
    </Box>
  );
}
