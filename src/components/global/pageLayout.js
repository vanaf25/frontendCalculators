import styles from "../../styles/Main.module.scss";
import MainLayout from "./MainLayout";
import Sidebar from "./Sidebar";
import CorporateSidebar from "../corporateManager/CorporateSidebar";
const PageLayout = ({name,children}) => {
  return (
    <div className={styles.gridFlex}>
      {name==="corporate" ? <CorporateSidebar/>: <Sidebar name={name}/>}
      <MainLayout>
        {children}
      </MainLayout>
    </div>
  );
};
export default PageLayout;
