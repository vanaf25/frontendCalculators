export default (ref)=>{
  const gridApi = ref?.current?.api;
  const table=[]
  const columns=ref?.current.props.columnDefs.map(c=>c.field)
  if (gridApi){

    gridApi.forEachNode((rowNode,index) => {
      const value = gridApi.getCellValue({rowNode,colKey:columns[index]});
      values.push(value);
    });
  }
}
