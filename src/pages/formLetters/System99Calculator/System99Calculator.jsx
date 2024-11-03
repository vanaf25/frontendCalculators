import Links from "../../../components/global/Links/Links";

const System99Calculator = () => {
  const links=["Mesurments","ComissionSheet","Material","Pricing","itemsTable"]
  return (
    <div>
    <Links links={links} to={"formLetters/System99Calculator"}/>
    </div>
  );
};

export default System99Calculator;
