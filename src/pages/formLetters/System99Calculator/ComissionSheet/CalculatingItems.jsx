import React, {useCallback, useMemo} from 'react';
import Box from "@mui/material/Box";
import Table from "../../../../components/letters/Table/Table";
import calculateTotalAmount from "../../../../utils/calculateTotalAmount";

const CalculatingItems = ({setTotal}) => {
  const createLengthColumn = useCallback((name) => {
    return [
      {
        headerName: name,
        cellDataType: "string",
        flex:2,
        field: 'name',
        editable: true,
      },
      {
        headerName: "Amount",
        cellEditor: "agNumberCellEditor",
        flex:1,
        cellDataType: "number",
        field: 'amount',
        editable: true,
      },
    ];
  }, []);
  const itemsArray = useMemo(() => {
    const items = [
      'Siding',
      'Soffit',
      'Fascia',
      'Paint',
      'Windows',
      'Decks',
      'Stairs',
      'Railing',
      'Fence',
      'Cover',
      'Concrete Slab',
      'Gutters',
    ];

    return items.map(item => ({
      name: item,
      rows:[{name:"",amount:null}
        ,{name:"",amount:null}
        ,{name:"",amount:null}
        ,{name:"",amount:null}],
      ref: React.createRef(null), // Create a ref for each item
    }));
  }, []);
  const onCellValueChanged = useCallback((params) => {
    const newValue = params.newValue;
    const oldValue = params.oldValue;
    if (newValue <= 0) {
      console.log('lessThen 0');
      params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
    }
    else {
      setTotal(itemsArray.reduce(
        (accumulator, currentValue) => accumulator +
          Number(calculateTotalAmount(currentValue.ref,"amount")),
        0,
      ))
    }
  }, []);
  return (
    <Box width={400}>
      {itemsArray.map(el=><Table onCellValueChanged={onCellValueChanged}
                                 key={el.name}
                                 columns={createLengthColumn(el.name)}
                                 rows={el.rows} customRef={el.ref}  />)}
    </Box>
  );
};

export default CalculatingItems;
