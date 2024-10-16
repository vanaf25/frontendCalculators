import HardieParts from "./HardieParts";
import Trim from "./Trim";
import VynilParts from "./VynilParts";
import CedarMill from "./CedarMill";
import SheetingTable from "./SheetingTable";
import GenericHomeWrap from "./GenericHomeWrap";
import HardieFascia from "./HardieFascia";
import Paint from "./Paint";
import WoodFascia from "./WoodFascia";
import DeckSurface from "./DeckSurface";
import RailingSystems from "./RailingSystems";
import DeckFrame from "./DeckFrame";

const Material = () => {
  return (
    <div>
      <HardieParts/>
      <Trim/>
      <VynilParts/>
      <CedarMill/>
      <SheetingTable/>
      <GenericHomeWrap/>
      <HardieFascia/>
      <Paint/>
      <WoodFascia/>
      <DeckSurface/>
      <RailingSystems/>
      <DeckFrame/>
    </div>
  );
};

export default Material;
