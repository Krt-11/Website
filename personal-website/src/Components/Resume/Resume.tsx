import { Box, Typography } from "@mui/material";

function Resume() {
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
        Resume
      </Typography>
    </Box>
  );
}

export default Resume;
