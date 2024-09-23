import React from 'react'


 const Card = ({ children, className }) => {
  return (
    <div
      className={`relative ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;