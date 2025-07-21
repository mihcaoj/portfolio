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
  
              {/* EDUCATION */}
              <h3 className="about__subtitle"><strong>Education</strong></h3>
              <div className="education">
                <div className="education__item">
                  <h4><strong>Bachelor of Science (180ECTS) in Computer Science</strong></h4>
                  <p className="education__details">University of Fribourg • 2022 - 2025</p>
                  <p className="education__description">Minor in Pedagogy/Psychology.</p>
                </div>
              </div>
  
              <div className="education">
                <div className="education__item">
                  <h4><strong>Bachelor of Science (180ECTS) in Psychology</strong></h4>
                  <p className="education__details">University of Fribourg • 2020 - 2022</p>
                  <p className="education__description">Reoriented to Computer Science after completing four semesters.</p>
                </div>
              </div>
  
              <div className="education">
                <div className="education__item">
                  <h4><strong>Dubs Complementary Exam (Examen Complémentaire Passerelle Dubs)</strong></h4>
                  <p className="education__details">École Prévôtoise, Moutier • 2018-2019</p>
                  <p className="education__description">Multidisciplinary curriculum covering: French, English, Mathematics, Biology, 
                    Chemistry, Physics, History, and Geography. Preparation for the complementary exam
                    known as Dubs, which enables holders of a Professional or Specialized Maturity Certificate 
                    to access all fields of study at Swiss universities.</p>
                </div>
              </div>
  
              <div className="education">
                <div className="education__item">
                  <h4><strong>Specialized Maturity Certificate in Social Work (Maturitée Specialisée Travail Social)</strong></h4>
                  <p className="education__details">Signol'Air, La Neuveville • 2017-2018</p>
                  <p className="education__description">This certificate is intended for students who have completed a General Education School
                    in the field of social work. It includes 40 weeks of practical internships and the completion 
                    of a Specialized Maturity Thesis related to the social field.</p>
                </div>
              </div>
  
              {/* INTERNSHIPS */}
              <h3 className="about__subtitle"><strong>Internships</strong></h3>
              <div className="education">
                <div className="education__item">
                  <h4><strong>ABCCD Research Group, University of Fribourg</strong></h4>
                    <p className="education__details">
                        Collaborated on designing co-speech gesture assessment tasks, utilized R for data analysis, 
                        recorded multimedia stimuli, and implemented multilingual experimental tasks
                        with test runs.
                    </p>
                </div>

                <div className="education__item">
                  <h4><strong>Signol'Air, La Neuveville</strong></h4>
                    <p className="education__details">
                        Supervised children while designing and leading daily educational activities. Actively
                        participated in weekly team meetings and maintained clear communication with both
                        parents and staff members.
                    </p>
                </div>
              </div>
  
              {/* CERTIFICATIONS */}
              <h3 className="about__subtitle"><strong>Certifications</strong></h3>
              <div className="education">
                <div className="education__item">
                  <h4><strong>CS50: Introduction to Cybersecurity (HarvardX)</strong> • 2024</h4>
                  <p className="education__details">Completed five lectures, each with a practical assignment covering key cybersecurity topics, and culminating in a final project.</p>
                </div>
              </div>

              <div className="education">
                <div className="education__item">
                  <h4><strong>Introduction to Data Science</strong> • 2023</h4>
                  <p className="education__details">
                    Explored data analytics applications, including AI/ML, through practical case studies
                    and assessments.
                  </p>
                </div>
              </div>

              <div className="education">
                <div className="education__item">
                  <h4><strong>Cybersecurity Essentials</strong> • 2023</h4>
                  <p className="education__details">
                    Acquired knowledge of cyber threats, defense strategies, and legal principles to protect
                    data and networks.
                  </p>
                </div>
              </div>

              <div className="education">
                <div className="education__item">
                  <h4><strong>Python Essentials</strong> • 2023</h4>
                  <p className="education__details">
                    Wrote modular code, applied OOP, and
                    prepared for professional programming roles.
                  </p>
                </div>
              </div>

              <div className="education">
                <div className="education__item">
                  <h4><strong>Cambridge Advanced Exam (C1)</strong> • 2019</h4>
                  <p className="education__details">Awarded a distinction - demonstrated proficiency at CEFR Level C2.</p>
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