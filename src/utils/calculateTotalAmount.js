export default (ref,key)=>{
  const gridApi = ref?.current?.api;
  const values=[];
  if(gridApi){
    gridApi.forEachNode((rowNode) => {
      const value = gridApi.getCellValue({rowNode,colKey:key});
      values.push(value);
    });
    const amount=values?.reduce((sum, node) => sum + (+node || 0), 0)
    console.log('amount:',amount);
    return amount ? amount :""
  }
  return  ""
}
