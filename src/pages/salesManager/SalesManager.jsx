import PageLayout from "../../components/global/pageLayout";
const SalesLayout = ({children}) => {
  return (
    <PageLayout name={"sales"}>
      {children}
    </PageLayout>
  );
};

export default SalesLayout;
