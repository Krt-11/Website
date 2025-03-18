import { Box, Typography, Tooltip } from "@mui/material";
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

  return (
    <Box sx={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        About.
      </Typography>

      <Typography
        variant="body1"
        gutterBottom
        sx={{ fontFamily: "monospace", fontSize: "1.1rem", fontWeight: "600" }}
      >
        {aboutText}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: 1,
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
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "3vh",
            width: "90%",
            maxWidth: "1200px",
            padding: "2rem",
            border: "2px solid black",
            boxShadow: "0.5rem 0.5rem 0 orange",
            marginTop: "2rem",
          }}
        >
          {techLogos.map((logo) => {
            const techName = logo
              .replace(/\.(png|svg|jpg)$/, "")
              .replace("-", " ");

            return (
              <Tooltip
                title={techName}
                arrow
                PopperProps={{
                  modifiers: [
                    {
                      name: "preventOverflow",
                      options: {
                        boundary: "window",
                      },
                    },
                  ],
                }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      fontSize: "1.2rem", // Adjusted font size
                      padding: "0.5rem", // More spacing for readability
                      backgroundColor: "rgba(0, 0, 0, 0.85)", // Optional: Better contrast
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={`/${logo}`}
                  alt={techName}
                  sx={{
                    width: "10vw",
                    height: "10vw",
                    minWidth: "100px",
                    minHeight: "100px",
                    maxWidth: "140px",
                    maxHeight: "140px",
                    objectFit: "contain",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default About;
