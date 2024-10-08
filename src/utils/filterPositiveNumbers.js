export default (params)=>{
  const newValue = params.newValue;
  const oldValue = params.oldValue;
  console.log('oldValue:',oldValue);
  if(newValue<=0){
    params.api.getRowNode(params.node.id).setDataValue(params.column.colId, oldValue);
  }
  else {
    params.api.getRowNode(params.node.id).setDataValue(params.column.colId, newValue);
  }
}
