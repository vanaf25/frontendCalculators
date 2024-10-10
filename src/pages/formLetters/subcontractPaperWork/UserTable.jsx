import React, { useState } from "react";
import { Grid, Box, Typography, TextField } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

// Reusable TableGrid Component
const TableGrid = ({ title, data }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <Box>
      {/* Table Title */}
      <Box bgcolor="green" p={1} textAlign="center">
        <Typography variant="h6" color="white">
          {title}
        </Typography>
      </Box>

      {/* Table Rows */}
      <Grid container>
        {data.map((row, index) => (
          <React.Fragment key={index}>
            <Grid item xs={2}
                  sx={{textAlign:"center",justifyContent:"center",display:"flex",
                    alignItems:"center"}} bgcolor="#007BFF" color="white" p={1}
                  border={1} borderColor="grey.500">
              <Typography>{row.label}</Typography>
            </Grid>
            <Grid item xs={10} bgcolor="lightgrey" p={1} border={1} borderColor="grey.500">
              {row.type === "date" ? (
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    label={row.label}
                    slotProps={{ textField: { size: 'small' } }}
                    value={row.label === "Start" ? startDate : endDate}
                    onChange={(newValue) => {
                      if (row.label === "Start") setStartDate(newValue);
                      else setEndDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </DemoContainer>
              ) : (
                row.value
              )}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default TableGrid;
