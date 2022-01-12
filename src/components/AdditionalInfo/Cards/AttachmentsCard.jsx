import { Box } from '@mui/material';
import cardStyles from './CardsStyle';
export default function AttachmentsCard() {
  const cStyles = cardStyles();
  return (
    <Box className={cStyles.card}>
      <Box component={'span'} sx={{ color: '#737373' }}>
        See the files attached to your activities or uploaded to this record
      </Box>
    </Box>
  );
}
