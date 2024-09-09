"use client"
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function GoToBtn() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex justify-end items-end mb-8">
      <button
        onClick={handleScrollToTop}
        className="w-[46px] flex justify-center items-center text-xl mr-2 h-[46px] bg-primary-7 rounded-full"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default GoToBtn;
