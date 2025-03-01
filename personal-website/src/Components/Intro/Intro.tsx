import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { smoothScrollTo } from "../../SharedFunctions/ScrollAnimation";
import "./Intro.css";

function Intro() {
  const [showArrow, setShowArrow] = useState(false);

  const handleScrollToAbout = () => {
    setShowArrow(true);

    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const yOffset = -64;
        const targetY =
          aboutSection.getBoundingClientRect().top + window.scrollY + yOffset;
        smoothScrollTo(targetY);
      }

      setTimeout(() => {
        setShowArrow(false);
      }, 600);
    }, 1200);
  };

  return (
    <Box className="intro-box">
      <Box className="typing">
        <Typography
          variant="h4"
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
              Check out some of my work
            </li>
          </ul>
        </Typography>
      </Box>

      {showArrow && <div className="scroll-arrow">↓</div>}
    </Box>
  );
}

export default Intro;
