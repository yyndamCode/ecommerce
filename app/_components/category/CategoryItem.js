import React from "react";

function CategoryItem({ category, isActive, onClick }) {
  return (
    <li
      className={`flex items-center justify-center cursor-pointer flex-col border rounded-md py-[24px] ${
        isActive ? "bg-red-500 text-white" : ""
      }`}
      onClick={onClick}
    >
      <span className="relative text-[56px] mx-auto">{category.icon}</span>
      <p className="mt-4 text-base">{category.name}</p>
    </li>
  );
}

export default CategoryItem;
