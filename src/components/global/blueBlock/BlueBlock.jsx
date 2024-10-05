import { Typography } from '@mui/material';

const BlueBlock = ({text,fullWidth}) => {
  return (
    <Typography sx={{display:fullWidth ? "block"
        :"inline-block",margin:"0 5px",background:"lightBlue",
      border:"1px solid black",p:1}} >
       {text}
    </Typography>
  );
};

export default BlueBlock;
