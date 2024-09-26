import {Paper} from '@mui/material';
import {Link} from "react-router-dom";

const Calculations = () => {
  const calculators=["Gutters","Walls",
    "laticalPanel","hotTubPad",
    "homeWrap","vinylSiding","corners","sheetSiding","soffit",
    "pergolaShade","freezeBoard","plankSiding","fascia",
    "stuccoWallCovering","brickWallCovering","porchCeiling","starFraming","fencing"];
  return (
    <Paper sx={{maxWidth:600,margin:"0 auto",p:2}}>
      <h1 style={{textAlign:"center"}}>All calculators({calculators.length})</h1>
      {calculators.map(el=>{
        return <Paper sx={{p:2,width:"80%",margin:"0 auto 10px",fontSize:25,textAlign:"center"}} key={el}>
          <Link to={`/calculators/${el}`}>
            {el}
          </Link>
        </Paper>
      })}
    </Paper>
  );
};

export default Calculations;
