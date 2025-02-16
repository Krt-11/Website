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
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginTop: "8rem",
        }}
      >
        <Box id="intro" sx={{ padding: "2rem", border: "solid 3px red" }}>
          Intro
        </Box>
        <Box id="about" sx={{ padding: "2rem", border: "solid 3px red" }}>
          About
        </Box>
        <Box
          id="resume"
          sx={{
            padding: "2rem",
            border: "solid 3px red",
            marginBottom: "2000px",
          }}
        >
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
