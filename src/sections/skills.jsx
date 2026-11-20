
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiPython,
  SiMongodb
} from "react-icons/si";

import { FaCss3Alt, FaDatabase } from "react-icons/fa";

import "./skill.css";

function Skills() {

  const techStack = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <SiMongodb /> }
  ];

  return (
    <section id="skills" className="skills">

      <h1>My Skills</h1>

      <p>Technologies I work with</p>

      <div className="techstack">

        {techStack.map((tech) => (
          <div className="tech-card" key={tech.name}>

            <div className="tech-icon">
              {tech.icon}
            </div>

            <h3>{tech.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
