
function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <h2>1. Marketing Campaign Analysis</h2>
          <p className="project-description">
            Analyzed marketing campaign data
            using Python and Pandas.
          </p>

          <div className="project-links">
            <a
              className="project-view-btn"
              href="https://github.com/sabeenajasmine/Marketing-Campaign-Performance-Analysis"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>2. Expense Tracker</h2>
          <p className="project-description">
            Developed an Expense Tracker application
            using Lovable to manage and track daily expenses.
          </p>

          <div className="project-links">
            <a
              className="project-view-btn"
              href="https://github.com/sabeenajasmine/rupee-watch-85356-50056-05314-50445.git"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>3. Weather Dashboard</h2>
          <p className="project-description">
            Created a Weather Dashboard application
            using React and OpenWeatherMap API to display real-time weather information.
          </p>
          <div className="project-links">
            <a
              className="project-view-btn"
              href="https://jas-weather-dashboard.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <h2>4. Portfolio Website</h2>
          <p className="project-description">
            Built a responsive portfolio website
            using React and styled-components.
          </p>
          <div className="project-links">
            <a
              className="project-view-btn"
              href="https://sabeenajasmine-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
