// src/components/Hero.jsx
import { useTheme } from '../App'; // Ensure this path is correct for your useTheme hook

const Hero = () => {
    const { theme } = useTheme();
    return (
        <div className="max-w-6xl mx-auto p-4 flex flex-col-reverse lg:flex-row items-center justify-between text-left">
            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-display leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 animate-fade-in-up ${theme === 'dark' ? '' : 'filter brightness-75'}`}>
                    Hi, I'm C.K.BHALAJI
                </h1>
                <p className={`text-xl sm:text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-700'} mb-8 animate-fade-in-up delay-100`}>
                    Passionate software developer skilled in full-stack development, debugging, and problem-solving.
                </p>
                <div className="flex space-x-6 animate-fade-in-up delay-200">
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
                        href="mailto:bhalaji2003@gmail.com"
                        className={`text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-110 ${theme === 'dark' ? '' : 'text-gray-600 hover:text-red-600'}`}
                        aria-label="Email"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M.05 3.555L12 12.055l11.95-8.5V20H.05V3.555zM12 10.945L.05 2.455h23.9L12 10.945z" />
                        </svg>
                    </a>
                </div>
            </div>
            {/* Right: Image with Orbit */}
            <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
                <div className="Hero_Orbit relative flex items-center justify-center w-[360px] lg:w-[500px] aspect-square mx-auto">
                    <div className="Spring_Up flex items-center justify-center w-1/2 aspect-square rounded-full z-10 overflow-hidden border-4 border-purple-500 shadow-2xl">
                        {/* THIS IMAGE REMAINS THE PLACEHOLDER AS REQUESTED */}
                        <img
                            src="https://placehold.co/192x192/4A00B7/FFFFFF?text=C.K.B"
                            alt="C.K.BHALAJI"
                            className="object-cover w-full h-full"
                            width={250}
                            height={180}
                            loading="eager"
                        />
                    </div>
                    <div className="Spring_Up Hero_Trail Trail1">
                        <span className="Orbit_Dot"></span>
                    </div>
                    <div className="Spring_Up Hero_Trail Trail2">
                        <span className="Orbit_Dot_Wrapper rotate-140">
                            <span className="Orbit_Dot"></span>
                        </span>
                    </div>
                    <div className="Spring_Up Hero_Trail Trail3">
                        <span className="Orbit_Dot"></span>
                    </div>
                    <div className="Spring_Up Hero_Trail Trail4">
                        <span className="Orbit_Dot_Wrapper rotate-140">
                            <span className="Orbit_Dot"></span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;