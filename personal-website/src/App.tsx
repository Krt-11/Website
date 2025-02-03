import React from "react";
import { Box, Button } from "@mui/material";
import Header from "./Components/Header/Header";

const App: React.FC = () => {
  return (
    <Box
      style={{ padding: "20px" }}
      sx={{
        alignItems: "center",
        border: "1px solid red",
      }}
    >
      <Header />
      <Button variant="contained" color="primary" sx={{ m: 1 }}>
        Hello MUI
      </Button>
    </Box>
  );
};

export default App;
