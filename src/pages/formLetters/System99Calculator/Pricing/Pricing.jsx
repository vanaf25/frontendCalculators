import {Typography} from "@mui/material";
import ProductTable from "./ProductTable";
import SectionPatio from "./SectionPatio/SectionPatio";

const Pricing = () => {
  return (
    <div>
      <Typography variant={"h4"}>Pricing</Typography>
      <ProductTable/>
      <SectionPatio/>
    </div>
  );
};

export default Pricing;
