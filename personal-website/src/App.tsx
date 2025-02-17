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
        <Intro />
        <Box id="about" sx={{ padding: "2rem", border: "solid 3px red" }}>
          About
        </Box>
        <Box id="intro" sx={{ padding: "2rem", border: "solid 3px red" }}>
          Intro
        </Box>
        <About />
        <Box
          id="resume"
          sx={{
            marginBottom: "2000px",
          }}
        >
          <Resume />
        </Box>
        <Contact />
      </Box>
    </Box>
  );
};

export default App;
