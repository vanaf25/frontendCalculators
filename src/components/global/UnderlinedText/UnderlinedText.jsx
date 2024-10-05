import { Typography } from '@mui/material';

const UnderlinedText = ({children,padding}) => {
  return (
      <span style={{display:"inline-block",
        padding:padding ? `0px ${padding}px`: "0 100px",borderBottom:"1px solid black"}}>
        <Typography>{children}</Typography>
      </span>
  );
};
export default UnderlinedText;
