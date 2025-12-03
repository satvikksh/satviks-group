import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Button, Accordion, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

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
      quote: "If you can imagine it, we can build it... in our minds.",
    },
    {
      name: "Alex",
      role: "Reality Architect",
      image: "/img/alex.png",
      description: "Builds impossible structures from pure thought",
      specialties: ["Quantum Structures", "Temporal Engineering", "Neural Networks"],
      quote: "The only limit is what you haven't thought of yet.",
    },
    {
      name: "Maya",
      role: "Cosmic Cartographer",
      image: "/img/maya.png",
      description: "Maps the unmappable dimensions",
      specialties: ["Dimensional Mapping", "Realm Navigation", "Space-Time Charts"],
      quote: "Every imagination deserves a map.",
    },
    {
      name: "Kiran",
      role: "Concept Weaver",
      image: "/img/kiran.png",
      description: "Connects disparate ideas into cohesive realities",
      specialties: ["Idea Synthesis", "Concept Integration", "Reality Blending"],
      quote: "Ideas are like stars - they shine brighter when connected.",
    },
  ];

  const milestones = [
    { year: "2020", event: "Satvik's First Imagination", description: "The spark that started it all" },
    { year: "2021", event: "Formation of The Collective", description: "Like-minded imaginations unite" },
    { year: "2022", event: "Imaginary College Foundation", description: "A permanent home for ideas" },
    { year: "2023", event: "Quantum Realm Discovery", description: "First fully imagined dimension" },
    { year: "2024", event: "Neural Nexus Creation", description: "Linking minds across imagination" },
  ];

  const coreValues = [
    {
      title: "Unlimited Imagination",
      icon: "✨",
      description:
        "We believe no idea is too wild, no concept too strange. The only bad idea is the one not imagined.",
      color: "#667eea",
    },
    {
      title: "Collaborative Creation",
      icon: "👥",
      description:
        "Great imaginations multiply when shared. We build upon each other's ideas to create something greater.",
      color: "#764ba2",
    },
    {
      title: "Reality Optional",
      icon: "🌌",
      description:
        "Physics, logic, and existing rules are suggestions, not limitations. We embrace the impossible.",
      color: "#f093fb",
    },
    {
      title: "Continuous Wonder",
      icon: "🔭",
      description: "We maintain childlike curiosity and never stop asking 'what if?' and 'why not?'",
      color: "#20c997",
    },
  ];

  const visions = [
    {
      title: "Short-Term Vision",
      period: "1-2 Years",
      goals: [
        "Expand to 1000+ imaginative members",
        "Create 50+ detailed imaginary realms",
        "Launch the Imagination Exchange platform",
        "Host first Interdimensional Imagination Summit",
      ],
      icon: "⚡",
    },
    {
      title: "Medium-Term Vision",
      period: "3-5 Years",
      goals: [
        "Establish satellite imagination hubs worldwide",
        "Develop AI-assisted imagination tools",
        "Create the Imaginary Archive - a library of all conceived ideas",
        "Launch the Imagination Incubator program",
      ],
      icon: "🚀",
    },
    {
      title: "Long-Term Vision",
      period: "10+ Years",
      goals: [
        "Make imagination a recognized academic discipline",
        "Build the first fully immersive imagination reality",
        "Connect with other imaginative collectives across the globe",
        "Preserve endangered imaginations for future generations",
      ],
      icon: "🌠",
    },
  ];

  const realmIdeas = [
    "A floating academy that moves between dimensions every sunrise.",
    "A realm where memories grow as trees and can be harvested.",
    "A library at the edge of time that only appears when you close your eyes.",
    "A city built on the back of a sleeping cosmic whale.",
    "A campus where each classroom exists in a different era of history.",
    "A universe where thoughts crystallize into constellations.",
  ];

  const getImaginationLabel = (level) => {
    if (level < 30) return "Warming Up Dreamer 🌱";
    if (level < 70) return "Active Imagination Explorer ✨";
    return "Full-Power Visionary 🚀";
  };

  const handleGenerateRealm = () => {
    let newIdea = realmIdeas[Math.floor(Math.random() * realmIdeas.length)];
    if (realmIdea && realmIdeas.length > 1) {
      while (newIdea === realmIdea) {
        newIdea = realmIdeas[Math.floor(Math.random() * realmIdeas.length)];
      }
    }
    setRealmIdea(newIdea);
  };

  return (
    // no local dark-mode / light-mode class, theme handled globally via body.dark-mode / body.light-mode
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <Container>
          <Row className="align-items-center min-vh-80 py-5">
            <Col lg={8} className="mx-auto text-center hero-content">
              <Badge bg="primary" className="mb-3 px-3 py-2 fs-6 hero-badge">
                🌌 About Our Journey
              </Badge>
              <h1 className="display-3 fw-bold mb-4 hero-title">
                Welcome to <span className="gradient-text">Satvik&apos;s Group</span>
              </h1>
              <p className="lead fs-3 mb-5 hero-subtitle">
                Where imagination isn&apos;t just welcomed - it&apos;s built upon, explored, and brought to conceptual
                life.
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
                It began with a simple question: <em>&quot;What if we could create a space where imagination had no
                limits?&quot;</em> From that spark, Satvik&apos;s Group was born - not as an organization, but as a
                collective of curious minds dedicated to exploring the boundaries of what could be imagined.
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
              <Card className="h-100 border-0 shadow-lg mission-card">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <div className="mission-icon">🎯</div>
                  </div>
                  <h3 className="text-center mb-4">Our Mission</h3>
                  <p className="text-center lead mb-4">
                    To create, explore, and preserve imaginary concepts that push the boundaries of what humanity
                    considers possible.
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
              <Card className="h-100 border-0 shadow-lg vision-card">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <div className="vision-icon">🔭</div>
                  </div>
                  <h3 className="text-center mb-4">Our Vision</h3>
                  <div className="vision-tabs">
                    {visions.map((vision, index) => (
                      <div
                        key={index}
                        className={`vision-tab ${activeVision === index ? "active" : ""}`}
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
                  className="h-100 border-0 shadow-sm core-value-card"
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
            We are dreamers, thinkers, and creators who believe that imagination is the most powerful tool humanity
            possesses. Our team comes from diverse backgrounds but shares a common passion for exploring what could be.
          </p>

          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col key={index} lg={3} md={6}>
                <Card className="border-0 shadow-lg team-card">
                  <div className="team-image-container">
                    <Image src={member.image} alt={member.name} fluid className="team-image" />
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
                    <blockquote className="team-quote">"{member.quote}"</blockquote>
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
                Not a physical place, but a conceptual space where imagination is the curriculum and curiosity is the
                only prerequisite.
              </p>

              <Accordion className="mb-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>🏛️ What is the Imaginary College?</Accordion.Header>
                  <Accordion.Body>
                    A conceptual institution dedicated to the study, creation, and preservation of imaginary concepts.
                    It&apos;s where ideas go to be nurtured, explored, and developed without the constraints of
                    reality.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>📚 Our Departments</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <strong>Cosmic Studies:</strong> Exploring space-time concepts
                      </li>
                      <li>
                        <strong>Reality Engineering:</strong> Designing impossible structures
                      </li>
                      <li>
                        <strong>Conceptual Arts:</strong> Creating beauty from imagination
                      </li>
                      <li>
                        <strong>Temporal Sciences:</strong> Studying imagined timelines
                      </li>
                      <li>
                        <strong>Neural Architecture:</strong> Building mind-based structures
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>🎓 How to &quot;Enroll&quot;</Accordion.Header>
                  <Accordion.Body>
                    Enrollment is open to anyone with an imagination. Simply bring your curiosity and willingness to
                    explore. There are no grades, no exams - just the joy of creation and discovery.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={6}>
              <Card className="border-0 shadow-lg">
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
                    <Badge bg="info" className="me-2">
                      No Tuition
                    </Badge>
                    <Badge bg="info" className="me-2">
                      No Deadlines
                    </Badge>
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
              <Card className="border-0 shadow-lg imagination-card">
                <Card.Body className="p-4 p-md-5">
                  <h3 className="mb-3">🎚️ Imagination Meter</h3>
                  <p className="text-muted mb-4">Slide to reveal how your imagination is feeling today.</p>
                  <div className="mb-3 imagination-meter-wrapper">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={imaginationLevel}
                      className="imagination-range"
                      onChange={(e) => setImaginationLevel(Number(e.target.value))}
                    />
                    <div className="imagination-level-badge">{imaginationLevel}%</div>
                  </div>
                  <p className="imagination-label">{getImaginationLabel(imaginationLevel)}</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={5}>
              <Card className="border-0 shadow-lg imagination-card">
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
                    <p className="text-muted mt-2 mb-0">Your next imagined world is one click away...</p>
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
                Whether you&apos;re a seasoned daydreamer or just beginning to explore your imagination, there&apos;s a
                place for you in Satvik&apos;s Group. No experience required - just bring your curiosity and
                willingness to explore.
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
                <Button
                  variant="link"
                  as={Link}
                  to="/contact"
                  className="text-decoration-none contact-link"
                >
                  Contact Us for More Information →
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
