import {updateRowChanged} from "../apis/tablesApi";

export default  async (api,rowIndex,rowId)=>{
  const row={}
  if (api){
    api.forEachNode((rowNode)=>{
      if(rowNode.rowIndex===rowIndex){
        const columns=api.getColumns()
        columns.map(c=>c.colId).forEach(column=>{
         const value= api.getCellValue({rowNode,colKey:column})
          row[column]=value
        });
      }
    })
  }
  console.log('actualData:',row);
  await updateRowChanged(rowId,{...row},);
  return row
}
