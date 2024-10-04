import CustomerDetails from '../../../components/global/CustomerDetails/CustomerDetails';
import Table from '../../../components/letters/Table/Table';
import { Typography } from '@mui/material';
import BlueBlock from '../../../components/global/blueBlock/BlueBlock';
import SignaturesSection from '../../../components/letters/signatureSection/signatureSection';

const AdditionalWorkOrder = () => {
  return (
    <div>
      <CustomerDetails customer={{
        companyPhone:"0990930450",email:"vana@gmail.com",companyAddress:"24 rue de vignes"}}/>
      <CustomerDetails
        customer={{Estimator:"ivan",Email:"vanay@gmail.com",Phone:"0990930450",Address:"Some Adress"}}/>
      <Table rows={[[
        {
          itemNumber: "dummy number 1",
          addWork: "Dummy value 1: We hereby submit the following specifically described additional work."
        },
        {
          itemNumber: "dummy number 1",
          addWork: "Dummy value 1: We hereby submit the following specifically described additional work."
        },
        {
          itemNumber: "dummy number 1",
          addWork: "Dummy value 1: We hereby submit the following specifically described additional work."
        },
        {
          itemNumber: "dummy number 1",
          addWork: "Dummy value 1: We hereby submit the following specifically described additional work."
        },
        {
          itemNumber: "dummy number 1",
          addWork: "Dummy value 1: We hereby submit the following specifically described additional work."
        }
      ]
      ]}
             columns={[{id:"itemNumber",label:"Item Number"}
        ,{id:"addWork",
          label:"We hereby submit the following specifically described additional work:"}]}

      />
        <Typography sx={{display:"inline",fontWeight:"700",mb:1}}>
          Additional charge for above described work is:       <BlueBlock text={"$5000"}/>
        </Typography>
        <Typography sx={{mb:1}}>
          Additional charge for above described work is:With payments to be made as follows:
          <Typography sx={{display:"inline",fontWeight:"700"}}>
            All payments due prior to start of extra work.
          </Typography>
        </Typography>
        <Typography sx={{mb:1}}>
          Additional work to be performed under same conditions as specified in original contract unless otherwise stipulated.
          We propose hereby to furnish material and labor to complete in accordance with these specifications at above stated price.
        </Typography>
        <Typography sx={{mb:1}} variant={"h6"}>
          ACCEPTANCE OF ADDITIONAL WORK:
        </Typography>
        <Typography>
          The above prices, specifications and conditions are satisfactory and are hereby accepted. You are authorized to do the work
          as specified. Payments will be made as outlined above.
        </Typography>
        <SignaturesSection client={"Customer Signature"}/>
      
    </div>
  );
};

export default AdditionalWorkOrder;
