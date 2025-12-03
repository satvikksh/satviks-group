import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const Signup = lazy(() => import('./components/Signup'));
const Login = lazy(() => import('./components/Login'));

class App extends Component {
  constructor(props) {
    super(props);

    // Read from localStorage if user already chose a theme
    let storedTheme = null;
    if (typeof window !== 'undefined') {
      storedTheme = localStorage.getItem('theme');
    }

    // Fallback to system preference
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialMode = storedTheme || (prefersDark ? 'dark' : 'light');

    this.state = {
      mode: initialMode
    };
  }

  componentDidMount() {
    // Apply the theme once on mount
    this.applyTheme(this.state.mode);

    // Watch system theme changes (only if user didn't choose manually)
    if (window.matchMedia) {
      this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.mediaQuery.addEventListener('change', this.mediaQueryHandler);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mode !== this.state.mode) {
      this.applyTheme(this.state.mode);
    }
  }

  componentWillUnmount() {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.mediaQueryHandler);
    }
  }

  applyTheme = (mode) => {
    // Set attribute for CSS variables if you use them
    document.documentElement.setAttribute('data-theme', mode);

    // Apply global body classes (used by your CSS and Bootstrap overrides)
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(mode === 'dark' ? 'dark-mode' : 'light-mode');

    // Remember user choice
    localStorage.setItem('theme', mode);
  };

  mediaQueryHandler = (e) => {
    // Only auto-change if user hasn't chosen a theme manually
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      this.setState({ mode: e.matches ? 'dark' : 'light' });
    }
  };

  toggleMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === 'dark' ? 'light' : 'dark'
    }));
  };

  render() {
    const { mode } = this.state;

    return (
      <Router>
        <div className="app-container">
          {/* Navbar toggle controls the global mode */}
          <Navbar title="Satvik's Group" mode={mode} toggleMode={this.toggleMode} />

          <Suspense fallback={<div className="loading-spinner" />}>
            <Routes>
              <Route path="/" element={<Home mode={mode} />} />
              <Route path="/signup" element={<Signup mode={mode} />} />
              <Route path="/login" element={<Login mode={mode} />} />
              <Route path="/about" element={<About mode={mode} />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
