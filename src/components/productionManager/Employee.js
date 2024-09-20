import styles from '../../styles/Main.module.scss';

const Employee = () => (
  <div className={styles.wrapContainer}>
    <iframe src="https://employee-manage-apps.herokuapp.com/" className={styles.iframeContainer} />
  </div>
);

export default Employee;
