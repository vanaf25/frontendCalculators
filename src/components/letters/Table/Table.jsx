import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Reusable Table Component with Borders
const ReusableTable = ({ columns, rows }) => {
  return (
    <TableContainer sx={{mb:1}} component={Paper}>
      <Table style={{ borderCollapse: 'collapse' }}>
        {/* Table Header */}
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                style={{ border: '1px solid black', fontWeight: 'bold',textAlign:"center" }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {/* Table Body */}
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, colIndex) => (
                <TableCell
                  key={colIndex}
                  style={{ border: '1px solid black',textAlign:"center",padding:"5px"}}
                >
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
