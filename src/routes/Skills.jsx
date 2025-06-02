import React from "react";
import "./Skills.css"; // Ensure CSS file is linked

const Skills = () => {
  return (
    <section>
      <h1 className="Main-heading">My <span className="skills-heading">Skills </span></h1>
      <div className="content">
      <div className="container1" id="Skills">
        <h1 className="heading">Technical<span className="skills-heading">Skills </span></h1>
        <div className="Technical-bars">
          {[
            { name: "HTML", className: "html" },
            { name: "CSS", className: "css" },
            { name: "JavaScript", className: "javascript" },
            { name: "MySQL", className: "mysql" },
            { name: "React", className: "react"},
          ].map((skill, index) => (
            <div className="bars" key={index}>
             
              <div className="info">
                <span>{skill.name}</span>
              </div>
              <div className={`progress-line ${skill.className}`}>
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container1">
        <h1 className="heading">Professional<span className="skills-heading"> Skills</span> </h1>
        <div className="radial-bars">
          {[
            { name: "Creativity", percentage: "90%", className: "path-1" },
            { name: "Communication", percentage: "80%", className: "path-2" },
            { name: "Problem Solving", percentage: "75%", className: "path-3" },
            { name: "Teamwork", percentage: "85%", className: "path-4" },
          ].map((skill, index) => (
            <div className="radial-bar" key={index}>
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className={`path ${skill.className}`} cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">{skill.percentage}</div>
              <div className="text">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
