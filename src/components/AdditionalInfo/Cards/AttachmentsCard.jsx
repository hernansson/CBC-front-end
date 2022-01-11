import { Box } from '@mui/material';
import cardStyles from './CardsStyle';
export default function AttachmentsCard() {
  const cStyles = cardStyles();
  return (
    <Box className={cStyles.card}>
      See the files attached to your activities or uploaded to this record
    </Box>
  );
}
