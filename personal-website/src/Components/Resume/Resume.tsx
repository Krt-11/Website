import { Box, Typography, Link } from "@mui/material";

function Resume() {
  return (
    <Box
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
