import Links from '../../../components/global/Links/Links';

const SubContractPaperWork = () => {
  const links=["subContract","JobCost","PointOfContact","Termination"]
  return (
    <div>
    <Links links={links} to={"formLetters/subContractPaperWork"}/>
    </div>
  );
};

export default SubContractPaperWork;
