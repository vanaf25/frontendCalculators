export default (ref,key)=>{
  const gridApi = ref?.current?.api;
  const values=[];
  if(gridApi){
    gridApi.forEachNode((rowNode) => {
      const value = gridApi.getCellValue({rowNode,colKey:key});
      values.push(value);
    });
    return values
  }
  return  []
}
