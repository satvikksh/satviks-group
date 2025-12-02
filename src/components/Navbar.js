import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Form, Button, Container, Dropdown, Image } from 'react-bootstrap';

const CustomNavbar = React.memo(({ 
  title, 
  mode, 
  toggleMode, 
  navItems = [],
  isAuthenticated,
  user,
  onLogin,
  onLogout,
  onSearch
}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get('q') || '';

  const memoizedNavItems = useMemo(() => [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    ...navItems
  ], [navItems]);

  const renderNavLinks = (items) => (
    items.map((item, index) => (
      !item.children ? (
        <Nav.Link 
          key={index}
          as={Link} 
          to={item.path} 
          active={location.pathname === item.path}
          className="position-relative"
        >
          {item.label}
          {item.badge && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {item.badge}
            </span>
          )}
        </Nav.Link>
      ) : (
        <Dropdown as={Nav.Item} key={index}>
          <Dropdown.Toggle as={Nav.Link} className="text-decoration-none">
            {item.label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {item.children.map((child, childIndex) => (
              <Dropdown.Item 
                key={childIndex}
                as={Link} 
                to={child.path}
                active={location.pathname === child.path}
              >
                {child.label}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )
    ))
  );

  return (
    <Navbar 
      bg={mode} 
      variant={mode} 
      expand="lg" 
      className={`shadow-sm ${mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
      collapseOnSelect
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <Image src="/logo.png" alt="Logo" width="40" height="40" className="d-inline-block align-top" />
          <span className="fw-bold">{title}</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" className="border-0" />

        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          <Nav className="align-items-stretch">
            {renderNavLinks(memoizedNavItems)}
          </Nav>

          <div className="d-flex flex-column flex-lg-row align-items-stretch gap-3 my-3 my-lg-0">
            {onSearch && (
              <Form className="d-flex" onSubmit={(e) => {
                e.preventDefault();
                onSearch(e.target.search.value);
              }}>
                <Form.Control
                  name="search"
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  defaultValue={initialSearch}
                />
                <Button variant="outline-success" type="submit">Search</Button>
              </Form>
            )}

            <div className="d-flex align-items-center gap-3">
              <Button 
                variant="/outline-secondary" 
                onClick={toggleMode}
                className={`p-2 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}
                aria-label="Toggle theme"
              >
                {mode === 'dark' ?  '☀️':'🌙' }
              </Button>

              {isAuthenticated ? (
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" className="text-decoration-none p-0">
                    <div className="d-flex align-items-center gap-2">
                      <Image 
                        src={user?.avatar || '/default-avatar.png'} 
                        alt="Profile" 
                        width="40" 
                        height="40" 
                        roundedCircle 
                        className="border"
                      />
                      <span className="d-none d-lg-inline">{user?.name}</span>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div className="d-flex gap-2">
                  <Button 
                    variant="outline-primary" 
                    as={Link} 
                    to="/login"
                    onClick={onLogin}
                    className="px-3"
                  >
                    Login
                  </Button>
                  <Button 
                    variant="primary" 
                    as={Link} 
                    to="/signup"
                    className="px-4"
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
  );
});

CustomNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
  toggleMode: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.array,
    badge: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  })),
  isAuthenticated: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  }),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onSearch: PropTypes.func
};

CustomNavbar.defaultProps = {
  title: 'Brand Name',
  mode: 'light',
  navItems: [],
  isAuthenticated: false
};

export default CustomNavbar;