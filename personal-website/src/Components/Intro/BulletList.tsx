import { Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

interface BulletListProps {
  onScroll: () => void;
  isMobile?: boolean;
}

const BulletList = ({ onScroll, isMobile }: BulletListProps) => (
  <Typography component="div" variant="h6" sx={{ width: "100%" }}>
    <ul
      style={{
        listStyleType: "none",
        fontFamily: "monospace",
        fontWeight: 550,
        fontSize: isMobile ? "1rem" : "1.5rem",
        padding: 0,
        margin: 0,
        textAlign: "right",
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
            paddingRight: "20px",
            marginBottom: "1rem",
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-3px) scale(1.1)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
        >
          <span
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#c57620",
            }}
          >
            &lt;
          </span>
          {text}
        </li>
      ))}
      <li
        onClick={onScroll}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "relative",
          paddingRight: "20px",
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
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#c57620",
          }}
        >
          &lt;
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
);

export default BulletList;
