import { Box, useMediaQuery, useTheme } from "@mui/material";
import { smoothScrollTo } from "../../SharedFunctions/ScrollAnimation";
import AnimatedShapes from "./AnimatedShapes";
import TypewriterName from "./TypewriterName";
import BulletList from "./BulletList";

function Intro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatedShapes />
      <TypewriterName />
      <Box
        sx={{
          flex: isMobile ? "0 0 auto" : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingX: "2rem",
          zIndex: 1,
        }}
      >
        <BulletList onScroll={handleScrollToAbout} isMobile={isMobile} />
      </Box>
    </Box>
  );
}

export default Intro;
