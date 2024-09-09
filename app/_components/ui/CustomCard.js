import React from 'react'


export const CustomCard = ({ children, className }) => {
  return (
    <div
      className={`relative  ${className}`}
    >
      {children}
    </div>
  );
};
