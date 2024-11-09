export default (ref,key)=>{
  console.log(`ref.current for ${key}`,ref?.current.api);
  const gridApi = ref?.current?.api;
  const values=[];
  if(gridApi){
    console.log('gridApi exist! for: ',key);
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
