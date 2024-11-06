import {useMemo, useRef} from 'react';
import Table from "../../../../../components/letters/Table/Table";
import TableName from "../../../../../components/letters/TableName/TableName";
import axios from "axios";
import {updateRowChanged} from "../../../../../apis/tablesApi";

const ItemTable = ({tableName,rows}) => {
  // Parse input to allow only positive numbers
  const numberParser = (params) => {
    const newValue = parseFloat(params.newValue);
    return isNaN(newValue) || newValue < 0 ? null : newValue;
  };
const tableRef=useRef();
  // Value getter for calculating the average of editable columns
  const averageValueGetter = (params) => {
    const fields = ['lowes', 'builders_first_source', 'abc_supply',
      'home_depot', 'mccoys', 'lumber_84'];
    const values = fields
      .map(field => params.data[field])
      .filter(value => typeof value === 'number' && value >= 0);
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    return values.length ? sum / values.length : 0;
  };

  // Value getter for rounding the average column
  const averageCostValueGetter = (params) => {
    return Math.round(params.getValue('average'));
  };
  const columnDefs = useMemo(() => {
    const lightBlueStyle = {
      backgroundColor: '#ADD8E6', color: '#000000' }; // Light blue background with black text

    const columns = [
      { headerName: 'Item Number', field: 'item_number', editable: false, flex: 1 },
      { headerName: 'Item Name', field: 'item_name', editable: false, flex: 1 },
      { headerName: 'Size', field: 'size', editable: false, flex: 1 },
      { headerName: 'Lowes', field: 'lowes', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: "Builder's First Source", field: 'builders_first_source', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: 'ABC Supply', field: 'abc_supply', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: 'Home Depot', field: 'home_depot', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: "McCoy's", field: 'mccoys', editable: true, valueParser: numberParser, flex: 1 },
      { headerName: '84 Lumber', field: 'lumber_84', editable: true, valueParser: numberParser, flex: 1 },
      {
        headerName: 'Average',
        field: 'average',
        flex: 1,
        valueGetter: averageValueGetter,
        editable: false,
      },
      {
        headerName: 'Average Cost',
        field: 'average_cost',
        flex: 1,
        valueGetter: averageCostValueGetter,
        editable: false,
      },
    ];

    // Apply the dark blue style to editable columns
    return columns.map(column => ({
      ...column,
      cellStyle: column.editable ? lightBlueStyle : null,
    }));
  }, []);
  const handleCellEditCommit = async (params) => {
    console.log('params:',params);
    const rowId=params.data.id;
    const changedColumn=params.colDef.field;
    const newValue=params.newValue;
    console.log('rowId:',rowId);
    console.log('changedColumn:',changedColumn)
    console.log('newValue:',newValue);
    const gridApi=tableRef?.current?.api
    gridApi.forEachNode(async (rowNode)=>{
      console.log('node:',rowNode);
      if (rowNode.rowIndex===params.rowIndex){
        const average=gridApi.getCellValue({rowNode,colKey:"average"});
        try {
          // Send a POST/PUT request to update the data on the server
          await updateRowChanged(rowId,{[changedColumn]:newValue,
            average,
            databaseType:"items",
            average_cost:Math.round(average)})
          await axios.put(`${process.env.REACT_APP_BASE_URL}/tables/${rowId}`, {
          });
        } catch (error) {
          console.error("Error updating item:", error);
        }
        console.log('averageColumn:',average);
      }
    })
  };
  return (
    <div>
      <TableName>{tableName}</TableName>
    <Table rows={rows} customRef={tableRef} onCellValueChanged={handleCellEditCommit} columns={columnDefs}/>
    </div>
  );
};

export default ItemTable;
