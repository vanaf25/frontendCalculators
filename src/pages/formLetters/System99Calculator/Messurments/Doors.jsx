import {useCallback, useEffect, useMemo, useState} from 'react';
import { TextField, Box } from '@mui/material'; // Import TextField and Box from Material-UI
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "../../../../components/letters/Table/Table";
import {getAllRowsByType} from "../../../../apis/tablesApi";
import CircularProgress from "@mui/material/CircularProgress";
import getActualRowData from "../../../../utils/getActualRowData";
import numberParser from "../../../../utils/numberParser";

const Doors = () => {
  const columns = useMemo(() => ([
    {
      headerName: 'Under 40 inches wide',
      cellDataType: 'number',
      cellEditor: 'agNumberCellEditor',
      field: 'under40incheswide',
      valueParser:numberParser,
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Between 40" and 78 inches',
      cellDataType: 'number',
      valueParser:numberParser,
      cellEditor: 'agNumberCellEditor',
      field: 'between40and78inches',
      editable: true,
      flex: 1,
    },
    {
      headerName: 'Over 78 inches',
      cellDataType: 'number',
      valueParser:numberParser,
      cellEditor: 'agNumberCellEditor',
      field: 'over78inches',
      editable: true,
      flex: 1,
    }
  ]), []);
  const [isLoading,setIsLoading]=useState(true)
  const [data,setData]=useState([])
  useEffect(() => {
    const func=async ()=>{
      setIsLoading(true)
     const res=await getAllRowsByType("doors")
      console.log('res:',res);
      if(res.length) setData(res);
      setIsLoading(false)
    }
    func()
  }, []);
  const onCellValueChanged=useCallback(async (params)=>{
    await getActualRowData(params.api,params.node.rowIndex,params.data.id,"doors");
  },[])
  return (
    <div>
      {isLoading ? <CircularProgress/>:<>
        <TableName>
          Doors
        </TableName>
        <Table onCellValueChanged={onCellValueChanged} columns={columns} rows={data} />
        <Box mt={2} mb={2}>
          <TextField
            label="Garage doors"
            variant="outlined"
          />
        </Box>
      </> }
    </div>
  );
};

export default Doors;
