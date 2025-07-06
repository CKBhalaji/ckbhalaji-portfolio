// src/components/SectionDivider.jsx
// import React from 'react';
import { useTheme } from '../App';
// No useTheme import needed as it's globally available
const SectionDivider = ({ type }) => {
  const { theme } = useTheme(); // Access useTheme directly
  const lineColor = theme === 'dark' ? '#8B5CF6' : '#6366F1'; // Purple for dark, Indigo for light

  return (
    <div className="w-full flex justify-center py-8">
      <svg
        width="100%"
        height="20"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className="max-w-screen-lg"
      >
        {type === 'top' ? (
          <>
            <path
              d="M0 10 L20 10 C30 0, 70 0, 80 10 L100 10"
              stroke={lineColor}
              strokeWidth="2"
              fill="none"
              className="transition-all duration-500"
            />
            <circle cx="20" cy="10" r="3" fill={lineColor} className="transition-all duration-500" />
            <circle cx="80" cy="10" r="3" fill={lineColor} className="transition-all duration-500" />
          </>
        ) : (
          <>
            <path
              d="M0 10 L20 10 C30 20, 70 20, 80 10 L100 10"
              stroke={lineColor}
              strokeWidth="2"
              fill="none"
              className="transition-all duration-500"
            />
            <circle cx="20" cy="10" r="3" fill={lineColor} className="transition-all duration-500" />
            <circle cx="80" cy="10" r="3" fill={lineColor} className="transition-all duration-500" />
          </>
        )}
      </svg>
    </div>
  );
};

export default SectionDivider;