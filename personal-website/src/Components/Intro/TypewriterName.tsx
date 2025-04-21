import { Box, Typography } from "@mui/material";

const TypewriterName = () => (
  <Box
    sx={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingX: "2rem",
      position: "relative",
      width: "60%",
      minWidth: 0,
      zIndex: 1,
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontFamily: "monospace",
        fontWeight: 700,
        fontSize: { xs: "1.8rem", sm: "2.5rem", md: "4rem" },
        color: "black",
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRight: "3px solid rgba(0,0,0,0.75)",
        width: "fit-content",
        animation:
          "typing 6s steps(20, end) infinite, blink 0.75s step-end infinite",
      }}
    >
      Hi, I'm Krutin!
    </Typography>
    <Box
      sx={{
        backgroundColor: "hsl(30, 80%, 50%)",
        height: "2.5rem",
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        top: "50%",
        mixBlendMode: "multiply",
        opacity: 0.75,
        zIndex: -1,
      }}
    />
    <style>
      {`
        @keyframes typing {
          0% { width: 0 }
          25% { width: 40% }
          50% { width: 100% }
          60% { width: 100% }
          85% { width: 40% }
          100% { width: 0 }
        }

        @keyframes blink {
          0%, 100% { border-color: transparent }
          50% { border-color: black }
        }
      `}
    </style>
  </Box>
);

export default TypewriterName;
