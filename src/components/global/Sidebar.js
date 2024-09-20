import styles from './Sidebar.module.scss';
import {sideBarData} from "../../consts/sideBar";
import {useLocation} from "react-router-dom";
import MenuEntry from "./MenuEntry/menuEntry";

const Sidebar = ({ name,children,isCorporate }) => {
  const {pathname}=useLocation();
  return (<div className={styles.sidebarContainer}>
    <div className={styles.sidebar}>
      {isCorporate ? children: sideBarData[name]
        .map(el => <MenuEntry
          key={el.entry}
          sideBarName={name} path={pathname} entry={el.entry}/>)}
    </div>
  </div>)
};
export default Sidebar;
