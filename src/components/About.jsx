import { useState, useEffect } from 'react';
import './styles.css';

const About = () => {
  const [activeDescription, setActiveDescription] = useState(0);

  const handleIconClick = (index) => {
    setActiveDescription(index); // Set the active description index
  };

  useEffect(() => {
    setActiveDescription(0);
  }, []);

  const projectDescriptions = [
    {
      id: 'project1',
      title: 'Carsiovasular disease Prediction using machine learning',
      description: 'Developed a Django based cardiovascular disease prediction app using machine learning.',
      codeLink: 'https://github.com/example/asthma-prediction',
      liveLink: 'https://asthma-prediction-live.example.com'
    },
    {
      id: 'project2',
      title: 'spotify clone',
      description: 'A song genre classification system using Machine learning',
      codeLink: 'https://github.com/example/flight-management',
      liveLink: 'https://flight-management-live.example.com'
    },
    {
      id: 'project3',
      title: 'Cyber Cafe Management System',
      description: 'A cyber cafe management system using HTML, CSS, and JavaScript.',
      codeLink: 'https://github.com/example/cyber-cafe',
      liveLink: 'https://cyber-cafe-live.example.com'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="heading">
        <h1>About Me</h1>
        <div className="content-container">
          {/* Education Card */}
          <div id="education-card" className="aside card">
            <div className="card-inner">
              <div className="card-front">
                <h2 className="section-title">Education</h2>
              </div>
              <div className="card-back">
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                  <h3 className="institution-name"> Cambridge Institute of Technology, Bangalore</h3>
                  <p className="degree-info">Bachelor of Engineering</p>
                  <p className="duration">2012 - 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Card */}
          <div className="projects card">
            <div className="card-inner">
              <div className="card-front">
                <h2 className="section-title">Projects</h2>
              </div>
              <div className="card-back">
                <h2 className="section-title">Projects</h2>
                <div className="projects-icons">
                  {projectDescriptions.map((project, index) => (
                    <i
                      key={index}
                      className={`fas ${project.id === 'project1' ? 'fa-laptop-code' : project.id === 'project2' ? 'fa-plane' : 'fa-cogs'}`}
                      data-target={project.id}
                      onClick={() => handleIconClick(index)}
                    ></i>
                  ))}
                </div>
                <div className="projects-details">
                  {projectDescriptions.map((project, index) => (
                    <div
                      key={project.id}
                      id={project.id}
                      className={`project-description ${activeDescription === index ? 'active' : ''}`}
                    >
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-actions">
                        <a href={project.codeLink} target="_blank" className="action-btn">
                          <i className="fas fa-code"></i> View Code
                        </a>
                        <a href={project.liveLink} target="_blank" className="action-btn">
                          <i className="fas fa-eye"></i> Live Review
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Internship Card */}
          <div className="internship card">
            <div className="card-inner">
              <div className="card-front">
                <h2 className="section-title">Internship</h2>
              </div>
              <div className="card-back">
                <h2 className="section-title">Internship</h2>
                <div className="internship-container">
                  <ul>
                    <li>
                      <h3>NexEther, Bengaluru, India</h3>
                      <p>frontend developer</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
