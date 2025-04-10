import { Box, Typography, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import aboutText from "./AboutText";

function About() {
  const allTech = [
    {
      name: "React",
      icon: "devicon-react-original colored",
      link: "https://reactjs.org",
    },
    {
      name: "HTML",
      icon: "devicon-html5-plain colored",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "AWS",
      icon: "devicon-amazonwebservices-plain colored",
      link: "https://aws.amazon.com",
    },
    {
      name: "Python",
      icon: "devicon-python-plain colored",
      link: "https://www.python.org",
    },
    {
      name: "SQL",
      icon: "devicon-mysql-plain colored",
      link: "https://www.mysql.com",
    },
    {
      name: "CSS",
      icon: "devicon-css3-plain colored",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Java",
      icon: "devicon-java-plain colored",
      link: "https://docs.oracle.com/en/java/",
    },
    {
      name: "Node.js",
      icon: "devicon-nodejs-plain colored",
      link: "https://nodejs.org",
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain colored",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Git",
      icon: "devicon-git-plain colored",
      link: "https://git-scm.com",
    },
    {
      name: "Docker",
      icon: "devicon-docker-plain colored",
      link: "https://www.docker.com",
    },
    {
      name: "Figma",
      icon: "devicon-figma-plain colored",
      link: "https://www.figma.com",
    },
    {
      name: "REST API",
      icon: "devicon-express-original colored",
      link: "https://expressjs.com/en/4x/api.html",
    },
    {
      name: "Kotlin",
      icon: "devicon-kotlin-plain colored",
      link: "https://kotlinlang.org",
    },
    {
      name: "Swift",
      icon: "devicon-swift-plain colored",
      link: "https://developer.apple.com/swift/",
    },
    {
      name: "Lua",
      icon: "devicon-lua-plain colored",
      link: "https://www.lua.org",
    },
    {
      name: "C",
      icon: "devicon-c-plain colored",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: "devicon-cplusplus-plain colored",
      link: "https://en.cppreference.com/w/cpp",
    },
    {
      name: "Android Studio",
      icon: "devicon-androidstudio-plain colored",
      link: "https://developer.android.com/studio",
    },
    {
      name: "Xcode",
      icon: "devicon-xcode-plain colored",
      link: "https://developer.apple.com/xcode/",
    },
  ];

  const topFive = allTech.slice(0, 5);
  const rest = allTech.slice(5);

  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
            width: "100%",
            maxWidth: "1200px",
            marginTop: "2rem",
            border: "2px solid black",
            boxShadow: "0.5rem 0.5rem 0 orange",
            transition: "all 0.3s ease",
            overflow: "hidden",
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(5rem, 1fr))",
              gap: "2rem",
              justifyItems: "center",
            }}
          >
            {[...topFive, ...(expanded ? rest : [])].map((tech, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease, opacity 0.4s ease",
                  transform: isVisible ? "scale(1)" : "scale(0.9)",
                  opacity: isVisible ? 1 : 0,
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <a
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <i
                    className={tech.icon}
                    style={{
                      fontSize: "3.2rem",
                      filter: "saturate(2.5) brightness(0.9)",
                      marginBottom: "0.5rem",
                    }}
                  ></i>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontFamily: "monospace",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {tech.name}
                  </Typography>
                </a>
              </Box>
            ))}
          </Box>

          {rest.length > 0 && (
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <IconButton
                onClick={() => setExpanded(!expanded)}
                sx={{
                  transition: "transform 0.3s ease",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <ExpandMoreIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default About;
