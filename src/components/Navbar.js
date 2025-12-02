import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Navbar, 
  Nav, 
  Form, 
  Button, 
  Container, 
  Dropdown, 
  Image, 
  Badge
} from 'react-bootstrap';

const SimpleNavbar = ({ 
  title = "Satvik's Group",
  mode = 'dark',
  toggleMode,
  isAuthenticated = false,
  user,
  onLogin,
  onLogout,
  onSearch
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize dark mode on first render
  useEffect(() => {
    document.body.classList.add('dark-theme');
    document.body.setAttribute('data-theme', 'dark');
  }, []);

  const handleThemeToggle = () => {
    if (toggleMode) {
      toggleMode();
    }
    
    if (mode === 'dark') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      document.body.setAttribute('data-theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      document.body.setAttribute('data-theme', 'dark');
    }
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "📚" },
    { path: "/projects", label: "Projects", icon: "⚡" },
    { path: "/gallery", label: "Gallery", icon: "🖼️" },
    { path: "/community", label: "Community", icon: "👥" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (onSearch) {
      onSearch(searchValue);
    }
    navigate(`/search?q=${encodeURIComponent(searchValue)}`);
    setExpanded(false);
  };

  return (
    <>
      <Navbar 
        expand="lg" 
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
        className={`simple-navbar ${mode === 'dark' ? 'dark-mode' : 'light-mode'} ${scrolled ? 'scrolled' : ''}`}
        data-theme={mode}
      >
        {/* full-width container so everything fits screen size */}
        <Container fluid className="navbar-container">
          {/* Brand / Logo */}
          <Navbar.Brand as={Link} to="/" className="navbar-brand" onClick={() => setExpanded(false)}>
            <div className="brand-content">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                className="navbar-logo"
              />
              <div className="brand-text">
                <h1 className="brand-title">{title}</h1>
                <p className="brand-subtitle">Imaginary College</p>
              </div>
            </div>
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <div className="mobile-controls d-lg-none">
            <button 
              className="search-toggle"
              onClick={() => document.querySelector('.search-input')?.focus()}
              aria-label="Search"
            >
              🔍
            </button>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          {/* Main Content */}
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-content">
            <div className="navbar-content-wrapper">
              {/* Navigation Links - Left Side */}
              <div className="nav-section">
                <Nav className="main-nav">
                  {navItems.map((item, index) => (
                    <Nav.Link
                      key={index}
                      as={Link}
                      to={item.path}
                      active={location.pathname === item.path}
                      onClick={() => setExpanded(false)}
                      className="nav-link"
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-text">{item.label}</span>
                    </Nav.Link>
                  ))}
                </Nav>
              </div>

              {/* Center Section - Search */}
              <div className="search-section">
                <Form className="search-form" onSubmit={handleSearch}>
                  <div className="search-wrapper">
                    <input
                      type="search"
                      name="search"
                      placeholder="Search imaginary realms..."
                      className="search-input"
                      aria-label="Search"
                    />
                    <button type="submit" className="search-button" aria-label="Search button">
                      <span className="search-icon">🔍</span>
                      <span className="search-text">Search</span>
                    </button>
                  </div>
                </Form>
              </div>

              {/* Right Section - User Actions */}
              <div className="user-section">
                {/* Theme Toggle */}
                <button 
                  className="theme-toggle" 
                  onClick={handleThemeToggle}
                  aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
                >
                  <span className="theme-icon">
                    {mode === 'dark' ? '☀️' : '🌙'}
                  </span>
                  <span className="theme-text">
                    {mode === 'dark' ? 'Light' : 'Dark'}
                  </span>
                </button>

                {/* Notifications */}
                <button 
                  className="notifications-btn"
                  onClick={() => {
                    navigate('/notifications');
                    setExpanded(false);
                  }}
                  aria-label="Notifications"
                >
                  <span className="notification-icon">🔔</span>
                  <Badge className="notification-badge">3</Badge>
                </button>

                {/* User Authentication */}
                {isAuthenticated ? (
                  <Dropdown align="end" className="user-dropdown">
                    <Dropdown.Toggle as="div" className="user-dropdown-toggle">
                      <div className="user-info">
                        <Image
                          src={user?.avatar || '/img/default-avatar.png'}
                          alt={user?.name || 'User'}
                          roundedCircle
                          className="user-avatar"
                        />
                        <div className="user-details">
                          <span className="user-name">{user?.name || 'User'}</span>
                        </div>
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="user-dropdown-menu">
                      <Dropdown.Header>My Account</Dropdown.Header>
                      <Dropdown.Item as={Link} to="/profile" onClick={() => setExpanded(false)}>
                        <span className="dropdown-icon">👤</span> Profile
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/settings" onClick={() => setExpanded(false)}>
                        <span className="dropdown-icon">⚙️</span> Settings
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/my-projects" onClick={() => setExpanded(false)}>
                        <span className="dropdown-icon">🎨</span> My Projects
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={onLogout}>
                        <span className="dropdown-icon">🚪</span> Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  // ✅ Login + Signup wrapped in one compact section
                  <div className="auth-buttons">
                    <Button 
                      variant="outline-primary" 
                      as={Link} 
                      to="/login" 
                      onClick={() => { if(onLogin) onLogin(); setExpanded(false); }}
                      className="login-btn"
                    >
                      Login
                    </Button>
                    <span className="auth-divider">/</span>
                    <Button 
                      variant="primary" 
                      as={Link} 
                      to="/signup"
                      onClick={() => setExpanded(false)}
                      className="signup-btn"
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        /* Global Theme Variables */
        :root {
          --primary-color: #667eea;
          --secondary-color: #764ba2;
          --accent-color: #f093fb;
          --success-color: #10b981;
          --danger-color: #ef4444;
          --warning-color: #f59e0b;
          --info-color: #3b82f6;
        }

        /* Dark Theme Variables */
        .dark-theme {
          --bg-primary: #0f172a;
          --bg-secondary: #1e293b;
          --bg-tertiary: #334155;
          --text-primary: #f8fafc;
          --text-secondary: #cbd5e1;
          --text-muted: #94a3b8;
          --border-color: #475569;
          --shadow-color: rgba(0, 0, 0, 0.3);
          --hover-bg: rgba(255, 255, 255, 0.1);
          --card-bg: rgba(30, 41, 59, 0.5);
        }

        /* Light Theme Variables */
        .light-theme {
          --bg-primary: #ffffff;
          --bg-secondary: #f8fafc;
          --bg-tertiary: #e2e8f0;
          --text-primary: #1e293b;
          --text-secondary: #475569;
          --text-muted: #64748b;
          --border-color: #cbd5e1;
          --shadow-color: rgba(0, 0, 0, 0.1);
          --hover-bg: rgba(0, 0, 0, 0.05);
          --card-bg: rgba(248, 250, 252, 0.8);
        }

        /* Main Navbar */
        .simple-navbar {
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          padding: 0.8rem 0;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px var(--shadow-color);
          position: fixed;
          top: 0;
          width: 100vw;
          left: 0;
          right: 0;
          overflow-x: hidden;
          z-index: 1000;
        }

        .simple-navbar.scrolled {
          padding: 0.5rem 0;
          backdrop-filter: blur(10px);
          background: var(--card-bg);
        }

        .navbar-container {
          padding: 0 12px;
          width: 100%;
          margin: 0 auto;
        }

        /* Brand Section */
        .navbar-brand {
          padding: 0;
          margin-right: 16px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .navbar-logo {
          width: 40px;
          height: 40px;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .brand-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0;
          color: var(--text-primary);
          line-height: 1.2;
          white-space: nowrap;
        }

        .brand-subtitle {
          font-size: 0.75rem;
          margin: 0;
          color: var(--text-secondary);
          font-weight: 500;
          letter-spacing: 0.5px;
          opacity: 0.8;
        }

        /* Mobile Controls */
        .mobile-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: auto;
        }

        .search-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.2rem;
          cursor: pointer;
          padding: 5px;
          border-radius: 6px;
          transition: background-color 0.2s;
        }

        .search-toggle:hover {
          background: var(--hover-bg);
        }

        .navbar-toggler {
          border: 1px solid var(--border-color);
          padding: 6px 10px;
          border-radius: 6px;
          background: var(--bg-secondary);
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        /* Navbar Collapse Content */
        .navbar-collapse-content {
          flex-grow: 1;
        }

        .navbar-content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        @media (min-width: 992px) {
          .navbar-content-wrapper {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: nowrap;
          }
        }

        /* Sections share screen width */
        .nav-section {
          order: 2;
          flex: 1 1 40%;
          min-width: 0;
        }

        .search-section {
          order: 1;
          width: 100%;
          flex: 0 1 100%;
          min-width: 0;
        }

        .user-section {
          order: 3;
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
          flex: 0 1 100%;
          min-width: 0;
          flex-wrap: wrap;
        }

        @media (min-width: 992px) {
          .nav-section {
            order: 1;
            flex: 1 1 40%;
          }

          .search-section {
            order: 2;
            flex: 0 1 30%;
            min-width: 240px;
            max-width: 360px;
            margin: 0 10px;
          }

          .user-section {
            order: 3;
            margin-top: 0;
            padding-top: 0;
            border-top: none;
            flex: 0 1 30%;
            justify-content: flex-end;
          }
        }

        /* Navigation */
        .main-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        @media (min-width: 992px) {
          .main-nav {
            flex-wrap: nowrap;
            gap: 2px;
          }
        }

        .nav-link {
          color: var(--text-primary) !important;
          padding: 8px 10px !important;
          border-radius: 6px;
          transition: all 0.2s ease;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.9;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          background: var(--hover-bg);
          opacity: 1;
        }

        .nav-link.active {
          color: var(--primary-color) !important;
          font-weight: 600;
        }

        .nav-icon {
          font-size: 1rem;
          flex-shrink: 0;
        }

        .nav-text {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .create-link {
          background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)) !important;
          color: white !important;
          border: none !important;
          font-weight: 600;
        }

        .create-link:hover {
          opacity: 0.9 !important;
          transform: translateY(-1px);
        }

        /* Search Section */
        .search-form {
          width: 100%;
        }

        .search-wrapper {
          display: flex;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          width: 100%;
        }

        .search-wrapper:focus-within {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 9px 12px;
          color: var(--text-primary);
          font-size: 0.95rem;
          min-width: 0;
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .search-input:focus {
          outline: none;
        }

        .search-button {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--primary-color);
          border: none;
          padding: 9px 16px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .search-button:hover {
          background: var(--secondary-color);
        }

        .search-icon {
          font-size: 1rem;
        }

        /* User Section (right) */
        @media (min-width: 992px) {
          .user-section {
            flex-wrap: nowrap;
          }
        }

        /* Theme Toggle */
        .theme-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 8px 10px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .theme-toggle:hover {
          background: var(--hover-bg);
        }

        .theme-icon {
          font-size: 1rem;
        }

        .theme-text {
          font-size: 0.8rem;
        }

        /* Notifications */
        .notifications-btn {
          position: relative;
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 5px;
          color: var(--text-primary);
          border-radius: 6px;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
        }

        .notifications-btn:hover {
          background: var(--hover-bg);
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: var(--danger-color);
          color: white;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--bg-primary);
        }

        /* User Dropdown */
        .user-dropdown {
          position: relative;
        }

        .user-dropdown-toggle {
          cursor: pointer;
          outline: none;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 10px;
          border-radius: 6px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          transition: background 0.2s;
          min-width: 110px;
          max-width: 180px;
        }

        .user-info:hover {
          background: var(--hover-bg);
        }

        .user-avatar {
          width: 30px;
          height: 30px;
          border: 2px solid var(--primary-color);
          flex-shrink: 0;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          min-width: 0;
        }

        .user-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .user-dropdown-menu {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          box-shadow: 0 4px 20px var(--shadow-color);
          padding: 8px;
          margin-top: 8px;
          min-width: 200px;
        }

        .user-dropdown-menu .dropdown-header {
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 8px 12px;
        }

        .user-dropdown-menu .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-primary);
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 0.9rem;
          transition: background 0.2s;
        }

        .user-dropdown-menu .dropdown-item:hover {
          background: var(--hover-bg);
        }

        .dropdown-icon {
          font-size: 1rem;
          width: 20px;
          text-align: center;
        }

        /* ✅ Auth Buttons - wrapped in one section */
        .auth-buttons {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px;
          border-radius: 999px;
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
        }

        .auth-divider {
          font-size: 0.8rem;
          color: var(--text-muted);
          padding: 0 2px;
          user-select: none;
        }

        .login-btn,
        .signup-btn {
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 0.85rem;
          line-height: 1.2;
        }

        .login-btn {
          background: transparent;
          border: none;
          color: var(--text-primary);
        }

        .login-btn:hover {
          background: var(--hover-bg);
          color: var(--primary-color);
        }

        .signup-btn {
          border: none;
          background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
          color: white;
          font-weight: 600;
        }

        .signup-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        /* Mobile Responsiveness */
        @media (max-width: 991px) {
          .navbar-container {
            padding: 0 10px;
          }

          .user-section {
            justify-content: space-between;
          }
        }

        @media (max-width: 768px) {
          .brand-title {
            font-size: 1.1rem;
          }

          .brand-subtitle {
            font-size: 0.7rem;
          }

          .nav-link {
            padding: 7px 9px !important;
            font-size: 0.85rem;
          }

          .search-wrapper {
            width: 100%;
          }

          .search-button .search-text {
            display: none;
          }

          .search-button {
            padding: 9px 10px;
          }
        }

        @media (max-width: 576px) {
          .brand-content {
            gap: 8px;
          }

          .navbar-logo {
            width: 32px;
            height: 32px;
          }

          .theme-text {
            display: none;
          }

          .user-name {
            max-width: 80px;
          }

          .nav-text {
            font-size: 0.8rem;
          }

          .nav-icon {
            font-size: 0.9rem;
          }

          .user-section {
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .main-nav {
            gap: 2px;
          }

          .nav-link {
            padding: 6px 6px !important;
            font-size: 0.8rem;
          }

          .brand-title {
            font-size: 1rem;
          }

          .auth-buttons {
            transform: scale(0.95);
          }
        }

        /* Smooth theme transition */
        .simple-navbar,
        .simple-navbar * {
          transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
      `}</style>
    </>
  );
};

SimpleNavbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.oneOf(['light', 'dark']),
  toggleMode: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  }),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onSearch: PropTypes.func
};

export default SimpleNavbar;
