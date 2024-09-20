import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => <div className={styles.main}>{children}</div>;

export default MainLayout;
