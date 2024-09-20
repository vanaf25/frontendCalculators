import styles from '../../styles/Main.module.scss';

const SafetySystem = () => (
  <div className={styles.wrapContainer}>
    <iframe src="https://safety-paper-app.herokuapp.com/" className={styles.iframeContainer} />
  </div>
);

export default SafetySystem;
