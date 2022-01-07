import Grid from '@mui/material/Grid';
import AccountInfo from '../../AccountInfo/AccountInfo';
import MainPanel from '../../MainPanel/MainPanel';
import AdditionalInfo from '../../AdditionalInfo/AdditionalInfo';
export default function LeaveSystem() {
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ height: '92vh' }}>
      <Grid item xs={4} sm={3} md={3} sx={{ borderRight: '1px solid #D1D1D7' }}>
        <AccountInfo />
      </Grid>

      <Grid
        item
        xs={4}
        sm={5}
        md={6}
        sx={{ backgroundColor: '#f8f7fb', borderRight: '1px solid #D1D1D7' }}
      >
        <MainPanel />
      </Grid>

      <Grid item xs={4} sm={0} md={3}>
        <AdditionalInfo />
      </Grid>
    </Grid>
  );
}
