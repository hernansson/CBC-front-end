import React from 'react';
import mainStyles from '../../MainStyles';
import { Box, Typography } from '@mui/material';
export default function Filters() {
  const mStyles = mainStyles();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '15px' }}>
      <Typography color={'#737373'}>Filter By:</Typography>
      <Box className={mStyles.ClearSelectContainer} sx={{ width: '146px' }}>
        <select class={mStyles.bounlessSelect} style={{ width: '160px' }}>
          <option value='Upcoming' selected=''>
            Upcoming (19/22)
          </option>
          <option value='Current'>Current (2/22)</option>
          <option value='Past'>Past (1/22)</option>
        </select>
      </Box>
      <Box className={mStyles.ClearSelectContainer} sx={{ width: '110px' }}>
        <select class={mStyles.bounlessSelect} style={{ width: '125px' }}>
          <option value='All' selected=''>
            All Users
          </option>
          <option value='Producers'>Producers</option>
          <option value='Service Reps'>Service Reps</option>
          <option value='HR Managers'>HR Managers</option>
        </select>
      </Box>
    </Box>
  );
}
