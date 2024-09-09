"use client";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";


function CategoryList({ categories, activeCategoryId, setActiveCategoryId }) {
  return (
    <div className="relative">
      <ul className="grid grid-cols-2 gap-4 tablet:grid-cols-2 md:grid-cols-3 desktop:grid-cols-6 md:gap-8">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            isActive={category.id === activeCategoryId}
            category={category}
            onClick={() => setActiveCategoryId(category.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
