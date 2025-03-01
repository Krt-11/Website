import { Box } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#374f2f",
        height: "75px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.25rem",
        fontFamily: "monospace",
      }}
    >
      &copy; Krutin Shukla
    </Box>
  );
};

export default Footer;
