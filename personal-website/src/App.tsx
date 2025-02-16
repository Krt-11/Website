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
        backgroundColor: "lightgray",
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
        <Box id="Intro" sx={{ padding: "2rem" }}>
          Intro
        </Box>
        <Box id="about" sx={{ padding: "2rem" }}>
          About
        </Box>
        <Box
          id="resume"
          sx={{
            padding: "2rem",
            color: "white",
          }}
        >
          Resume
        </Box>
        <Box
          id="contact"
          sx={{
            padding: "2rem",
            color: "white",
          }}
        >
          Contact
        </Box>
      </Box>
    </Box>
  );
};

export default App;
