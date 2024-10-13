import { useMemo, useState } from 'react';
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "../../../../components/letters/Table/Table";
import lengthAndWidthColumns from "../../../../consts/LengthAndWidthColumns";
import { TextField, Box } from '@mui/material';

const Concrete = () => {
  const [thickness1, setThickness1] = useState('');
  const [thickness2, setThickness2] = useState('');

  const rows = useMemo(
    () => Array(5).fill(() => ({ length: null, width: null })),
    []
  );

  return (
    <div>
      <TableName>
        Concrete Patio
      </TableName>
      <Table columns={lengthAndWidthColumns} rows={rows} />

      {/* Input Fields for Thickness */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,
        marginBottom:2,
        width: 300, marginTop: 2 }}>
        <TextField
          label="Thickness in Inches 1"
          variant="outlined"
          value={thickness1}
          onChange={(e) => setThickness1(e.target.value)}
          type="number"
        />
        <TextField
          label="Thickness in Inches 2"
          variant="outlined"
          value={thickness2}
          onChange={(e) => setThickness2(e.target.value)}
          type="number"
        />
      </Box>
    </div>
  );
};

export default Concrete;
