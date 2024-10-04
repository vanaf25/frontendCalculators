
import Links from '../../../components/global/Links/Links';

const OfficeManager = () => {
  const additionalWorkComponentsArray = [
    'AdditionalWorkOrder',
    'CompletionCert',
    'HighTrafficArea',
    'LearnWaver',
    'PunchOutOf15',
    'PunchOutOf60',
    'ThankYouLetter',
    'Warranty'
  ];
  return (
    <div>
      <Links links={additionalWorkComponentsArray} to={"formLetters/officeManager"}/>
    </div>
  );
};

export default OfficeManager;
