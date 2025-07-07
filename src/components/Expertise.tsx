import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "JavaScript",
  "Vitest",
  "Redux Toolkit",
  "Storybook",
  "HTML5",
  "CSS3",
  "SASS",
  "Python",
  "Node js",
  "Mongo Db",
  "TypeScript",
  "Postman/Bruno",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Git Lab",
  "Linux",
  "Code reviews",
  "Sonar Qube",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React and Node as backen. I have
              a strong proficiency in the SDLC process and frontend + backend
              development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip
                  key={index}
                  className="chip"
                  label={label}
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Version Control</h3>
            <p>
              “Every great project starts with a solid commit. From branching
              strategies to pull requests, I keep collaboration clean and
              conflict-free. Git and GitHub aren’t just tools—they’re my second
              language. Code reviews? That’s where quality meets mentorship.”
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip
                  key={index}
                  className="chip"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                  label={label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
