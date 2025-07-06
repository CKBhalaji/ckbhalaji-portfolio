import React from 'react';
// No useTheme import needed as it's globally available
const LoadingScreen = () => {
  const { theme } = useTheme(); // Access useTheme directly
  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-opacity duration-500 fade-out
      ${theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <div className="spinner mb-4"></div>
      <p className="text-xl font-semibold">Loading Portfolio...</p>
    </div>
  );
};

export default LoadingScreen;