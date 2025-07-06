// src/components/Certificates.jsx
import { useTheme } from '../App';
// No explicit React import needed if React is globally available in this context
// No useTheme import needed as it's globally available
import useSectionVisibility from '../hooks/useSectionVisibility'; // Already imported in About

const Certificates = () => {
  const { theme } = useTheme();
  const [sectionRef, sectionIsVisible] = useSectionVisibility({
    threshold: 0.1,
  });
  const certificates = [
    {
      title: 'NPTEL: Privacy and Security in Online Social Media',
      issuer: 'NPTEL',
      date: 'Jul-Oct-2023', // Add actual date if available
      link: 'https://drive.google.com/file/d/1PNXOPMMgNue4VnMC-ySqshv1juJNbgJG/view?usp=drive_link', // Example placeholder, replace with actual direct link if possible or a Google Drive link
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=NPTEL+Privacy+Security',
    },
    {
      title: 'Google UX Designer Professional Certificate',
      issuer: 'Coursera (Google)',
      date: 'Oct 20, 2023', // Add actual date if available
      link: 'https://drive.google.com/file/d/1mgog4uv8FtvFu4Pvlx_kgRheUzKHGYdU/view?usp=drive_link', // Example placeholder, replace with actual direct link if possible or a Google Drive link
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Google+UX+Design',
    },
    {
      title: 'NPTEL: Cloud Computing',
      issuer: 'NPTEL',
      date: 'Date of Completion', // Add actual date if available
      link: 'https://drive.google.com/file/d/1upmUwPFxGDLCWDswlYq1-ChoA8K9tsDG/view?usp=drive_link', // Example placeholder, replace with actual direct link if possible or a Google Drive link
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=NPTEL+Cloud+Computing',
    },
    {
      title: 'Intern Certificate',
      issuer: 'Reccsar Private LImited',
      date: 'Date of Completion', // Add actual date if available
      link: 'https://drive.google.com/file/d/1fs3jAkF6XCx8Od_KsIdSzmvHk0jtChj7/view?usp=drive_link', // Example placeholder, replace with actual direct link if possible or a Google Drive link
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Intern+Certificate',
    },
    {
      title: 'Intern Certificate',
      issuer: 'Reccsar Private LImited',
      date: 'Date of Completion', // Add actual date if available
      link: 'https://drive.google.com/file/d/1gpUZxF67BLPk4PNja4_QrqYa9JJ_fEsJ/view?usp=drive_link', // Example placeholder, replace with actual direct link if possible or a Google Drive link
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=FastAPI+Essentials+for+Python+Developers',
    },
    {
      title: 'Intern Certificate',
      issuer: 'Reccsar Private LImited',
      date: 'Date of Completion', // Add actual date if available
      link: 'https://drive.google.com/file/d/1-2gisr57IqZH8YRzbmLIaUulOdUYaijK/view?usp=drive_link', // Example placeholder, replace with actual direct link if possible or a Google Drive link
      image: 'https://placehold.co/400x250/0F172A/E0E7FF?text=Traffic+Sign+Categorization',
    },
    
  ];

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto p-4 text-center w-full"> {/* Match project section width */}
      {sectionIsVisible ? (
        <>
          <h2 className={`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500 mb-8 ${theme === 'dark' ? '' : 'filter brightness-75'}`}>
            Certificates
          </h2>
          <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
    
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`relative ${theme === 'dark' ? 'bg-gray-900 border-gray-700 hover:border-orange-500' : 'bg-gray-100 border-gray-300 hover:border-yellow-500'} p-6 rounded-xl shadow-lg border transition-all duration-300 flex flex-col items-center text-center h-full`}
                style={{ minHeight: '420px' }} // Optional: set a minHeight to match project cards
              >
                <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-md mb-4" /> {/* Match project image height */}
                <h3 className={`text-2xl font-display font-semibold ${theme === 'dark' ? 'text-orange-400' : 'text-amber-700'} mb-2`}>{cert.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-md`}>{cert.issuer}</p>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-orange-600 to-yellow-500 text-white rounded-lg shadow-lg
                             hover:from-orange-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 mt-auto"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="h-64 flex items-center justify-center w-full">
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Loading Certificates...</p>
        </div>
      )}
    </div>
  );
};

export default Certificates;