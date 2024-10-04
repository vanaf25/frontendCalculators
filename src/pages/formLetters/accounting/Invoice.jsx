import EstimatorDetails from '../../../components/global/EstimatorDetails/EstimatorDetails';
import CustomerDetails from '../../../components/global/CustomerDetails/CustomerDetails';
import { Paper, Typography } from '@mui/material';
import Table from '../../../components/letters/Table/Table';
import Box from '@mui/material/Box';
import TableWithOutHeaders from '../../../components/letters/TableWithoutHeaders/TableWithOutHeaders';

const Invoice = () => {
  const sentences = [
    "Balance's are due and payable in full, upon 94% of completion of the work listed above and prior to the completion of any punch out list submitted to the above Company by the Customer listed above.",
    "Past due accounts will have a Late Fee imposed on the balance in the amount of 10% of the balance that is due.",
    "Accounts that are past due will incur this late fee each month the balance is past due until the invoice is paid in full."
  ];
  return (
    <Box sx={{maxWidth:800,margin:"10px auto"}}>
      <Typography variant={"h3"}>Invoice</Typography>
      <EstimatorDetails estimatorDetails={{signee:"Ivan",companyEmail:"vanay@gmail.com",
        companyPhone:"0990930450"}}/>
      <CustomerDetails customer={{name:"Ivan",
        email:"vanay@gmail.com",phone:"0990930450",address:"Adress of custoer"}}/>
      <Table
        rows={[{dateSold:"29.09.2005",p:"2442",dateBalance:"2422"}]}
        columns={[{id:"dateSold",label:"Date Sold"}
        ,{id:"p",label:"P.O. No."},{id:"dateBalance",label:"Date Balance or Payment is Due"}]}/>
      <Table
        rows={[{quantity:"4",description:"description",rate:"2422",amount:"323"}]}
        columns={[{id:"quantity",label:"Quantity"}
          ,{id:"description",label:"description"}
          ,{id:"rate",label:"Rate or Item Cost"},{id:"amount",label:"Amount"}]}/>
      <Box sx={{display:"flex"}}>
        <Box sx={{maxWidth:500}}>
          <Paper sx={{p:1}} >
            <Typography> DUE TO LONG DELAYS IN CHECKS CREARING
              OUR ACCOUNT BECAUSE OF COVID WE REQUEST CASH PAYMENT FOR THIS INVOICE.</Typography>
          </Paper>
        </Box>
        <Box>
          <TableWithOutHeaders rows={ [
          { field: "subtotal", value: 1500 },      // Example dummy value
          { field: "30 days late", value: 300 },   // Example dummy value
          { field: "60 days late", value: 500 },   // Example dummy value
          { field: "90 days late", value: 700 },   // Example dummy value
          { field: "collections", value: 400 },     // Example dummy value
          { field: "total due", value: 3400 },
            // Example dummy value
            ]
          }
                               style={{fontSize:"14px !important"}}
          />
        </Box>
      </Box>
      {sentences.map((sentence,index)=><Typography
        sx={{fontSize:"18px",mb:1}} key={index}>{sentence}</Typography>)}

      <Paper sx={{display:"inline-block",p:2,margin:"10px auto"}}>
        <Typography>Thank you for your business and
          please call us if you have any questions regarding your bill.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Invoice;
