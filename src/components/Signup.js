import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

const SignupPage = ({ mode }) => {
  // Initial form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  // Error messages for validation
  const [errors, setErrors] = useState({});

  // Submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Basic validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    return newErrors;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // In a real app, send data to server here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      // Optional: Reset form
      setFormData({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      });

      // Clear message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className={`container mt-5 ${mode === 'dark' ? 'dark-theme' : ''}`}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={`card shadow ${mode === 'dark' ? 'bg-dark text-light' : ''}`}>
            <div className="card-body">
              <h2 className={`card-title text-center mb-4 ${mode === 'dark' ? 'text-light' : ''}`}>
                Sign Up
              </h2>

              {isSubmitted && (
                <Alert 
                  variant={mode === 'dark' ? 'dark' : 'success'} 
                  className="text-center"
                >
                  Signup successful! Please login.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className={mode === 'dark' ? 'text-light' : ''}>
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    className={mode === 'dark' ? 'bg-dark text-light' : ''}
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={mode === 'dark' ? 'text-light' : ''}>
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    className={mode === 'dark' ? 'bg-dark text-light' : ''}
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={mode === 'dark' ? 'text-light' : ''}>
                    Username
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    className={mode === 'dark' ? 'bg-dark text-light' : ''}
                    value={formData.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={mode === 'dark' ? 'text-light' : ''}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    className={mode === 'dark' ? 'bg-dark text-light' : ''}
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className={mode === 'dark' ? 'text-light' : ''}>
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    className={mode === 'dark' ? 'bg-dark text-light' : ''}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button 
                    variant={mode === 'dark' ? 'outline-light' : 'primary'} 
                    type="submit" 
                    size="lg"
                  >
                    Create Account
                  </Button>
                </div>
              </Form>

              <div className={`text-center mt-3 ${mode === 'dark' ? 'text-light' : ''}`}>
                <p className={mode === 'dark' ? 'text-light' : 'text-muted'}>
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className={mode === 'dark' ? 'text-info' : 'text-primary'}
                  >
                    Login here
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

export default SignupPage;
