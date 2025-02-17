import { Box, Typography } from "@mui/material";

function Intro() {
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
        Intro
      </Typography>
    </Box>
  );
}

export default Intro;
