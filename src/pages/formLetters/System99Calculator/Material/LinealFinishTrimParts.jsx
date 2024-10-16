import { useCallback, useMemo } from "react";
import Table from "../../../../components/letters/Table/Table"; // Adjust the path as needed
import Box from "@mui/material/Box";

const LinealFinishTrimParts = () => {
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

  const generateRowsForFirstTable = useCallback(() => ([
    { item: 'Lineal 3 1/2', quantity: 0 },
    { item: "Finish trim", quantity: 0 }
  ]), []);

  const generateRowsForSecondTable = useCallback(() => ([
    {item:"Lineal 5 1/2",quantity: 0},
    { item: 'Finish trim', quantity: 0 }
  ]), []);
  const tables = useMemo(() => ([
    {
      columns: createColumns("Lineal Parts"),
      rows: generateRowsForFirstTable()
    },
    {
      columns: createColumns("Trim Parts"),
      rows: generateRowsForSecondTable()
    }
  ]), [createColumns, generateRowsForFirstTable, generateRowsForSecondTable]);
  console.log('moun!');
  return (
    <div>
          {tables.map((table, index) => (
            <Box key={index} sx={{ height: 93 }}>
              <Table
                withOutMargin
                columns={table.columns}
                rows={table.rows}
              />
            </Box>
          ))}
    </div>
  );
};

export default LinealFinishTrimParts;
