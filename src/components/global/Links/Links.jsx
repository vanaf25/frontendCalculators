import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Links = ({links,to}) => {
  return (
    <div>
      {links.map(el=>{
        return <Paper sx={{p:2,width:"80%",margin:"0 auto 10px",fontSize:25,textAlign:"center"}} key={el}>
          <Link to={`/${to}/${el}`}>
            {el}
          </Link>
        </Paper>
      })}
    </div>
  );
};

export default Links;
