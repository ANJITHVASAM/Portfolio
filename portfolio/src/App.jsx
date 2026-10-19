import React from "react";
import "./App.css";

const skills = [
  {
    title: "Programming",
    icon: "</>",
    items: ["Java", "Python", "SQL", "JavaScript (ES6+)"],
  },
  {
    title: "Backend",
    icon: "▤",
    items: ["Spring Boot", "Hibernate / JPA", "FastAPI", "REST APIs", "Maven"],
  },
  {
    title: "Frontend & Tools",
    icon: "▱",
    items: ["React.js", "HTML5", "CSS3", "Git / GitHub", "Postman"],
  },
];

const projects = [
  {
    number: "01",
    title: "Multi-Language Student Quiz Platform",
    description:
      "A full-stack assessment tool where learners can select a programming language and a difficulty level: Easy, Medium, or Hard.",
    tags: ["Full Stack", "Assessment", "Learning"],
    repo: "https://github.com/ANJITHVASAM",
    link: "https://student-quizapp.vercel.app/"
  },
  {
    number: "02",
    title: "E-Commerce Website",
    description:
      "A web application for browsing, searching, and purchasing products online. Add the exact repository and live demo when ready.",
    tags: ["React", "Web Application", "E-Commerce"],
    repo: "https://github.com/ANJITHVASAM",
  },
];

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function App() {

  const [lightMode, setLightMode] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function toggleTheme() {
    setLightMode(!lightMode);
  }

  return (
    <>
      <div className={`site ${lightMode ? "light" : ""}`}>
        <header className="header">
          <nav className="nav container">
            <a className="brand" href="#home" onClick={closeMenu}>
              <span className="brand-mark">VA</span>
              <span>
                VASAM ANJITH<span className="brand-dot">.</span>
              </span>
            </a>

            <button className="menu-toggle" type="button" onClick={toggleMenu}>
              ☰
            </button>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              {["About", "Skills", "Projects", "Journey", "Contact"].map(
                function (item) {
                  return (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={closeMenu}
                    >
                      {item}
                    </a>
                  );
                },
              )}

              <button
                className="theme-toggle"
                type="button"
                onClick={toggleTheme}
              >
                {lightMode ? "☾" : "☀"}
                {lightMode ? " Dark" : " Light"}
              </button>
            </div>
          </nav>
        </header>
        <main>
          <section id="home" className="hero container">
            <div className="hero-copy">
              <div className="availability">
                <span className="green-dot" />
                OPEN TO ENTRY-LEVEL OPPORTUNITIES
              </div>

              <h1>
                Hi, I’m Anjith.
                <br />
                <span>I build for the web.</span>
              </h1>

              <h2 className="hero-role">Java &amp; Full-Stack Developer</h2>

              <p className="hero-description">
                I enjoy turning ideas into useful web applications with Java,
                Spring Boot, React, and databases.
              </p>

              <div className="hero-actions">
                <a className="button primary-button" href="#projects">
                  Explore my work ↗
                </a>

                <a className="button outline-button" href="#contact">
                  Let’s connect
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/ANJITHVASAM"
                  target="_blank"
                  rel="noreferrer"
                >
                  ◈ GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/anjith-vasam-3b1b57335"
                  target="_blank"
                  rel="noreferrer"
                >
                  in LinkedIn
                </a>

                <a href="mailto:anjivasam000@gmail.com">✉ Email</a>
              </div>
            </div>

            <div className="hero-art">

              <div className="code-card">
                <div className="code-body">
                  <p>
                    <span className="line-number">01</span>{" "}
                    <span className="purple">class</span>{" "}
                    <span className="blue">Developer</span> {"{"}
                  </p>

                  <p>
                    <span className="line-number">02</span>
                    &nbsp; String name = <span className="green">"Anjith"</span>;
                  </p>

                  <p>
                    <span className="line-number">03</span>
                    &nbsp; String focus ={" "}
                    <span className="green">"Full Stack"</span>;
                  </p>

                  <p>
                    <span className="line-number">04</span>
                    &nbsp; String mindset ={" "}
                    <span className="green">"Keep learning"</span>;
                  </p>

                  <p>
                    <span className="line-number">05</span> {"}"}
                  </p>

                  <div className="code-status">
                    <span className="green-dot" />
                    Ready to build something useful
                  </div>
                </div>
              </div>
            </div>

            <a className="scroll-hint" href="#about">
              SCROLL TO EXPLORE ↓
            </a>
          </section>
          <section className="section container" id="about">
            <SectionLabel>01 / ABOUT ME</SectionLabel>

            <div className="about-grid">
              <h2>
                Curious by nature.
                <br />
                <span>Developer by choice.</span>
              </h2>

              <div className="about-copy">
                <p>
                  I’m a Computer Science and Engineering graduate who enjoys
                  solving practical problems through code. My focus is building
                  clear, reliable web experiences and strengthening my skills
                  across frontend and backend development.
                </p>

                <p>
                  During my internship at Besant Technologies, I worked on backend
                  modules and CRUD operations with relational databases. I’m eager
                  to keep learning and contribute to a collaborative development
                  team.
                </p>

                <div className="quick-facts">
                  <div>
                    <strong>2025</strong>
                    <span>B.Tech graduate</span>
                  </div>

                  <div>
                    <strong>Java</strong>
                    <span>Core strength</span>
                  </div>

                  <div>
                    <strong>Full Stack</strong>
                    <span>Learning by building</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section tinted-section" id="skills">
            <div className="container">
              <SectionLabel>02 / TOOLKIT</SectionLabel>

              <div className="section-heading">
                <h2>Skills I work with</h2>
                <p>Technologies from my current developer toolkit.</p>
              </div>

              <div className="skills-grid">
                {skills.map(function (skill) {
                  return (
                    <article className="skill-card" key={skill.title}>
                      <div className="skill-icon">{skill.icon}</div>

                      <h3>{skill.title}</h3>

                      <div className="tags">
                        {skill.items.map(function (item) {
                          return (
                            <span className="tag" key={item}>
                              {item}
                            </span>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
          <section className="section container" id="projects">
            <SectionLabel>03 / SELECTED WORK</SectionLabel>

            <div className="section-heading projects-heading">
              <div>
                <h2>Projects with purpose.</h2>
                <p>A couple of projects from my development journey.</p>
              </div>

              <span className="project-count">02 PROJECTS</span>
            </div>

            <div className="projects-grid">
              {projects.map(function (project) {
                return (
                  <article className="project-card" key={project.number}>
                    <div className="project-top">
                      <span>{project.number} / PROJECT</span>

                      <a href={project.repo} target="_blank" rel="noreferrer">
                        ↗
                      </a>
                    </div>

                    <div className="project-visual">

                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tags">
                      {project.tags.map(function (tag) {
                        return (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        );
                      })}
                    </div>

                    {project.link ? <a
                      className="text-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Website ↗
                    </a> : ""}
                    <br />
                    <a
                      className="text-link"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View GitHub profile ↗
                    </a>
                  </article>
                );
              })}
            </div>

            <p className="small-note">
              Update each project’s GitHub link to its specific repository and add
              a live demo when available.
            </p>
          </section>
          <section className="section tinted-section" id="journey">
            <div className="container">
              <SectionLabel>04 / MY JOURNEY</SectionLabel>

              <div className="section-heading">
                <h2>Learning, building, improving.</h2>
                <p>Education and experience that helped shape my foundation.</p>
              </div>

              <div className="timeline">
                <article className="timeline-item">
                  <span className="timeline-dot" />

                  <span className="timeline-date">JUL 2025 — SEP 2025</span>

                  <h3>Internship — Besant Technologies</h3>

                  <p>
                    Developed backend modules for CRUD operations and gained
                    practical experience with relational database connectivity,
                    query optimization, and backend workflows.
                  </p>
                </article>

                <article className="timeline-item">
                  <span className="timeline-dot" />

                  <span className="timeline-date">2022 — 2025</span>

                  <h3>B.Tech, Computer Science and Engineering</h3>

                  <p>
                    University College of Engineering, Kothagudem{" "}
                    <span className="result-badge">CGPA 7.71 / 10</span>
                  </p>
                </article>

                <article className="timeline-item">
                  <span className="timeline-dot" />

                  <span className="timeline-date">2019 — 2022</span>

                  <h3>Diploma, Mechanical Engineering</h3>

                  <p>
                    Vemuganti Manohar Rao Polytechnic, Warangal{" "}
                    <span className="result-badge">CGPA 9.32 / 10</span>
                  </p>
                </article>
              </div>

              <div className="certifications">
                <div>
                  <span className="cert-kicker">CERTIFICATIONS</span>
                  <h3>Building my foundation</h3>
                </div>

                <div className="cert-list">
                  <span>
                    Java Programming
                    <i>GeeksforGeeks · 2025</i>
                  </span>

                  <span>
                    Java Training
                    <i>Besant Technologies · 2025</i>
                  </span>

                  <span>
                    Full Stack Developer
                    <i>GeeksforGeeks · 2025</i>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="section container contact-section" id="contact">
            <SectionLabel>05 / CONTACT</SectionLabel>

            <div className="contact-panel">
              <div>
                <p className="availability">HAVE A ROLE OR PROJECT IN MIND?</p>

                <h2>
                  Let’s build something
                  <br />
                  <span>meaningful together.</span>
                </h2>

                <p className="contact-copy">
                  I’m looking for opportunities to learn, contribute, and grow as
                  a developer.
                </p>
              </div>

              <div className="contact-options">
                <a href="mailto:anjivasam000@gmail.com">
                  <span>✉</span>

                  <span>
                    <small>EMAIL ME</small>
                    anjivasam000@gmail.com
                  </span>

                  <span>↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/anjith-vasam-3b1b57335"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>in</span>

                  <span>
                    <small>CONNECT ON LINKEDIN</small>
                    View my profile
                  </span>

                  <span>↗</span>
                </a>

                <a
                  href="https://github.com/ANJITHVASAM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>◈</span>

                  <span>
                    <small>EXPLORE MY CODE</small>
                    github.com/ANJITHVASAM
                  </span>

                  <span>↗</span>
                </a>
              </div>
            </div>
          </section>
          <footer className="footer container">
            <a className="brand" href="#home">
              <span className="brand-mark">A</span>

              <span>
                ANJITH<span className="brand-dot">.</span>
              </span>
            </a>

            <span>Designed and built with curiosity.</span>

            <a className="back-top" href="#home">
              BACK TO TOP ↑
            </a>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
