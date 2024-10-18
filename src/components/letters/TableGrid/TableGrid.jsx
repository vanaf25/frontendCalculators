import {Grid} from "@mui/material";
import TableWithFalseColumn from "../TableWithFalseColumn/TableWithFalseColumn";
const TableGrid = ({tables}) => {
  return (
      <Grid container spacing={2}>
        {tables.map((table,index)=><Grid key={index} item sm={Math.round(12/tables.length)} xs={12}>
          {table.map(el=><TableWithFalseColumn
            key={el.name}
            itemHeaderName={el.name}
            withOutMargin rows={el.rows}/>)}
        </Grid>)}
      </Grid>);
};

export default TableGrid;
