import EstimatorDetails from '../../../components/global/EstimatorDetails/EstimatorDetails';
import CustomerDetails from '../../../components/global/CustomerDetails/CustomerDetails';
import Table from '../../../components/letters/Table/Table';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TableWithOutHeaders from '../../../components/letters/TableWithoutHeaders/TableWithOutHeaders';

const SupplierPurchcaseOrder = () => {
  const columns = [
    { id: 'product', label: 'Product #' },
    { id: 'qty', label: 'Qty' },
    { id: 'description', label: 'Description' },
    { id: 'unitPrice', label: 'Unit Price' },
    { id: 'amount', label: 'Amount' }
  ];
  const rows = [
    {
      product: 'A123',
      qty: 10,
      description: 'Product A - High quality item',
      unitPrice: 25.99,
      amount: 259.90
    },
    {
      product: 'B456',
      qty: 5,
      description: 'Product B - Durable and reliable',
      unitPrice: 45.50,
      amount: 227.50
    },
    {
      product: 'C789',
      qty: 20,
      description: 'Product C - Lightweight and compact',
      unitPrice: 15.75,
      amount: 315.00
    },
    {
      product: 'D012',
      qty: 8,
      description: 'Product D - Eco-friendly material',
      unitPrice: 30.00,
      amount: 240.00
    },
    {
      product: 'E345',
      qty: 12,
      description: 'Product E - Best-selling item',
      unitPrice: 50.00,
      amount: 600.00
    }
  ];
  const rows2 = [
    { field: 'Deliver To', value: '0' },
    { field: 'Contact #', value: '0' },
    { field: 'Address', value: '0' }
  ];


  return (
    <Box sx={{maxWidth:1000,margin:"0 auto"}}>
      <EstimatorDetails estimatorDetails={{signee:"Ivan",email:"vanay@gmail.com",phone:"0990930450"}}/>
      <CustomerDetails customer={{name:"Ivan",email:"vanay@gmail.com",phone:"0990930450",adress:"Adress of custoer"}}/>
      <Box sx={{mb:1,display:"flex",justifyContent:"space-between"}}>
        <TableWithOutHeaders rows={rows2} sx={{width:300}}/>
        <Box>
          <TableWithOutHeaders  rows={[
            {field: "Purchase From",value: ""},
            { field: 'Supplier name', value: '0' },
            { field: 'Address', value: '0' }
          ]} sx={{width:300}}/>
        </Box>
      </Box>
      <Box sx={{mb:1,display:"flex",justifyContent:"space-between"}}>
        <Box sx={{display:"flex",alignItems:"center"}}>
          <Typography>SP.O. #:</Typography>
          <Typography sx={{background:"lightBlue",p:1}}>Sales Person:</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center"}}>
          <Typography>SP.O. #:</Typography>
          <Typography sx={{background:"lightBlue",p:1}}>Sales Person:</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center"}}>
          <Typography>SP.O. #:</Typography>
          <Typography sx={{background:"lightBlue",p:1}}>Sales Person:</Typography>
        </Box>
      </Box>
      <Table columns={columns} rows={rows}/>
      <Typography sx={{mb:1}}>Terms and conditions:</Typography>
      <Typography sx={{mb:1}}>1.Please deliver All goods within 14 days from the date of the PO if posable.
      </Typography>
      <Typography sx>2.Condition: We reserve the right to reject goods that are not in good order or condition as determined by our quality control.
      </Typography>
      <Typography  sx={{textAlign:"center",mt:2}}  variant={"h4"}>THANK YOU FOR YOUR BUSINESS!</Typography>
    </Box>
  );
};

export default SupplierPurchcaseOrder;
