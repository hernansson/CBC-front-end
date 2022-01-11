import { Box, ListItemText, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import cardStyles from './CardsStyle';
export default function CarriersCard() {
  const cStyles = cardStyles();
  return (
    <Box className={cStyles.card}>
      <List className={cStyles.resetPaddings}>
        <ListItem>
          <ListItemText primary='Anthem' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Aethna' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Harvard Pilgrim' />
        </ListItem>
        <ListItem>
          <ListItemText primary='MetLife' />
        </ListItem>
        <ListItem>
          <ListItemText primary='Cigna' />
        </ListItem>
      </List>

      <p style={{ margin: 0 }}>&nbsp;</p>
      <Link to='' style={{ color: 'red' }}>
        View All Contacts
      </Link>
    </Box>
  );
}
