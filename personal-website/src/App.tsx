import React from "react";
import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";

const App: React.FC = () => {
  return (
    <Box
      sx={{
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
        <Contact />
      </Box>
    </Box>
  );
};

export default App;
