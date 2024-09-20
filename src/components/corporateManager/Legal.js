import styles from '../../styles/Main.module.scss';

const Legal = () => (
  <div className={styles.wrapContainer}>
    <iframe src="https://legal-management-app.herokuapp.com/" className={styles.iframeContainer} />
  </div>
);

export default Legal;
