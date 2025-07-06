// src/components/Skills.jsx
import { useTheme } from '../App';
import useSectionVisibility from '../hooks/useSectionVisibility';
import javaImg from '../assets/skills/java.png';
import cprogimg from '../assets/skills/c.png'
import pythonimg from '../assets/skills/python.png'
import htmlimg from '../assets/skills/html.png'
import cssimg from '../assets/skills/css.png'
import jsimg from '../assets/skills/js.png'
import reactimg from '../assets/skills/react.png'
import tailwindimg from '../assets/skills/TailwindCSS.png'
import mysqlimg from '../assets/skills/mysql.png'
import fastapiimg from '../assets/skills/FastAPI.png'
import postgressqlimg from '../assets/skills/PostgresSQL.png'
import sqlalchemyimg from '../assets/skills/SQLAlchemy.png'
import gitimg from '../assets/skills/Git.png'
import githubimg from '../assets/skills/GitHub.png'
import vscimg from '../assets/skills/Visual Studio Code.png'
import postmanimg from '../assets/skills/Postman.png'
import renderimg from '../assets/skills/render.png'

// No explicit React import needed if React is globally available in this context
// No useTheme import needed as it's globally available
const Skills = () => {
  const { theme } = useTheme();
  const [sectionRef, sectionIsVisible] = useSectionVisibility({
    threshold: 0.1,
  });
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', icon: htmlimg, isImage: true },
        { name: 'CSS', icon: cssimg, isImage: true },
        { name: 'JavaScript', icon: jsimg, isImage: true },
        { name: 'ReactJS', icon: reactimg, isImage: true },
        { name: 'Tailwind', icon: tailwindimg, isImage: true },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'MySQL', icon: mysqlimg, isImage: true },
        { name: 'FastAPI', icon: fastapiimg, isImage: true },
        { name: 'PostgreSQL', icon: postgressqlimg, isImage: true },
        { name: 'SQLAlchemy', icon: sqlalchemyimg, isImage: true },
      ]
    },
    {
      category: 'Languages',
      skills: [
        { name: 'Java', icon: javaImg, isImage: true },
        { name: 'C', icon: cprogimg, isImage: true },
        { name: 'Python', icon: pythonimg, isImage:true },
      ]
    },
    {
      category: 'Tools/Other',
      skills: [
        { name: 'Git', icon: gitimg, isImage: true },
        { name: 'GitHub', icon: githubimg, isImage: true },
        { name: 'VS Code', icon: vscimg, isImage: true },
        { name: 'Postman', icon: postmanimg, isImage: true },
        { name: 'Render', icon: renderimg, isImage: true },
      ]
    },
  ];

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto p-4 text-center w-full"> {/* Centered content */}
      {sectionIsVisible ? (
        <>
          <h2 className={`text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-lime-500 mb-8 ${theme === 'dark' ? '' : 'filter brightness-75'}`}>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Adjusted grid for categories */}
            {skillsData.map((skillCategory, index) => (
              <div key={index} className={`${theme === 'dark' ? 'bg-transparent border-gray-700' : 'bg-transparent border-gray-300'} p-6 rounded-xl shadow-lg border transition-all duration-300 text-left`}> {/* Removed background color */}
                <h3 className={`text-2xl font-display font-semibold ${theme === 'dark' ? 'text-lime-400' : 'text-green-700'} mb-4 text-center`}>{skillCategory.category}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg shadow-md
                 ${theme === 'dark' ? 'bg-gray-700 text-gray-200 hover:bg-green-600 hover:text-white' : 'bg-gray-200 text-gray-700 hover:bg-green-300 hover:text-gray-900'}
                 transition-all duration-300 transform hover:scale-105`}
                    >
                      {skill.isImage ? (
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-1 object-contain" />
                      ) : (
                        <span className="text-3xl mb-1">{skill.icon}</span>
                      )}
                      <span className="text-xs font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="h-64 flex items-center justify-center w-full">
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Loading Skills...</p>
        </div>
      )}
    </div>
  );
};

export default Skills;