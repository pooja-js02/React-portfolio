import React from "react";
import "./Projects.css";
import MovieImg from "../assets/f7a495ea274eeecab0daf8a7788299b8.gif";
import PortfolioImg from "../assets/image_processing20200727-27132-19pgvfp.gif";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: MovieImg,
      title: "Movie Recommender App",
      description:
        "My movie recommendation app, a personalized solution for discovering new films tailored to your tastes and preferences. This app is designed to simplify the daunting task of choosing what to watch by providing users with curated recommendations based on their viewing history, genre preferences, ratings, and more.",
      link: "https://github.com/pooja-js02/cinemafy",
    },
    {
      id: 2,
      image: PortfolioImg,
      title: "Portfolio",
      description:
        "This portfolio website highlights my skills, projects, and personal background. It provides an easy way for others to learn about my work, showcasing detailed project descriptions, live demos, and a professional overview of my expertise.",
      link: "https://pooja-js02.github.io/PortFolio/",
    },
  ];

  return (
    <section className="projects-section">
      <div id="portfolio">
        <div className="main-text">
          <h2>
            Latest <span>Project</span>
          </h2>
          <div className="portfolio-content">
            {projects.map((project) => (
              <div className="row" key={project.id}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="layer">
                  <h5>{project.title}</h5>
                  <p className="project-description">{project.description}</p>
                  <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  Live Demo
</a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
