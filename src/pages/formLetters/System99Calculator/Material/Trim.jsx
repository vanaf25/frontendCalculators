import {useCallback, useMemo} from "react";
import Table from "../../../../components/letters/Table/Table";
import {Grid} from "@mui/material";
import TableName from "../../../../components/letters/TableName/TableName";
import Box from "@mui/material/Box";

const Trim = () => {
  const cedarColumnDefs = useMemo(() => [
    {
      headerName: 'Cedar Trim',
      field: 'item',
      flex: 4,
      cellStyle: { textAlign: 'left', backgroundColor: '#F6E9C3' }, // Similar to the background color in the image
    },
    {
      headerName: 'FAUX',
      field: 'quantity',
      flex: 1,
      cellStyle: { textAlign: 'left', backgroundColor: '#DDE4F4' }, // Similar to the background color in the image
    }
  ], []);
  const cedarRowData = useMemo(() => [
    { item: '1x2x12', quantity: 0 },
    { item: '1x4x12', quantity: 0 },
    { item: '1x6x12', quantity: 0 },
    { item: '1x8x12', quantity: 0 },
    { item: '1x12x12', quantity: 0 }
  ], []);
  const pineColumnDefs = useMemo(() => [
    {
      headerName: 'Pine Trim',
      field: 'item',
      flex: 4,
      cellStyle: { textAlign: 'left', backgroundColor: '#F6E9C3' }, // Similar to the background color in the image
    },
    {
      headerName: 'FAUX',
      field: 'quantity',
      flex: 1,
      cellStyle: { textAlign: 'left', backgroundColor: '#DDE4F4' }, // Similar to the background color in the image
    }
  ], []);
  const pineRowData = useMemo(() => [
    { item: '1x2x12', quantity: 0 },
    { item: '1x4x12', quantity: 0 },
    { item: '1x6x12', quantity: 0 },
    { item: '1x8x12', quantity: 0 },
    { item: '1x12x12', quantity: 0 }
  ], []);
  const woodingColumnDefs = useMemo(() => [
    {
      headerName: 'Wood Siding Parts',
      field: 'item',
      flex: 4,
      cellStyle: { textAlign: 'left', backgroundColor: '#F6E9C3' }, // Background color similar to previous tables
    },
    {
      headerName: 'FAUX',
      field: 'quantity',
      flex: 1,
      cellStyle: { textAlign: 'left', backgroundColor: '#DDE4F4' }, // Background color similar to previous tables
    }
  ], []);
  const woodingRowData = useMemo(() => [
    { item: 'Painters caulk white', quantity: 0 },
    { item: 'Painters caulk clear', quantity: 0 },
    { item: 'Quad Caulk white', quantity: 0 },
    { item: 'Quad Caulk clear', quantity: 0 },
    { item: 'Mortar repair caulk', quantity: 0 },
    { item: 'Z Flashing 1/2 by 5/8 by 1/2', quantity: 0 },
    { item: 'Z Flashing 1/2 by 3/8 by 1/2', quantity: 0 },
    { item: 'Over window flashing', quantity: 0 },
    { item: 'Turnback flashing', quantity: 0 },
    { item: 'Exterior trim nails 16 Gage 2" 1/2', quantity: 0 },
    { item: '2" Exterior screws 1 lb box', quantity: 0 },
    { item: '3 1/2" Exterior screws 1 lb box', quantity: 0 },
    { item: '2 1/2" Loose hand nails 5 lb box', quantity: 0 },
    { item: 'Exterior nail gun nails per box', quantity: 0 },
    { item: 'T 50 staples per box', quantity: 0 }
  ], []);
  const createColumns=useCallback(headerName=>([
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
    }]),[])
  const generateRows=useCallback(()=>([{ item: 'Per Piece', quantity: 0 }]),[])
  const tables=useMemo(()=>([
    {columns:createColumns("105 pattern"),rows:generateRows(),},
    {columns:createColumns("Ship lap"), rows:generateRows(),}
    ,{columns: createColumns("T111  8 Inch OC,"),rows:generateRows(),}
    ,{columns:createColumns("T111  4 Inch OC"),rows:generateRows(),}]),[])
  console.log(tables);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Table columns={cedarColumnDefs} rows={cedarRowData}/>
          <Table columns={pineColumnDefs} rows={pineRowData}/>
          <TableName>
            WoodingSiding
          </TableName>
          <Box sx={{mb:2}}>
            {tables.map((table,index)=>
              <Box key={index} sx={{height:93}}>
                <Table
                  columns={table.columns}
                  rows={table.rows}
                />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Table columns={woodingColumnDefs} rows={woodingRowData}/>
        </Grid>
      </Grid>

    </div>
  );
};

export default Trim;
