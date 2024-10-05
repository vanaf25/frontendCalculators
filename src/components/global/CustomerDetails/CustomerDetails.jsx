import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const CustomerDetails = ({customer,withOutTitle,title,...rest}) => {
    return (
        <Box sx={{mb:1}} {...rest}>
          {!withOutTitle && <Typography variant={"h5"} sx={{mb:1}}>{title ? title :"Customer info"}</Typography>}
          {Object.entries(customer)
            .map(el=><Typography key={el[0]}>{el[0]}: {el[1]}</Typography>)}
          {/*  <Typography>Name: {name}</Typography>
            <Typography>Address: {address}</Typography>
            {customer.city ?
                <Typography>{customer.city}, {customer.state}. {customer.zip}</Typography>:""
            }
            <Typography>Phone: {phone}</Typography>
            <Typography>Email: {email}</Typography>*/}

        </Box>
    );
};

export default CustomerDetails;
