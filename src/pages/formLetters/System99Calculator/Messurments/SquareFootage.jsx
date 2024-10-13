import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Grid, Box, Typography } from '@mui/material';
import {useCallback, useMemo, useRef, useState} from "react";
import calculateTotalAmount from "../../../../utils/calculateTotalAmount";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const SquareFootage = () => {
  const columnDefs =  useMemo(()=>([
    { headerName: 'Length',cellDataType: "number",cellEditor: 'agNumberCellEditor', field: 'length', editable: true,flex:1 },
    { headerName: 'Height',cellDataType: "number",cellEditor: 'agNumberCellEditor', field: 'height', editable: true,flex:1 }
  ]),[])
  console.log(columnDefs)
  const defaultRowData  = useMemo(() =>([
    { length: 10, height: null },
    { length: 10, height:null },
    { length: 10, height: null },
    { length: 10, height: null },
    { length: 10, height: null },
    { length: 10, height: null },
  ]), []);
  console.log(defaultRowData)
  const frontSidingRef = useRef(null);
  const rearSidingRef = useRef(null);
  const firstSideSidingRef = useRef(null);
  const secondSideSidingRef = useRef(null);
  const extraBuildingRef = useRef(null);
  const extraBuilding2Ref = useRef(null);
  const smthRef=useRef(null)
  const smthRef2=useRef(null)
  // Define table names with corresponding refs
  let tableNames = useMemo(() =>{
    return [
      {
        name: 'Front SIDING',
        ref: frontSidingRef,
      },
      {
        name: "Rear SIDING",
        ref: rearSidingRef,
      },
      {name:null,ref:smthRef},
      {
        name: '1st side SIDING',
        ref: firstSideSidingRef,
      },
      {
        name: "2nd side SIDING",
        ref: secondSideSidingRef,
      },
      {name:null,ref:smthRef2},
      {
        name: "Siding for Extra building",
        ref: extraBuildingRef,
      },
      {
        name: "Siding for Extra building 2",
        ref: extraBuilding2Ref,
      },
    ].map(el=>{
        if (el.name)  return   {...el,
          columns:[
            { headerName: 'Length', cellDataType: "number", cellEditor: 'agNumberCellEditor', field: 'length', editable: true, flex: 1 },
            { headerName: 'Height', cellDataType: "number", cellEditor: 'agNumberCellEditor', field: 'height', editable: true, flex: 1 }
          ],
          rowData:[
            { length: 10, height: 0 },
            { length: 10, height: 0 },
            { length: 10, height: 0 },
            { length: 10, height: 0 },
            { length: 10, height: 0 },
            { length: 10, height: 0 },
          ]
        }
        return {...el,
          columns:[
            {
              headerName: 'Inside Corners 12 feet and under',
              cellDataType: 'number',
              cellEditor: 'agNumberCellEditor',
              field: 'insideCornersUnder12',
              editable: true,
            },
            {
              headerName: 'Inside Corners between 12 & 24 long',
              cellDataType: 'number',
              cellEditor: 'agNumberCellEditor',
              field: 'insideCorners12to24',
              editable: true,
            }
          ],
          rowData:[
            {insideCornersUnder12:null,insideCorners12to24:null},
            {insideCornersUnder12:null,insideCorners12to24:null},
            {insideCornersUnder12:null,insideCorners12to24:null},
            {insideCornersUnder12:null,insideCorners12to24:null},
            {insideCornersUnder12:null,insideCorners12to24:null},
          ]
        }
      }
    )
  } , []);
  const [totalHeight,setTotalHeight]=useState(0)
  const calculateTotalHeightAmount=(array)=>{
    const sumWithInitial = array.reduce(
      (accumulator, currentValue) => accumulator + Number(calculateTotalAmount(currentValue.ref,"height")),
      0,
    );
    setTotalHeight(sumWithInitial)
  }
  const onCellValueChanged = useCallback((params) => {
    const newValue = params.newValue;
    console.log('newValue:',newValue);
    const oldValue = params.oldValue;
    console.log('p:',params.api.getRowNode(0));
    if (newValue <= 0) {
      console.log('lessThen 0');
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
    }
    else{
      if (params.colDef.field==="height") calculateTotalHeightAmount(tableNames)
    }
  }, []);
  return (
    <Box sx={{mb:2}}>
      <Grid sx={{mb:2}} container spacing={2}>
        {tableNames.map((name) => {
          return  <Grid item xs={12} sm={4} key={name.name}>
            <Box sx={{border: '1px solid #ddd', borderRadius: '8px'}}>
              {/* Table Name Header */}
              {name.name ? <Box sx={{backgroundColor: '#4caf50', padding: '8px', textAlign: 'center'}}>
                <Typography variant="h6" component="h2" sx={{color: '#fff'}}>
                  {name.name}
                </Typography>
              </Box>:""}
              <div className="ag-theme-quartz">
                <AgGridReact
                  onCellValueChanged={onCellValueChanged}
                  columnDefs={name.columns}
                  rowData={name.rowData}
                  ref={name.ref}
                  domLayout="autoHeight"
                  key={name.name}
                />
              </div>
            </Box>
          </Grid>
        })}
      </Grid>
      <Typography>Total Height:{totalHeight}</Typography>
    </Box>

  );
};

export default SquareFootage;
