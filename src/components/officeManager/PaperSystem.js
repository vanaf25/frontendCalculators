import styles from '../../styles/Main.module.scss';

const PaperSystem = () => {
  return (
    <div className={styles.wrapContainer}>
      <iframe src="https://office-manager-apps.herokuapp.com/" className={styles.iframeContainer} />
    </div>
  );
};

export default PaperSystem;
