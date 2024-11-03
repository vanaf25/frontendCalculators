import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemTable from '../ItemTable/ItemTable';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ItemsSection = () => {
  console.log('pr:',process.env.REACT_APP_BASE_URL);
  const [tables, setTables] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTables = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}tables`); // Replace with your actual endpoint
        console.log('res:',response.data);
        setTables(response.data);
      } catch (error) {
        console.error("Error fetching tables:", error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchTables();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      ) : (
        tables.map((table) => (
          <ItemTable key={table.id} tableName={table.name} rows={table.rows} />
        ))
      )}
    </div>
  );
};

export default ItemsSection;
