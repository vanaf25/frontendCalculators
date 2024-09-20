import {Link, useLocation} from 'react-router-dom';

import Sidebar from '../global/Sidebar';
import { ReactComponent as PaymentIconInactive } from '../../assets/icons/PaymentInactive.svg';
import styles from '../../styles/Main.module.scss';
import {routeGdDate, routeIsDate} from "../../consts/corporateManager";
import {sideBarData} from "../../consts/sideBar";
import MenuEntry from "../global/MenuEntry/menuEntry";

const CorporateSidebar = () => {
  const {pathname}=useLocation();
  console.log(sideBarData["corporate"]);
  return (
    <Sidebar isCorporate>
      <div style={{ margin: '70px auto' }}>
        {sideBarData["corporate"]
            .map(el => <MenuEntry
              key={el.entry}
              sideBarName={"corporate"} path={pathname} entry={el.entry}/>)}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.sidebarList1}>
            <PaymentIconInactive className={styles.mgRight13} />
            <span className={styles.navTitle1}>Government Documents</span>
          </div>
          {routeGdDate.map((tree) => (
            <div key={tree.label} style={{ marginBottom: 10 }}>
              <div className={styles.treeNode1}>{`+ ${tree.label}`}</div>
              <div className={styles.subMenu}>
                {tree.subMenu.map((item) => (
                  <Link
                    key={item.label}
                    to={`/corporate/gov-docs/${tree.path}/${item.path}`}
                    className={styles.treeNode2}
                  >
                    {`- ${item.label}`}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.sidebarList1}>
            <PaymentIconInactive className={styles.mgRight13} />
            <span className={styles.navTitle1}>Insurance Documents and Storage</span>
          </div>
          {routeIsDate.map((tree) => (
            <Link
              key={tree.label}
              to={`/corporate/insurance-docs/${tree.path}`}
              className={styles.treeNode1}
            >
              {`- ${tree.label}`}
            </Link>
          ))}
        </div>
      </div>
    </Sidebar>
  );
};

export default CorporateSidebar;
