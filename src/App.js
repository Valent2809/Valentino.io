import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import DSMLProjects from './pages/DSMLProjects';
import SoftwareDevProjects from './pages/SoftwareDevProjects';

const App = () => {
  return (
    <Router basename="/Valentino.io">
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dsml-projects" element={<DSMLProjects />} />
          <Route path="/dev-projects" element={<SoftwareDevProjects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;