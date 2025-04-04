import { Box, Typography, IconButton, Collapse, Divider } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

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
            sx={{ ml: 1, mt: -1 }}
            size="small"
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
        fontFamily: "Arial, sans-serif",
        border: "2px solid black",
        boxShadow: "0.5rem 0.5rem 0 orange",
        padding: "2rem",
        marginTop: "2rem",
        width: "90%",
        maxWidth: "800px",
        backgroundColor: "white",
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

      {/* Education Section */}
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

      {/* Work Experience Section */}
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

      {/* Nationwide Children's Hospital */}
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

      {/* The Coder School */}
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

      {/* Skills & Technologies */}
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
        <Box>
          <Typography fontWeight={600}>Skills</Typography>
          <ul style={{ paddingLeft: "1rem", marginLeft: 0 }}>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Critical Thinking</li>
            <li>Agile Methodologies</li>
            <li>Leadership</li>
            <li>Analytical Skills</li>
            <li>Adaptability</li>
            <li>Collaboration</li>
            <li>Attention to Detail</li>
            <li>Creativity</li>
            <li>Public Speaking</li>
            <li>Mentoring</li>
            <li>Conflict Resolution</li>
            <li>Decision Making</li>
          </ul>
        </Box>
        <Box>
          <Typography fontWeight={600}>Technologies</Typography>
          <ul style={{ paddingLeft: "1rem", marginLeft: 0 }}>
            <li>React</li>
            <li>CSS / SCSS</li>
            <li>HTML</li>
            <li>Java</li>
            <li>Python</li>
            <li>AWS</li>
            <li>Node.js</li>
            <li>JavaScript / TypeScript</li>
            <li>SQL</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Figma</li>
            <li>REST APIs</li>
            <li>Kotlin</li>
            <li>Swift</li>
            <li>Lua</li>
            <li>C / C++</li>
            <li>Android Studio / Xcode</li>
          </ul>
        </Box>
      </Box>

      {/* Projects */}
      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" sx={{ mt: 4, fontWeight: 600 }}>
        Projects
      </Typography>

      <Box sx={{ textAlign: "left" }}>
        <Typography fontWeight={600}>InternOverflow</Typography>
        <Typography>
          Hackathon project at JPMorgan to help interns onboard faster via
          anonymous Q&A and mentoring.
        </Typography>
        <Box sx={{ fontStyle: "italic", mb: 2 }}>
          Skills: React.js · Python · Front-End Design · Backend Development
        </Box>

        <Typography fontWeight={600}>Matrix Calculator</Typography>
        <Typography>
          Built a matrix reduction tool for linear algebra using Python and
          shared with professors to aid student learning.
        </Typography>
        <Box sx={{ fontStyle: "italic", mb: 2 }}>Skills: Python · Jupyter</Box>

        <Typography fontWeight={600}>AI Battleship Game</Typography>
        <Typography>
          Engineered a smart AI opponent for a Battleship game with varying
          difficulty and feedback-driven improvements.
        </Typography>
        <Box sx={{ fontStyle: "italic", mb: 2 }}>Skills: Python · MATLAB</Box>

        <Typography fontWeight={600}>Glossary Dictionaries</Typography>
        <Typography>
          Java program that parses definitions and creates linked HTML pages for
          learning vocabulary with styled UI.
        </Typography>
        <Box sx={{ fontStyle: "italic" }}>Skills: Java · HTML · CSS</Box>
      </Box>
    </Box>
  );
}
