import styles from '../../styles/Main.module.scss';

const SupplierSystem = () => (
  <div className={styles.wrapContainer}>
    <iframe src="https://supplier-order-app.herokuapp.com/" className={styles.iframeContainer} />
  </div>
);

export default SupplierSystem;
