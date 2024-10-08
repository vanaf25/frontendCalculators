import { TextField } from '@mui/material';

const BlueBlock = ({fullWidth}) => {
  return (
    <TextField fullWidth={fullWidth}
               defaultSize={"small"}
               size="small"
               id="standard-basic" label="Standard" variant="standard" />
  );
};

export default BlueBlock;
