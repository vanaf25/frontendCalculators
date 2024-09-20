import { useState, useEffect, useCallback } from 'react';

import UsersList from '../components/UsersList';
import TablePagination from '../components/global/TablePagination';
import setTableRange from '../utils/setTableRange';
import { getUsers } from '../apis/usersApi';

import styles from './Admin.module.scss';

const headers = ['ID', 'Email', 'Role', 'Status', 'Action'];

const AdminPage = () => {
  const [rowsPerPage] = useState(10);
  const [usersData, setUsersData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    const users = await getUsers();
    setUsersData(users);
  }, []);

  useEffect(async () => {
    setCount(Math.floor(usersData.length / rowsPerPage) + 1);
  }, [usersData, rowsPerPage]);

  useEffect(async () => {
    setTableData(setTableRange(usersData, page - 1, rowsPerPage));
  }, [usersData, page, rowsPerPage]);

  const handleChange = useCallback((value) => {
    setPage(value);
  }, []);

  const handleSelect = useCallback(async () => {
    const users = await getUsers();
    setUsersData(users);
  }, []);

  const TableHeader = ({ headers }) =>
    headers.map((header) => (
      <div key={header} className={styles.th}>
        {header}
      </div>
    ));

  return (
    <div className={styles.adminContainer}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <TableHeader headers={headers} />
        </div>
        <UsersList
          users={tableData}
          startPos={(page - 1) * rowsPerPage}
          handleSelect={handleSelect}
        />
      </div>
      <TablePagination count={count} page={page} changeHandler={handleChange} />
    </div>
  );
};

export default AdminPage;
