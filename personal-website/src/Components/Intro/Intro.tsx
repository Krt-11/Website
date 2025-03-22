import { Box, Typography } from "@mui/material";
import { smoothScrollTo } from "../../SharedFunctions/ScrollAnimation";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "flex-start" },
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          height: "fit-content",
          padding: "1rem",
          color: "black",
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontFamily: "monospace", fontWeight: 600, zIndex: 1 }}
        >
          Hi, I'm Krutin!
        </Typography>
        <Box
          sx={{
            backgroundColor: "orange",
            height: "2.5rem",
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            top: "50%",
            mixBlendMode: "multiply",
            opacity: 0.85,
          }}
        />
      </Box>

      <Box sx={{ marginTop: { xs: "2rem", md: 0 } }}>
        <Typography variant="h6">
          <ul
            style={{
              listStyleType: "none",
              fontFamily: "monospace",
              fontWeight: 550,
              textDecoration: "underline",
              paddingTop: "2rem",
              fontSize: "1.25rem",
              paddingLeft: "3rem",
            }}
          >
            {[
              "I'm a software engineer",
              "I do full stack development",
              "I also do mobile development",
            ].map((text, idx) => (
              <li
                key={idx}
                style={{
                  position: "relative",
                  paddingLeft: "20px",
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.1)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#c57620",
                  }}
                >
                  &gt;
                </span>
                {text}
              </li>
            ))}
            <li
              onClick={handleScrollToAbout}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                position: "relative",
                paddingLeft: "20px",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#c57620",
                }}
              >
                &gt;
              </span>
              Check out my work
              <KeyboardDoubleArrowDownIcon
                sx={{
                  color: "#374f2f",
                  marginLeft: "0.5rem",
                  animation: "bounceUpDown 1s infinite ease-in-out",
                  "@keyframes bounceUpDown": {
                    "0%, 100%": { transform: "translateY(5px)" },
                    "50%": { transform: "translateY(0)" },
                  },
                }}
              />
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
}

export default Intro;
