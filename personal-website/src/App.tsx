import React from "react";
import { Box } from "@mui/material";
import Header from "./Components/Header/Header";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          marginTop: "4rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box id="Intro" sx={{ padding: "2rem", border: "solid 3px red" }}>
          Intro
        </Box>
        <Box id="about" sx={{ padding: "2rem", border: "solid 3px red" }}>
          About
        </Box>
        <Box id="resume" sx={{ padding: "2rem", border: "solid 3px red" }}>
          Resume
        </Box>
        <Box id="contact" sx={{ padding: "2rem", border: "solid 3px red" }}>
          Contact
        </Box>
      </Box>
    </Box>
  );
};

export default App;
