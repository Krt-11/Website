import { Box, Typography } from "@mui/material";
import { smoothScrollTo } from "../../SharedFunctions/ScrollAnimation";
import "./Intro.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function Intro() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const yOffset = -64;
      const targetY =
        aboutSection.getBoundingClientRect().top + window.scrollY + yOffset;
      smoothScrollTo(targetY);
    }
  };

  return (
    <Box className="intro-box">
      <Box className="typing">
        <Typography
          variant="h3"
          sx={{ fontFamily: "monospace", fontWeight: "600", zIndex: "1" }}
        >
          Hi, I'm Krutin!
        </Typography>
        <Box className="typingColorBox" />
      </Box>

      <Box className="bullet-points">
        <Typography variant="h6">
          <ul className="bullet-list">
            <li>I'm a software engineer</li>
            <li>I do full stack development</li>
            <li>I also do mobile development</li>
            <li className="work-link" onClick={handleScrollToAbout}>
              Check out my work
              <KeyboardDoubleArrowDownIcon
                className="bouncing-arrow"
                sx={{ color: "#374f2f" }}
              />
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
}

export default Intro;
