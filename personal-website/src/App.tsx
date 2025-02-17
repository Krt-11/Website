import React from "react";
import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";

import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#DCDCDC",
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
        <Box id="intro" sx={{ border: "2px red dashed" }}>
          <Intro />
        </Box>
        <Box id="about" sx={{ border: "2px red dashed" }}>
          <About />
        </Box>
        <Box
          id="resume"
          sx={{
            border: "2px red dashed",
          }}
        >
          <Resume />
        </Box>
        <Box id="contact" sx={{ border: "2px red dashed" }}>
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
