function ProjectList() {
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
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {/* Map is a inbuilt javascript array method that creates a new array by applying a function to each element of the original array */}
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
