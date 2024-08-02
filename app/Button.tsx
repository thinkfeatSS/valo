'use client'; // Mark this component as a client component

import React from 'react';

interface ButtonProps {
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    icon?: any; // Icon prop, optional
}

const Button: React.FC<ButtonProps> = ({ label, onClick,icon: Icon  }) => {
  return (
    <button onClick={onClick} className='text-white flex items-center justify-start font-black shadow-glow p-2 gap-4 m-2 w-40'>
        {Icon && <Icon className="w-4 h-4 " />} {/* Render icon if provided */}{label}
    </button>
  );
};

export default Button;