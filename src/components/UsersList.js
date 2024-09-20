import { useState, useEffect, useCallback } from 'react';
import Select from 'react-select';

import { updateUser, deleteUser } from '../apis/usersApi';

import DeleteIcon from '../assets/icons/Delete.svg';
import styles from './UsersList.module.scss';

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '46%',
    cursor: 'pointer',
  }),
  control: () => ({
    display: 'flex',
    background: '#0d0e16',
    border: 'none',
    fontFamily: 'Gilroy-Medium',
    fontSize: '13px !important',
    borderRadius: '8px',
    color: '#fff',
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: '13px !important',
    color: '#000',
    padding: '8px 5px',
    marginTop: '-10px',
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'var(--red)' : '#000',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = '#fff';
    return { ...provided, opacity, transition, color };
  },
  valueContainer: (provided) => {
    const padding = 0;
    return { ...provided, padding };
  },
  dropdownIndicator: (provided) => {
    const padding = 0;
    return { ...provided, padding };
  },
};

const options = [
  { value: 'approved', label: 'Approved' },
  { value: 'declined', label: 'Declined' },
];

const UsersList = ({ users, startPos, handleSelect }) => {
  const [usersData, setUsersData] = useState(users);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  const selectHandler = useCallback(
    async (id, event) => {
      const state = await updateUser(event.value, id);
      if (state === 'OK') {
        handleSelect();
      }
    },
    [handleSelect],
  );

  const deleteHandler = useCallback(async (id) => {
    const state = await deleteUser(id);
    if (state === 'OK') {
      handleSelect();
    }
  }, []);

  const StatusComponent = ({ status }) => {
    switch (status) {
      case 'pending':
        return <div className={styles.pending}>{status}</div>;

      case 'declined':
        return <div className={styles.declined}>{status}</div>;

      case 'approved':
        return <div className={styles.approved}>{status}</div>;

      default:
        return <div className={styles.noExist}>Non</div>;
    }
  };

  return (
    <div className={styles.tr}>
      {usersData.map((user, index) => (
        <div key={user._id} className={styles.wrapper}>
          <div className={styles.td}>{startPos + index + 1}</div>
          <div className={styles.td}>{user.email}</div>
          <div className={styles.td}>{user.role}</div>
          <StatusComponent status={user.status} />
          {user.status === 'pending' ? (
            <Select
              defaultValue={options[0]}
              name="action"
              onChange={(event) => selectHandler(user._id, event)}
              styles={customStyles}
              options={options}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          ) : (
            <img
              src={DeleteIcon}
              className={styles.icon}
              alt="Delete"
              onClick={() => deleteHandler(user._id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default UsersList;
