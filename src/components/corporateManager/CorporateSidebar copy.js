import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../global/Sidebar';

import { ReactComponent as DashboardIconInactive } from '../../assets/icons/DashboardInactive.svg';
import { ReactComponent as EventIconInactive } from '../../assets/icons/EventInactive.svg';
import { ReactComponent as PromoteIconInactive } from '../../assets/icons/PromoteInactive.svg';
import { ReactComponent as PaymentIconInactive } from '../../assets/icons/PaymentInactive.svg';

import styles from '../../styles/Main.module.scss';

const routeGdDate = [
  {
    label: 'Fedral Gov Docs and Storage',
    path: 'fedral-gov',
  },
  {
    label: 'State Gov Docs and Storage',
    path: 'state-gov',
  },
  {
    label: 'County Gov and Storage',
    path: 'county-gov',
  },
  {
    label: 'Local Government',
    path: 'local-gov',
  },
];

const subRouteGdDate = {
  fedralGov: [
    {
      label: 'IRS',
      path: 'irs',
    },
    {
      label: 'EPA',
      path: 'epa',
    },
    {
      label: 'FBI',
      path: 'fbi',
    },
  ],
  stateGov: [
    {
      label: 'Secretary of state',
      path: 'secretary',
    },
    {
      label: 'Comptroller',
      path: 'comptroller',
    },
  ],
  countyGov: [
    {
      label: 'Property Tax and Title',
      path: 'property',
    },
    {
      label: ' Vehicles Tax and Title',
      path: 'vehicle',
    },
  ],
  localGov: [
    {
      label: 'Permits',
      path: 'permits',
    },
  ],
};

const routeIsDate = [
  {
    label: 'Liability',
    path: 'liability',
  },
  {
    label: 'Health',
    path: 'health',
  },
  {
    label: 'Auto',
    path: 'auto',
  },
  {
    label: 'Business',
    path: 'business',
  },
];

const CorporateSidebar = () => {
  const MenuEntry = ({ entry }) => {
    let IconComponentName = DashboardIconInactive;
    let link;
    let name;

    if (entry === 'customer-archives') {
      IconComponentName = DashboardIconInactive;
      link = `/corporate/${entry}`;
      name = 'Customer Archives';
    }

    if (entry === 'manager-training') {
      IconComponentName = EventIconInactive;
      link = `/corporate/${entry}`;
      name = 'Manager Training Videos';
    }

    if (entry === 'accounting') {
      IconComponentName = PromoteIconInactive;
      link = `/corporate/${entry}`;
      name = 'Accounting System';
    }

    if (entry === 'legal') {
      IconComponentName = PaymentIconInactive;
      link = `/corporate/${entry}`;
      name = 'Legal System';
    }

    return (
      <Link to={link} className={styles.noUnderline}>
        <div className={styles.sidebarList1}>
          <IconComponentName className={styles.mgRight13} />
          <span className={styles.navTitle1}>{name}</span>
        </div>
      </Link>
    );
  };

  const [isTree1, setIsTree1] = useState({
    gd: false,
    is: false,
  });

  const [isTree2, setIsTree2] = useState(false);
  const [subPath, setSubPath] = useState('');
  const [subPathData, setSubPathData] = useState([]);

  const dropdownHandler = useCallback(
    (item) => {
      setIsTree1({
        ...isTree1,
        [item]: !isTree1[item],
      });
    },
    [isTree1],
  );

  useEffect(() => {
    switch (subPath) {
      case 'fedral-gov':
        setSubPathData(subRouteGdDate['fedralGov']);
        break;

      case 'state-gov':
        setSubPathData(subRouteGdDate['stateGov']);
        break;

      case 'county-gov':
        setSubPathData(subRouteGdDate['countyGov']);
        break;

      case 'local-gov':
        setSubPathData(subRouteGdDate['localGov']);
        break;

      default:
    }
  }, [subPath]);

  const dropdownsHandler = useCallback((name) => {
    setIsTree2(!isTree2);
    setSubPath(name);
  }, []);

  return (
    <Sidebar>
      <MenuEntry entry="customer-archives" />
      <MenuEntry entry="manager-training" />
      <MenuEntry entry="accounting" />
      <MenuEntry entry="legal" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.sidebarList1} onClick={() => dropdownHandler('gd')}>
          <PaymentIconInactive className={styles.mgRight13} />
          <span className={styles.navTitle1}>Government Documents</span>
        </div>
        {isTree1.gd &&
          routeGdDate.map((tree) => (
            <div key={tree.label}>
              <div className={styles.treeNode1} onClick={() => dropdownsHandler(tree.path)}>
                {`+ ${tree.label}`}
              </div>
              <div className={styles.subMenu}>
                {tree.path === subPath &&
                  isTree2 &&
                  subPathData.map((item) => (
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
        <div className={styles.sidebarList1} onClick={() => dropdownHandler('is')}>
          <PaymentIconInactive className={styles.mgRight13} />
          <span className={styles.navTitle1}>Insurance Documents and Storage</span>
        </div>
        {isTree1.is &&
          routeIsDate.map((tree) => (
            <Link
              key={tree.label}
              to={`/corporate/insurance-docs/${tree.path}`}
              className={styles.treeNode1}
            >
              {`- ${tree.label}`}
            </Link>
          ))}
      </div>
    </Sidebar>
  );
};

export default CorporateSidebar;
