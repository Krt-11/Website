import React from "react";
import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";

import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/BackToTop/BackToTop";

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
        id="body"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "8rem 10% 0 10%",
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
            marginBottom: "1000px",
          }}
        >
          <Resume />
        </Box>
        <Box id="contact" sx={{ border: "2px red dashed" }}>
          <Contact />
        </Box>

        <BackToTop />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
