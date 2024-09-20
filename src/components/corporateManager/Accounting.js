import styles from '../../styles/Main.module.scss';

const Accounting = () => (
  <div className={styles.wrapContainer}>
    <iframe
      src="https://account-management-app.herokuapp.com/"
      className={styles.iframeContainer}
    />
  </div>
);

export default Accounting;
