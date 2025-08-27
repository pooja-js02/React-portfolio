import React from "react";
import "./About.css";
 import profileImage from "../assets/dp.jpg"; // Update with your image path
 import Resume from "../assets/Resume__PoojaJoshi.pdf";
// Update with your resume path

const About = () => {
  return (
    <section className="about-container">
      <div className="left-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="right-container">
        <h1 className="about-title">
          About <span className="highlight">Me</span>
        </h1>
        <h2 className="about-subtitle">Creative Frontend Developer</h2>
        <p className="about-text">
          I am a passionate frontend developer with expertise in building visually 
          stunning and highly interactive web applications. With a strong background in 
          HTML, CSS, JavaScript, and React, I strive to create seamless user experiences 
          that bridge creativity with functionality. My focus is on writing clean, 
          maintainable code while keeping up with the latest web technologies.
        </p>
        <p className="about-text">
          Beyond coding, I love exploring UI/UX design principles, optimizing 
          performance, and continuously learning new frameworks. Whether it's a simple 
          landing page or a complex web application, I am always eager to bring ideas to life!
        </p>
        <a href={Resume} download="PoojaJoshi__Resume" className="download-btn">Download CV</a>

        
      </div>
    </section>
  );
};

export default About;