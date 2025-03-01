import { Box, Typography } from "@mui/material";
import "./Intro.css";
import { smoothScrollTo } from "../../SharedFunctions/ScrollAnimation";

function Intro() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const yOffset = -64;
      smoothScrollTo(aboutSection.offsetTop + yOffset);
    }
  };

  return (
    <Box className="intro-box">
      <Box className="typing">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "monospace",
            fontWeight: "600",
            position: "relative",
            zIndex: "1",
          }}
        >
          Hi, I'm Krutin
        </Typography>
        <Box className="typingColorBox" />
      </Box>
      <Box className="bullet-points">
        <Typography variant="h6">
          <ul className="bullet-list">
            <li>I'm a software engineer</li>
            <li>I do full stack development</li>
            <li>I also do mobile development</li>
            <li className="clickable" onClick={handleScrollToAbout}>
              Check out some of my work
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
}

export default Intro;
