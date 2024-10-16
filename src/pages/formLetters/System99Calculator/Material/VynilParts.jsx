import {useCallback, useMemo} from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Table from "../../../../components/letters/Table/Table";
import Box from "@mui/material/Box";
import LinealFinishTrimParts from "./LinealFinishTrimParts";

const VinylPartsTable = () => {
  const columnDefs = useMemo(() => [
    {
      headerName: 'Item #',
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
  ], []);
  const rowData = useMemo(() => [
    { item: 'J Channel', quantity: 0 },
    { item: 'Outside corner', quantity: 0 },
    { item: 'Inside corner', quantity: 0 },
    { item: 'Siding starter', quantity: 0 },
    { item: 'Vinyl siding BASE color match caulk', quantity: 0 },
    { item: 'Vinyl siding TRIM color match caulk', quantity: 0 },
    { item: 'Quad Caulk white', quantity: 0 },
    { item: 'Quad Caulk Clear', quantity: 0 },
    { item: 'Mortar Repair Caulk', quantity: 0 },
    { item: 'Vinyl Siding nails per box', quantity: 0 },
    { item: 'T 50 staples per box', quantity: 0 },
  ], []);
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

  const generateRows = useCallback(() => ([
    { item: 'Per Piece', quantity: 0 }
  ]), []);

  // Define your tables with respective headers
  const tables = useMemo(() => ([
    { columns: createColumns("Prodigy Double 6"), rows: generateRows() },
    { columns: createColumns("Prodigy Dutch lap"), rows: generateRows() },
    { columns: createColumns("Prodigy Single 7"), rows: generateRows() },
  ]), [createColumns, generateRows]);

  return (
    <div>
      <Table
        rowData={rowData}
        columnDefs={columnDefs} />
      <Box sx={{mb:2}}>
        {tables.map((table, index) => (
          <Box key={index} sx={{ height: 93 }}>
            <Table
              columns={table.columns}
              rows={table.rows}
            />
          </Box>
        ))}
      </Box>
    <LinealFinishTrimParts/>
    </div>
  );
};

export default VinylPartsTable;
