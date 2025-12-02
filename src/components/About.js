import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutPage = ({ mode }) => {
  return (
    <div className={`about-page ${mode === 'dark' ? 'dark-theme' : ''}`}>
      <Container className="py-5">
        <Row className="mb-4">
          <Col className="text-center">
            <h1 className={`display-4 ${mode === 'dark' ? 'text-light' : ''}`}>
              About Satvik's Group
            </h1>
            <p className={`lead ${mode === 'dark' ? 'text-light' : 'text-muted'}`}>
              Empowering Students Through Quality Education Resources
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <Card className={`shadow-sm h-100 ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
              <Card.Body>
                <Card.Title className="fs-3">About Satvik Kushwaha</Card.Title>
                <Card.Text>
                  Satvik Kushwaha is the founder and CEO of Satvik's Group, a passionate educator 
                  and tech enthusiast with a vision to make quality education accessible to all. 
                  With 5+ years of experience in academic mentoring, Satvik has dedicated his 
                  career to helping students achieve academic excellence.
                </Card.Text>
                <div className="mt-4">
                  <h5 className="mb-3">Connect with Satvik:</h5>
                  <div className="d-flex gap-3">
                    {[
                      {name: 'LinkedIn', url: 'https://www.linkedin.com/in/satvik-kushwaha-343452237/', variant: 'primary'},
                      {name: 'Twitter', url: 'https://twitter.com/', variant: 'info'},
                      {name: 'Blog', url: 'https://blog', variant: 'success'}
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`btn btn-${mode === 'dark' ? 'outline-light' : social.variant}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className={`shadow-sm h-100 ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
              <Card.Body>
                <Card.Title className="fs-3">Our Mission</Card.Title>
                <Card.Text>
                  Satvik's Group is committed to providing comprehensive academic resources for 
                  college students. Our platform offers:
                </Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item className={mode === 'dark' ? 'bg-dark text-light' : ''}>
                    📚 Curated Study Materials
                  </ListGroup.Item>
                  <ListGroup.Item className={mode === 'dark' ? 'bg-dark text-light' : ''}>
                    📝 Previous Year Question Papers
                  </ListGroup.Item>
                  <ListGroup.Item className={mode === 'dark' ? 'bg-dark text-light' : ''}>
                    🎯 Exam Preparation Resources
                  </ListGroup.Item>
                  <ListGroup.Item className={mode === 'dark' ? 'bg-dark text-light' : ''}>
                    💡 Interactive Learning Tools
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Card className={`shadow-sm ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
              <Card.Body>
                <Card.Title className="fs-3">Features</Card.Title>
                <Row className="g-4">
                  {[
                    {icon: '📖', title: 'Comprehensive Notes', 
                     text: 'Detailed subject notes curated by experts'},
                    {icon: '📈', title: 'Performance Tracking', 
                     text: 'Monitor your academic progress'},
                    {icon: '🖥️', title: 'Digital Library', 
                     text: 'Access to 1000+ educational resources'},
                    {icon: '👥', title: 'Community Support', 
                     text: 'Connect with peers and mentors'},
                  ].map((feature, index) => (
                    <Col md={6} key={index}>
                      <div className={`p-3 rounded ${mode === 'dark' ? 'bg-black' : 'bg-light'}`}>
                        <div className="d-flex align-items-center gap-3">
                          <span className="display-4">{feature.icon}</span>
                          <div>
                            <h5 className={mode === 'dark' ? 'text-light' : ''}>
                              {feature.title}
                            </h5>
                            <p className={`mb-0 ${mode === 'dark' ? 'text-light' : 'text-muted'}`}>
                              {feature.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <div className={`p-4 rounded ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
              <h3 className={`mb-4 ${mode === 'dark' ? 'text-light' : ''}`}>
                Get Started Today!
              </h3>
              <Link 
                to="/signup" 
                className={`btn btn-${mode === 'dark' ? 'outline-light' : 'primary'} btn-lg`}
              >
                Join Satvik's Group Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;