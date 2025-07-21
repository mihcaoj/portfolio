import githubSvg from '../../src/assets/images/github.svg';
import noesisPng from '../../src/assets/images/noesis.png';
import cognitusPng from '../../src/assets/images/cognitus.png';

function Projects() {
  return (
    <section className="project" id="project">
      <div className="row">
        <h2>Projects</h2>
        <div className="project__boxes">
          <div className="project__box">
            <div className="project__image-box">
              <img src={noesisPng} className="project__image" alt="Noesis Project" />
            </div>
            <div className="project__content">
              <div className="project__header">
                <h3>Noesis</h3>
                <a href="https://www.github.com/mihcaoj/noesis" title="View Source Code" target="_blank" rel="noopener noreferrer" className="project__github">
                  <img src={githubSvg} className="project__code" alt="GitHub" />
                </a>
              </div>
              <p>
                A full-stack tutoring platform built with Django, React, and PostgreSQL.
              </p>
              <p>
                A crossroads project between my major in computer science and my minor in pedagogy, developed during my Bachelor's Thesis with the Software Engineering group of the University of Fribourg.
              </p>
              <p>
                Implemented a headless architecture with Django REST Framework as the API backend and React for a responsive frontend.
              </p>
              <p>
                Key features include search functionality, topic filtering, tutor cards, user profiles, notifications, session management, a messaging interface, and more fancy stuff.
              </p>
              <p>
                The platform was containerized with Docker for consistent deployment and includes a database seeding script for testing and demonstration purposes.
              </p>
            </div>
          </div>

          <div className="project__box">
            <div className="project__image-box">
              <img src={cognitusPng} className="project__image" alt="CognitUs Project" />
            </div>
            <div className="project__content">
              <div className="project__header">
                <h3>CognitUs</h3>
                <a href="https://www.github.com/mihcaoj/cognitus" title="View Source Code" target="_blank" rel="noopener noreferrer" className="project__github">
                  <img src={githubSvg} className="project__code" alt="GitHub" />
                </a>
              </div>
              <p>
                A real-time collaborative text editor built with Phoenix.
              </p>
              <p>
                Developed in collaboration with a classmate for the final project of our Concurrent & Distributed Systems course.
              </p>
              <p>
                It uses Conflict-Free Replicated Data Types (CRDT) for conflict resolution in order to ensure multiple users can edit a text document simultaneously without wreaking havoc.
              </p>
              <p>
                Key features include live user tracking, caret positioning, and also persistent document state across sessions.
              </p>
              <p>
                The platform was containerized with Docker for easy deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
