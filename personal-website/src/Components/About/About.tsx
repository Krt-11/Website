import { Box, Typography } from "@mui/material";
import aboutText from "./AboutText";

function About() {
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
        gutterBottom={true}
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
        <Box sx={{ border: "solid blue", width: "75%" }}>
          logos of technology
        </Box>
      </Box>
    </Box>
  );
}

export default About;
