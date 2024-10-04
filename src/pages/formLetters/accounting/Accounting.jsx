import Links from '../../../components/global/Links/Links';
const Accounting = () => {
  const financialComponentsArray = [
    'Invoice',
    'JobCost',
    'SupplierPurchaseOrder'
  ];
  return (
    <div>
     <Links links={financialComponentsArray} to={'formLetters/accounting'}/>
    </div>
  );
};

export default Accounting;
