import { Box, ListItemText, List, ListItem } from '@material-ui/core';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import cardStyles from './CardsStyle';

export default function VendorsCard() {
  const cStyles = cardStyles();
  return (
    <Box className={cStyles.card}>
      <List className={cStyles.resetPaddings}>
        <ListItem>
          <Typography>Vendor 1</Typography>
        </ListItem>
        <ListItem>
          <Typography>Vendor 2</Typography>
        </ListItem>
      </List>

      <p style={{ margin: 0 }}>&nbsp;</p>
      <Link to='' style={{ color: 'red' }}>
        View All Vendors
      </Link>
    </Box>
  );
}
