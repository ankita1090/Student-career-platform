import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import StudentProfile from './components/StudentProfile';
import Roadmap from './components/Roadmap';
import Resume from './components/Resume';
import Interview from './components/Interview';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/interview" element={<Interview />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
