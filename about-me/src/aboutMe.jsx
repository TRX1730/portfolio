import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { useState } from 'react';
import certficate from "./certyfikat.jpg";

const AboutMe = () => {
  const skills = [
    'React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 
    'SQL', 'WordPress', 'SEO', 'Git', 'Photoshop', 'Canva', 'Figma', 'Pakiet Office',
  ];
   const skillsInProgress = [
    'Java', 'Svelte'
  ];


  

return (
    <Container className="my-5" id="about">
      <Row className="justify-content-center fade-in-up ">
        <Col lg={10}>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold section-title gradient-text">O mnie</h2>
              <p className="lead">Junior Frontend Developer | Absolwent Technikum Programistycznego</p>
             
            </Col>
          </Row>

          <Row className="align-items-start">
            <Col md={4} className="text-center mb-4">
              <div className="avatar">M R-S</div>
              
              <Card className="mt-4 custom-card">
                <Card.Body>
                  <h5 className="card-title gradient-text ">Dane kontaktowe</h5>
                  <p className="mb-2 text-muted">📱 +48 519 649 844</p>
                  <p className="mb-2 text-muted">📧 maciej.rogala3@wp.pl</p>
                  <p className="mb-0 text-muted">🚀 Dostępny od zaraz</p>
                </Card.Body>
              </Card>

              <div className="mt-3">
                <Button className="me-2 btn-custom" href="https://github.com/TRX1730" target="_blank">Moje Projekty</Button>
                <Button variant="outline-primary" className="btn-custom" href="mailto:maciej.rogala3@wp.pl">Kontakt</Button>
              </div>
            </Col>

            <Col md={8}>
              <Card className="custom-card">
                <Card.Body className="p-4">
                  <h4 className="card-title mb-3 gradient-text">Cześć! Jestem Maciej 👋</h4>
                  
                  <p className="card-text mb-3 text-muted">
                    Jestem <strong className="gradient-text">absolwentem Technikum ZSE w Radomiu</strong> oraz aktualnie student 
                    Polsko-Japońskiej Akademii Technik Komputerowych w Warszawie na kierunku Informatyka (1 rok zaocznie).
                  </p>

                  <div className="mb-4">
                    <h5 className="mb-3 gradient-text">💼 Doświadczenie</h5>
                    <Card className="experience-bg">
                      <Card.Body>
                        <h6 className="mb-1">Projekt-Net</h6>
                        <p className="text-muted mb-2">4 miesiące praktyk</p>
                        <ul className="mb-0">
                          <li>Implementacja funkcjonalności na stronach</li>
                          <li>Zarządzanie bazami danych SQL</li>
                          <li>Optymalizacja SEO</li>
                          <li>Edycja stron według potrzeb klienta</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>

                                    <div className="mb-4">
                      <h5 className="mb-3 gradient-text">🛠️ Umiejętności</h5>
                      <div className="skills-container">
                        {skills.map((skill, index) => (
                          <Badge key={index} className="skill-badge">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                    
                      <h6 className="learning-header">🔄 W trakcie nauki:</h6>
                      <div className="skills-container">
                           {skillsInProgress.map((skillsInProgress, index) => (
                        <Badge className="skill-badge-in-progress">
                          {skillsInProgress}
                        </Badge>
                           ))}
                    </div>
                    </div>
                  <div>
                    <h5 className="mb-3 gradient-text">🌐 Języki</h5>
                    <Row>
                      <Col sm={6}>
                        <div className="d-flex justify-content-between align-items-center mb-2 p-2 custom-card text-muted">
                          <span>🇵🇱 Polski</span>
                          <Badge bg="info text-muted" >Native</Badge>
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="d-flex justify-content-between align-items-center mb-2 p-2 custom-card text-muted">
                          <span>🇬🇧 Angielski</span>
                          <Badge bg="info text-muted">C1</Badge>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div style={{marginTop: "10px"}}>
                     <h5 className="mb-3 gradient-text"><i class="bi bi-star-fill"></i> Osiągnięcia</h5>
                      <Row>
                        <Col>
                      <div className="d-flex justify-content-between align-items-center mb-2 p-2 custom-card text-muted"  >
                       
                          <span onClick={() => window.open(certficate, "_blank")} style={{ cursor: "pointer" }} > Finalista HackYeah 2024</span>
                         
                      </div>
                      </Col>
                      <Col>
                      <div className="d-flex justify-content-between align-items-center mb-2 p-2 custom-card text-muted"  >
                           <span>Zdane egzaminy INF. 03 oraz INF. 04</span>
                    </div>
                    </Col>
                    </Row>

                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );

};
export default AboutMe;