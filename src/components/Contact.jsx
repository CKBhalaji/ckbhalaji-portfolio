// src/components/Contact.jsx
import { useState } from 'react';
import { useTheme } from '../App';
// No explicit React import needed if React is globally available in this context
// No useTheme import needed as it's globally available
import useSectionVisibility from '../hooks/useSectionVisibility'; // Already imported in About

const Contact = () => {
  const { theme } = useTheme();
  const [sectionRef, sectionIsVisible] = useSectionVisibility({
    threshold: 0.1,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'sending', ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Message from ${name} (${email})`;
    const body = message;
    const mailtoLink = `mailto:bhalaji2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto p-4 text-center w-full"> {/* Centered content */}
      {sectionIsVisible ? (
        <>
          <h2 className={`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 ${theme === 'dark' ? '' : 'filter brightness-75'}`}>
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg font-medium mb-2`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-100 border-gray-300 text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg font-medium mb-2`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-100 border-gray-300 text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className={`block ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg font-medium mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 py-3 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-gray-100 border-gray-300 text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-y`}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg
                           hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>

            <div className={`mt-10 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="text-lg mb-2">You can also reach me directly at:</p>
              <a href="mailto:bhalaji2003@gmail.com" className={`hover:underline text-xl font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-700'}`}>
                bhalaji2003@gmail.com
              </a>
              <div className="flex justify-center space-x-6 mt-6">
                <a
                  href="https://linkedin.com/in/bhalaji-karunanithi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110 ${theme === 'dark' ? '' : 'text-gray-600 hover:text-blue-600'}`}
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/CKBhalaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 hover:text-gray-100 transition-colors duration-300 transform hover:scale-110 ${theme === 'dark' ? '' : 'text-gray-600 hover:text-gray-900'}`}
                  aria-label="GitHub Profile"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.087.687-.206.687-.458 0-.225-.007-.975-.011-1.912-2.782.604-3.369-1.34-3.369-1.34-.454-1.15-.11-1.458-.11-1.458.387-.272.029-.266.029-.266.43.029.657.22.657.22.383.657 1.004.466 1.249.356.038-.276.149-.466.272-.572-1.05-.11-2.155-.52-2.155-2.336 0-.517.18-.94.474-1.272-.047-.11-.205-.602.045-1.253 0 0 .38-.127 1.249.462.36-.1.737-.15 1.113-.15 0-.007.003-.014.003-.022.376 0 .753.05 1.113.15.869-.589 1.249-.462 1.249-.462.25 0 .092.652.045 1.253.294.332.474.755.474 1.272 0 1.821-1.107 2.227-2.159 2.332.15.128.28.372.28.75 0 1.572-.011 2.846-.011 3.229 0 .254.209.548.694.456C21.133 20.19 24 16.435 24 12.017 24 6.484 19.523 2 14 2h-2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://discordapp.com/users/bhalajick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 hover:text-indigo-500 transition-colors duration-300 transform hover:scale-110 ${theme === 'dark' ? '' : 'text-gray-600 hover:text-indigo-700'}`}
                  aria-label="Discord Profile"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.9821-1.54.0566.0566 0 00-.0639.0566c-.1838 1.2318-.4928 2.491-1.0439 3.6364-2.0485-1.104-4.044-1.104-6.0926 0-1.0439-1.1454-1.838-2.4046-2.0218-3.6364a.0566.0566 0 00-.0639-.0566A19.7913 19.7913 0 003.683 4.3698a.0566.0566 0 00-.0224.0566C3.6606 11.4438 5.1449 15.97 8.299 18.35a.0566.0566 0 00.0639.011c.9616-.4338 1.838-1.0439 2.6248-1.7442a.0566.0566 0 00-.011-.0894c-.4928-.3225-1.011-.6772-1.4968-1.0439a.0566.0566 0 01.011-.0894c.4817-.2897.9616-.5794 1.4474-.8691a.0566.0566 0 01.0639 0c.4858.2897.9657.5794 1.4474.8691a.0566.0566 0 01.011.0894c-.4858.3667-.9937.7214-1.4968 1.0439a.0566.0566 0 00-.011.0894c.7868.7003 1.6632 1.3104 2.6248 1.7442a.0566.0566 0 00.0639-.011c3.1541-2.38 4.6384-6.9062 4.616-13.9236a.0566.0566 0 00-.0224-.0566zM8.0209 13.141c-1.1153 0-2.0218-1.011-2.0218-2.2458s.9065-2.2458 2.0218-2.2458c1.1153 0 2.0218 1.011 2.0218 2.2458s-.9065 2.2458-2.0218 2.2458zm7.9582 0c-1.1153 0-2.0218-1.011-2.0218-2.2458s.9065-2.2458 2.0218-2.2458c1.1153 0 2.0218 1.011 2.0218 2.2458s-.9065 2.2458-2.0218 2.2458z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/c.k.bhalaji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110 ${theme === 'dark' ? '' : 'text-gray-600 hover:text-pink-700'}`}
                  aria-label="Instagram Profile"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.358-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-64 flex items-center justify-center w-full">
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Loading Contact...</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
