"use client";
import React, { useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import categories from "../../_lib/categoriesData";
import CategoryList from "./CategoryList";

function CategorySelection() {
  const [activeCategoryId, setActiveCategoryId] = useState(1);

  const handlePreviousClick = () => {
    setActiveCategoryId((prevId) =>
      prevId === 1 ? categories.length : prevId - 1
    );
  };

  const handleNextClick = () => {
    setActiveCategoryId((prevId) =>
      prevId === categories.length ? 1 : prevId + 1
    );
  };
  return (
    <section className="py-[70px] border-b-2">
      <div className="mb-[40px] ">
        <span className="FlashSales__title text-[#DB4444] relative font-semibold text-base">
          Categories{" "}
        </span>
        <div className="mt-6 flex justify-between">
          <div className="flex items-end">
            <h2 className="text-[36px] leading-8 font-semibold mb-0">
              Browse By Category
            </h2>
          </div>
          <div className="flex items-center">
            <button
              onClick={handlePreviousClick}
              className="w-[46px] flex justify-center items-center text-xl mr-2 h-[46px] bg-primary-7 rounded-full"
            >
              <GrLinkPrevious />
            </button>
            <button
              onClick={handleNextClick}
              className="w-[46px] flex justify-center items-center text-xl h-[46px] bg-primary-7 rounded-full"
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
      <CategoryList
        categories={categories}
        activeCategoryId={activeCategoryId}
        setActiveCategoryId={setActiveCategoryId}
      />
    </section>
  );
}

export default CategorySelection;
