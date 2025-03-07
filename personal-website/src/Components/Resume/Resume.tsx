import { Box, Typography } from "@mui/material";

function Resume() {
  return (
    <Box sx={{ padding: "2rem" }}>
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
        Resume.
      </Typography>
    </Box>
  );
}

export default Resume;
