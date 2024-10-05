import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const LegalLetter = ({title,name,letterText,paragraphs}) => {
  return (
    <Box>
      <Typography variant={"h4"} sx={{mb:2}}>{title}</Typography>
      <Typography sx={{mb:1}}>Dear,{name}</Typography>
      {letterText &&  <Typography>{letterText}</Typography>}
      {paragraphs && paragraphs.map((p,index)=><Typography key={index} sx={{mb:1}}>{p}</Typography>)}
    </Box>
  );
};

export default LegalLetter;
