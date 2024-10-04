import Links from '../../../components/global/Links/Links';
const SalesManager = () => {
  const componentsArray = [
    'BackChargeNotice',
    'CommissionStructure',
    'MissedLead',
    'MissedSalesGoal',
    'NewClientQuestions'
  ];
  return (
    <div>
      <Links to={'formLetters/salesManager'} links={componentsArray} />
    </div>
  );
};

export default SalesManager;
