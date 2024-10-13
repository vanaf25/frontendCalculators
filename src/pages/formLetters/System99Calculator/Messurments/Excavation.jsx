import {useMemo} from 'react';
import TableName from "../../../../components/letters/TableName/TableName";
import Table from "../../../../components/letters/Table/Table";
import lengthAndWidthColumns from "../../../../consts/LengthAndWidthColumns";

const Concrete = () => {
  const rows = useMemo(
    ()=>Array(3).fill(()=>(({length:null,width:null})), []))
  return (
    <div>
      <TableName>
        Excavation
      </TableName>
      <Table  columns={lengthAndWidthColumns}
             rows={rows}/>
    </div>
  );
};

export default Concrete;
