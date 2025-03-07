import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
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
        About.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom={true}
        sx={{ fontFamily: "monospace", fontSize: "1.1rem", fontWeight: "600" }}
      >
        Hi there! I'm Krutin—a recent graduate from The Ohio State University
        with a Bachelor's in Computer Science, specializing in software
        development. I'm a full-stack software engineer with a passion for
        solving complex technical problems.
        <br />
        <br />
        Initially, I planned to pursue Mechanical Engineering, but after writing
        my first piece of code on a Raspberry Pi, I was hooked! I love turning
        theoretical concepts into real-world applications and building software
        that makes an impact. Since my freshman year at OSU, I’ve worked with
        both local and international companies to develop software solutions,
        helping tackle challenges while mentoring students interested in the
        same field.
        <br />
        <br />
        At my current role, I collaborate with cancer researchers to develop a
        tool that identifies cancer variants in partnership with international
        research teams. I build full-stack web applications that support this
        mission, combining my passion for software with meaningful real-world
        impact.
        <br />
        <br />I thrive in new challenges, constantly learning and refining my
        skills to create innovative solutions. If you’d like to connect, let’s
        chat!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          My Stack
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
        >
          Here are some technologies I am enjoying right now ↓
        </Typography>
        <Box sx={{ border: "solid blue", width: "75%" }}>
          logos of technology
        </Box>
      </Box>
    </Box>
  );
}

export default About;
