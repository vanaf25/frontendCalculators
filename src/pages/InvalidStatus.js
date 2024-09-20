import styles from '../styles/Main.module.scss';

const InvalidStatus = () => {
  return (
    <div className={styles.notAllowed}>
      Your role has not yet been approved. Contact your administrator.
    </div>
  );
};

export default InvalidStatus;
