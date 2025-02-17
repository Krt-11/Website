import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        component="h2"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: "2rem",
          color: "black",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        About
      </Typography>
    </Box>
  );
}

export default About;
