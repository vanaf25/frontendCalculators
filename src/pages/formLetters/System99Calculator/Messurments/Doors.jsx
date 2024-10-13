import { useMemo } from 'react';
import { TextField, Box } from '@mui/material'; // Import TextField and Box from Material-UI
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "../../../../components/letters/Table/Table";

const Doors = () => {
  const columns = useMemo(() => ([
    {
      headerName: 'Under 40 inches wide',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'under40InchesWide',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Between 40" and 78 inches',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'between40And78Inches',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Over 78 inches',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'over78Inches',
      editable: true,
      flex: 1,
    }
  ]), []);

  const rows = useMemo(() => ([
    { under40InchesWide: null, between40And78Inches: null, over78Inches: null },
    { under40InchesWide: null, between40And78Inches: null, over78Inches: null },
    { under40InchesWide: null, between40And78Inches: null, over78Inches: null },
  ]), []);

  return (
    <div>
      <TableName>
        Doors
      </TableName>
      <Table columns={columns} rows={rows} />
      <Box mt={2} mb={2}>
        <TextField
          label="Garage doors"
          variant="outlined"
        />
      </Box>
    </div>
  );
};

export default Doors;
