import styles from "../../../styles/Main.module.scss";
import classNames from "classnames";
import {Link} from "react-router-dom";
import { ReactComponent as DashboardIconInactive } from '../../../assets/icons/DashboardInactive.svg';
import {sideBarData} from "../../../consts/sideBar";
const MenuEntry = ({ entry, path,sideBarName }) => {
  let IconComponentName = DashboardIconInactive;
  let link;
  let name;
  let navItemClass =sideBarName==="corporate" ? styles.sidebarList1:styles.sidebarList;
  sideBarData[sideBarName].forEach(el=>{
      if ( entry === el.entry) {
        if (sideBarName==="corporate"){
          IconComponentName = el.inActiveIcon;
        }
        else{
          if (path === `/${sideBarName}/${el.entry}`) {
            IconComponentName = el.activeIcon;
            navItemClass = classNames(styles.active, styles.sidebarList);
          } else {
            IconComponentName = el.inActiveIcon;
          }
        }
        link = `/${sideBarName}/${entry}`;
        name = el.name;
      }
  });
  return (
    <Link to={link} className={styles.noUnderline}>
      <div className={navItemClass}>
        <IconComponentName className={styles.mgRight13} />
        <span className={styles.navTitle}>{name}</span>
      </div>
    </Link>
  );
};
export default MenuEntry
