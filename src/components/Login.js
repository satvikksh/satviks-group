import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginPage = ({ mode }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setFormData(prev => ({
        ...prev,
        email: rememberedEmail,
        rememberMe: true
      }));
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError('');
    
    if (validateForm()) {
      try {
        const response = await fakeAuthService(formData);
        if (response.success) {
          if (formData.rememberMe) {
            localStorage.setItem('rememberedEmail', formData.email);
          } else {
            localStorage.removeItem('rememberedEmail');
          }
          localStorage.setItem('authToken', 'fake-token');
          navigate('/dashboard');
        } else {
          setGeneralError('Invalid email or password');
        }
      } catch (error) {
        setGeneralError('An error occurred. Please try again.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const fakeAuthService = (credentials) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: credentials.email === 'test@example.com' && credentials.password === 'password123'
        });
      }, 1000);
    });
  };

  return (
    <div className={`container mt-5 ${mode === 'dark' ? 'dark-theme' : ''}`}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={`card shadow ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
            <div className="card-body">
              <h2 className={`card-title text-center mb-4 ${mode === 'dark' ? 'text-light' : ''}`}>
                Login
              </h2>

              {generalError && (
                <Alert variant="danger" className="text-center">
                  {generalError}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className={mode === 'dark' ? 'text-light' : ''}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    className={mode === 'dark' ? 'bg-dark text-light' : ''}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={mode === 'dark' ? 'text-light' : ''}>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    className={mode === 'dark' ? 'bg-dark text-light' : ''}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="rememberMe">
                  <Form.Check
                    type="checkbox"
                    label={<span className={mode === 'dark' ? 'text-light' : ''}>Remember me</span>}
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant={mode === 'dark' ? 'outline-light' : 'primary'} type="submit" size="lg">
                    Sign In
                  </Button>
                </div>

                <div className={`text-center mt-3 ${mode === 'dark' ? 'text-light' : ''}`}>
                  <Link to="/forgot-password" className={mode === 'dark' ? 'text-info' : 'text-primary'}>
                    Forgot Password?
                  </Link>
                </div>
              </Form>

              <div className={`text-center mt-4 ${mode === 'dark' ? 'text-light' : ''}`}>
                <p className={mode === 'dark' ? 'text-light' : 'text-muted'}>
                  Don't have an account?{' '}
                  <Link to="/signup" className={mode === 'dark' ? 'text-info' : 'text-primary'}>
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
