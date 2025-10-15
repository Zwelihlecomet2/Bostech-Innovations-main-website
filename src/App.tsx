import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SoftSkillsPage from './pages/SoftSkillsPage';
import ITCoursesPage from './pages/ITCoursesPage';
import LearnershipPage from './pages/LearnershipPage';
import BBBEEConsultingPage from './pages/BBBEEConsultingPage';
import SkillsDevelopmentPage from './pages/SkillsDevelopmentPage';
import LearnerManagementPage from './pages/LearnerManagementPage';
import SETAFacilitationPage from './pages/SetaFacilitation';
import PivotalPlanPage from './pages/PivotalPlan';
import FourIR from './pages/FourIR'
import ContactUs from './pages/ContactPage'
import NotFoundPage from './pages/NotFound'

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
        <Route path="/bbbee-consulting" element={<BBBEEConsultingPage />} />
        <Route path="/skills-development" element={<SkillsDevelopmentPage />} />
        <Route path="/learner-management" element={<LearnerManagementPage />} />
        <Route path="/seta-facilitation" element={<SETAFacilitationPage />} />
        <Route path="/pivotal-plan" element={<PivotalPlanPage />} />
        <Route path="/4ir4youth" element={<FourIR />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;