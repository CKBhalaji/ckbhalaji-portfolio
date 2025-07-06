import { useState } from 'react';
// useTheme is now globally available from App.jsx's top-level scope
import { useTheme } from '../App';
// import { useTheme } from '../context/ThemeContext'; // Removed: useTheme is globally available

const Header = ({ scrollToSection, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Access useTheme directly

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-transparent' : 'bg-transparent'} backdrop-blur-sm mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
      <nav className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#hero" onClick={() => scrollToSection('hero')} className="font-navename text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg p-2">
            CKBhalaji
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group
                ${activeSection === item.id
                  ? 'text-purple-400'
                  : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`
                }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5
                ${activeSection === item.id ? 'bg-purple-400' : 'bg-transparent group-hover:bg-white group-hover:dark:bg-gray-300'}
                transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${activeSection === item.id ? 'scale-x-100' : ''}`}></span>
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 mr-4
              ${theme === 'dark' ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-200 text-indigo-700 hover:bg-gray-300'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM12 19.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM19.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM2.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM18.364 5.636a.5.5 0 010-.707l1.414-1.414a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414zM5.636 18.364a.5.5 0 010-.707l1.414-1.414a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414zM18.364 18.364a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l1.414-1.414zM5.636 5.636a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l1.414-1.414zM12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a9 9 0 109 9c0-.46-.03-.92-.1-1.36a5.5 5.5 0 01-7.24-7.24c-.44-.07-.9-.1-1.36-.1z" />
              </svg>
            )}
          </button>
          {/* Resume Download Button */}
          <a
            href="/path/to/your/resume.pdf" // Placeholder, replace with actual path to resume
            download="C.K.BHALAJI_Resume.pdf"
            className={`ml-4 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md
              hover:from-blue-600 hover:to-purple-700 transform hover:scale-105`}
          >
            Download Resume
          </a>
        </div>
        {/* Mobile/Tablet Hamburger Button */}
        <div className="flex items-center -mr-2 md:hidden"> {/* Only visible on mobile/tablet */}
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 mr-4
              ${theme === 'dark' ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-200 text-indigo-700 hover:bg-gray-300'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM12 19.5a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM19.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM2.5 12a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM18.364 5.636a.5.5 0 010-.707l1.414-1.414a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414zM5.636 18.364a.5.5 0 010-.707l1.414-1.414a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414zM18.364 18.364a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l1.414-1.414zM5.636 5.636a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .707l-1.414 1.414a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 010-.707l1.414-1.414zM12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a9 9 0 109 9c0-.46-.03-.92-.1-1.36a5.5 5.5 0 01-7.24-7.24c-.44-.07-.9-.1-1.36-.1z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className={`inline-flex items-center justify-center p-2 rounded-md ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'dark' ? 'focus:ring-offset-gray-800 focus:ring-white' : 'focus:ring-offset-gray-100 focus:ring-gray-900'}`}
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => { scrollToSection(item.id); setIsOpen(false); }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                  ${activeSection === item.id
                    ? 'bg-purple-700 text-white shadow-md'
                    : `${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'}`
                  }`}
              >
                {item.name}
              </a>
            ))}
            {/* Resume Download Button for Mobile */}
            <a
              href="/path/to/your/resume.pdf" // Placeholder, replace with actual path to resume
              download="C.K.BHALAJI_Resume.pdf"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md
                hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 text-center`}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;