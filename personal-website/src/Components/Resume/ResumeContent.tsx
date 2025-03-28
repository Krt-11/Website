import { Box, Typography } from "@mui/material";

export default function ResumeContent() {
  return (
    <Box
      sx={{
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
      <Typography
        variant="h5"
        sx={{ mt: 3, fontWeight: 600, textAlign: "left" }}
      >
        Education
      </Typography>
      <Typography>
        <strong>The Ohio State University</strong>
        <br />
        Bachelors in Computer Science (Software Development Specialization)
        <br />
        May 2025
      </Typography>

      {/* Work Experience Section */}
      <Typography
        variant="h5"
        sx={{ mt: 3, fontWeight: 600, textAlign: "left" }}
      >
        Work Experience
      </Typography>

      <Typography>
        <strong>Nationwide Children’s Hospital</strong> | Software Development
        Intern | March 2024 - Present
      </Typography>
      <ul>
        <li>
          Key role in a company-wide web development project optimizing
          performance and usability.
        </li>
      </ul>

      <Typography>
        <strong>JP Morgan & Chase Co.</strong> | Software Development Intern |
        June 2024 - August 2024
      </Typography>
      <ul>
        <li>
          Developed an internal tool for developers to improve user satisfaction
          for 80 million users.
        </li>
      </ul>

      <Typography>
        <strong>Robot Academy LLC</strong> | Robot Genius | May 2022 - February
        2024
      </Typography>
      <ul>
        <li>
          Promoted STEM education using robots, increasing enrollment and
          engagement by two times.
        </li>
      </ul>

      <Typography>
        <strong>The Coder School</strong> | Code Coach | August 2021 - May 2024
      </Typography>
      <ul>
        <li>
          Mentored students in programming, increasing course completion rates
          and satisfaction.
        </li>
      </ul>

      {/* Skills and Technologies Section */}
      <Typography
        variant="h5"
        sx={{ mt: 3, fontWeight: 600, textAlign: "left" }}
      >
        Skills
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <ul>
          <li>Teamwork</li>
          <li>Communication</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Critical Thinking</li>
          <li>Agile Methodologies</li>
        </ul>
        <ul>
          <li>Leadership</li>
          <li>Analytical Skills</li>
          <li>Adaptability</li>
          <li>Collaboration</li>
          <li>Attention to Detail</li>
        </ul>
      </Box>

      <Typography
        variant="h5"
        sx={{ mt: 3, fontWeight: 600, textAlign: "left" }}
      >
        Technologies
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <ul>
          <li>React</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Java</li>
          <li>Python</li>
          <li>AWS</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Git</li>
        </ul>
        <ul>
          <li>Docker</li>
          <li>Figma</li>
          <li>REST APIs</li>
          <li>Kotlin</li>
          <li>Swift</li>
          <li>Lua</li>
          <li>C</li>
          <li>C++</li>
          <li>Android Studio</li>
          <li>Xcode</li>
        </ul>
      </Box>

      {/* Projects Section */}
      <Typography
        variant="h5"
        sx={{ mt: 3, fontWeight: 600, textAlign: "left" }}
      >
        Personal Projects
      </Typography>
      <Typography>
        <strong>AI Battleship Game</strong> | Developed an AI-powered battleship
        game using heuristic search and naive Bayes for decision-making.
        Implemented advanced game state evaluations for smarter moves.
      </Typography>
      <Typography>
        <strong>Pokédex App</strong> | Built a feature-rich mobile app using
        Firebase for authentication and data storage, featuring Pokémon search
        and personalized user experiences.
      </Typography>
    </Box>
  );
}
