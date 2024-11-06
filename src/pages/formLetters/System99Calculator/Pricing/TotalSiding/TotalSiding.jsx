import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {getAllRowsByType} from "../../../../../apis/tablesApi";
import Table from "../../../../../components/letters/Table/Table";
import TableName from "../../../../../components/letters/TableName/TableName";
import getActualRowData from "../../../../../utils/getActualRowData";
import calculateTotalAmount from "../../../../../utils/calculateTotalAmount";
import TotalCalculations from "./TotalCalculations";
import {sidingColumns} from "../../../../../consts/formletters/system99Calculator";

const TotalSiding = () => {
  const ref=useRef(null);
  const [data,setData]=useState([]);
  const [totalData,setTotalData]=useState(null)
  const calculateTotal=useCallback(()=>{
    console.log('calculate!');
    const sidingSquareFootage = calculateTotalAmount(ref, 'total_sq_footage_siding');
    const sumLengthA = calculateTotalAmount(ref, 'length');
    const sumLengthD = calculateTotalAmount(ref, 'total_sq_footage_siding');
    const sumHeightB = calculateTotalAmount(ref, 'height');
    const sumPlanksI = calculateTotalAmount(ref, 'four_inch_planks');
    const sumPlanksJ = calculateTotalAmount(ref, 'seven_planks');
    const sumPlanksK = calculateTotalAmount(ref, 'ten_half_inch_planks');
    const sumColumnQ=calculateTotalAmount(ref,"double_six")
    const sumOfDutchLup=calculateTotalAmount(ref,"dutch_lap");
    const sevenRowsAmount=calculateTotalAmount(ref,"seven_rows_repeat");
    // Additional calculations
    const freezeBoard = [sumLengthA, sumLengthA / 12, Math.round(sumLengthA / 12)];
    const hardieHandNails = [sumHeightB * 2.7, (sumHeightB * 2.7) / 500];
    const hardieColorMatchTrim = sidingSquareFootage / 300;
    const squareFootPerItem = 32;
    const quantityNeeded = sumLengthA / squareFootPerItem;
    const numberOfNailsNeeded = quantityNeeded * 20;
    const numberOfBoxes = Math.round(numberOfNailsNeeded / 1200);
    const sidingLinearFootage = sumLengthA;
    const hardieColorMatchBase = sumLengthD / 200;
    const hardieCoilNails = [sumLengthD * 7.5, (sumLengthD * 7.5) / 3000];
    const paintSidingLaborCost = sumLengthD * 0.85;
    const installHardieSiding = sumLengthD * 3.6;
    const sidingLaborCost=sumLengthD*2.7
    const numberOf5InchPlanks = sumPlanksI;
    const numberOf8InchPlanks = sumPlanksJ;
    const numberOf11InchPlanks = sumPlanksK;

    // Store the calculations in state
    setTotalData({
      sidingLaborCost,
      osbAndPlywoodLabor:sumLengthD*1.5,
      doubleSix:sumColumnQ,
      dutchLap:sumOfDutchLup,
      sidingSquareFootage,
      sevenInch:sevenRowsAmount,
      freezeBoard,
      hardieHandNails,
      hardieColorMatchTrim,
      squareFootPerItem,
      quantityNeeded,
      numberOfNailsNeeded,
      numberOfBoxes,
      sidingLinearFootage,
      hardieColorMatchBase,
      hardieCoilNails,
      paintSidingLaborCost,
      installHardieSiding,
      numberOf5InchPlanks,
      numberOf8InchPlanks,
      numberOf11InchPlanks
    });
  },[ref])
  console.log('total:',totalData);
  useEffect(()=>{
    if (ref.current && data.length) calculateTotal()
  },[ref.current,data]);
  useEffect(() => {
    const func=async ()=>{
      const res=await getAllRowsByType("siding");
      setData(res);
    }
    func()
  }, []);
  const columnDefs = useMemo(() => {
    const lightBlueStyle = {
      backgroundColor: '#ADD8E6', color: '#000000' };// Light blue background with black text
    const columns =sidingColumns
    return columns.map(column => ({
      ...column,
      cellStyle: column.editable ? lightBlueStyle : null,
    }));
  }, []);
  const onCellValueChanged = useCallback(async (params) => {
      const newValue = params.newValue;
      const oldValue = params.oldValue;
      if (newValue <= 0) {
        console.log('lessThen 0');
        params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
      }
      else{
        console.log('greater than o!');
        await getActualRowData(params.api,params.node.rowIndex,params.data.id,"siding");
        calculateTotal()
      }
  }, []);
  return (
  <div>
        <TableName>Total siding</TableName>
        <Table  onCellValueChanged={onCellValueChanged} customRef={ref}
               columns={columnDefs} rows={data}/>
    {totalData && <TotalCalculations totalData={totalData}/>}
    </div>
  );
};

export default TotalSiding;
