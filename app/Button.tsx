'use client'; // Mark this component as a client component

import React from 'react';

interface ButtonProps {
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    icon?: any; // Icon prop, optional
}

const Button: React.FC<ButtonProps> = ({ label, onClick,icon: Icon  }) => {
  return (
    <button onClick={onClick} className='custom-button text-white flex items-center justify-start font-black shadow-glow p-2 gap-2 m-2 w-40 hover:bg-white hover:text-black '>
        {Icon && <Icon className="w-[1.5rem] h-[1.375rem] " />} {/* Render icon if provided */}{label}
    </button>
  );
};

export default Button;