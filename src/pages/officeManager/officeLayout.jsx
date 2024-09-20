import PageLayout from "../../components/global/pageLayout";
const CorporateLayout = ({children}) => {
  return (
    <PageLayout name={"office"}>
      {children}
    </PageLayout>
  );
};

export default CorporateLayout;
