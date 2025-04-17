import { Box, useMediaQuery, useTheme } from "@mui/material";

const AnimatedShapes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const circleSize = isMobile ? "60px" : "100px";
  const rectWidth = isMobile ? "180px" : "250px";
  const rectHeight = isMobile ? "60px" : "100px";

  return (
    <>
      {/* Orange Circle */}
      <Box
        sx={{
          position: "absolute",
          width: circleSize,
          height: circleSize,
          borderRadius: "50%",
          backgroundColor: "hsl(30, 90%, 70%)",
          top: "48%",
          left: "0%",
          zIndex: 0,
          animation: "floatShape 3.5s ease-in-out infinite",
          "@keyframes floatShape": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        }}
      />

      {/* Circle Twin */}
      <Box
        sx={{
          position: "absolute",
          width: circleSize,
          height: circleSize,
          borderRadius: "50%",
          border: "3px solid black",
          top: "50%",
          left: "2%",
          zIndex: 1,
          backgroundColor: "transparent",
          animation: "floatShape 3s ease-in-out infinite",
        }}
      />

      {/* Tilted Rectangle */}
      <Box
        sx={{
          position: "absolute",
          width: rectWidth,
          height: rectHeight,
          backgroundColor: "hsl(30, 80%, 65%)",
          top: "0%",
          right: "-60px",
          transform: "rotate(15deg)",
          zIndex: 0,
          borderRadius: "1rem",
          animation: "floatTilt 3.5s ease-in-out infinite",
          "@keyframes floatTilt": {
            "0%, 100%": { transform: "rotate(15deg) translateY(0)" },
            "50%": { transform: "rotate(15deg) translateY(12px)" },
          },
        }}
      />

      {/* Rectangle Twin */}
      <Box
        sx={{
          position: "absolute",
          width: rectWidth,
          height: rectHeight,
          border: "3px solid black",
          borderRadius: "1rem",
          top: "3%",
          right: "-57px",
          backgroundColor: "transparent",
          transform: "rotate(15deg)",
          zIndex: 1,
          animation: "floatTilt 3s ease-in-out infinite",
        }}
      />
    </>
  );
};

export default AnimatedShapes;
