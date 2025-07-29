function About() {
    return (
      <section className="about" id="about">
        <div className="row">
          <h2>About</h2>
          <div className="about__content">
            <div className="about__text">
              <p className="about">
                When I'm not banging my head on the wall because my code doesn't work, I'm probably reading sci-fi, playing bass, or spending time outdoors touching grass.
              </p>
              {/* SKILLS */}
              <h3 className="about__subtitle"><strong>Skills</strong></h3>
              <div className="skills">
                <div className="skills__category">
                  <ul className="skills__list">
                    <li><strong>Languages:</strong> Java, Python, JavaScript, Elixir</li>
                    <li><strong>Frameworks/Libraries:</strong> Django, React, Phoenix, NumPy, Pandas, PyTorch</li>
                    <li><strong>Tools:</strong> SQL, Git, Docker, LaTeX, MS Office Suite</li>
                    <li><strong>Currently Learning:</strong> TypeScript</li>
                    <li><strong>Soft Skills:</strong> Communication, Collaboration, Problem-Solving, Adaptability</li>
                  </ul>
                </div>
              </div>
  
              <a href="./cv.pdf" className="btn">Take a look at my CV</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;