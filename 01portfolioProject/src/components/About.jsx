function About() {
  const name = "John Doe";
  const profession = "Full Stack Developer";
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        Hello I am {name}, I am a {profession}. I love building various types of
        software applications
      </p>
    </section>
  );
}

export default About;
