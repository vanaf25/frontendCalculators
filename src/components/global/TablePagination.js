import { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& .MuiPaginationItem-root': {
      fontSize: 14,
      lineHeight: '16px',
      color: '#fff',
      opacity: 0.5,
    },
  },
  pagination: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const TablePagination = ({ count, page, changeHandler }) => {
  const classes = useStyles();

  const handleChange = useCallback(
    (event, value) => {
      changeHandler(value);
    },
    [changeHandler],
  );

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        showFirstButton
        showLastButton
        className={classes.pagination}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default TablePagination;
