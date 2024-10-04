import Links from '../../../components/global/Links/Links';
const Legal = () => {
  const legalComponentsArray = [
    'BreachOfContract',
    'BreachOfNonDisclosure',
    'ClaimOfLien',
    'DrugTestConsent',
    'DrugTestNotice',
    'NonDisclosureAgreement',
    'ReleaseAgreement'
  ];
  return (
    <div>
     <Links links={legalComponentsArray} to={'formLetters/legal'}/>
    </div>
  );
};

export default Legal;
