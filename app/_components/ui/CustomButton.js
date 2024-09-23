import React from "react";
function Button({ children, className, onClick }) {
  return (
    <button
      className={` text-base py-4 px-12 rounded-md ${className}`}
      onClick={onClick}
    >

      {children}

    </button>
  );
}


export default Button;
