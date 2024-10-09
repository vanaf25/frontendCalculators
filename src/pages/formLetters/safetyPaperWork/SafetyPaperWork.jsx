import Links from '../../../components/global/Links/Links';

const SafetyPaperWork = () => {
  const names= ["incidentReport","safetyInspiration","safetyViolation"]
  return (
    <div>
      <Links links={names} to={"formLetters/safetyPaperWork"}/>
    </div>
  );
};

export default SafetyPaperWork;
