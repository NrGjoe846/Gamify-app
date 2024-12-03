import { CourseCatalog } from './components/CourseCatalog';
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const WelcomeScreen = lazy(() => import(/* webpackChunkName: "WelcomeScreen" */ './components/onboarding/WelcomeScreen'));
const SignUpScreen = lazy(() => import(/* webpackChunkName: "SignUpScreen" */ './components/onboarding/SignUpScreen'));
const ProfileSetup = lazy(() => import(/* webpackChunkName: "ProfileSetup" */ './components/onboarding/ProfileSetup'));
const LearningStyleQuiz = lazy(() => import(/* webpackChunkName: "LearningStyleQuiz" */ './components/onboarding/LearningStyleQuiz'));
const CourseCatalog = lazy(() => import(/* webpackChunkName: "CourseCatalog" */ './components/CourseCatalog'));
// Minimal Loading Screen Component
function LoadingScreen() {
  return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;
}
// Preload critical components
function preloadComponent(component) {
  return component().then((module) => module.default);
}
// Main App Component
export default function App() {
  return <CourseCatalog />;
}
  // Preload frequently used components
  useEffect(() => {
    preloadComponent(() => import('./components/onboarding/WelcomeScreen'));
    preloadComponent(() => import('./components/onboarding/SignUpScreen'));
  }, []);
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/learning-style" element={<LearningStyleQuiz />} />
          <Route path="/courses" element={<CourseCatalog />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
