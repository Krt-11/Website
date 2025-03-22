import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import aboutText from "./AboutText";

function About() {
  const techLogos = [
    "react.png",
    "css.svg",
    "html.png",
    "java.png",
    "python.png",
    "aws.png",
    "node.png",
    "js.png",
    "sql.png",
    "git.png",
    "docker.png",
    "figma.png",
    "rest-api.png",
    "kotlin.png",
    "swift.png",
    "lua.png",
    "c.png",
    "c++.png",
    "android-studio.png",
    "xcode.png",
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-title");
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
    <Box sx={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
      <Typography
        id="about-title"
        variant="h3"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          color: "black",
          marginBottom: "20px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        About.
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        sx={{
          fontFamily: "monospace",
          fontSize: "1.1rem",
          fontWeight: "600",
        }}
      >
        {aboutText}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          My Stack
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
        >
          Here are some technologies I am enjoying right now ↓
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(5rem, 1fr))",
            gap: "3vh",
            width: "90%",
            maxWidth: "1200px",
            padding: "2rem",
            border: "2px solid black",
            boxShadow: "0.5rem 0.5rem 0 orange",
            marginTop: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {techLogos.map((logo, index) => {
            const techName = logo
              .replace(/\.(png|svg|jpg)$/, "")
              .replace("-", " ");

            return (
              <Box
                key={index}
                component="img"
                src={`/${logo}`}
                alt={techName}
                sx={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default About;
