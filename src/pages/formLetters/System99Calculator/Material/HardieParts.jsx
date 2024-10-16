import {useMemo} from 'react';
import Table from "../../../../components/letters/Table/Table";
import {Grid} from "@mui/material";

const HardieParts = () => {
  const columnDefs = useMemo(() => [
    {
      headerName: 'Item',
      field: 'item',
      flex: 4, // 80% of the width
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Quantity',
      field: 'quantity',
      flex: 1, // 20% of the width
      cellStyle: { textAlign: 'left' }
    }
  ], []);
  const rowData = useMemo(() => [
    { item: 'Hardie trim 1x2x12', quantity: 0 },
    { item: 'Hardie trim 1x4x12', quantity: 0 },
    { item: 'Hardie trim 1x6x12', quantity: 0 },
    { item: 'Hardie trim 1x8x12', quantity: 0 },
    { item: 'Hardie trim 1x12x12', quantity: 0 },
    { item: 'Painters caulk white', quantity: 0 },
    { item: 'Painters caulk clear', quantity: 0 },
    { item: 'Mortar repair caulk', quantity: 0 },
    { item: 'Z Flashing 1/2 by 5/8 by 1/2', quantity: 0 },
    { item: 'Z Flashing 1/2 by 3/8 by 1/2', quantity: 0 },
    { item: 'L Flashing 2" 1/2 by 2" 1/2', quantity: 0 },
    { item: 'Over window flashing', quantity: 0 },
    { item: 'Turnback flashing', quantity: 0 },
    { item: 'Exterior trim nails 16 Gage 2" 1/2 per box', quantity: 0 },
    { item: 'Exterior nail gun siding nails per box', quantity: 0 },
    { item: 'T 50 staples per Box', quantity: 0 },
    { item: 'Exterior screws', quantity: 0 },
  ], []);
  const columnDefs2 = useMemo(() => [
    {
      headerName: 'Hardie Color Plus Parts',
      field: 'item',
      flex: 4,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Quantity',
      field: 'quantity',
      flex: 1,
      cellStyle: { textAlign: 'left' }
    }
  ], []);
  const rowData2 = useMemo(() => [
    { item: 'Hardie trim 1x2x12', quantity: 0 },
    { item: 'Hardie trim 1x4x12', quantity: 0 },
    { item: 'Hardie trim 1x6x12', quantity: 0 },
    { item: 'Hardie trim 1x8x12', quantity: 0 },
    { item: 'Hardie trim 1x12x12', quantity: 0 },
    { item: 'Color plus BASE color match caulk', quantity: 0 },
    { item: 'Color plus TRIM color match caulk', quantity: 0 },
    { item: 'Mortar repair caulk', quantity: 0 },
    { item: 'Color plus base touch up kit', quantity: 0 },
    { item: 'Color plus trim touch up kit', quantity: 0 },
    { item: 'Z Flashing 1/2 by 5/8 by 1/2', quantity: 0 },
    { item: 'Z Flashing 1/2 by 3/8 by 1/2', quantity: 0 },
    { item: 'L Flashing 2" 1/2 by 2" 1/2', quantity: 0 },
    { item: 'Over window flashing', quantity: 0 },
    { item: 'Turnback flashing', quantity: 0 },
    { item: 'Exterior trim nails 16 Gage 2" 1/2 per box', quantity: 0 },
    { item: 'Exterior nail gun siding nails per box', quantity: 0 },
    { item: 'T 50 staples per Box', quantity: 0 },
    { item: '3 1/2" Exterior screws 1 lb box', quantity: 0 },
  ], []);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} item>
          <Table columns={columnDefs} rows={rowData}/>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Table columns={columnDefs2} rows={rowData2}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default HardieParts;
