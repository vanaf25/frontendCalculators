import {Box, Typography} from "@mui/material";

const TableName = ({children}) => {
  return (
    <Box sx={{backgroundColor: '#4caf50', padding: '8px', textAlign: 'center'}}>
      <Typography variant="h6" component="h2" sx={{color: '#fff'}}>
        {children}
      </Typography>
    </Box>
  );
};

export default TableName;
