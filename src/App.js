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
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.state = {
      mode: prefersDark ? 'light' : 'dark'
    };
  }

  componentDidMount() {
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQuery.addEventListener('change', this.mediaQueryHandler);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mode !== this.state.mode) {
      document.documentElement.setAttribute('data-theme', this.state.mode);
      localStorage.setItem('theme', this.state.mode);
    }
  }

  componentWillUnmount() {
    this.mediaQuery.removeEventListener('change', this.mediaQueryHandler);
  }

  mediaQueryHandler = (e) => {
    this.setState({ mode: e.matches ? 'dark' : 'light' });
  };

  toggleMode = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'dark' ? 'light' : 'dark'
    }));
  };

  render() {
    return (
      <Router>
        <div className="app-container">
          <Navbar title="Satvik's Group" mode={this.state.mode} toggleMode={this.toggleMode} />
          <Suspense fallback={<div className="loading-spinner" />}>
            <Routes>
              <Route path="/" element={<Home mode={this.state.mode} />} />
              <Route path="/signup" element={<Signup mode={this.state.mode} />} />
              <Route path="/login" element={<Login mode={this.state.mode} />} />
              <Route path="/about" element={<About mode={this.state.mode} />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;