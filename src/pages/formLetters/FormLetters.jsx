import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const FormLetters = () => {
  const letters=["accounting","legal","officeManager","productionPaperWork","salesManager"]
  return (
    <Box sx={{maxWidth:900,margin:"10px auto"}}>
      {letters.map(el=>{
        return <Paper sx={{p:2,width:"80%",margin:"0 auto 10px",fontSize:25,textAlign:"center"}} key={el}>
          <Link to={`/formLetters/${el}`}>
            {el}
          </Link>
        </Paper>
      })}
    </Box>
  );
};

export default FormLetters;
