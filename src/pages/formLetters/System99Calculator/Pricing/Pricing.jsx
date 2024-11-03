import {Typography} from "@mui/material";
import ProductTable from "./ProductTable";
import SectionPatio from "./SectionPatio/SectionPatio";
import ItemsSection from "./ItemsSection/ItemsSection";

const Pricing = () => {
  return (
    <div>
      <Typography variant={"h4"}>Pricing</Typography>
      <ProductTable/>
      <SectionPatio/>
      <ItemsSection/>
    </div>
  );
};

export default Pricing;
