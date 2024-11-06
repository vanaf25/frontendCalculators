import { useMemo } from 'react';
import { Box } from '@mui/material';
import TableName from "../../../../../components/letters/TableName/TableName";
import Table from "../../../../../components/letters/Table/Table";

const CalculationLabels = ({ totalData }) => {
  // Prepare row data for ag-Grid
  const rowData = [
    { label: 'Siding Square Footage (D)', value: totalData.sidingSquareFootage },
    ...totalData.freezeBoard.map((item, index) => ({ label: `Freeze Board 1x4 (Part ${index + 1})`, value: item })),
    ...totalData.hardieHandNails.map((item, index) => ({ label: `Hardie Hand Nails (Part ${index + 1})`, value: item.toFixed(2) })),
    { label: 'Hardie Color Match Trim', value: totalData.hardieColorMatchTrim.toFixed(2) },
    { label: 'Square Foot per Item', value: totalData.squareFootPerItem },
    { label: 'Quantity Needed', value: totalData.quantityNeeded.toFixed(2) },
    { label: 'Number of Nails Needed', value: totalData.numberOfNailsNeeded.toFixed(2) },
    { label: 'Number of Boxes', value: totalData.numberOfBoxes },
    { label: 'Siding Linear Footage', value: totalData.sidingLinearFootage },
    { label: 'Hardie Color Match Base', value: totalData.hardieColorMatchBase.toFixed(2) },
    ...totalData.hardieCoilNails.map((item, index) => ({ label: `Hardie Coil Nails (Part ${index + 1})`, value: item.toFixed(2) })),
    { label: 'Paint Siding Labor Cost', value: totalData.paintSidingLaborCost.toFixed(2) },
    { label: 'Install Hardie Siding', value: totalData.installHardieSiding.toFixed(2) },
    { label: 'Siding Labor Cost', value: totalData.sidingLaborCost.toFixed(2) },
    { label: 'OSB and Plywood Labor', value: totalData.osbAndPlywoodLabor.toFixed(2) },
    { label: 'Double Six', value: totalData.doubleSix },
    { label: 'Dutch Lap', value: totalData.dutchLap },
    { label: 'Seven Inch', value: totalData.sevenInch },
    { label: 'Number of 5.25 Inch Planks', value: totalData.numberOf5InchPlanks },
    { label: 'Number of 8.24 Inch Planks', value: totalData.numberOf8InchPlanks },
    { label: 'Number of 11.5 Inch Planks', value: totalData.numberOf11InchPlanks },
  ];

  // Column definitions for ag-Grid
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

  return (
    <Box>
      <TableName>Total Calculations</TableName>
      <Box>
        <Table
          rows={rowData}
          columns={columnDefs}
        />
      </Box>
    </Box>
  );
};

export default CalculationLabels;
