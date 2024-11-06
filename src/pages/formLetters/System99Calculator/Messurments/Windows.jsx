import {useCallback, useEffect, useMemo, useState} from 'react';
import Table from "../../../../components/letters/Table/Table";
import TableName from "../../../../components/letters/TableName/TableName";
import {getAllRowsByType} from "../../../../apis/tablesApi";
import CircularProgress from "@mui/material/CircularProgress";
import numberParser from "../../../../utils/numberParser";
import getActualRowData from "../../../../utils/getActualRowData";

const Windows = () => {
  const [isLoading,setIsLoading]=useState(false);
  const [data,setData]=useState(false);
  useEffect(() => {
    const func= async()=>{
      setIsLoading(true)
     const res=await getAllRowsByType("windows");
      console.log('rewwwwws:',res)
      if(res.length){
        console.log(res);
        setData(res)
      }
      setIsLoading(false);
    }
    func()
  }, []);
  const windowsColumns = useMemo(() =>([
    {
      headerName: '3 feet Tall and under',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'under_3_feet_wide',
      editable: true,
      flex: 1,
      valueParser: numberParser
    },
    {
      headerName: 'Less than 3 feet wide and less than 6 feet tall',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'between_3_and_6_feet_wide',
      editable: true,
      flex: 1,
      valueParser: numberParser
    },
    {
      headerName: 'Over 6 feet wide on any side',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'over_6_feet_wide',
      editable: true,
      flex: 1,
      valueParser: numberParser
    }
  ]), []);
  const onCellValueChanged=useCallback(async (params)=>{
      await getActualRowData(params.api,params.node.rowIndex,params.data.id,"windows")
  },[])
  return (
    <div>
      {isLoading ? <CircularProgress/>:<>
        <TableName>
          Windows
        </TableName>
        <Table onCellValueChanged={onCellValueChanged} columns={windowsColumns} rows={data}/>
      </>}

    </div>
  );
};

export default Windows;
