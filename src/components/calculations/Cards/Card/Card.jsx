import { Paper, Typography } from "@mui/material";

const Card = ({ resultFields }) => {
  console.log('resultFields:',resultFields);
  return (
    <Paper sx={{ maxWidth: 600, margin: "10px auto", padding: "10px" }}>
      {resultFields.map((field, index) => (
        <Typography key={index}>
          {field.label}: {field.value}
        </Typography>
      ))}
    </Paper>
  );
};

export default Card;
