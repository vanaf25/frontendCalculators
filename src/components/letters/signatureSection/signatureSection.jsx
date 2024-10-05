import { Box, Grid, Typography } from '@mui/material';

const SignaturesSection = (props) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Grid container spacing={4}>
        {/* Signature of Client */}
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={1}>
              <Typography>{props.client ? props.client:"Signature of client"}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Box sx={{ borderBottom: '1px solid #cfd8dc', width: '100%' }} />
            </Grid>
            <Grid item xs={1}>
              <Typography>Date</Typography>
            </Grid>
            <Grid item xs={5}>
              <Box sx={{ borderBottom: '1px solid #cfd8dc', width: '100%' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Company Phone and Address */}
      {props.companyPhone ? <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
        <Grid item>
          <Typography>Company Phone: {props.companyPhone}</Typography>
        </Grid>
        <Grid item>
          <Typography>Company Address: {props.companyAddress}</Typography>
        </Grid>
      </Grid>:""}
    </Box>
  );
};
export default SignaturesSection
