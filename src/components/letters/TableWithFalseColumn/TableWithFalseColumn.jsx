import {useMemo} from 'react';
import Table from "../Table/Table";

const TableWithFalseColumn = ({itemHeaderName,rows,...anotherProps}) => {
  const defaultColumns=useMemo(()=>([
    { headerName: `${itemHeaderName}`,
      field: 'item', flex: 4, cellStyle: { textAlign: 'left', backgroundColor: '#F6E9C3' } },
    { headerName: 'False', field: 'quantity', flex: 1, cellStyle: { textAlign: 'left', backgroundColor: '#DDE4F4' } },
  ]),[itemHeaderName])
  return (
    <div>
      <Table  columns={defaultColumns} rows={rows}
              {...anotherProps}
      />
    </div>
  );
};

export default TableWithFalseColumn;
