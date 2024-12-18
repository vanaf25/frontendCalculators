import {useEffect, useMemo} from 'react';
import { Box } from '@mui/material';
import TableName from "../TableName/TableName";
import Table from "../Table/Table";

const CalculationLabels = ({rowData,tableName }) => {
  const columnDefs = useMemo(() => [
    {
      headerName: 'Label',
      field: 'label',
      flex: 1,
      cellStyle: (params) => {
        if (params.value === 'Paint Siding Labor Cost' || params.value === 'Install Hardie Siding') {
          return { backgroundColor: 'darkgrey', color: 'white' };
        }
        return { backgroundColor: 'pink' };
      }
    },
    {
      headerName: 'Value',
      field: 'value',
      cellDataType: 'text',
      flex: 1
    }
  ], []);
  useEffect(() => {
    console.log(`rowData for ${tableName} :`,rowData);
  }, [rowData]);
  return (
    <Box>
      <TableName>{tableName}</TableName>
      <Box>
        <Table
          onCellValueChanged={(params)=>console.log('value changed!:',params)}
          rows={rowData}
          columns={columnDefs}
        />
      </Box>
    </Box>
  );
};

export default CalculationLabels;
