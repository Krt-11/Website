import { Box, Typography } from "@mui/material";
// import Typical from "react-typical";
import "./Intro.css";

function Intro() {
  return (
    <Box className="intro-box">
      <Box className="typing">
        <Typography
          variant="h4"
          sx={{ fontFamily: "monospace", fontWeight: "600" }}
        >
          Hi, I'm Krutin
        </Typography>
      </Box>
      <Box className="bullet-points">
        <Typography variant="h6">
          <ul className="bullet-list">
            <li>I'm a software engineer</li>
            <li>I do full stack development</li>
            <li>I also do mobile development</li>
            <li>Check out some of my work</li>
          </ul>
        </Typography>
      </Box>

      {/*       
      <Box className="typing-container">
        <Box className="typing-background" />

        <Typography component="h2" className="typing-text">
          <Typical
            steps={["Hi I'm Krutin", 1500, "", 1000]}
            loop={Infinity}
            wrapper="span"
          />
        </Typography>
        <Box className="bullet-points"></Box>
      </Box> */}
    </Box>
  );
}

export default Intro;
