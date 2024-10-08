import Box from '@mui/material/Box';

const BorderedCell = ({children}) => {
  return (
    <Box sx={{border:"1px solid black",p:0.5}}>
      {children}
    </Box>
  );
};

export default BorderedCell;
