import Table from '../../../components/letters/Table/Table';
import Box from '@mui/material/Box';
import TableWithOutHeaders from '../../../components/letters/TableWithoutHeaders/TableWithOutHeaders';

const JobCost = () => {

  return (
    <Box sx={{maxWidth:900,margin:"0 auto"}}>
    <Table columns={[
      { id: 'supplierName', label: 'Supplier Name' },
      { id: 'description', label: 'Description of Material Used' },
      { id: 'date', label: 'Date' },
      { id: 'checkNumber', label: 'Check #' },
      { id: 'amount', label: 'Amount' }
    ]}
           rows={[
             {
               supplierName: 'ABC Supplies',
               description: 'Wood planks for construction',
               date: '2024-09-30',
               checkNumber: '12345',
               amount: '$1,500.00'
             },
             {
               supplierName: 'XYZ Materials',
               description: 'Steel beams',
               date: '2024-09-25',
               checkNumber: '98765',
               amount: '$3,200.00'
             },
             {
               supplierName: 'LMN Concrete',
               description: 'Concrete mix',
               date: '2024-09-20',
               checkNumber: '54321',
               amount: '$2,800.00'
             },
             {
               supplierName: 'OPQ Paints',
               description: 'Exterior paint',
               date: '2024-09-15',
               checkNumber: '11122',
               amount: '$1,000.00'
             },
             {
               supplierName: 'RST Roofing',
               description: 'Roofing shingles',
               date: '2024-09-10',
               checkNumber: '22233',
               amount: '$5,400.00'
             }
           ]}
    />
      <Table rows={[
        {
          subcontractLaborName: 'John Doe',
          rate: '$25.00',
          week1: 40,
          week2: 38,
          week3: 42,
          week4: 36,
          week5: 40,
          week6: 38,
          totalHours: 234,
          totalPay: '$5,850.00'
        },
        {
          subcontractLaborName: 'Jane Smith',
          rate: '$30.00',
          week1: 35,
          week2: 40,
          week3: 36,
          week4: 42,
          week5: 38,
          week6: 39,
          totalHours: 230,
          totalPay: '$6,900.00'
        },
        {
          subcontractLaborName: 'Mike Johnson',
          rate: '$28.00',
          week1: 38,
          week2: 36,
          week3: 40,
          week4: 34,
          week5: 39,
          week6: 41,
          totalHours: 228,
          totalPay: '$6,384.00'
        },
        {
          subcontractLaborName: 'Emily Davis',
          rate: '$32.00',
          week1: 40,
          week2: 45,
          week3: 38,
          week4: 37,
          week5: 41,
          week6: 44,
          totalHours: 245,
          totalPay: '$7,840.00'
        },
        {
          subcontractLaborName: 'David Brown',
          rate: '$26.00',
          week1: 30,
          week2: 32,
          week3: 34,
          week4: 36,
          week5: 38,
          week6: 40,
          totalHours: 210,
          totalPay: '$5,460.00'
        }
      ]} columns={[
        { id: 'subcontractLaborName', label: 'Subcontract Labor Name' },
        { id: 'rate', label: 'Rate' },
        { id: 'week1', label: 'Week 1' },
        { id: 'week2', label: 'Week 2' },
        { id: 'week3', label: 'Week 3' },
        { id: 'week4', label: 'Week 4' },
        { id: 'week5', label: 'Week 5' },
        { id: 'week6', label: 'Week 6' },
        { id: 'totalHours', label: 'Total Hours' },
        { id: 'totalPay', label: 'Total Pay' }
      ]}/>
      <Table columns={[
        { id: 'subcontractorName', label: 'Full Bid Subcontractor Name' },
        { id: 'deposit', label: 'Deposit' },
        { id: 'payment1', label: 'Payment 1' },
        { id: 'payment2', label: 'Payment 2' },
        { id: 'payment3', label: 'Payment 3' },
        { id: 'payment4', label: 'Payment 4' },
        { id: 'payment5', label: 'Payment 5' },
        { id: 'totalSiteHours', label: 'Total Site Hours' },
        { id: 'totalCost', label: 'Total Cost' }
      ]} rows={[
        {
          subcontractorName: 'ABC Construction',
          deposit: '$5,000.00',
          payment1: '$3,000.00',
          payment2: '$4,000.00',
          payment3: '$2,500.00',
          payment4: '$2,000.00',
          payment5: '$1,500.00',
          totalSiteHours: 160,
          totalCost: '$18,000.00'
        },
        {
          subcontractorName: 'XYZ Renovations',
          deposit: '$4,500.00',
          payment1: '$2,500.00',
          payment2: '$3,500.00',
          payment3: '$1,800.00',
          payment4: '$2,200.00',
          payment5: '$1,700.00',
          totalSiteHours: 150,
          totalCost: '$16,200.00'
        },
        {
          subcontractorName: 'LMN Services',
          deposit: '$6,000.00',
          payment1: '$4,000.00',
          payment2: '$3,000.00',
          payment3: '$2,000.00',
          payment4: '$2,500.00',
          payment5: '$1,000.00',
          totalSiteHours: 180,
          totalCost: '$18,500.00'
        },
        {
          subcontractorName: 'OPQ Contractors',
          deposit: '$3,500.00',
          payment1: '$2,800.00',
          payment2: '$3,200.00',
          payment3: '$2,200.00',
          payment4: '$2,500.00',
          payment5: '$1,800.00',
          totalSiteHours: 140,
          totalCost: '$16,000.00'
        },
        {
          subcontractorName: 'RST Developments',
          deposit: '$4,200.00',
          payment1: '$3,500.00',
          payment2: '$2,000.00',
          payment3: '$1,700.00',
          payment4: '$2,300.00',
          payment5: '$1,500.00',
          totalSiteHours: 170,
          totalCost: '$15,200.00'
        }
      ]}/>
      <Table columns={ [
        { id: 'paymentsReceived', label: 'Payments Received' },
        { id: 'payment1', label: 'Payment 1' },
        { id: 'payment1Date', label: 'Date' },
        { id: 'payment2', label: 'Payment 2' },
        { id: 'payment2Date', label: 'Date' },
        { id: 'payment3', label: 'Payment 3' },
        { id: 'payment3Date', label: 'Date' },
        { id: 'payment4', label: 'Payment 4' },
        { id: 'payment4Date', label: 'Date' },
        { id: 'total', label: 'Total' }
      ]} rows={[
        {
          paymentsReceived: 'Contract payments',
          payment1: '$5,000.00',
          payment1Date: '2024-09-01',
          payment2: '$3,000.00',
          payment2Date: '2024-09-15',
          payment3: '$2,500.00',
          payment3Date: '2024-09-20',
          payment4: '$2,000.00',
          payment4Date: '2024-09-25',
          total: '$12,500.00'
        },
        {
          paymentsReceived: 'Change Order 1',
          payment1: '$1,500.00',
          payment1Date: '2024-09-02',
          payment2: '$2,000.00',
          payment2Date: '2024-09-10',
          payment3: '$2,500.00',
          payment3Date: '2024-09-18',
          payment4: '$1,000.00',
          payment4Date: '2024-09-22',
          total: '$7,000.00'
        },
        {
          paymentsReceived: 'Change Order 2',
          payment1: '$1,200.00',
          payment1Date: '2024-09-05',
          payment2: '$1,800.00',
          payment2Date: '2024-09-12',
          payment3: '$1,500.00',
          payment3Date: '2024-09-16',
          payment4: '$1,100.00',
          payment4Date: '2024-09-21',
          total: '$5,600.00'
        },
        {
          paymentsReceived: 'Change Order 3',
          payment1: '$2,000.00',
          payment1Date: '2024-09-03',
          payment2: '$1,500.00',
          payment2Date: '2024-09-09',
          payment3: '$2,000.00',
          payment3Date: '2024-09-14',
          payment4: '$1,500.00',
          payment4Date: '2024-09-19',
          total: '$7,000.00'
        },
        {
          paymentsReceived: 'Change Order 4',
          payment1: '$1,000.00',
          payment1Date: '2024-09-06',
          payment2: '$1,000.00',
          payment2Date: '2024-09-11',
          payment3: '$1,500.00',
          payment3Date: '2024-09-17',
          payment4: '$1,200.00',
          payment4Date: '2024-09-23',
          total: '$4,700.00'
        },
        {
          paymentsReceived: 'Change Order 5',
          payment1: '$1,800.00',
          payment1Date: '2024-09-04',
          payment2: '$2,200.00',
          payment2Date: '2024-09-08',
          payment3: '$2,500.00',
          payment3Date: '2024-09-15',
          payment4: '$2,100.00',
          payment4Date: '2024-09-25',
          total: '$8,600.00'
        },
        {
          paymentsReceived: 'Change Order 6',
          payment1: '$1,500.00',
          payment1Date: '2024-09-07',
          payment2: '$1,000.00',
          payment2Date: '2024-09-13',
          payment3: '$1,500.00',
          payment3Date: '2024-09-18',
          payment4: '$1,200.00',
          payment4Date: '2024-09-24',
          total: '$5,200.00'
        }
      ]}/>
      <Table columns={[
        {id:"total",label:""},
        { id: 'supplies', label: 'Supplies' },
        { id: 'laborSub', label: 'Labor Sub' },
        { id: 'fullBidSub', label: 'Full Bid Sub' },
        { id: 'totalPayments', label: 'Total Payments' }
      ]} rows={[{supplies: '$1,500.00',
        total:"Total",
        laborSub: '$2,000.00',
        fullBidSub: '$5,000.00',
        totalPayments: '$8,500.00'}]}/>
      <Box sx={{display:"flex"}}>
        <TableWithOutHeaders sx={{width:300,mr:1}} rows={[{field:"Income",value:`1500$`}
          ,{field:"Exspense",value:`1500$`},
          {field:"Balance",value:`1500$`}
        ]} />
        <Box>
          <TableWithOutHeaders rows={[{field:"Projected Taxes",value:`1500$`}
          ]} />
        </Box>
      </Box>
    </Box>
  );
};

export default JobCost;
