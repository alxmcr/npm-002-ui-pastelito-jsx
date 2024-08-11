import React from 'react';

interface AppBoxProps {
  children: React.ReactNode;
  className?: string;
}

const AppBox: React.FC<AppBoxProps> = ({ children, className }) => (
  <div className={`p-4 border border-gray-300 rounded ${className}`}>
    {children}
  </div>
);

export default AppBox;
