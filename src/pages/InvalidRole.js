import styles from '../styles/Main.module.scss';

const InvalidPage = () => {
  return <div className={styles.notAllowed}>Your role does not allow access to this page.</div>;
};

export default InvalidPage;
