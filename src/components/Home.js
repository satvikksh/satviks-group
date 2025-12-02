import { useEffect, useState, useMemo } from "react";
import { Container, Row, Col, Carousel, Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const HomePage = ({ mode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cardsData = useMemo(
    () => [
      {
        title: "Cosmic Archives",
        text: "Explore interdimensional knowledge from across the multiverse",
        image: "/img/cosmic.png",
        link: "/cosmic-archives",
        variant: "primary",
        category: "Interdimensional",
        tag: "✨ Exclusive"
      },
      {
        title: "Neural Nexus",
        text: "Connect with collective consciousness through mind-link technology",
        image: "/img/neural.png",
        link: "/neural-nexus",
        variant: "success",
        category: "Psychic Tech",
        tag: "🧠 Advanced"
      },
      {
        title: "Quantum Constructs",
        text: "Build reality-altering structures with quantum manipulation",
        image: "/img/quantum.png",
        link: "/quantum-constructs",
        variant: "warning",
        category: "Reality Engineering",
        tag: "⚡ Experimental"
      },
      {
        title: "Chrono Visions",
        text: "Access temporal streams and view alternate timelines",
        image: "/img/chrono.png",
        link: "/chrono-visions",
        variant: "danger",
        category: "Temporal Studies",
        tag: "⏳ Restricted"
      },
      {
        title: "Aether Gardens",
        text: "Cultivate exotic plants from ethereal dimensions",
        image: "/img/aether.png",
        link: "/aether-gardens",
        variant: "info",
        category: "Botanical Wonders",
        tag: "🌿 Living"
      },
      {
        title: "Stellar Forge",
        text: "Create celestial bodies and miniature star systems",
        image: "/img/stellar.png",
        link: "/stellar-forge",
        variant: "dark",
        category: "Astro-Creation",
        tag: "⭐ Epic"
      },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`HomePage ${mode === "#18191a" ? "bg-dark text-light" : ""}`}>
      <Carousel fade interval={4000} className="carousel-imaginary">
        {[
          {
            id: 1,
            image: "/img/cosmic-gate12.jpg",
            title: "Welcome to Satvik's Group",
            subtitle: "Imaginary Technology or Infinite Possibilities",
            description: "Where imagination becomes reality and dreams take shape",
            button: { text: "Begin Your Journey", link: "/explore", variant: "outline-light" }
          },
          {
            id: 2,
            image: "/img/neural-network.jpg",
            title: "Beyond Reality",
            subtitle: "Exploring Impossible Concepts",
            description: "Join us in creating what hasn't been imagined yet",
            button: { text: "View Projects", link: "/projects", variant: "outline-info" }
          },
          {
            id: 3,
            image: "/img/quantum-realm.jpg",
            title: "Collective Creation",
            subtitle: "Satvik's Visionary Collective",
            description: "A space where creative minds converge to build new worlds",
            button: { text: "Join The Collective", link: "/join", variant: "outline-success" }
          }
        ].map((slide) => (
          <Carousel.Item key={slide.id} className="carousel-item-imaginary">
            <div 
              className="carousel-background"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${slide.image})`,
                height: windowWidth > 768 ? "85vh" : "60vh",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer'
              }}
              onClick={() => window.open("/manifesto", "_self")}
            />
            <Carousel.Caption className="animated-caption">
              <h1 className="display-3 fw-bold mb-3 text-shadow">{slide.title}</h1>
              <h3 className="mb-4 text-gradient">{slide.subtitle}</h3>
              <p className="lead mb-4 fs-4">{slide.description}</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button
                  variant={slide.button.variant}
                  size="lg"
                  href={slide.button.link}
                  className="glow-button"
                >
                  {slide.button.text}
                </Button>
                <Button
                  variant="outline-warning"
                  size="lg"
                  href="/discover"
                  className="pulse-button"
                >
                  ✨ Discover Wonders
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="my-5 py-5" fluid>
        <div className="text-center mb-5">
          <Badge bg="primary" className="mb-3 px-3 py-2 fs-6">
            🚀 IMAGINARY INITIATIVE
          </Badge>
          <h1 className="display-4 fw-bold mb-3 gradient-text">
            Satvik's Imaginary Collective
          </h1>
          <p className="lead fs-3 mb-4">
            Building <span className="highlight">impossible things</span> in a world that doesn't exist
          </p>
          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <Button 
              variant="outline-primary" 
              href="/manifesto"
              size="lg"
              className="floating-button"
            >
              📜 Read Our Manifesto
            </Button>
            <Button 
              variant="outline-success" 
              href="/projects"
              size="lg"
              className="floating-button"
            >
              🌌 Explore Projects
            </Button>
            <Button 
              variant="outline-info" 
              href="/create"
              size="lg"
              className="floating-button"
            >
              🎨 Create With Us
            </Button>
          </div>
          <p className="text-muted mt-4">
            Imaginary Technology is a conceptual space where boundaries don't exist. 
            Founded by Satvik's Group as a thought experiment turned creative engine.
          </p>
        </div>

        <div className="row mb-5">
          <Col md={4} className="text-center mb-4">
            <div className="p-4 feature-card">
              <div className="feature-icon mb-3">🌌</div>
              <h3>No Limits</h3>
              <p>Physics, logic, and reality are optional here</p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className="p-4 feature-card">
              <div className="feature-icon mb-3">✨</div>
              <h3>Pure Creation</h3>
              <p>Bringing impossible ideas to conceptual life</p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className="p-4 feature-card">
              <div className="feature-icon mb-3">⚡</div>
              <h3>Infinite Scale</h3>
              <p>From micro-realms to entire imaginary universes</p>
            </div>
          </Col>
        </div>

        <h2 className={`text-center mb-5 ${mode === "dark" ? "text-light" : ""}`}>
          <span className="section-title">Imaginary Initiatives</span>
        </h2>
        <p className={`text-center mb-5 ${mode === "dark" ? "text-light" : ""}`}>
          Explore our ongoing conceptual projects. Each represents an exploration into 
          what could exist if reality were more... flexible.
        </p>
        
        <Row className="g-4" xs={1} md={2} lg={3}>
          {cardsData.map((card, index) => (
            <Col key={index}>
              <Link to={card.link} style={{ textDecoration: 'none' }}>
                <Card
                  className={`h-100 shadow-lg border-0 card-imaginary ${
                    mode === "dark" ? "bg-dark text-light" : ""
                  }`}
                  style={{ 
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    background: `linear-gradient(135deg, var(--bs-${card.variant}) 0%, transparent 100%)`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                  }}
                >
                  <div className="position-relative card-image-container">
                    <div className="card-tag">
                      <Badge bg={card.variant}>{card.tag}</Badge>
                    </div>
                    <Card.Img
                      src={card.image}
                      alt={card.title}
                      className="card-image-imaginary"
                      loading="lazy"
                    />
                    <div className="card-category">
                      {card.category}
                    </div>
                  </div>
                  <Card.Body className={`${mode === "dark" ? "bg-dark-50" : ""}`}>
                    <Card.Title className="h3 mb-3 fw-bold">{card.title}</Card.Title>
                    <Card.Text className={mode === "dark" ? "text-light-75" : "text-muted"}>
                      {card.text}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                      <div>
                        <small className="text-muted">Imaginary Technology</small>
                        <br />
                        <small className="fw-bold">Satvik's Group</small>
                      </div>
                      <Button 
                        variant={card.variant}
                        size="sm"
                        className="px-4"
                      >
                        Enter Portal →
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="display-5 fw-bold text-white mb-4">
                Ready to Imagine With Us?
              </h2>
              <p className="text-white-75 lead mb-4">
                Join Satvik's Group at Imaginary Technology. No experience required—just bring your imagination.
                We're building concepts that have never been thought of before.
              </p>
              <Button 
                variant="light" 
                size="lg" 
                href="/join"
                className="fw-bold"
              >
                🚀 Launch Your Imagination
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <div className="p-5">
                <div className="imaginary-logo mb-4">⚡✨🌌</div>
                <h3 className="text-white">The Only Rule:</h3>
                <h1 className="display-2 fw-bold text-white">No Rules</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <footer className={`py-5 ${mode === "dark" ? "bg-dark text-light" : "bg-light"}`}>
        <Container>
          <Row>
            <Col lg={4} className="mb-4">
              <h3 className="mb-4">
                <span className="logo-imaginary">⚡</span> Satvik's Group
              </h3>
              <p className="text-muted">
                A conceptual collective exploring the boundaries of imagination. 
                We create, imagine, and build things that don't exist—yet.
              </p>
              <div className="d-flex gap-2 mt-4">
                <Button variant="outline-primary" size="sm" href="/about">Our Origin Story</Button>
                <Button variant="outline-secondary" size="sm" href="/philosophy">Philosophy</Button>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <h5 className="mb-4">Imaginary Realms</h5>
              <Row>
                <Col xs={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="/realms/cosmic" className="footer-link">Cosmic Archives</a></li>
                    <li className="mb-2"><a href="/realms/neural" className="footer-link">Neural Nexus</a></li>
                    <li className="mb-2"><a href="/realms/quantum" className="footer-link">Quantum Constructs</a></li>
                  </ul>
                </Col>
                <Col xs={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="/realms/chrono" className="footer-link">Chrono Visions</a></li>
                    <li className="mb-2"><a href="/realms/aether" className="footer-link">Aether Gardens</a></li>
                    <li className="mb-2"><a href="/realms/stellar" className="footer-link">Stellar Forge</a></li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="mb-4">
              <h5 className="mb-4">Join The Imagination</h5>
              <div className="d-flex flex-column gap-2">
                <Button variant="primary" href="/apply" className="mb-2">
                  Submit Concept Proposal
                </Button>
                <Button variant="outline-dark" href="/collaborate">
                  Request Collaboration
                </Button>
                <div className="mt-3">
                  <small className="text-muted">
                    Email: imagination@satviksgroup.imaginary
                  </small>
                </div>
              </div>
            </Col>
          </Row>
          <hr className={mode === "dark" ? "bg-secondary" : ""} />
          <div className="text-center pt-4">
            <p className="mb-2">
              © {new Date().getFullYear()} Satvik's Group • Imaginary Technology
            </p>
            <p className="text-muted small">
              This institution exists purely in imagination. All concepts, projects, and realms are fictional.
            </p>
            <div className="mt-3">
              <Badge bg="secondary" className="me-2">Conceptual</Badge>
              <Badge bg="secondary" className="me-2">Imaginary</Badge>
              <Badge bg="secondary">Unreal</Badge>
            </div>
          </div>
        </Container>
      </footer>

      <style jsx>{`
        .carousel-imaginary .carousel-item {
          transition: transform 2s ease-in-out;
        }
        
        .carousel-background {
          background-size: cover;
          background-position: center;
        }
        
        .animated-caption {
          animation: fadeInUp 1.5s ease-out;
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-gradient {
          background: linear-gradient(45deg, #4facfe, #00f2fe);
          -webkit-background-clip: text;
          -webkit-text-flower-color: transparent;
          background-clip: text;
        }
        
        .glow-button {
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
          transition: all 0.3s ease;
        }
        
        .glow-button:hover {
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.8);
          transform: translateY(-2px);
        }
        
        .pulse-button {
          animation: pulse 2s infinite;
        }
        
        .floating-button {
          animation: float 6s ease-in-out infinite;
        }
        
        .feature-card {
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
        }
        
        .feature-icon {
          font-size: 3rem;
        }
        
        .section-title {
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 25%;
          width: 50%;
          height: 3px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 2px;
        }
        
        .card-imaginary {
          border-radius: 20px;
          overflow: hidden;
        }
        
        .card-image-container {
          height: 200px;
          overflow: hidden;
        }
        
        .card-image-imaginary {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .card-imaginary:hover .card-image-imaginary {
          transform: scale(1.1);
        }
        
        .card-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 2;
        }
        
        .card-category {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 10px;
          border-radius: 10px;
          font-size: 0.8rem;
        }
        
        .footer-link {
          color: inherit;
          text-decoration: none;
          transition: all 0.3s ease;
          opacity: 0.8;
        }
        
        .footer-link:hover {
          opacity: 1;
          padding-left: 5px;
        }
        
        .logo-imaginary {
          font-size: 2rem;
          margin-right: 10px;
        }
        
        .highlight {
          background: linear-gradient(45deg, #ff6b6b, #ffd93d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: bold;
        }
        
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 193, 7, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;