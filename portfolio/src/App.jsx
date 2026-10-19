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
      </div>
    </>
  )
}

export default App
