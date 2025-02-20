import { Box, Typography } from "@mui/material";
import Typical from "react-typical";
import "./Intro.css";

function Intro() {
  return (
    <Box className="typing-container">
      <Box className="typing-background" />

      <Typography component="h2" className="typing-text">
        <Typical
          steps={["Hi I'm Krutin", 1500, "", 1000]}
          loop={Infinity}
          wrapper="span"
        />
        <Box className="typing-cursor" />
      </Typography>
    </Box>
  );
}

export default Intro;
