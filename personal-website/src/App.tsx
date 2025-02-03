import React from "react";
import { Box, Button } from "@mui/material";
import Header from "./Components/Header/Header";

const App: React.FC = () => {
  return (
    <Box>
      <Header />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Button variant="contained" color="primary" sx={{ m: 1 }}>
          Hello MUI
        </Button>
      </Box>
    </Box>
  );
};

export default App;
