import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const EstimatorDetails = ({estimatorDetails,...props}) => {
    return (
        <Box sx={{mb:1}} {...props}>
            <Typography variant={"h5"} sx={{mb:1}}> Estimator info</Typography>
            <Typography>Name: {estimatorDetails.signee}</Typography>
            <Typography>Phone: {estimatorDetails.companyPhone}</Typography>
            <Typography>Email: {estimatorDetails.companyEmail}</Typography>
        </Box>
    );
};
export default EstimatorDetails;
