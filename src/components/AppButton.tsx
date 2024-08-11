import React from 'react';

interface AppButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
  >
    {children}
  </button>
);

export default AppButton;
