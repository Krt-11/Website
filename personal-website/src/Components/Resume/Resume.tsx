import { Box, Typography, Link } from "@mui/material";
import { useEffect, useState } from "react";

function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("resume-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      id="resume-section"
      sx={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
          marginBottom: "20px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        Resume.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        <Link
          href="/K_Shukla_Full_Stack_Dev_Resume.pdf"
          download
          underline="hover"
          sx={{
            fontFamily: "monospace",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "black",
            cursor: "pointer",
          }}
        >
          Click here to download my resume as a PDF ↓
        </Link>

        {/* future resume content will go here */}
      </Box>
    </Box>
  );
}

export default Resume;
