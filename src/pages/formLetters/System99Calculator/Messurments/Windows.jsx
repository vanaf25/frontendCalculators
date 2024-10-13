import {useMemo} from 'react';
import Table from "../../../../components/letters/Table/Table";
import TableName from "../../../../components/letters/TableName/TableName";

const Windows = () => {
  const windowsColumns = useMemo(() =>([
    {
      headerName: '3 feet Tall and under',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'threeFeetTallAndUnder',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Less than 3 feet wide and less than 6 feet tall',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'lessThan3FeetWideAnd6FeetTall',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Over 6 feet wide on any side',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'over6FeetWideAnySide',
      editable: true,
      flex: 1,
    }
  ]), []);
  return (
    <div>
      <TableName>
        Windows
      </TableName>
      <Table columns={windowsColumns} rows={[
        { threeFeetTallAndUnder: null, lessThan3FeetWideAnd6FeetTall: null, over6FeetWideAnySide: null },
        { threeFeetTallAndUnder: null, lessThan3FeetWideAnd6FeetTall: null, over6FeetWideAnySide: null },
        { threeFeetTallAndUnder: null, lessThan3FeetWideAnd6FeetTall: null, over6FeetWideAnySide: null },
      ]}/>
    </div>
  );
};

export default Windows;
