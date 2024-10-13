import classNames from 'classnames';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { signOut } from '../../redux/actions/authAction';
import styles from './Header.module.scss';

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = classNames(styles.navTxt, styles.navSign);

  const auth = useSelector((state) => state.auth);
  const isLoggedIn = auth.user?.id;

  const handleSignout = useCallback(() => {
    dispatch(signOut());
    history.push('/sign-in');
  }, []);

  return (
    <nav className={styles.header}>
      <NavLink className={styles.navTxt} to="/office/paper">
        Office Manager
      </NavLink>
      <NavLink className={styles.navTxt} to="/production/subcontractor">
        Production Manager
      </NavLink>
      <NavLink className={styles.navTxt} to="/sales/system">
        Sales Manager
      </NavLink>
      <NavLink className={styles.navTxt} to="/corporate/customer-archives">
        Corporate Manager
      </NavLink>
      <NavLink className={styles.navTxt} to="/calculators">
        Calculators1
      </NavLink>
      <NavLink className={styles.navTxt} to="/formLetters">
        FormLetters
      </NavLink>
      <NavLink className={styles.navTxt} to="/products">
       Products
      </NavLink>
      {!isLoggedIn ? (
        <NavLink className={classes} to="/sign-in">
          SignIn
        </NavLink>
      ) : (
        <button type="button" className={classes} onClick={handleSignout}>
          SignOut
        </button>
      )}
    </nav>
  );
}
