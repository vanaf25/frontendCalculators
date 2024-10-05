import { Typography } from '@mui/material';

const Paragraphs = ({sections}) => {
  return (
    <div>
      {sections.map(section=><Typography sx={{mb:1}} key={Math.random()}>{section}</Typography>)}
    </div>
  );
};

export default Paragraphs;
