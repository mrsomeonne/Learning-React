import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const name = "John Doe";
  const profession = "Full Stack Developer";
  const projects = [
    {
      title: "Project 1",
      description: "A web application created using React",
      link: "#",
    },
    {
      title: "Project 2",
      description: "A mobile application created using Flutter",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A desktop application created using Electron",
      link: "#",
    },
  ];

  return (
    <>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <h1>{name}</h1>
          <p>{profession}</p>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* About Section */}
        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p>
            Hello I am {name}, I am a {profession}. I love building various
            types of software applications
          </p>
        </section>

        {/* Project Section */}
        <section id="projects" className="project-section">
          <h2>Projects</h2>
          <div className="projects-list">
            {/* Map is a inbuilt javascript array method that creates a new array by applying a function to each element of the original array */}
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>
          <p>
            If you would like to get in contact with me , please email me at{" "}
            <a href="mailto:johndoe@example.com">johndoe@example.com</a>
          </p>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <p>2025. All Right Reserved</p>
        </footer>
      </div>
    </>
  );
}

export default App;
