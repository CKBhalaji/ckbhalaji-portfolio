// src/App.jsx
import React, { useState, useEffect } from 'react';

// --- START ThemeContext and useTheme Definition (Moved to top for global accessibility) ---
// Create the Theme Context
const ThemeContext = React.createContext();

// Create a custom hook to use the theme context
export const useTheme = () => React.useContext(ThemeContext);

// Create the Theme Provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme, defaulting to 'dark' or user's preference
  const [theme, setTheme] = React.useState(() => {
    // Check local storage for a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check user's system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'dark'; // Default to dark theme
  });

  // Effect to update the 'theme' class on the document body
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark'); // Remove existing themes
    root.classList.add(theme); // Add current theme

    // Save theme preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// --- END ThemeContext and useTheme Definition ---

// Other component imports (these are conceptually separate components within the single file)
import { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
const About = React.lazy(() => import('./components/About'));
const Education = React.lazy(() => import('./components/Education'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Certificates = React.lazy(() => import('./components/Certificates'));
const Contact = React.lazy(() => import('./components/Contact'));
import useCustomCursor from './hooks/useCustomCursor';
import ParticleBackground from './components/ParticleBackground'; // For 3D effect
import SectionDivider from './components/SectionDivider'; // New section divider
import { useSectionVisibility } from './hooks/useSectionVisibility'; // New lazy loading hook

// Main App Component
const App = () => {
  // State to manage active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('hero');
  const { theme } = useTheme(); // Get current theme from context

  // Apply custom cursor hook
  useCustomCursor();

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Effect to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'certificates', 'contact'];
      let currentActive = 'hero';
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Removed Cursor-Main class from here, it's now managed by useCustomCursor on the body
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black text-gray-100' : 'bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900'} font-inter relative overflow-hidden`}>
      {/* Custom cursor elements are appended to body by the hook */}

      {/* 3D Particle Background */}
      <ParticleBackground />

      {/* Header Component */}
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />

      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 relative z-10"> {/* Ensure content is above particles */}
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center py-16">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-24 flex flex-col items-center justify-center">
          <SectionDivider type="top" />
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
          <SectionDivider type="bottom" />
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 sm:py-24 flex flex-col items-center justify-center">
          <SectionDivider type="top" />
          <Suspense fallback={<div>Loading...</div>}>
            <Education />
          </Suspense>
          <SectionDivider type="bottom" />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-24 flex flex-col items-center justify-center">
          <SectionDivider type="top" />
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
          <SectionDivider type="bottom" />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24 flex flex-col items-center justify-center">
          <SectionDivider type="top" />
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
          <SectionDivider type="bottom" />
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-16 sm:py-24 flex flex-col items-center justify-center">
          <SectionDivider type="top" />
          <Suspense fallback={<div>Loading...</div>}>
            <Certificates />
          </Suspense>
          <SectionDivider type="bottom" />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 flex flex-col items-center justify-center">
          <SectionDivider type="top" />
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
          <SectionDivider type="bottom" />
        </section>
      </main>

      {/* Footer (Optional, but good practice) */}
      <footer className={`py-8 text-center text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
        <p>&copy; {new Date().getFullYear()} C.K.BHALAJI. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Wrap App with ThemeProvider
const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;
