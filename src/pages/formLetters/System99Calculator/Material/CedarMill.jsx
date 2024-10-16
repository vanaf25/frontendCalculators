import {useCallback} from "react";
import Table from "../../../../components/letters/Table/Table";
import Box from "@mui/material/Box";

const CedarMill = () => {
  const createColumns = useCallback(headerName => ([
    {
      headerName: headerName,
      field: 'item',
      flex: 4,
      cellStyle: { textAlign: 'left', backgroundColor: '#F6E9C3' }, // Background color for first column
    },
    {
      headerName: 'FAUX',
      field: 'quantity',
      flex: 1,
      cellStyle: { textAlign: 'left', backgroundColor: '#DDE4F4' }, // Background color for second column
    }
  ]), []);
  const generateRows=useCallback(
    ()=>([{item:"Per piece",quantity:0}]),[])
  const tables=[{
    columns:createColumns("Color Plus Cedar Mill 8 1/4 "),
    rows:generateRows()
  },{
    columns:createColumns("Cedar 8 1/4"),
    rows:generateRows()
  },{
    columns: createColumns("Smooth  8 1/4"),
    rows:generateRows()
  },{
    columns: createColumns("Beaded 8 1/4"),
    rows:generateRows()
  },{
    columns: createColumns("Colonel 8 1/4"),
    rows:generateRows()}];
  return (
    <Box sx={{mb:10}}>
      {tables.map(el=><Table
        key={Math.random()}
        withOutMargin
                             rows={el.rows}
                             columns={el.columns}/>)}
    </Box>
  );
};

export default CedarMill;
