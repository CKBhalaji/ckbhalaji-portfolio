// src/components/Projects.jsx
import { useState } from 'react';
import { useTheme } from '../App';
import useSectionVisibility from '../hooks/useSectionVisibility';
// No explicit React import needed if React is globally available in this context
// No useTheme import needed as it's globally available
const Projects = () => {
  const { theme } = useTheme();
  const [sectionRef, sectionIsVisible] = useSectionVisibility({
    threshold: 0.1,
  });
  const projects = [
    {
      title: 'Lorry Link – Logistics Web Application',
      description: 'A full-stack logistics platform with role-based dashboards for Admin, Driver, and Goods Owner.',
      details: 'Built a full-stack logistics platform with role-based dashboards for Admin, Driver, and Goods Owner. Designed a React Vite frontend with theme switching, protected routing, and responsive UI. Developed RESTful APIs using FastAPI and PostgreSQL for authentication, bidding, load and dispute management.',
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Lorry+Link',
      githubLink: 'https://github.com/CKBhalaji/Lorry_Link.git', // Assuming a GitHub link for this
      deployedLink: 'https://lorry-application-frontend.onrender.com', // Placeholder, update if deployed
      tags: ['React (Vite)', 'FastAPI', 'PostgreSQL', 'Full-stack'],
    },
    {
      title: 'Job Portal Web Application',
      description: 'Developed a responsive frontend for a job portal enabling user registration, job search, and online application submission.',
      details: 'Developed a responsive frontend for a job portal enabling user registration, job search, and online application submission. Integrated recruiter features including job posting, dynamic job listing updates, and reusable UI components. Implemented client-side routing and form validation for improved UX and navigation flow.',
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Job+Portal',
      githubLink: 'https://github.com/CKBhalaji/Student_connect.git', // Assuming a GitHub link for this
      deployedLink: 'https://ckbhalaji.github.io/Student_connect/', // Placeholder, update if deployed
      tags: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'Frontend'],
    },
    {
      title: 'Real-Time Traffic Sign Detection (YOLOv8)',
      description: 'Built and trained a custom deep learning model using YOLOv8 for real-time traffic sign detection and classification.',
      details: 'Built and trained a custom deep learning model using YOLOv8 for real-time traffic sign detection and classification. Enhanced road safety by accurately recognizing regulatory and warning signs in live video feeds. Optimized performance through dataset preprocessing, label balancing, and OpenCV integration for frame processing. Published: IEEE Xplore – DOI: 10.1109/ICISC60378.2024.10860011',
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Traffic+Sign+Detection',
      githubLink: 'https://github.com/CKBhalaji/Real-Time-Traffic-Sign-Detection-and-Classification-Using-YOLOv8.git', // Assuming a GitHub link for this
      deployedLink: 'https://github.com/CKBhalaji/Real-Time-Traffic-Sign-Detection-and-Classification-Using-YOLOv8.git', // Placeholder, update if deployed
      tags: ['Python', 'YOLOv8', 'OpenCV', 'Deep Learning', 'AI'],
    },
    {
      title: 'Expense Tracker Web Application (Internship)',
      description: 'Developed a Basic Expense Tracker web application during MERN Stack Development Internship.',
      details: 'Gained practical experience in MERN stack development, focusing on responsive front-end layout using Flexbox and component-based design. Collaborated in a team to develop a Basic Expense Tracker web application, implementing core functionality using MongoDB, Express.js, React, and Node.js. Applied debugging and testing practices to ensure application responsiveness across different devices.',
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Expense+Tracker',
      githubLink: 'https://github.com/CKBhalaji/MERN-Internship/tree/main/Expence-tracker', // Assuming a GitHub link for this
      deployedLink: 'https://github.com/CKBhalaji/MERN-Internship/tree/main/Expence-tracker', // Placeholder, update if deployed
      tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express.js'],
    },
    {
      title: 'Weather API',
      description: 'Developed a Basic WaaterAPI using the simple API calls.',
      details: 'An weather API to fetch current weather information for a given location and display it to users. Provides real-time weather updates and supports location-based searches. ',
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Weather+API',
      githubLink: 'https://github.com/CKBhalaji/Weather_API.git', // Assuming a GitHub link for this
      deployedLink: 'https://ckbhalaji.github.io/Weather_API/', // Placeholder, update if deployed
      tags: ['React', 'Node.js', 'Weater API'],
    },
    {
      title: 'Simons game',
      description: 'Developed a Simple memorypower game called Simons game.',
      details: 'An implementation of the classic Simon game where players need to replicate a sequence of colors and sounds. Features increasing difficulty levels and a responsive user interface.',
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Simons+Game',
      githubLink: 'https://github.com/CKBhalaji/Simon-s_Game.git', // Assuming a GitHub link for this
      deployedLink: 'https://ckbhalaji.github.io/Simon-s_Game/', // Placeholder, update if deployed
      tags: ['HTML', 'CSS', 'Javascript'],
    },
    // {
    //   title: 'Personal Portfolio Website (Internship)',
    //   description: 'Built a personal portfolio website showcasing internship learnings and clean UI design principles.',
    //   details: 'Built a personal portfolio website showcasing internship learnings and clean UI design principles using HTML, CSS, and hosted it via GitHub Pages. This project helped solidify my understanding of front-end development and deployment processes.',
    //   image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Old+Portfolio',
    //   githubLink: 'https://github.com/CKBhalaji/OldPortfolio', // Assuming a GitHub link for this
    //   deployedLink: '#', // Placeholder, update if deployed
    //   tags: ['HTML', 'CSS', 'GitHub Pages', 'UI Design'],
    // },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto p-4 text-center w-full"> {/* Increased max-width for projects grid */}
      {sectionIsVisible ? (
        <>
          <h2 className={`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-600 mb-8 ${theme === 'dark' ? '' : 'filter brightness-75'}`}>
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'} rounded-xl shadow-lg border overflow-hidden
                            transform transition-all duration-500 ease-in-out
                            ${hoveredProject === index ? 'scale-105 shadow-xl shadow-purple-500/30' : ''}`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className={`text-2xl font-display font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-indigo-700'} mb-3`}>{project.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-md mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`px-3 py-1 ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-300 text-gray-800'} text-xs rounded-full`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-950 bg-opacity-95' : 'bg-white bg-opacity-95'} p-6 rounded-xl flex flex-col justify-center items-center text-center
                                transition-all duration-500 ease-in-out
                                ${hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
                  >
                    <h3 className={`text-2xl font-display font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-indigo-700'} mb-3`}>{project.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-sm mb-6 max-h-40 overflow-y-auto custom-scrollbar`}>{project.details}</p>
                    <div className="flex space-x-4">
                      <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg
                                   hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 Projects_Preview" // Added Projects_Preview class
                      >
                        View Live
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-5 py-2 rounded-lg shadow-lg
                                   ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-gray-900'}
                                   transition-all duration-300 transform hover:scale-105 Projects_Link`} // Added Projects_Link class
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="h-64 flex items-center justify-center w-full">
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Loading Projects...</p>
        </div>
      )}
    </div>
  );
};

export default Projects;