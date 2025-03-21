import { NavLink } from "react-router";
import Button from "../../../components/button/Button";
import texts from "./../../../texts.json";
import "./../styles/home.css";
import routes from "../../../routes/routes.json";
import useHome from "../hooks/useHome";

const Home = () => {
  const { opacity } = useHome();

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">{texts["/home"].title}</span>
          </h1>
          <p className="hero-description">{texts["/home"].description}</p>
          <div className="hero-buttons">
            <a
              href="#tools-section"
              className="button button-primary"
              target="_self"
              rel="noopener noreferrer"
            >
              {texts["/home"].button1}
            </a>

            <a
              href="#contact-us-section"
              className="button button-outline"
              target="_self"
              rel="noopener noreferrer"
            >
              {texts["/home"].button2}
            </a>
          </div>
        </div>

        <div className="scroll-indicator" style={{ opacity }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </section>

      <section className="section section-gray" id="tools-section">
        <div className="container mt-3 mb-3">
          <h2 className="section-title">
            <span className="gradient-text">{texts["/home"].h2}</span>
          </h2>

          <div className="tools-flex">
            <div className="tool-card">
              <div className="tool-card-content">
                <div className="tool-header">
                  <div className="tool-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 16.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 0V10m0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 0H6m0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 0v6.5m0 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
                    </svg>
                  </div>
                  <h3 className="tool-title">
                    {texts["/home"].herramientas["conversor-xlsx-json"].title}
                  </h3>
                </div>
                <p className="tool-description">
                  {
                    texts["/home"].herramientas["conversor-xlsx-json"]
                      .description
                  }
                </p>
                <NavLink to={routes[1].path} className="tool-link">
                  {texts["/home"].herramientas["conversor-xlsx-json"].button1}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </NavLink>
              </div>
            </div>

            <div className="tool-card">
              <div className="tool-card-content">
                <div className="tool-header">
                  <div className="tool-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                  <h3 className="tool-title">
                    {texts["/home"].herramientas["redimencionador-img"].title}
                  </h3>
                </div>
                <p className="tool-description">
                  {
                    texts["/home"].herramientas["redimencionador-img"]
                      .description
                  }
                </p>
                <NavLink to={routes[2].path} className="tool-link">
                  {texts["/home"].herramientas["redimencionador-img"].button1}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="about-me-section">
        <div className="container mt-3 mb-3">
          <h2 className="section-title">
            <span className="gradient-text">
              {texts["/home"]["about-me"].title}
            </span>
          </h2>

          <div className="about-card">
            <p className="about-text">
              {texts["/home"]["about-me"].description1}
            </p>
            <p className="about-text">
              {texts["/home"]["about-me"].description2}
            </p>
            <div className="skills-container">
              {texts["/home"]["about-me"].stack.map((element) => (
                <span className="skill-tag" key={element.stackid}>
                  {element.stackname}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray" id="projects-section">
        <div className="container mt-3 mb-3">
          <h2 className="section-title">
            <span className="gradient-text">
              {texts["/home"].projects.title}
            </span>
          </h2>

          <div className="projects-flex">
            {texts["/home"].projects.projects.map((element) => (
              <div className="project-card" key={element.idporject}>
                <div className="project-card-content">
                  <h3 className="project-title">{element.title}</h3>
                  <p className="project-description">{element.description}</p>
                  <a href="#" className="project-link">
                    {element.button1}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="contact-us-section">
        <div className="container mb-3 mt-3">
          <h2 className="section-title">
            <span className="gradient-text">
              {texts["/home"]["contact-me"].title}
            </span>
          </h2>
          <p className="contact-description">
            {texts["/home"]["contact-me"].description}
          </p>

          <div className="social-links">
            <a
              href={texts["/home"]["contact-me"].anchors.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href={texts["/home"]["contact-me"].anchors.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <Button
            textbutton={texts["/home"]["contact-me"].button1}
            classname={"button-primary contact-button"}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
