import { Box, Typography, IconButton, Collapse, Divider } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CollapsibleList from "./CollapsibleList";

function CollapsibleSection({
  bullets,
  skills,
}: {
  bullets: string[];
  skills: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleBullets = bullets.slice(0, 3);
  const hiddenBullets = bullets.slice(3);

  return (
    <>
      <ul style={{ paddingLeft: "1rem", marginLeft: 0 }}>
        {visibleBullets.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      {hiddenBullets.length > 0 && (
        <>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              ml: 1,
              mt: -1,
              transition: "transform 0.3s ease",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
            size="small"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ul style={{ paddingLeft: "1rem", marginLeft: 0 }}>
              {hiddenBullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <Box sx={{ fontStyle: "italic", pl: 2 }}>{skills}</Box>
          </Collapse>
        </>
      )}
    </>
  );
}

export default function ResumeContent() {
  return (
    <Box
      sx={{
        fontFamily: `"Segoe UI", "Helvetica Neue", "Arial", "sans-serif"`,
        border: "2px solid black",
        boxShadow: "0.5rem 0.5rem 0 orange",
        padding: "2rem",
        marginTop: "2rem",
        width: "90%",
        maxWidth: "800px",
        backgroundColor: "white",
        ul: {
          li: {
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#f9f9f9",
              paddingLeft: "0.25rem",
            },
          },
        },
        a: {
          color: "inherit",
          textDecoration: "underline",
          transition: "color 0.2s ease",
          "&:hover": {
            color: "#ff6f00",
          },
        },
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center" }}>
        Krutin (Klay) Shukla
      </Typography>
      <Typography sx={{ textAlign: "center" }}>
        krutinrs@gmail.com | (740)-272-3683 |{" "}
        <a
          href="https://www.linkedin.com/in/krutin-shukla/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </Typography>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" sx={{ mt: 3, fontWeight: 600 }}>
        Education
      </Typography>
      <Typography sx={{ textAlign: "left" }}>
        <strong>The Ohio State University</strong>
        <br />
        Bachelors in Computer Science (Software Development Specialization)
        <br />
        May 2025
      </Typography>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" sx={{ mt: 3, fontWeight: 600 }}>
        Work Experience
      </Typography>

      {/* JPMorgan */}
      <Box sx={{ textAlign: "left", mt: 2 }}>
        <Typography sx={{ fontWeight: 600 }}>
          JPMorgan Chase & Co. | Software Engineer Intern | Jun 2024 – Present
        </Typography>
        <CollapsibleSection
          bullets={[
            "Developed digital and mobile banking features for millions of users.",
            "Built responsive UIs with React, SCSS, and TypeScript.",
            "Leveraged big data with cross-functional teams to optimize trading performance.",
            "Created merchant payment solutions using machine learning strategies.",
            "Contributed to hybrid cloud platform integrations for scalable infrastructure.",
            "Implemented automated recovery tools for global resiliency.",
            "Participated in Agile workflows, pair programming, and chaos engineering.",
            "Collaborated with CTO during Innovation Week to explore AI in software dev.",
          ]}
          skills="Skills: React.js · TypeScript · SCSS · Front-End Design · Backend · Agile"
        />
      </Box>

      {/* Nationwide */}
      <Box sx={{ textAlign: "left", mt: 2 }}>
        <Typography sx={{ fontWeight: 600 }}>
          Nationwide Children’s Hospital | Software Development Intern | Mar
          2024 – Present
        </Typography>
        <CollapsibleSection
          bullets={[
            "Built a standardized variant classification tool using React and SCSS.",
            "Improved UI/UX by implementing intuitive interfaces and frontend enhancements.",
            "Resolved frontend issues and implemented new features with team collaboration.",
            "Developed backend logic using Python for integrated systems.",
            "Utilized AWS for scalable and reliable backend infrastructure.",
            "Maintained performance using industry best practices and frameworks.",
          ]}
          skills="Skills: React.js · Python · AWS · SCSS · Front-End Design · Full-Stack Development"
        />
      </Box>

      {/* Coder School */}
      <Box sx={{ textAlign: "left", mt: 2 }}>
        <Typography sx={{ fontWeight: 600 }}>
          The Coder School | Code Coach | Aug 2021 – May 2024
        </Typography>
        <CollapsibleSection
          bullets={[
            "Mentored students in programming with customized lesson plans.",
            "Improved student outcomes by adapting to individual learning styles.",
            "Encouraged teamwork and collaboration among young coders.",
          ]}
          skills="Skills: Java · Python · Debugging · Programming · Leadership · Teamwork"
        />
      </Box>

      {/* Robot Academy */}
      <Box sx={{ textAlign: "left", mt: 2 }}>
        <Typography sx={{ fontWeight: 600 }}>
          Robot Academy LLC | Robot Genius | May 2022 – Feb 2024
        </Typography>
        <CollapsibleSection
          bullets={[
            "Led a team of student instructors and tracked daily progress.",
            "Designed engaging STEM curriculum content and videos.",
            "Inspired curiosity and perseverance through robotics challenges.",
          ]}
          skills="Skills: Python · Communication · Robotics · Mentoring · Creative Teaching"
        />
      </Box>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Skills & Technologies
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "left",
          mt: 1,
        }}
      >
        <CollapsibleList
          title="Skills"
          items={[
            "Teamwork",
            "Communication",
            "Problem Solving",
            "Time Management",
            "Critical Thinking",
            "Agile Methodologies",
            "Leadership",
            "Analytical Skills",
            "Adaptability",
            "Collaboration",
            "Attention to Detail",
            "Creativity",
            "Public Speaking",
            "Mentoring",
            "Conflict Resolution",
            "Decision Making",
          ]}
        />
        <CollapsibleList
          title="Technologies"
          items={[
            "React",
            "HTML/CSS",
            "AWS",
            "Python",
            "SQL",
            "CSS / SCSS",
            "Java",
            "Node.js",
            "JavaScript / TypeScript",
            "Git",
            "Docker",
            "Figma",
            "REST APIs",
            "Kotlin",
            "Swift",
            "Lua",
            "C / C++",
            "Android Studio / Xcode",
          ]}
        />
      </Box>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" sx={{ mt: 4, fontWeight: 600 }}>
        Projects
      </Typography>

      <Box sx={{ textAlign: "left" }}>
        {[
          {
            title: "InternOverflow",
            description:
              "Hackathon project at JPMorgan to help interns onboard faster via anonymous Q&A and mentoring.",
            skills:
              "React.js · Python · Front-End Design · Backend Development",
          },
          {
            title: "Matrix Calculator",
            description:
              "Built a matrix reduction tool for linear algebra using Python and shared with professors to aid student learning.",
            skills: "Python · Jupyter",
          },
          {
            title: "AI Battleship Game",
            description:
              "Engineered a smart AI opponent for a Battleship game with varying difficulty and feedback-driven improvements.",
            skills: "Python · MATLAB",
          },
          {
            title: "Glossary Dictionaries",
            description:
              "Java program that parses definitions and creates linked HTML pages for learning vocabulary with styled UI.",
            skills: "Java · HTML · CSS",
          },
        ].map((project, idx) => (
          <Box key={idx} sx={{ mb: 2 }}>
            <Typography
              fontWeight={600}
              sx={{
                transition: "color 0.2s",
                "&:hover": { color: "#ff6f00" },
              }}
            >
              {project.title}
            </Typography>
            <Typography>{project.description}</Typography>
            <Box
              sx={{ fontStyle: "italic" }}
            >{`Skills: ${project.skills}`}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
