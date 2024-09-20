import { withRouter } from 'react-router-dom';

import Sidebar from '../global/Sidebar';
import {sideBarData} from "../../consts/sideBar";
import MenuEntry from "../global/MenuEntry/menuEntry";

const ProductionSiderbar = (props) => {
  const pathName = props.location.pathname;


  return (
    <Sidebar>
      {sideBarData["production"]
        .map(el=><MenuEntry
          key={el.entry}
        sideBarName={"production"} path={pathName} entry={el.entry} />)}
    </Sidebar>
  );
};

export default withRouter(ProductionSiderbar);