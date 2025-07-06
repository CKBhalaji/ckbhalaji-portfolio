// src/components/About.jsx
import { useState } from 'react';
import { useTheme } from '../App';
// No explicit React import needed if React is globally available in this context
// No useTheme import needed as it's globally available
import useSectionVisibility from '../hooks/useSectionVisibility';

const About = () => {
  const { theme } = useTheme();
  const [sectionRef, sectionIsVisible] = useSectionVisibility({
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto p-4 text-center w-full"> {/* Centered content */}
      {sectionIsVisible ? (
        <>
          <h2 className={`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6 ${theme === 'dark' ? '' : 'filter brightness-75'}`}>
            About Me
          </h2>
          <div className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-4`}>
            <p>
              Hello! I'm <span className="font-semibold text-purple-300">C.K.BHALAJI</span>, a B.E. Computer Science graduate (2025) passionate about software development and web technologies. I am skilled in full-stack development, debugging, and problem-solving.
            </p>
            <p>
              I have hands-on experience with the Software Development Life Cycle (SDLC) and thrive in collaborative team environments. My goal is to apply my technical skills in Java, ReactJS, and SQL to contribute to impactful projects and continuously expand my knowledge.
            </p>
            <p>
              My journey into the world of code began with a fascination for how technology can solve real-world problems and create engaging user experiences. I am eager to learn new technologies and constantly push the boundaries of what's possible in the tech landscape.
            </p>
          </div>
        </>
      ) : (
        <div className="h-64 flex items-center justify-center w-full">
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Loading About Me...</p>
        </div>
      )}
    </div>
  );
};


export default About;