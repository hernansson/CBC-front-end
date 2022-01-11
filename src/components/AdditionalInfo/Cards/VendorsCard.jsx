import { Box, ListItemText, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import cardStyles from './CardsStyle';

export default function VendorsCard() {
  const cStyles = cardStyles();
  return (
    <Box className={cStyles.card}>
      <List className={cStyles.resetPaddings}>
        <ListItem>
          <ListItemText primary='Vendors' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Vendors 2' />
        </ListItem>
      </List>

      <p style={{ margin: 0 }}>&nbsp;</p>
      <Link to='' style={{ color: 'red' }}>
        View All Vendors
      </Link>
    </Box>
  );
}
