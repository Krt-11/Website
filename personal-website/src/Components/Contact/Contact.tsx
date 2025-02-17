import { Box, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const contacts = [
  {
    icon: <GitHub sx={{ fontSize: "3rem", color: "white" }} />,
    link: "https://github.com/Krt-11",
    label: "GitHub",
  },
  {
    icon: <LinkedIn sx={{ fontSize: "3rem", color: "white" }} />,
    link: "https://www.linkedin.com/in/krutin-shukla/",
    label: "LinkedIn",
  },
  {
    icon: <Email sx={{ fontSize: "3rem", color: "white" }} />,
    link: "mailto:krutinrs@gmail.com",
    label: "Email",
  },
];

function Contact() {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        component="h2"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: "2rem",
          color: "black",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        Contact
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "4rem",
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
                width: "210px",
                height: "120px",
                backgroundColor: "#374f2f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                transition: "transform 1s ease-in-out",
                "&:hover .MuiSvgIcon-root": {
                  transform: "translateY(-5px)",
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
