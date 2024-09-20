import {useLocation} from 'react-router-dom';
import Sidebar from '../global/Sidebar';
import {sideBarData} from "../../consts/sideBar";
import MenuEntry from "../global/MenuEntry/menuEntry";

const OfficeSideBar = () => {
  const {pathname}=useLocation();
  return (
    <Sidebar>
      {sideBarData["office"]
        .map(el=><MenuEntry
          key={el.entry}
          sideBarName={"office"} path={pathname} entry={el.entry} />)}
    </Sidebar>
  );
};

export default  OfficeSideBar;
