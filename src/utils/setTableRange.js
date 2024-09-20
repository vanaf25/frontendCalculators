const setTableRange = (table, pageNum, numsPerPage) =>
  table.slice(pageNum * numsPerPage, (pageNum + 1) * numsPerPage);

export default setTableRange;
