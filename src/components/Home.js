import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Button,
  Badge,
  Spinner,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

type Mode = "dark" | "light" | string;

interface HomePageProps {
  mode?: Mode;
}

interface CardData {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  category: string;
  tag: string;
  created_at: string;
  updated_at: string;
}

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  button_text: string;
  button_link: string;
  button_variant: string;
  is_active: boolean;
  order: number;
}

interface HomePageData {
  slides: Slide[];
  initiatives: CardData[];
  stats: {
    total_projects: number;
    active_members: number;
    completed_initiatives: number;
  };
}

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const HomePage: React.FC<HomePageProps> = ({ mode = "light" }) => {
  const navigate = useNavigate();
  
  // Guard window access for SSR environments
  const safeWindowInnerWidth =
    typeof window !== "undefined" ? window.innerWidth : 1024;

  const [windowWidth, setWindowWidth] = useState<number>(safeWindowInnerWidth);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    mode === "dark" || mode === "#18191a"
  );
  
  // State for data fetching
  const [homeData, setHomeData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsDarkMode(mode === "dark" || mode === "#18191a");
  }, [mode]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data from API
  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all necessary data in parallel
        const [slidesRes, initiativesRes, statsRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/home/slides`),
          axios.get(`${API_BASE_URL}/home/initiatives`),
          axios.get(`${API_BASE_URL}/home/stats`)
        ]);

        setHomeData({
          slides: slidesRes.data,
          initiatives: initiativesRes.data,
          stats: statsRes.data
        });
      } catch (err) {
        console.error("Error fetching homepage data:", err);
        setError("Failed to load homepage data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomePageData();
  }, []);

  const handleCarouselClick = () => {
    navigate("/manifesto");
  };

  const handleCardHover = (e: React.MouseEvent<HTMLElement>, isHovering: boolean) => {
    const el = e.currentTarget;
    if (isHovering) {
      el.style.transform = "translateY(-15px) scale(1.02)";
      el.style.boxShadow = "0 25px 50px rgba(0,0,0,0.3)";
    } else {
      el.style.transform = "translateY(0) scale(1)";
      el.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
        <span className="ms-3">Loading...</span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <Container className="my-5 py-5">
        <Alert variant="danger">
          <Alert.Heading>Error Loading Data</Alert.Heading>
          <p>{error}</p>
          <Button variant="primary" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <div className={`HomePage ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Carousel Section */}
      <Carousel fade interval={4000} className="carousel-imaginary">
        {homeData?.slides
          ?.filter((slide) => slide.is_active)
          .sort((a, b) => a.order - b.order)
          .map((slide) => (
            <Carousel.Item key={slide.id} className="carousel-item-imaginary">
              <div
                className="carousel-background"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${slide.image_url})`,
                  height: windowWidth > 768 ? "85vh" : "60vh",
                  cursor: "pointer",
                }}
                onClick={handleCarouselClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleCarouselClick()}
              />
              <Carousel.Caption className="animated-caption">
                <h1 className="display-3 fw-bold mb-3 text-shadow">{slide.title}</h1>
                <h3 className="mb-4 text-gradient">{slide.subtitle}</h3>
                <p className="lead mb-4 fs-4">{slide.description}</p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button 
                    variant={slide.button_variant as any} 
                    size="lg" 
                    as={Link}
                    to={slide.button_link}
                    className="glow-button"
                  >
                    {slide.button_text}
                  </Button>
                  <Button 
                    variant="outline-warning" 
                    size="lg" 
                    as={Link}
                    to="/discover"
                    className="pulse-button"
                  >
                    ✨ Discover Wonders
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>

      {/* Main Content Section */}
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

          {/* Stats Section */}
          {homeData?.stats && (
            <Row className="justify-content-center mb-4">
              <Col xs={4} md={2} className="text-center">
                <div className="stat-number display-6 fw-bold">{homeData.stats.total_projects}+</div>
                <div className="stat-label">Projects</div>
              </Col>
              <Col xs={4} md={2} className="text-center">
                <div className="stat-number display-6 fw-bold">{homeData.stats.active_members}+</div>
                <div className="stat-label">Members</div>
              </Col>
              <Col xs={4} md={2} className="text-center">
                <div className="stat-number display-6 fw-bold">{homeData.stats.completed_initiatives}</div>
                <div className="stat-label">Initiatives</div>
              </Col>
            </Row>
          )}

          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <Button 
              variant="outline-primary" 
              as={Link}
              to="/manifesto"
              size="lg" 
              className="floating-button"
            >
              📜 Read Our Manifesto
            </Button>
            <Button 
              variant="outline-success" 
              as={Link}
              to="/projects"
              size="lg" 
              className="floating-button"
            >
              🌌 Explore Projects
            </Button>
            <Button 
              variant="outline-info" 
              as={Link}
              to="/create"
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

        {/* Features Section */}
        <Row className="mb-5">
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
        </Row>

        {/* Cards Section */}
        <h2 className={`text-center mb-5 ${isDarkMode ? "text-light" : ""}`}>
          <span className="section-title">Imaginary Initiatives</span>
        </h2>
        <p className={`text-center mb-5 ${isDarkMode ? "text-light" : ""}`}>
          Explore our ongoing conceptual projects. Each represents an exploration into what could exist if reality were more... flexible.
        </p>

        {homeData?.initiatives && homeData.initiatives.length > 0 ? (
          <Row className="g-4" xs={1} md={2} lg={3}>
            {homeData.initiatives.map((card) => (
              <Col key={card.id}>
                <Link to={card.link} style={{ textDecoration: "none" }}>
                  <Card
                    className={`h-100 shadow-lg border-0 card-imaginary ${isDarkMode ? "bg-dark text-light" : ""}`}
                    style={{
                      overflow: "hidden",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => handleCardHover(e, true)}
                    onMouseLeave={(e) => handleCardHover(e, false)}
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
                      <div className="card-category">{card.category}</div>
                    </div>

                    <Card.Body className={`${isDarkMode ? "bg-dark text-light" : ""}`}>
                      <Card.Title className="h3 mb-3 fw-bold">{card.title}</Card.Title>
                      <Card.Text className={isDarkMode ? "text-light" : "text-muted"}>
                        {card.description}
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
                          as={Link}
                          to={card.link}
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
        ) : (
          <Alert variant="info" className="text-center">
            No initiatives available at the moment. Check back soon!
          </Alert>
        )}
      </Container>

      {/* CTA Section */}
      <div className="py-5 cta-section">
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
                as={Link}
                to="/join"
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

      {/* Footer */}
      <footer className={`py-5 ${isDarkMode ? "bg-dark text-light" : "bg-light"}`}>
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
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  as={Link}
                  to="/about"
                >
                  Our Origin Story
                </Button>
                <Button 
                  variant="outline-secondary" 
                  size="sm" 
                  as={Link}
                  to="/philosophy"
                >
                  Philosophy
                </Button>
              </div>
            </Col>

            <Col lg={4} className="mb-4">
              <h5 className="mb-4">Imaginary Realms</h5>
              <Row>
                <Col xs={6}>
                  <ul className="list-unstyled">
                    {homeData?.initiatives?.slice(0, 3).map((initiative) => (
                      <li key={initiative.id} className="mb-2">
                        <Link to={initiative.link} className="footer-link">
                          {initiative.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col xs={6}>
                  <ul className="list-unstyled">
                    {homeData?.initiatives?.slice(3, 6).map((initiative) => (
                      <li key={initiative.id} className="mb-2">
                        <Link to={initiative.link} className="footer-link">
                          {initiative.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col lg={4} className="mb-4">
              <h5 className="mb-4">Join The Imagination</h5>
              <div className="d-flex flex-column gap-2">
                <Button 
                  variant="primary" 
                  as={Link}
                  to="/apply"
                  className="mb-2"
                >
                  Submit Concept Proposal
                </Button>
                <Button 
                  variant="outline-dark" 
                  as={Link}
                  to="/collaborate"
                >
                  Request Collaboration
                </Button>
                <div className="mt-3">
                  <small className="text-muted">Email: imagination@satviksgroup.tech</small>
                </div>
              </div>
            </Col>
          </Row>

          <hr className={isDarkMode ? "bg-secondary" : ""} />

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
    </div>
  );
};

export default HomePage;