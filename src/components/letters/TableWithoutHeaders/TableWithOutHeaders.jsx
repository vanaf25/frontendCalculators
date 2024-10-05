import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

// Table Data

// Reusable Table Component Without Headers
const TableWithOutHeaders = ({ rows,...props }) => {
  return (
    <TableContainer component={Paper} {...props}>
      <Table style={{ borderCollapse: 'collapse' }}>
        {/* Table Body without Headers */}
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell style={{ border: '1px solid black', fontWeight: 'bold',textAlign:"center" }}>
                {row.field}
              </TableCell>
              <TableCell style={row.value ? { border: '1px solid black',textAlign:"center" }:{}}>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableWithOutHeaders;
