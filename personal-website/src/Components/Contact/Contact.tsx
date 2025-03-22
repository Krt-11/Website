import { Box, Typography } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";

const contacts = [
  {
    icon: <GitHub sx={{ fontSize: "4rem", color: "white" }} />,
    link: "https://github.com/Krt-11",
    label: "GitHub",
  },
  {
    icon: <LinkedIn sx={{ fontSize: "4rem", color: "white" }} />,
    link: "https://www.linkedin.com/in/krutin-shukla/",
    label: "LinkedIn",
  },
  {
    icon: <Email sx={{ fontSize: "4rem", color: "white" }} />,
    link: "mailto:krutinrs@gmail.com",
    label: "Email",
  },
];

function Contact() {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          color: "black",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        Contact.
      </Typography>

      <Typography
        component="h4"
        sx={{
          paddingBottom: "1rem",
          color: "#1a2617",
          fontFamily: "monospace",
          display: "flex",
        }}
      >
        LET'S GET IN TOUCH <KeyboardDoubleArrowDown />
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
          "@media (max-width: 100px)": {
            flexDirection: "column",
            alignItems: "left",
          },
        }}
      >
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contact.label}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                width: "12rem",
                height: "8rem",
                backgroundColor: "#374f2f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                transition: "all 0.3s ease-in-out",
                boxShadow: "5px 5px 0px gray",
                "&:hover": {
                  boxShadow: "7px 7px 0px rgb(159, 159, 159)",
                  transform: "translateY(-4px)",
                },
                "&:hover .MuiSvgIcon-root": {
                  transform: "translateY(-5px)",
                },
                "& .MuiSvgIcon-root": {
                  transition: "transform 0.3s ease-in-out",
                },
                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              {contact.icon}
            </Box>
          </a>
        ))}
      </Box>
    </Box>
  );
}

export default Contact;
