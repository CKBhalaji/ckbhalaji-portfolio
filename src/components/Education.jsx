// src/components/Education.jsx
import { useTheme } from '../App';
// No explicit React import needed if React is globally available in this context
// No useTheme import needed as it's globally available
import useSectionVisibility from '../hooks/useSectionVisibility';
const Education = () => {
  const { theme } = useTheme();
  const [sectionRef, sectionIsVisible] = useSectionVisibility({
    threshold: 0.1,
  });
  const educationDetails = [
    {
      degree: 'B.E. - Computer Science and Engineering',
      institution: 'Velammal College of Engineering & Technology, Madurai',
      year: '2025 | CGPA: 8.26',
      description: 'Focused on Computer Science and Engineering curriculum, building a strong foundation in software development and related fields.',
    },
    {
      degree: 'Higher Secondary (HSC)',
      institution: 'Point Calimere International School',
      year: '2021 | Mark: 89%',
      description: 'Completed Higher Secondary education with a strong academic performance.',
    },
    {
      degree: 'SSLC (Secondary School)',
      institution: 'Point Calimere International School',
      year: '2019 | Mark: 79.6%',
      description: 'Completed Secondary School education.',
    },
  ];

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto p-4 text-center w-full"> {/* Centered content */}
      {sectionIsVisible ? (
        <>
          <h2 className={`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-6 ${theme === 'dark' ? '' : 'filter brightness-75'}`}>
            Education
          </h2>
          <div className="space-y-8">
            {educationDetails.map((edu, index) => (
              <div key={index} className={`${theme === 'dark' ? 'bg-gray-900 border-gray-700 hover:border-purple-500' : 'bg-gray-100 border-gray-300 hover:border-blue-500'} p-6 rounded-xl shadow-lg border transition-all duration-300 text-left`}>
                <h3 className={`text-2xl font-display font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-blue-700'} mb-2`}>{edu.degree}</h3>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-1`}>{edu.institution}</p>
                <p className={`text-md ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{edu.year}</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{edu.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="h-64 flex items-center justify-center w-full">
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Loading Education...</p>
        </div>
      )}
    </div>
  );
};

export default Education;