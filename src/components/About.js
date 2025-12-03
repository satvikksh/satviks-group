import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Button, Accordion, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutPage = ({ mode }) => {
  const [activeVision, setActiveVision] = useState(0);
  const [imaginationLevel, setImaginationLevel] = useState(70);
  const [realmIdea, setRealmIdea] = useState(null);

  const teamMembers = [
    {
      name: "Satvik",
      role: "Founder & Visionary",
      image: "/img/satvik.png",
      description: "The imaginative force behind the collective",
      specialties: ["Concept Creation", "Reality Design", "Cosmic Mapping"],
      quote: "If you can imagine it, we can build it... in our minds."
    },
    {
      name: "Alex",
      role: "Reality Architect",
      image: "/img/alex.png",
      description: "Builds impossible structures from pure thought",
      specialties: ["Quantum Structures", "Temporal Engineering", "Neural Networks"],
      quote: "The only limit is what you haven't thought of yet."
    },
    {
      name: "Maya",
      role: "Cosmic Cartographer",
      image: "/img/maya.png",
      description: "Maps the unmappable dimensions",
      specialties: ["Dimensional Mapping", "Realm Navigation", "Space-Time Charts"],
      quote: "Every imagination deserves a map."
    },
    {
      name: "Kiran",
      role: "Concept Weaver",
      image: "/img/kiran.png",
      description: "Connects disparate ideas into cohesive realities",
      specialties: ["Idea Synthesis", "Concept Integration", "Reality Blending"],
      quote: "Ideas are like stars - they shine brighter when connected."
    }
  ];

  const milestones = [
    { year: "2020", event: "Satvik's First Imagination", description: "The spark that started it all" },
    { year: "2021", event: "Formation of The Collective", description: "Like-minded imaginations unite" },
    { year: "2022", event: "Imaginary College Foundation", description: "A permanent home for ideas" },
    { year: "2023", event: "Quantum Realm Discovery", description: "First fully imagined dimension" },
    { year: "2024", event: "Neural Nexus Creation", description: "Linking minds across imagination" }
  ];

  const coreValues = [
    {
      title: "Unlimited Imagination",
      icon: "✨",
      description: "We believe no idea is too wild, no concept too strange. The only bad idea is the one not imagined.",
      color: "#667eea"
    },
    {
      title: "Collaborative Creation",
      icon: "👥",
      description: "Great imaginations multiply when shared. We build upon each other's ideas to create something greater.",
      color: "#764ba2"
    },
    {
      title: "Reality Optional",
      icon: "🌌",
      description: "Physics, logic, and existing rules are suggestions, not limitations. We embrace the impossible.",
      color: "#f093fb"
    },
    {
      title: "Continuous Wonder",
      icon: "🔭",
      description: "We maintain childlike curiosity and never stop asking 'what if?' and 'why not?'",
      color: "#20c997"
    }
  ];

  const visions = [
    {
      title: "Short-Term Vision",
      period: "1-2 Years",
      goals: [
        "Expand to 1000+ imaginative members",
        "Create 50+ detailed imaginary realms",
        "Launch the Imagination Exchange platform",
        "Host first Interdimensional Imagination Summit"
      ],
      icon: "⚡"
    },
    {
      title: "Medium-Term Vision",
      period: "3-5 Years",
      goals: [
        "Establish satellite imagination hubs worldwide",
        "Develop AI-assisted imagination tools",
        "Create the Imaginary Archive - a library of all conceived ideas",
        "Launch the Imagination Incubator program"
      ],
      icon: "🚀"
    },
    {
      title: "Long-Term Vision",
      period: "10+ Years",
      goals: [
        "Make imagination a recognized academic discipline",
        "Build the first fully immersive imagination reality",
        "Connect with other imaginative collectives across the globe",
        "Preserve endangered imaginations for future generations"
      ],
      icon: "🌠"
    }
  ];

  const realmIdeas = [
    "A floating academy that moves between dimensions every sunrise.",
    "A realm where memories grow as trees and can be harvested.",
    "A library at the edge of time that only appears when you close your eyes.",
    "A city built on the back of a sleeping cosmic whale.",
    "A campus where each classroom exists in a different era of history.",
    "A universe where thoughts crystallize into constellations."
  ];

  const getImaginationLabel = (level) => {
    if (level < 30) return "Warming Up Dreamer 🌱";
    if (level < 70) return "Active Imagination Explorer ✨";
    return "Full-Power Visionary 🚀";
  };

  const handleGenerateRealm = () => {
    let newIdea = realmIdeas[Math.floor(Math.random() * realmIdeas.length)];
    // avoid same idea twice in a row
    if (realmIdea && realmIdeas.length > 1) {
      while (newIdea === realmIdea) {
        newIdea = realmIdeas[Math.floor(Math.random() * realmIdeas.length)];
      }
    }
    setRealmIdea(newIdea);
  };

  return (
    <div className={`about-page ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <Container>
          <Row className="align-items-center min-vh-80 py-5">
            <Col lg={8} className="mx-auto text-center hero-content">
              <Badge bg="primary" className="mb-3 px-3 py-2 fs-6 hero-badge">
                🌌 About Our Journey
              </Badge>
              <h1 className="display-3 fw-bold mb-4 hero-title">
                Welcome to <span className="gradient-text">Satvik's Group</span>
              </h1>
              <p className="lead fs-3 mb-5 hero-subtitle">
                Where imagination isn't just welcomed - it's built upon, explored, and brought to conceptual life.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap hero-cta-group">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="#our-story"
                  className="px-4 py-3 cta-button cta-primary"
                >
                  Discover Our Story
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  href="#join-us"
                  className="px-4 py-3 cta-button cta-secondary"
                >
                  Join Our Imagination
                </Button>
              </div>

              {/* Scroll cue */}
              <div className="scroll-indicator">
                <span className="scroll-text">Scroll to begin the journey</span>
                <span className="scroll-arrow">▼</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-5 section-fade-in">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="image-float-wrapper">
                <Image
                  src="/img/imagination-concept.jpg"
                  alt="Imagination Concept"
                  fluid
                  rounded
                  className="shadow-lg mb-4 mb-lg-0 main-story-image"
                />
                <div className="floating-badge">
                  <span>✨ 4+ Years of Imagined Journeys</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">Our Origin Story</h2>
              <div className="timeline mb-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-year">{milestone.year}</div>
                    <div className="timeline-content">
                      <h5>{milestone.event}</h5>
                      <p className="text-muted mb-0">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="lead mb-4">
                It began with a simple question: <em>"What if we could create a space where imagination had no limits?"</em> 
                From that spark, Satvik's Group was born - not as an organization, but as a collective of curious minds 
                dedicated to exploring the boundaries of what could be imagined.
              </p>
              <p>
                What started as a small group of friends sharing wild ideas over coffee has grown into a vibrant 
                community of hundreds of imaginative thinkers. Along the way, we realized that imagination deserves 
                more than just casual conversation - it deserves structure, exploration, and celebration. Thus, 
                the Imaginary College was conceived as a permanent home for our collective creativity.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-section section-fade-in">
        <Container>
          <h2 className="display-5 fw-bold text-center mb-5">Our Purpose & Vision</h2>
          
          <Row className="mb-5">
            <Col lg={6} className="mb-5 mb-lg-0">
              <Card className={`h-100 border-0 shadow-lg mission-card ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <div className="mission-icon">🎯</div>
                  </div>
                  <h3 className="text-center mb-4">Our Mission</h3>
                  <p className="text-center lead mb-4">
                    To create, explore, and preserve imaginary concepts that push the boundaries 
                    of what humanity considers possible.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <strong>• Foster Creativity:</strong> Provide a safe space for wild, unconventional ideas
                    </li>
                    <li className="mb-3">
                      <strong>• Build Community:</strong> Connect imaginative minds across the globe
                    </li>
                    <li className="mb-3">
                      <strong>• Document Imagination:</strong> Preserve and organize conceptual creations
                    </li>
                    <li className="mb-3">
                      <strong>• Inspire Innovation:</strong> Use imagination as a springboard for real-world creativity
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6}>
              <Card className={`h-100 border-0 shadow-lg vision-card ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <div className="vision-icon">🔭</div>
                  </div>
                  <h3 className="text-center mb-4">Our Vision</h3>
                  <div className="vision-tabs">
                    {visions.map((vision, index) => (
                      <div 
                        key={index}
                        className={`vision-tab ${activeVision === index ? 'active' : ''}`}
                        onClick={() => setActiveVision(index)}
                      >
                        <div className="vision-tab-header">
                          <span className="vision-tab-icon">{vision.icon}</span>
                          <div>
                            <h5 className="mb-1">{vision.title}</h5>
                            <small className="text-muted">{vision.period}</small>
                          </div>
                        </div>
                        {activeVision === index && (
                          <div className="vision-tab-content">
                            <ul className="list-unstyled">
                              {vision.goals.map((goal, goalIndex) => (
                                <li key={goalIndex} className="mb-2">
                                  <span className="me-2">✓</span> {goal}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-5 section-fade-in">
        <Container>
          <h2 className="display-5 fw-bold text-center mb-5">Our Core Values</h2>
          <Row className="g-4">
            {coreValues.map((value, index) => (
              <Col key={index} lg={3} md={6}>
                <Card
                  className={`h-100 border-0 shadow-sm core-value-card ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}
                  style={{ borderLeft: `4px solid ${value.color}` }}
                >
                  <Card.Body className="p-4">
                    <div className="text-center mb-3">
                      <div className="value-icon" style={{ color: value.color }}>
                        {value.icon}
                      </div>
                    </div>
                    <h4 className="text-center mb-3">{value.title}</h4>
                    <p className="text-center text-muted mb-0">{value.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* The Collective */}
      <section className="py-5 bg-section section-fade-in">
        <Container>
          <h2 className="display-5 fw-bold text-center mb-3">Meet The Collective</h2>
          <p className="lead text-center mb-5 max-width-800 mx-auto">
            We are dreamers, thinkers, and creators who believe that imagination is the most powerful tool 
            humanity possesses. Our team comes from diverse backgrounds but shares a common passion for 
            exploring what could be.
          </p>
          
          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col key={index} lg={3} md={6}>
                <Card className={`border-0 shadow-lg team-card ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                  <div className="team-image-container">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fluid
                      className="team-image"
                    />
                    <div className="team-overlay">
                      <div className="team-specialties">
                        {member.specialties.map((spec, specIndex) => (
                          <Badge key={specIndex} bg="primary" className="me-1 mb-1">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <h4 className="mb-2">{member.name}</h4>
                    <h6 className="text-primary mb-3">{member.role}</h6>
                    <p className="text-muted mb-3">{member.description}</p>
                    <blockquote className="team-quote">
                      "{member.quote}"
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5">
            <p className="lead mb-4">
              And hundreds more imaginative minds contributing their unique perspectives...
            </p>
            <Button variant="outline-primary" size="lg" as={Link} to="/collective" className="cta-button">
              Meet More Members →
            </Button>
          </div>
        </Container>
      </section>

      {/* Imaginary College */}
      <section className="py-5 section-fade-in">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4">The Imaginary College</h2>
              <p className="lead mb-4">
                Not a physical place, but a conceptual space where imagination is the curriculum 
                and curiosity is the only prerequisite.
              </p>
              
              <Accordion className="mb-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>🏛️ What is the Imaginary College?</Accordion.Header>
                  <Accordion.Body>
                    A conceptual institution dedicated to the study, creation, and preservation 
                    of imaginary concepts. It's where ideas go to be nurtured, explored, and 
                    developed without the constraints of reality.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="1">
                  <Accordion.Header>📚 Our Departments</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><strong>Cosmic Studies:</strong> Exploring space-time concepts</li>
                      <li><strong>Reality Engineering:</strong> Designing impossible structures</li>
                      <li><strong>Conceptual Arts:</strong> Creating beauty from imagination</li>
                      <li><strong>Temporal Sciences:</strong> Studying imagined timelines</li>
                      <li><strong>Neural Architecture:</strong> Building mind-based structures</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                  <Accordion.Header>🎓 How to "Enroll"</Accordion.Header>
                  <Accordion.Body>
                    Enrollment is open to anyone with an imagination. Simply bring your curiosity 
                    and willingness to explore. There are no grades, no exams - just the joy of 
                    creation and discovery.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            
            <Col lg={6}>
              <Card className={`border-0 shadow-lg ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                <Card.Body className="p-5">
                  <h3 className="text-center mb-4">College Statistics</h3>
                  <Row className="text-center">
                    <Col xs={6} className="mb-4">
                      <div className="stat-card">
                        <div className="stat-number display-4 fw-bold">∞</div>
                        <div className="stat-label">Imagination Capacity</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-4">
                      <div className="stat-card">
                        <div className="stat-number display-4 fw-bold">500+</div>
                        <div className="stat-label">Active Imaginations</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-4">
                      <div className="stat-card">
                        <div className="stat-number display-4 fw-bold">42</div>
                        <div className="stat-label">Realms Created</div>
                      </div>
                    </Col>
                    <Col xs={6} className="mb-4">
                      <div className="stat-card">
                        <div className="stat-number display-4 fw-bold">10K+</div>
                        <div className="stat-label">Concepts Imagined</div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-4">
                    <Badge bg="info" className="me-2">No Tuition</Badge>
                    <Badge bg="info" className="me-2">No Deadlines</Badge>
                    <Badge bg="info">Infinite Possibilities</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Interactive Imagination Lab */}
      <section className="py-5 bg-section section-fade-in">
        <Container>
          <Row className="justify-content-center g-4">
            <Col lg={5}>
              <Card className={`border-0 shadow-lg imagination-card ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                <Card.Body className="p-4 p-md-5">
                  <h3 className="mb-3">🎚️ Imagination Meter</h3>
                  <p className="text-muted mb-4">
                    Slide to reveal how your imagination is feeling today.
                  </p>
                  <div className="mb-3 imagination-meter-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={imaginationLevel}
                      className="imagination-range"
                      onChange={(e) => setImaginationLevel(Number(e.target.value))}
                    />
                    <div className="imagination-level-badge">
                      {imaginationLevel}%
                    </div>
                  </div>
                  <p className="imagination-label">
                    {getImaginationLabel(imaginationLevel)}
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={5}>
              <Card className={`border-0 shadow-lg imagination-card ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                <Card.Body className="p-4 p-md-5">
                  <h3 className="mb-3">🎲 Random Realm Idea</h3>
                  <p className="text-muted mb-4">
                    Click below and let the collective imagination craft a new realm for you.
                  </p>
                  <Button
                    variant="primary"
                    size="lg"
                    className="mb-3 cta-button"
                    onClick={handleGenerateRealm}
                  >
                    Generate a Realm
                  </Button>
                  {realmIdea && (
                    <div className="realm-idea-box mt-3">
                      <p className="mb-0">💡 {realmIdea}</p>
                    </div>
                  )}
                  {!realmIdea && (
                    <p className="text-muted mt-2 mb-0">
                      Your next imagined world is one click away...
                    </p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Join Us */}
      <section id="join-us" className="py-5 join-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="display-4 fw-bold mb-4">Ready to Imagine With Us?</h2>
              <p className="lead mb-5">
                Whether you're a seasoned daydreamer or just beginning to explore your imagination, 
                there's a place for you in Satvik's Group. No experience required - just bring your 
                curiosity and willingness to explore.
              </p>
              
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                <Button 
                  variant="primary" 
                  size="lg" 
                  as={Link} 
                  to="/join"
                  className="px-5 py-3 cta-button cta-primary"
                >
                  Join The Collective
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  as={Link} 
                  to="/realms"
                  className="px-5 py-3 cta-button cta-secondary"
                >
                  Explore Our Realms
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  as={Link} 
                  to="/create"
                  className="px-5 py-3 cta-button"
                >
                  Start Creating
                </Button>
              </div>
              
              <div className="mt-5 pt-4">
                <p className="text-muted">
                  Have questions about our collective or the Imaginary College?
                </p>
                <Button variant="link" as={Link} to="/contact" className="text-decoration-none contact-link">
                  Contact Us for More Information →
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          transition: all 0.3s ease;
        }

        .dark-mode {
          background: #0f172a;
          color: #f8fafc;
        }

        .light-mode {
          background: #ffffff;
          color: #1e293b;
        }

        .bg-section {
          background: ${mode === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(248, 250, 252, 0.8)'};
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/img/cosmic-bg.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: white;
          padding: 4rem 0;
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at top, rgba(148, 163, 253, 0.3), transparent 50%),
                      linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
          z-index: 1;
        }

        .hero-section .container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          animation: fadeInUp 0.9s ease-out;
        }

        .hero-title {
          letter-spacing: 0.04em;
        }

        .hero-subtitle {
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-badge {
          border-radius: 999px;
          backdrop-filter: blur(8px);
        }

        .gradient-text {
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-cta-group {
          gap: 1.25rem !important;
        }

        .scroll-indicator {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.8;
          animation: fadeIn 1.2s ease-out 0.3s forwards;
        }

        .scroll-text {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .scroll-arrow {
          font-size: 1.3rem;
          animation: bounceDown 1.5s infinite;
        }

        /* Section fade-in */
        .section-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 30px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #667eea, #764ba2);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-year {
          position: absolute;
          left: -40px;
          top: 0;
          background: ${mode === 'dark' ? '#1e293b' : '#f8fafc'};
          color: #667eea;
          font-weight: bold;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          border: 2px solid #667eea;
          min-width: 70px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(15,23,42,0.4);
        }

        .timeline-content {
          padding-left: 20px;
        }

        /* Story image float badge */
        .image-float-wrapper {
          position: relative;
        }

        .main-story-image {
          border-radius: 18px;
        }

        .floating-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(15, 23, 42, 0.9);
          color: #e2e8f0;
          padding: 0.6rem 1.1rem;
          border-radius: 999px;
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 15px 30px rgba(15,23,42,0.7);
          animation: float 4s ease-in-out infinite;
        }

        /* Mission & Vision */
        .mission-card,
        .vision-card {
          border-radius: 20px;
        }

        .mission-icon, .vision-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .vision-tabs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .vision-tab {
          background: ${mode === 'dark' ? '#1e293b' : '#f8fafc'};
          border-radius: 12px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .vision-tab:hover {
          border-color: #667eea;
          transform: translateY(-3px);
        }

        .vision-tab.active {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.1);
          box-shadow: 0 12px 30px rgba(79, 70, 229, 0.25);
        }

        .vision-tab-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .vision-tab-icon {
          font-size: 1.8rem;
        }

        .vision-tab-content {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid ${mode === 'dark' ? '#334155' : '#e2e8f0'};
        }

        /* Core Values */
        .core-value-card {
          border-radius: 16px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, translate 0.25s ease;
        }

        .core-value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 35px rgba(15,23,42,0.25);
        }

        .value-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        /* Team Section */
        .team-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          border-radius: 20px;
        }

        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
        }

        .team-image-container {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .team-card:hover .team-image {
          transform: scale(1.1);
        }

        .team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 1rem;
        }

        .team-card:hover .team-overlay {
          opacity: 1;
        }

        .team-specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem;
        }

        .team-quote {
          font-style: italic;
          color: ${mode === 'dark' ? '#94a3b8' : '#64748b'};
          border-left: 3px solid #667eea;
          padding-left: 1rem;
          margin: 0;
        }

        /* Imaginary College */
        .stat-card {
          padding: 1rem 0.5rem;
          border-radius: 1rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 15px 30px rgba(15,23,42,0.25);
        }

        .stat-number {
          color: #667eea;
          line-height: 1;
        }

        .stat-label {
          color: ${mode === 'dark' ? '#94a3b8' : '#64748b'};
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        /* Interactive Imagination Lab */
        .imagination-card {
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }

        .imagination-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(129, 140, 248, 0.18), transparent 60%);
          pointer-events: none;
        }

        .imagination-meter-wrapper {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .imagination-range {
          width: 100%;
          appearance: none;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(90deg, #22c55e, #eab308, #f97316, #ec4899, #6366f1);
          outline: none;
        }

        .imagination-range::-webkit-slider-thumb {
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #f9fafb;
          border: 3px solid #4f46e5;
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.3);
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        .imagination-range::-webkit-slider-thumb:hover {
          transform: scale(1.05);
        }

        .imagination-level-badge {
          position: absolute;
          right: 0;
          top: -2.1rem;
          background: #0f172a;
          color: #e5e7eb;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          font-size: 0.85rem;
          box-shadow: 0 10px 20px rgba(15,23,42,0.7);
        }

        .imagination-label {
          font-weight: 500;
          font-size: 1rem;
        }

        .realm-idea-box {
          border-radius: 12px;
          padding: 0.9rem 1rem;
          background: ${mode === 'dark' ? 'rgba(15, 23, 42, 0.9)' : '#eff6ff'};
          border: 1px dashed ${mode === 'dark' ? '#4f46e5' : '#6366f1'};
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Join Section */
        .join-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6rem 0;
        }

        .contact-link {
          color: #e5e7eb !important;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .max-width-800 {
          max-width: 800px;
        }

        /* Buttons & CTAs */
        .cta-button {
          position: relative;
          overflow: hidden;
          border-radius: 999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(255,255,255,0.15), transparent 55%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .cta-button:hover::after {
          opacity: 1;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(15,23,42,0.26);
        }

        .cta-primary {
          animation: pulseGlow 2.4s infinite;
        }

        .cta-secondary {
          border-width: 2px !important;
        }

        /* Animations */
        @keyframes bounceDown {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(6px);
          }
          60% {
            transform: translateY(3px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(59,130,246,0.6);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(59,130,246,0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59,130,246,0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
          
          .display-5 {
            font-size: 2rem;
          }
          
          .hero-section {
            min-height: 60vh;
          }
          
          .timeline {
            padding-left: 20px;
          }
          
          .timeline-year {
            left: -35px;
            font-size: 0.9rem;
            min-width: 60px;
          }

          .floating-badge {
            font-size: 0.75rem;
            padding: 0.4rem 0.8rem;
          }
        }

        @media (max-width: 576px) {
          .display-3 {
            font-size: 2rem;
          }
          
          .lead {
            font-size: 1.1rem;
          }
          
          .team-image-container {
            height: 200px;
          }

          .imagination-level-badge {
            top: -2rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
