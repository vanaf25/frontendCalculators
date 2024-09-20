import PageLayout from "../../components/global/pageLayout";
const CorporateLayout = ({children}) => {
  return (
    <PageLayout name={"production"}>
      {children}
    </PageLayout>
  );
};

export default CorporateLayout;
