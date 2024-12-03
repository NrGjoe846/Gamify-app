import { CourseCatalog } from './components/CourseCatalog';
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

@@ -7,25 +8,23 @@ const SignUpScreen = lazy(() => import(/* webpackChunkName: "SignUpScreen" */ '.
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
