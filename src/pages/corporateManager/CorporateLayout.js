import PageLayout from "../../components/global/pageLayout";
const CorporateLayout = ({children}) => {
  return (
    <PageLayout name={"corporate"}>
      {children}
    </PageLayout>
  );
};

export default CorporateLayout;
