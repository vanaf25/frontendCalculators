import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
// eslint-disable-next-line react/display-name
const ReusableTable = React.memo( ({
                                     withOutMargin, columns, rows,customRef,...anotherProps }) => {
  return (
    <div
      className="ag-theme-quartz"
      style={{height:rows?.length===1 ? "93px":undefined,marginBottom:withOutMargin ? "0px":"30px" }}
    >
    <AgGridReact
      rowData={rows}
      columnDefs={columns}
      ref={customRef}
      domLayout='autoHeight'
      {...anotherProps}
    />
    </div>
    );
});

export default ReusableTable;
