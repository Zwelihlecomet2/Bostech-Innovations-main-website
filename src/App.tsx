import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SoftSkillsPage from './pages/SoftSkillsPage';
import ITCoursesPage from './pages/ITCoursesPage';
import LearnershipPage from './pages/LearnershipPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/soft-skills" element={<SoftSkillsPage />} />
        <Route path="/it-courses" element={<ITCoursesPage />} />
        <Route path="/learnerships" element={<LearnershipPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;